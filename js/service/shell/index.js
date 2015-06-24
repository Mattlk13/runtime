// Copyright 2014-2015 runtime.js project authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
var typeutils = require('typeutils');
var assert = require('assert');
var inputBox = require('./input-box');
var runtime = require('../../core');
var tty = runtime.tty;
var commands = new Map();

inputBox.onInput.add(function(text, done) {
  var name = '';
  var args = '';

  var split = text.indexOf(' ');
  if (split >= 0) {
    name = text.slice(0, split);
    args = text.slice(split);
  } else {
    name = text;
  }

  if (commands.has(name)) {
    return commands.get(name)(args, runtime.stdio, done);
  }

  tty.print('Command "' + name + '" not found.\n', 1, tty.color.LIGHTRED);
  done();
});

exports.setCommand = function(name, cb) {
  assert(typeutils.isString(name));
  assert(typeutils.isFunction(cb));
  commands.set(name, cb);
};

exports.runCommand = function(name, args, done) {
  var opts = {};

  assert(typeutils.isString(name));

  if (typeutils.isArray(args)) {
    opts.args = args;
  } else {
    opts = args;
    opts.args = [];
  }

  var stringargs = opts.args.join(' ');

  opts.stdout = opts.stdout || env.stdout;
  opts.stdin = opts.stdin || env.stdin;

  commands.get(name)(stringargs, {
    stdout: opts.stdout,
    stdin: opts.stdin
  }, function(rescode) {
    done(rescode, inputBox.done);
  });

  return;
}
