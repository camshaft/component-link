/**
 * Module dependencies
 */

var fs = require('graceful-fs');
var mkdir = require('mkdirp');
var rm = require('rimraf');
var path = require('path');
var chain = require('slide').chain;

exports.symlink = function(from, to, cb) {
  to = path.resolve(to);
  var target = from = path.resolve(from);

  if (process.platform !== 'win32') {
    target = path.relative(path.dirname(to), from);
    if (target.length >= from.length) target = from;
  }

  chain([
    [fs, 'stat', from],
    [rm, to],
    [mkdir, path.dirname(to)],
    [fs, 'symlink', target, to, 'junction']
  ], cb);
};
