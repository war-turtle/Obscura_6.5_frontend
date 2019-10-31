/**
 * @fileoverview gRPC-Web generated client stub for levels
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.levels = require('./levels_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.levels.LevelClient =
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
proto.levels.LevelPromiseClient =
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
 *   !proto.levels.LevelRequest,
 *   !proto.levels.LevelResponse>}
 */
const methodInfo_Level_GetLevel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.levels.LevelResponse,
  /** @param {!proto.levels.LevelRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.levels.LevelResponse.deserializeBinary
);


/**
 * @param {!proto.levels.LevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.levels.LevelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.levels.LevelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.levels.LevelClient.prototype.getLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/levels.Level/GetLevel',
      request,
      metadata || {},
      methodInfo_Level_GetLevel,
      callback);
};


/**
 * @param {!proto.levels.LevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.levels.LevelResponse>}
 *     A native promise that resolves to the response
 */
proto.levels.LevelPromiseClient.prototype.getLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/levels.Level/GetLevel',
      request,
      metadata || {},
      methodInfo_Level_GetLevel);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.levels.AnswerRequest,
 *   !proto.levels.AnswerResponse>}
 */
const methodInfo_Level_CheckAnswer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.levels.AnswerResponse,
  /** @param {!proto.levels.AnswerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.levels.AnswerResponse.deserializeBinary
);


/**
 * @param {!proto.levels.AnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.levels.AnswerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.levels.AnswerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.levels.LevelClient.prototype.checkAnswer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/levels.Level/CheckAnswer',
      request,
      metadata || {},
      methodInfo_Level_CheckAnswer,
      callback);
};


/**
 * @param {!proto.levels.AnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.levels.AnswerResponse>}
 *     A native promise that resolves to the response
 */
proto.levels.LevelPromiseClient.prototype.checkAnswer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/levels.Level/CheckAnswer',
      request,
      metadata || {},
      methodInfo_Level_CheckAnswer);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.levels.AllLevelRequest,
 *   !proto.levels.AllLevelResponse>}
 */
const methodInfo_Level_GetAllLevel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.levels.AllLevelResponse,
  /** @param {!proto.levels.AllLevelRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.levels.AllLevelResponse.deserializeBinary
);


/**
 * @param {!proto.levels.AllLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.levels.AllLevelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.levels.AllLevelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.levels.LevelClient.prototype.getAllLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/levels.Level/GetAllLevel',
      request,
      metadata || {},
      methodInfo_Level_GetAllLevel,
      callback);
};


/**
 * @param {!proto.levels.AllLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.levels.AllLevelResponse>}
 *     A native promise that resolves to the response
 */
proto.levels.LevelPromiseClient.prototype.getAllLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/levels.Level/GetAllLevel',
      request,
      metadata || {},
      methodInfo_Level_GetAllLevel);
};


module.exports = proto.levels;

