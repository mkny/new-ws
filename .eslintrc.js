const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/internal-regex": "^(assets|common|components|hooks)/",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": isDev ? "warn" : "error",
    "prettier/prettier": "error",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-template": "error",
    "complexity": ["error", 5],
    "no-console": isDev ? "warn" : "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../../", "../../", "./../../../"],
      },
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
  },
};
