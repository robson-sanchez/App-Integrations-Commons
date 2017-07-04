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

package org.symphonyoss.integration.exception;

/**
 * Created by rsanchez on 09/08/16.
 */
public class RemoteApiException extends IntegrationException {

  public static final String COMPONENT = "Commons";
  private int code;

  public RemoteApiException(int code, String message) {
    super(COMPONENT, message);
    this.code = code;
  }

  public RemoteApiException(int code, Exception e) {
    super(COMPONENT, e.getMessage(), e);
    this.code = code;
  }

  public RemoteApiException(int code, Exception e, String... solutions) {
    super(COMPONENT, e.getMessage(), e, solutions);
    this.code = code;
  }

  public RemoteApiException(int code, String message, Exception e) {
    super(COMPONENT, message, e);
    this.code = code;
  }

  public RemoteApiException(int code, String message, Exception e, String... solutions) {
    super(COMPONENT, message, e, solutions);
    this.code = code;
  }

  public int getCode() {
    return code;
  }

  public RemoteApiException(int code, String message, String... solutions) {
    super(COMPONENT, message, solutions);
    this.code = code;
  }

}
