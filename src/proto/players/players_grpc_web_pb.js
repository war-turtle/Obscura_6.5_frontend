/**
 * @fileoverview gRPC-Web generated client stub for players
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.players = require('./players_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.players.PlayerClient =
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
proto.players.PlayerPromiseClient =
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
 *   !proto.players.PlayerRequest,
 *   !proto.players.PlayerResponse>}
 */
const methodInfo_Player_GetPlayers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.players.PlayerResponse,
  /** @param {!proto.players.PlayerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.players.PlayerResponse.deserializeBinary
);


/**
 * @param {!proto.players.PlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.players.PlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.players.PlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.players.PlayerClient.prototype.getPlayers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/players.Player/GetPlayers',
      request,
      metadata || {},
      methodInfo_Player_GetPlayers,
      callback);
};


/**
 * @param {!proto.players.PlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.players.PlayerResponse>}
 *     A native promise that resolves to the response
 */
proto.players.PlayerPromiseClient.prototype.getPlayers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/players.Player/GetPlayers',
      request,
      metadata || {},
      methodInfo_Player_GetPlayers);
};


module.exports = proto.players;

