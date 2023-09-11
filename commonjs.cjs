/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ["./index.cjs"],

    env: {
        commonjs: true,
    },

    rules: {
        "unicorn/prefer-module": "off",
    },
};
