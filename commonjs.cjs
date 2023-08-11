/** @type {import('eslint').Linter.Config} */
export default {
    extends: ["./index.js"],

    env: {
        commonjs: true,
    },

    rules: {
        "unicorn/prefer-module": "off",
    },
};
