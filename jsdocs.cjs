/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ["./index.cjs"],

    overrides: [
        {
            files: ["**.js", "**.cjs", "**.mjs"],
            extends: ["plugin:jsdoc/recommended-typescript-flavor-error"],
            plugins: ["jsdoc"],

            rules: {
                //     "jsdoc/check-access": "error", // Recommended
                "jsdoc/check-alignment": "error", // Recommended
                //     "jsdoc/check-examples": "error",
                //     "jsdoc/check-indentation": "error",
                //     "jsdoc/check-line-alignment": "error",
                //     "jsdoc/check-param-names": "error", // Recommended
                //     "jsdoc/check-property-names": "error", // Recommended
                //     "jsdoc/check-syntax": "error",
                //     "jsdoc/check-tag-names": "error", // Recommended
                //     "jsdoc/check-types": "error", // Recommended
                //     "jsdoc/check-values": "error", // Recommended
                //     "jsdoc/empty-tags": "error", // Recommended
                //     "jsdoc/implements-on-classes": "error", // Recommended
                //     "jsdoc/informative-docs": "error",
                //     "jsdoc/match-description": "error",
                //     "jsdoc/multiline-blocks": "error", // Recommended
                //     "jsdoc/no-bad-blocks": "error",
                //     "jsdoc/no-blank-block-descriptions": "error",
                //     "jsdoc/no-defaults": "error",
                //     "jsdoc/no-missing-syntax": "error",
                //     "jsdoc/no-multi-asterisks": "error", // Recommended
                //     "jsdoc/no-restricted-syntax": "error",
                //     "jsdoc/no-types": "error",
                //     "jsdoc/no-undefined-types": "error", // Recommended
                "jsdoc/require-asterisk-prefix": "error",
                "jsdoc/require-description": "error",
                //     "jsdoc/require-description-complete-sentence": "error",
                //     "jsdoc/require-example": "error",
                //     "jsdoc/require-file-overview": "error",
                //     "jsdoc/require-hyphen-before-param-description": "error",
                //     "jsdoc/require-jsdoc": "error", // Recommended
                //     "jsdoc/require-param": "error", // Recommended
                //     "jsdoc/require-param-description": "error", // Recommended
                //     "jsdoc/require-param-name": "error", // Recommended
                //     "jsdoc/require-param-type": "error", // Recommended
                //     "jsdoc/require-property": "error", // Recommended
                //     "jsdoc/require-property-description": "error", // Recommended
                //     "jsdoc/require-property-name": "error", // Recommended
                //     "jsdoc/require-property-type": "error", // Recommended
                //     "jsdoc/require-returns": "error", // Recommended
                //     "jsdoc/require-returns-check": "error", // Recommended
                //     "jsdoc/require-returns-description": "error", // Recommended
                //     "jsdoc/require-returns-type": "error", // Recommended
                "jsdoc/require-throws": "error",
                //     "jsdoc/require-yields": "error", // Recommended
                //     "jsdoc/require-yields-check": "error", // Recommended
                //     "jsdoc/sort-tags": "error",
                //     "jsdoc/tag-lines": "error", // Recommended
                //     "jsdoc/valid-types": "error", // Recommended
            },
        },
    ],
};
