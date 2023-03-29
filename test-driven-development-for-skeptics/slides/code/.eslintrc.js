module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
        "jest": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "Galleria": "readonly",
        "google": "readonly",
        "destupify": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-unused-vars": "off",
        "prefer-const": "error",
        "no-var": "error",
        "max-len": "off",
        "indent": ["error", 4],
        "brace-style": ["error", "stroustrup"],
        "comma-dangle": ["error", "never"],
        "no-plusplus": "off",
        "prefer-destructuring": "off",
        "default-case": "off",
        "no-alert": "error",
        "arrow-body-style": ["error", "always"],
        "no-warning-comments": "error",
        "no-constant-condition": "error",
        "no-extra-parens": "warn",
        "no-misleading-character-class": "warn",
        "newline-after-var": "warn",
        "sort-vars": "warn",
        "no-unused-vars": "warn",
        "no-undefined": "warn",
        "quotes": "off",
        "no-else-return": "off",
        "no-use-before-define": "off",
        "max-classes-per-file": "off",
        "class-methods-use-this": "off"
    }
};
