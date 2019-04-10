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
  extends: ['airbnb'],
  plugins: ['react'],
  rules: {
    'max-len': [
      'error',
      {
        code: 80,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
};
