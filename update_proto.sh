#!/usr/bin/bash
#Shell commands to update protobuff files used in the project
protoc -I ./proto --js_out=import_style=commonjs:src/proto/players players.proto
protoc -I ./proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/proto/players players.proto

protoc -I ./proto --js_out=import_style=commonjs:src/proto/levels levels.proto
protoc -I ./proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/proto/levels levels.proto