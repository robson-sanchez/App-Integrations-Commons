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

package org.symphonyoss.integration.authentication.api.jwt;

/**
 * Service interface responsible for handling JWT authentication stuff.
 *
 * Created by rsanchez on 14/08/17.
 */
public interface JwtAuthentication {

  /**
   * Return user identifier from HTTP Authorization header.
   * @param authorizationHeader HTTP Authorization header
   * @return User identifier or null if the authorization header is not present or it's not a valid
   * JWT token
   */
  Long getUserIdFromAuthorizationHeader(String authorizationHeader);

  /**
   * Retrieves JWT token from HTTP Authorization header.
   * @param authorizationHeader HTTP Authorization header
   * @return JWT token or null if the authorization header is not present or it's not a valid JWT
   * token
   */
  String getJwtToken(String authorizationHeader);

  /**
   * Start the JWT authentication between the App and the SBE.
   * @param configurationId Application identifier.
   * @return The generated Application Token (Ta).
   */
  String authenticate(String configurationId);

  /**
   * Get the Symphony previously generated token by the app token
   * @param configurationId Application identifier.
   * @param applicationToken App token generated by the "authenticate" service.
   * @return The generated Token (Ta) and the SBE token (Ts).
   */
  boolean isValidTokenPair(String configurationId, String applicationToken,
      String symphonyToken);
}
