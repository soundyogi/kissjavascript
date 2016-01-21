System.config({
  baseURL: "www",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "typescript": "npm:typescript@1.7.5"
  }
});
