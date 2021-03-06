/**
 * Copyright 2016-2017 Symphony Integrations - Symphony LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.symphonyoss.integration;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.doThrow;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.runners.MockitoJUnitRunner;
import org.symphonyoss.integration.authentication.AuthenticationProxy;
import org.symphonyoss.integration.exception.ExceptionMessageFormatter;
import org.symphonyoss.integration.exception.bootstrap.CertificateNotFoundException;
import org.symphonyoss.integration.exception.bootstrap.LoadKeyStoreException;
import org.symphonyoss.integration.healthcheck.IntegrationHealthManager;
import org.symphonyoss.integration.model.healthcheck.IntegrationFlags;
import org.symphonyoss.integration.model.healthcheck.IntegrationHealth;
import org.symphonyoss.integration.model.yaml.Application;
import org.symphonyoss.integration.model.yaml.IntegrationProperties;
import org.symphonyoss.integration.model.yaml.Keystore;
import org.symphonyoss.integration.utils.IntegrationUtils;

import java.io.IOException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.util.Collections;

import javax.ws.rs.client.Client;

/**
 * Test class to validate {@link BaseIntegration}
 * Created by rsanchez on 22/11/16.
 */
@RunWith(MockitoJUnitRunner.class)
public class BaseIntegrationTest extends MockKeystore {

  private static final String APP_ID = "jira";

  private static final String APP_TYPE = "jiraWebHookIntegration";

  private static final String DEFAULT_KEYSTORE_PASSWORD = "changeit";

  private static final String NOT_AVAILABLE = "N/A";

  @Mock
  private AuthenticationProxy authenticationProxy;

  @Spy
  private IntegrationProperties properties = new IntegrationProperties();

  @Mock
  private Client client;

  @Mock
  private IntegrationUtils utils;

  private IntegrationHealthManager healthManager = new IntegrationHealthManager();

  @InjectMocks
  private MockIntegration integration =
      new MockIntegration(properties, utils, authenticationProxy, healthManager);

  private Application application;

  @Before
  public void init() {
    Keystore keystore = new Keystore();
    keystore.setPassword(DEFAULT_KEYSTORE_PASSWORD);

    this.application = new Application();
    this.application.setComponent(APP_TYPE);
    this.application.setKeystore(keystore);

    properties.setApplications(Collections.singletonMap(APP_ID, application));
  }

  @Test(expected = CertificateNotFoundException.class)
  public void testRegisterUserCertNotFound() {
    doThrow(CertificateNotFoundException.class).when(utils).getCertsDirectory();
    integration.registerUser(APP_TYPE);
  }

  @Test
  public void testRegisterUserCertFileUnknown() throws IOException {
    properties.setApplications(Collections.<String, Application>emptyMap());

    String dir = mockCertDir();
    doReturn(dir).when(utils).getCertsDirectory();

    try {
      integration.registerUser(APP_TYPE);
      fail();
    } catch (LoadKeyStoreException e) {
      String message = "Fail to retrieve the keystore password. Application: " + APP_TYPE;
      String formattedMessage =
          ExceptionMessageFormatter.format("Integration Bootstrap", message, e.getCause());
      assertEquals(formattedMessage, e.getMessage());
    }
  }

  @Test
  public void testRegisterUserLoadKeystoreException() throws IOException {
    String dir = mockCertDir();
    doReturn(dir).when(utils).getCertsDirectory();

    try {
      integration.registerUser(APP_TYPE);
      fail();
    } catch (LoadKeyStoreException e) {
      String message = "Fail to load keystore file at " + dir + APP_ID + ".p12";
      String formattedMessage =
          ExceptionMessageFormatter.format("Integration Bootstrap", message, e.getCause());
      assertEquals(formattedMessage, e.getMessage());
    }
  }

  @Test
  public void testRegisterUser()
      throws IOException, KeyStoreException, CertificateException, NoSuchAlgorithmException {
    String dir = mockKeyStore();
    doReturn(dir).when(utils).getCertsDirectory();

    integration.registerUser(APP_TYPE);

    IntegrationHealth health = integration.getHealthManager().getHealth();
    assertEquals(IntegrationFlags.ValueEnum.OK, health.getFlags().getCertificateInstalled());
  }

  @Test
  public void testSetupHealthManager() {
    integration.setupHealthManager(APP_TYPE);

    IntegrationHealth health = integration.getHealthManager().getHealth();

    assertEquals(NOT_AVAILABLE, health.getVersion());
    assertEquals(APP_ID, health.getName());
  }

}
