export default {
  extends: ['stylelint-config-standard'],

  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['theme', 'custom-variant', 'utility', 'source'],
      },
    ],

    'import-notation': null,
    'lightness-notation': null,
    'hue-degree-notation': null,
  },
};
