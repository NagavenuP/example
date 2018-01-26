'use strict';

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css?-minimize!postcss',
  exclude: /node_modules/,
};

exports.json = {
  test: /\.json$/,
  loader: 'json?name=./data/[name].[hash:6].json',
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url?name=./fonts/[name].[hash:6].[ext]',
    exclude: /node_modules/,
  };
}
