// Dependences
import webpack from 'webpack';
import path from 'path';
import ChunksPlugin from 'webpack-split-chunks';

// Paths
const PATHS = {
  index: path.resolve(__dirname, 'src/index'),
  build: path.resolve(__dirname, 'src/dist'),
  base: path.resolve(__dirname, 'src')
}

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';
const isDevelopment = process.env.NODE_ENV !== 'production';

const getDevtool = () => 'cheap-module-eval-source-map';

const getEntry = () => {
  const entry = [
    PATHS.index
  ]
  if (isDevelopment) {
    entry.push('webpack-hot-middleware/client?reload=true');
  }
  return entry;
};

const getOutput = () => ({
  path:  PATHS.build,
  publicPath: ASSET_PATH,
  filename: '[name].bundle.js'
});

const getPlugins = () => {
  const plugins = [
    new ChunksPlugin({
      to: 'vendor',
      test: /node_modules/
    })
  ];
  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),

      // This makes it possible for us to safely use env vars on our code
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
      })
    );
  } else {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })
    );
  }
  return plugins;
};

const getLoaders = () => ({
  rules: [
    {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      include: PATHS.base
    },
    {
      test: /(\.css)$/,
      loaders: ['style-loader', 'css-loader'],
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loaders: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }
  ]
});

const getResolve = () => ({
  extensions: ['.js', '.jsx'],
  modules: [
    "node_modules",
    PATHS.base
  ]
});

// Webpack Config
export default {
  devtool: getDevtool(),
  entry: getEntry(),
  output: getOutput(),
  plugins: getPlugins(),
  module: getLoaders(),
  resolve: getResolve()
};
