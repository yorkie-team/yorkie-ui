import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import svgr from '@svgr/rollup';
import packageJson from './package.json';
// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.ts',
  output: [
    { dir: 'dist/cjs', format: 'cjs', preserveModules: true },
    { dir: 'dist/esm', format: 'esm', preserveModules: true },
  ],
  plugins: [
    image(),
    tsConfigPaths(), // Ensure this comes before nodeResolve
    nodeResolve({
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.svg'],
      browser: true, // This option might be needed depending on your setup
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    typescript({
      exclude: ['**/*.stories.tsx', '**/*.mdx'], // loại trừ các tệp .stories.tsx và .mdx
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
    svgr(),
    commonjs(), // converts date-fns to ES modules
    preserveDirectives(),
    production && terser(), // minify, but only in production
  ],
  external: [
    'react',
    'react-dom',
    'prop-types',
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ],
};
