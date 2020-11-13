import babel from '@rollup/plugin-babel';
import multi from '@rollup/plugin-multi-entry';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-css-only";
import {terser} from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import { string } from "rollup-plugin-string";
import execute from 'rollup-plugin-execute';


export default [{
    input: ['src/index.js'],
    output: {
        file: 'build/bundle.js',
        format: 'umd',
        name: 'swp',
    },
    plugins: [
        babel({
            babelHelpers: 'bundled', 
            exclude: 'node_modules/**'
        }),
        multi(),
        nodeResolve(),
        commonjs(),
        json(),
        css({
            output: "build/bundle.css"
        }),
        string({
            include: "**/*.shader"
        }),
        execute('npm run docs')
    ],
    onwarn: function(warning, superOnWarn) {
        if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
        }
        superOnWarn(warning);
    },
},];