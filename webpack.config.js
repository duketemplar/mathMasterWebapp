var path = require('path');
var util = require('util');
var pkg = require('./package.json');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');

var DEBUG = process.env.NODE_ENV !== 'production';
var VERSION = process.env.VERSION || 'dev';
var publicPath = DEBUG ? '/' : '/sc/' + pkg.name + '/cache/'+VERSION;


function NordnetBuildDirPlugin(opts) {

  this.initDir = opts.initDir || './dist/init';
  this.publicPath = opts.publicPath;

}

NordnetBuildDirPlugin.prototype.apply = function(compiler) {
  var that = this;

  function done(stats) {
    var dir = that.initDir || './dist/init';

    var fs = require('fs');
    var chunks = stats.toJson().assetsByChunkName;
    var injector = '';

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    for(var key in chunks) {
      var script = chunks[key][0];
      injector += 'document.write(\'<script charset="UTF-8" src="'+that.publicPath+'/'+script+'"></script>\');';
    }

    fs.writeFileSync(dir+"/base.js", injector);
  }
  compiler.plugin("done", done);
};


var plugins =[
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
  new webpack.ProvidePlugin({
    'Intl': path.resolve(__dirname, './src/scripts/intl-shim'),
    'Promise': 'native-promise-only'
  })
];

if (!DEBUG) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new NordnetBuildDirPlugin({publicPath: publicPath})
  );
}

var entry = {
  'app': [ './scripts/app.jsx' ],
  'vendor': ['react', 'react-router', 'reflux', 'lodash', 'react-intl', 'native-promise-only' ]
};

if(DEBUG) {
  entry.app.push('webpack/hot/dev-server');
}

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader?optional&optional=runtime'
  },
  {
    test: /\.css$/,
    loader: 'style!css'
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.otf$|\.ttf$/,
    loader: 'file-loader?name=[path][name].[ext]'
  },
  {
    test: /\.scss$/,
    loader: 'style!css!sass' + '?includePaths[]=' + (path.resolve(__dirname, './node_modules'))
  }
];

module.exports = {
  context: path.join(__dirname, 'src'),
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  entry: entry,
  devtool: 'hidden-source-map',
  output: {
    path: DEBUG ? './dist' : './dist/cache/'+VERSION,
    publicPath: DEBUG ? '/' : publicPath + '/',
    //path: './dist',
    //publicPath: '/',
    sourceMapFilename: "../../dev/[file].map",
    filename: '[name].js',
    pathinfo: DEBUG
  },
  module: {
    loaders: loaders
  },
  postcss: [
    autoprefixer
  ],
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
