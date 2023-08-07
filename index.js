/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ["eslint:recommended", "prettier"],
    plugins: ["import"],
    env: { es6: true },
    parserOptions: { sourceType: "module", ecmaVersion: 2022 },

    rules: {
        "import/order": [
            "warn",
            {
                groups: [
                    ["builtin", "external"],
                    ["sibling", "parent"],
                ],
                "newlines-between": "always-and-inside-groups",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "import/newline-after-import": "warn",
    },
    overrides: [
        // TypeScript
        {
            files: ["**/*.ts", "**/*.tsx"],
            extends: ["plugin:@typescript-eslint/recommended"],
            plugins: ["@typescript-eslint"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: true,
            },
            rules: {
                // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/291
                "no-dupe-class-members": "off",
                // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/477
                "no-undef": "off",
                // allow the use of an indeterminate number of underscore characters (_)
                "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_+", varsIgnorePattern: "^_+" }],
                // tsconfig is set to disable implicit any, so we will accept explicit `any` types.
                "@typescript-eslint/no-explicit-any": "off",
            },
        },

        // Jest
        {
            files: ["**/tests/**/*", "**/__tests__/**/*"],
            env: { jest: true },
        },
    ],
};
