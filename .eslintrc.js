module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/prefer-optional-chain': 1,
    '@typescript-eslint/prefer-nullish-coalescing': 1,
    '@typescript-eslint/no-unnecessary-condition': 2,
  },
};
