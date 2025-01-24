module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
}; 