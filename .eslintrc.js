// Sample ESlint config for projects with React code, using Airbnb stylguide
// This is in the .js file format, adapt to different file format as needed

// Required dependencies for this ESlint configuration:
/*
npm install --save-dev eslint babel-eslint \ 
eslint-config-airbnb eslint-plugin-import \ 
eslint-plugin-jsx-a11y eslint-plugin-node \
eslint-plugin-promise eslint-plugin-react \
*/

module.exports = {
  env: {
    browser: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'max-len': [
      'error',
      {
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        code: 80,
        tabWidth: 2
      }
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['Label'],
        labelAttributes: ['label'],
        controlComponents: ['Input'],
        depth: 3
      }
    ],
    'jsx-a11y/media-has-caption': 0,
    'react/no-array-index-key': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8 // optional, recommended 6+
  }
};
