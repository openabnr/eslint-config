module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    jest: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "react-hooks",
    "ordered-imports",
  ],
  ignorePatterns: ["dist/", "coverage/"],
  settings: {
    "react": {
      version: "detect",
    },
    "import/internal-regex": "^(@|@test|@tools|@stories)/",
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "react/prop-types": "off",
    "import/order": [
      "off",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "dot-notation": "warn",
    "eqeqeq": "warn",
    "no-else-return": "warn",
    "no-lone-blocks": "warn",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "no-lonely-if": "warn",
    "require-await": "warn",
    "wrap-iife": "warn",
    "yoda": "warn",
    "no-unneeded-ternary": "warn",
    "quote-props": ["warn", "consistent-as-needed"],
    "arrow-body-style": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-rename": "warn",
    "no-var": "warn",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "curly": ["warn", "multi-line"],
  },
};
