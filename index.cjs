/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ["eslint:recommended", "prettier", "plugin:unicorn/recommended"],

    env: {
        es2024: true,
    },

    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },

    plugins: ["import", "unicorn"],

    rules: {
        "import/exports-last": "error",
        "import/group-exports": "error",
        "import/newline-after-import": "error",
        "import/order": [
            "error",
            {
                alphabetize: { order: "asc", caseInsensitive: true },
                groups: [["builtin", "external"], "internal", ["parent", "sibling"], "index", "object", "type"],
                "newlines-between": "always",
                pathGroups: [{ pattern: "node:**", group: "builtin" }],
            },
        ],
    },

    overrides: [
        // CommonJS
        {
            files: ["**.cjs"],
            env: { commonjs: true },
            rules: {
                "unicorn/prefer-module": "off",
            },
        },

        // Jest
        {
            files: ["**/tests/**/*", "**/__tests__/**/*"],
            env: { jest: true },
            rules: {
                // "correctness" in tests is important but semantic differences get a pass here
                "unicorn/new-for-builtins": "off",
                // sometimes we need to explicitly test for those useless undefined cases
                "unicorn/no-useless-undefined": "off",
                // null can (and likely) will be returned from libs, or components
                "unicorn/no-null": "off",
            },
        },

        // JSX
        {
            files: ["**/*.jsx", "**/*.tsx"],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

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
    ],
};
