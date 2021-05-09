module.exports = {
  "extends": [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
  }, 
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}