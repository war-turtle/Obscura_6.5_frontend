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


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.GetUserRequest,
 *   !proto.users.JwtResponse>}
 */
const methodInfo_User_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.JwtResponse,
  /** @param {!proto.users.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.JwtResponse.deserializeBinary
);


/**
 * @param {!proto.users.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.JwtResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.JwtResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/GetUser',
      request,
      metadata || {},
      methodInfo_User_GetUser,
      callback);
};


/**
 * @param {!proto.users.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.JwtResponse>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/GetUser',
      request,
      metadata || {},
      methodInfo_User_GetUser);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.CreateTeamRequest,
 *   !proto.users.JwtResponse>}
 */
const methodInfo_User_CreateTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.JwtResponse,
  /** @param {!proto.users.CreateTeamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.JwtResponse.deserializeBinary
);


/**
 * @param {!proto.users.CreateTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.JwtResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.JwtResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.createTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/CreateTeam',
      request,
      metadata || {},
      methodInfo_User_CreateTeam,
      callback);
};


/**
 * @param {!proto.users.CreateTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.JwtResponse>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.createTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/CreateTeam',
      request,
      metadata || {},
      methodInfo_User_CreateTeam);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.GetTeamRequest,
 *   !proto.users.GetTeamResponse>}
 */
const methodInfo_User_GetTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.GetTeamResponse,
  /** @param {!proto.users.GetTeamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.GetTeamResponse.deserializeBinary
);


/**
 * @param {!proto.users.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.GetTeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.GetTeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.getTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/GetTeam',
      request,
      metadata || {},
      methodInfo_User_GetTeam,
      callback);
};


/**
 * @param {!proto.users.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.GetTeamResponse>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.getTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/GetTeam',
      request,
      metadata || {},
      methodInfo_User_GetTeam);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.GetAllTeamsRequest,
 *   !proto.users.GetAllTeamsResponse>}
 */
const methodInfo_User_GetAllTeams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.GetAllTeamsResponse,
  /** @param {!proto.users.GetAllTeamsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.GetAllTeamsResponse.deserializeBinary
);


/**
 * @param {!proto.users.GetAllTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.GetAllTeamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.GetAllTeamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.getAllTeams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/GetAllTeams',
      request,
      metadata || {},
      methodInfo_User_GetAllTeams,
      callback);
};


/**
 * @param {!proto.users.GetAllTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.GetAllTeamsResponse>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.getAllTeams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/GetAllTeams',
      request,
      metadata || {},
      methodInfo_User_GetAllTeams);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.JoinTeamRequest,
 *   !proto.users.Empty>}
 */
const methodInfo_User_JoinTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.Empty,
  /** @param {!proto.users.JoinTeamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.Empty.deserializeBinary
);


/**
 * @param {!proto.users.JoinTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.joinTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/JoinTeam',
      request,
      metadata || {},
      methodInfo_User_JoinTeam,
      callback);
};


/**
 * @param {!proto.users.JoinTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.Empty>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.joinTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/JoinTeam',
      request,
      metadata || {},
      methodInfo_User_JoinTeam);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.JoinTeamRequest,
 *   !proto.users.Empty>}
 */
const methodInfo_User_AcceptUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.Empty,
  /** @param {!proto.users.JoinTeamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.Empty.deserializeBinary
);


/**
 * @param {!proto.users.JoinTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UserClient.prototype.acceptUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.User/AcceptUser',
      request,
      metadata || {},
      methodInfo_User_AcceptUser,
      callback);
};


/**
 * @param {!proto.users.JoinTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.Empty>}
 *     A native promise that resolves to the response
 */
proto.users.UserPromiseClient.prototype.acceptUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.User/AcceptUser',
      request,
      metadata || {},
      methodInfo_User_AcceptUser);
};


module.exports = proto.users;

