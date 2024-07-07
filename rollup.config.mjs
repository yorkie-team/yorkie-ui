import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const production = !process.env.ROLLUP_WATCH;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.ts',
  output: [
    { dir: 'dist/cjs', format: 'cjs', sourcemap: true, exports: 'named' },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
      exports: 'named',
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    tsConfigPaths(), // Ensure this comes before nodeResolve
    nodeResolve({
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.svg'],
      browser: true, // Adjust based on your setup
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    typescript(),
    image(),
    svgr(),
    commonjs(), // Convert CommonJS modules to ES6
    preserveDirectives(),
    production && terser(), // Minify in production
  ],
  external: ['react', 'react-dom', 'prop-types'], // Exclude these from bundle
};
