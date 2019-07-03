/**
 * @fileoverview gRPC-Web generated client stub for users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.users = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.users.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.users.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.SignInRequest,
 *   !proto.users.JwtResponse>}
 */
const methodInfo_User_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.JwtResponse,
  /** @param {!proto.users.SignInRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.JwtResponse.deserializeBinary
);


/**
 * @param {!proto.users.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.JwtResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.JwtResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/SignIn',
      request,
      metadata || {},
      methodInfo_User_SignIn,
      callback);
};


/**
 * @param {!proto.users.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.JwtResponse>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/SignIn',
      request,
      metadata || {},
      methodInfo_User_SignIn);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.OnBoardRequest,
 *   !proto.users.JwtResponse>}
 */
const methodInfo_User_OnBoard = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.JwtResponse,
  /** @param {!proto.users.OnBoardRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.JwtResponse.deserializeBinary
);


/**
 * @param {!proto.users.OnBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.JwtResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.JwtResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.onBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/OnBoard',
      request,
      metadata || {},
      methodInfo_User_OnBoard,
      callback);
};


/**
 * @param {!proto.users.OnBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.JwtResponse>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.onBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/OnBoard',
      request,
      metadata || {},
      methodInfo_User_OnBoard);
};


module.exports = proto.users;

