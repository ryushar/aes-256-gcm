module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    impliedStrict: true,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    // @typescript-eslint recommended config overrides
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "angle-bracket" }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false }
      }
    ],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"]
      },
      {
        selector: "function",
        format: ["PascalCase"]
      },
      {
        selector: "parameter",
        format: ["camelCase"]
      },
      {
        selector: ["classProperty", "classMethod", "accessor"],
        format: ["camelCase"],
        modifiers: ["public"]
      },
      {
        selector: ["classProperty", "classMethod", "accessor"],
        format: ["camelCase"],
        modifiers: ["protected"],
        prefix: ["_"]
      },
      {
        selector: ["classProperty", "classMethod", "accessor"],
        format: ["camelCase"],
        modifiers: ["private"],
        prefix: ["_"]
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"]
      },
      {
        selector: "class",
        format: ["PascalCase"]
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"]
      },
      {
        selector: "enum",
        format: ["UPPER_CASE"]
      }
    ],
    "@typescript-eslint/prefer-enum-initializers": "error"
  }
};
