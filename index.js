module.exports = {
  extends: 'standard',
  rules: {
    'indent': ['error', 2],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }]
  }
}
