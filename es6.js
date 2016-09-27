module.exports = {
  root: true,
  extends: './node.js',
  env: {
      es6: true,
      node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'eslint arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-reflect': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both']
  }
}
