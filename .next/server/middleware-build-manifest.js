self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/slide1": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/slide1.js"
    ],
    "/slide2": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/slide2.js"
    ],
    "/slide3": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/slide3.js"
    ],
    "/slide4": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/slide4.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];