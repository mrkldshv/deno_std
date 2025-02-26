// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 16.13.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
const common = require('../common');
const net = require('net');

const server = net.createServer();
server.listen(0);
const port = server.address().port;
const socket = net.connect(port, common.localhostIPv4, common.mustNotCall());
socket.on('error', common.mustNotCall());
server.close();
socket.destroy();
