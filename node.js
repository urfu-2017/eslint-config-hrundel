module.exports = {
  root: true,
  extends: './base.js',
  env: {
    node: true
  },
  rules: {
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'strict': ['error', 'safe']
  }
}
