import livereload from 'rollup-plugin-livereload'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: './src/main.js',
  output: {
    dir: './assets',
    format: 'cjs'
  },
  plugins: [nodeResolve(), livereload()],
}