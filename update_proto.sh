#!/usr/bin/bash
#Shell commands to update protobuff files used in the project
#Remember to enter the path to proto files in the backend in -I attribute
protoc -I ../Obscura_6.5_backend/proto --js_out=import_style=commonjs:src/proto/users users.proto
protoc -I ../Obscura_6.5_backend/proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/proto/users users.proto

protoc -I ../Obscura_6.5_backend/proto --js_out=import_style=commonjs:src/proto/levels levels.proto
protoc -I ../Obscura_6.5_backend/proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/proto/levels levels.proto

#Code to disable eslint
echo '/* eslint-disable */' | cat - src/proto/users/users_pb.js > temp && mv temp src/proto/users/users_pb.js
echo '/* eslint-disable */' | cat - src/proto/levels/levels_pb.js > temp && mv temp src/proto/levels/levels_pb.js