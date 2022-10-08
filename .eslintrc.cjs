module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    // override/add rules settings here, such as:
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' },
    ],
    'no-undef': 'off', // ts(2304)
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        filter: {
          // you can expand this regex to add more allowed names
          regex: '^((__v_.*)|[0-9]+)$',
          match: false,
        },
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['memberLike'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: {
          // you can expand this regex to add more allowed names
          regex: '^((__v_.*)|[0-9]+)$',
          match: false,
        },
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['default'],
        modifiers: ['destructured', 'exported'],
        format: null,
      },
    ],
  },
};
