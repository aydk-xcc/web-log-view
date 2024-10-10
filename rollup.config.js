import { babel } from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
export default {
    input: './src/index.js',
    output: {
        file: './lib/web-log-view.js',
        format: 'es',
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        url({
            include: ['**/*.svg'] // 处理 SVG 文件
        }),
        commonjs(),
    ],
    external: ['monaco-editor'],
};
