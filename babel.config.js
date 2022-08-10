module.exports = function (api) {
    api.cache(true)
    return {
      plugins: ['macros'],
      "presets": [
        ["@babel/preset-react", {
        "runtime": "automatic"
      }]
      ]
    }
  }