import { babel } from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
export default {
    input: './src/index.js',
    output: {
        file: './lib/log-view.js',
        format: 'es',
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        commonjs(),
    ],
    external: ['monaco-editor'],
};
