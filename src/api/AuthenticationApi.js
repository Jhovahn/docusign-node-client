/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/LoginInformation', 'model/OauthAccess', 'model/SocialAccountInformation', 'model/UserPasswordInformation', 'model/UserSocialIdResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/LoginInformation'), require('../model/OauthAccess'), require('../model/SocialAccountInformation'), require('../model/UserPasswordInformation'), require('../model/UserSocialIdResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AuthenticationApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.LoginInformation, root.Docusign.OauthAccess, root.Docusign.SocialAccountInformation, root.Docusign.UserPasswordInformation, root.Docusign.UserSocialIdResult);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, LoginInformation, OauthAccess, SocialAccountInformation, UserPasswordInformation, UserSocialIdResult) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * Callback function to receive the result of the deleteSocialLogin operation.
     * @callback module:api/AuthenticationApi~deleteSocialLoginCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes user&#39;s social account.
     * Deletes a social account from a use's account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} opts Optional parameters
     * @param {module:model/SocialAccountInformation} opts.socialAccountInformation 
     * @param {module:api/AuthenticationApi~deleteSocialLoginCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSocialLogin = function(accountId, userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['socialAccountInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteSocialLogin");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteSocialLogin");
      }


      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/social', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getOAuthToken operation.
     * @callback module:api/AuthenticationApi~getOAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OauthAccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an authorization token.
     * Creates an OAuth2 authorization server token endpoint.
     * @param {module:api/AuthenticationApi~getOAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OauthAccess}
     */
    this.getOAuthToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OauthAccess;

      return this.apiClient.callApi(
        '/v2/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listSocialLogins operation.
     * @callback module:api/AuthenticationApi~listSocialLoginsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSocialIdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of a user&#39;s social accounts.
     * Retrieves a list of social accounts linked to a user's account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {module:api/AuthenticationApi~listSocialLoginsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSocialIdResult}
     */
    this.listSocialLogins = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSocialLogins");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling listSocialLogins");
      }


      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserSocialIdResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/social', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthenticationApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets login information for a specified user.
     * Retrieves login information for a specified user. Each account that is associated with the login credentials is listed. You can use the returned information to determine whether a user is authenticated and select an account to use in future operations.  

The `baseUrl` property, returned in the response, is used in all future API calls as the base of the request URL. The `baseUrl` property contains the DocuSign server, the API version, and the `accountId` property that is used for the login. This request uses your DocuSign credentials to retrieve the account information.
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiPassword When set to **true**, shows the account API password in the response.
     * @param {String} opts.embedAccountIdGuid 
     * @param {String} opts.includeAccountIdGuid When set to **true**, shows the account ID GUID in the response.
     * @param {String} opts.loginSettings Determines whether login settings are returned in the response.  Valid Values:  * all -  All the login settings are returned.  * none - no login settings are returned.
     * @param {module:api/AuthenticationApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoginInformation}
     */
    this.login = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'api_password': opts['apiPassword'],
        'embed_account_id_guid': opts['embedAccountIdGuid'],
        'include_account_id_guid': opts['includeAccountIdGuid'],
        'login_settings': opts['loginSettings']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LoginInformation;

      return this.apiClient.callApi(
        '/v2/login_information', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the revokeOAuthToken operation.
     * @callback module:api/AuthenticationApi~revokeOAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revokes an authorization token.
     * Revokes an OAuth2 authorization server token. After the revocation is complete, a caller must re-authenticate to restore access.
     * @param {module:api/AuthenticationApi~revokeOAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.revokeOAuthToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/oauth2/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updatePassword operation.
     * @callback module:api/AuthenticationApi~updatePasswordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the password for a specified user.
     * Updates the password for a specified user.
     * @param {String} loginPart Currently, only the value **password** is supported.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserPasswordInformation} opts.userPasswordInformation 
     * @param {module:api/AuthenticationApi~updatePasswordCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePassword = function(loginPart, opts, callback) {
      opts = opts || {};
      var postBody = opts['userPasswordInformation'];

      // verify the required parameter 'loginPart' is set
      if (loginPart == undefined || loginPart == null) {
        throw new Error("Missing the required parameter 'loginPart' when calling updatePassword");
      }


      var pathParams = {
        'loginPart': loginPart
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/login_information/{loginPart}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateSocialLogin operation.
     * @callback module:api/AuthenticationApi~updateSocialLoginCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds social account for a user.
     * Adds a new social account to a user's account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} opts Optional parameters
     * @param {module:model/SocialAccountInformation} opts.socialAccountInformation 
     * @param {module:api/AuthenticationApi~updateSocialLoginCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSocialLogin = function(accountId, userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['socialAccountInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSocialLogin");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling updateSocialLogin");
      }


      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/social', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
