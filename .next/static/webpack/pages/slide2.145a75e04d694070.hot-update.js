"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slide2",{

/***/ "./pages/slide2.tsx":
/*!**************************!*\
  !*** ./pages/slide2.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AlertCircle_ArrowLeft_ArrowRight_Cloud_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,ArrowLeft,ArrowRight,Cloud!=!lucide-react */ \"__barrel_optimize__?names=AlertCircle,ArrowLeft,ArrowRight,Cloud!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Slide2 = ()=>{\n    _s();\n    const [animationPhase, setAnimationPhase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('falling');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Slide2.useEffect\": ()=>{\n            const sequence = {\n                \"Slide2.useEffect.sequence\": async ()=>{\n                    await new Promise({\n                        \"Slide2.useEffect.sequence\": (resolve)=>setTimeout(resolve, 2000)\n                    }[\"Slide2.useEffect.sequence\"]);\n                    setAnimationPhase('hitting');\n                    await new Promise({\n                        \"Slide2.useEffect.sequence\": (resolve)=>setTimeout(resolve, 1000)\n                    }[\"Slide2.useEffect.sequence\"]);\n                    setAnimationPhase('growing');\n                    await new Promise({\n                        \"Slide2.useEffect.sequence\": (resolve)=>setTimeout(resolve, 15000)\n                    }[\"Slide2.useEffect.sequence\"]);\n                    setAnimationPhase('pulsing');\n                }\n            }[\"Slide2.useEffect.sequence\"];\n            sequence();\n        }\n    }[\"Slide2.useEffect\"], []);\n    const blockVariants = {\n        falling: {\n            y: \"-200vh\",\n            x: \"-50%\",\n            transition: {\n                y: {\n                    type: \"tween\",\n                    duration: 12,\n                    ease: \"easeIn\"\n                }\n            }\n        },\n        hitting: {\n            y: \"140%\",\n            x: \"-50%\",\n            transition: {\n                type: \"spring\",\n                stiffness: 300,\n                damping: 15\n            }\n        },\n        growing: {\n            y: \"50%\",\n            x: \"-50%\",\n            scale: [\n                1,\n                1.2,\n                1.1,\n                1.4,\n                1.3,\n                1.6,\n                1.5,\n                1.8,\n                1.7,\n                2\n            ],\n            transition: {\n                y: {\n                    duration: 1,\n                    ease: \"easeOut\"\n                },\n                scale: {\n                    duration: 15,\n                    times: [\n                        0,\n                        0.1,\n                        0.2,\n                        0.3,\n                        0.4,\n                        0.5,\n                        0.6,\n                        0.7,\n                        0.8,\n                        1\n                    ],\n                    ease: \"easeInOut\"\n                }\n            }\n        },\n        pulsing: {\n            y: \"50%\",\n            x: \"-50%\",\n            scale: [\n                2,\n                2.1,\n                2\n            ],\n            transition: {\n                scale: {\n                    duration: 2,\n                    repeat: Infinity,\n                    ease: \"easeInOut\"\n                }\n            }\n        }\n    };\n    const developerVariants = {\n        standing: {\n            x: \"-50%\",\n            rotate: 0\n        },\n        fallen: {\n            x: \"100%\",\n            rotate: 90,\n            transition: {\n                type: \"spring\",\n                stiffness: 60,\n                damping: 20,\n                restDelta: 0.001\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-16 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-amber-900 mb-3\",\n                        children: \"Challenges in LLM Dev Cycle\"\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl text-amber-700 flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_ArrowLeft_ArrowRight_Cloud_lucide_react__WEBPACK_IMPORTED_MODULE_3__.AlertCircle, {\n                                className: \"w-6 h-6 mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            \"The intersection of immature technology and unrealistic expectations\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-5xl mx-auto relative h-[500px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom z-10\",\n                        variants: developerVariants,\n                        initial: \"standing\",\n                        animate: animationPhase === 'hitting' ? 'fallen' : 'standing',\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-[200px] h-[200px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 100 100\",\n                                className: \"w-full h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M50 35 L50 70 L30 100 M50 70 L70 100 M50 50 L30 65 M50 50 L70 65\",\n                                        stroke: \"#734822\",\n                                        strokeWidth: \"4\",\n                                        fill: \"none\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                        cx: \"50\",\n                                        cy: \"30\",\n                                        r: \"15\",\n                                        fill: \"#734822\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M30 65 L70 65 L75 75 L25 75 Z\",\n                                        fill: \"#666\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute left-1/2 -translate-x-1/2 top-0 w-[300px] z-20\",\n                        variants: blockVariants,\n                        initial: \"falling\",\n                        animate: animationPhase,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-6 rounded-lg shadow-md border-2 border-amber-400\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center mb-4 text-amber-700\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_ArrowLeft_ArrowRight_Cloud_lucide_react__WEBPACK_IMPORTED_MODULE_3__.Cloud, {\n                                            className: \"w-8 h-8\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl font-semibold ml-3\",\n                                            children: \"Inflated Expectations\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-amber-800\",\n                                    children: \"Discrepancies between the capabilities of LLMs and the expectations set by stakeholders\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-8 right-8 flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        className: \"bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_ArrowLeft_ArrowRight_Cloud_lucide_react__WEBPACK_IMPORTED_MODULE_3__.ArrowLeft, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/slide3\",\n                        className: \"bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_ArrowLeft_ArrowRight_Cloud_lucide_react__WEBPACK_IMPORTED_MODULE_3__.ArrowRight, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide2.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slide2, \"ZAww/dUbyu/NsDKYvPIY4zADFkQ=\");\n_c = Slide2;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide2);\nvar _c;\n$RefreshReg$(_c, \"Slide2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O2tDQU9iLDhEQUFDM0MsaURBQU1BLENBQUM4QixHQUFHO3dCQUNUQyxXQUFVO3dCQUNWRyxVQUFVMUI7d0JBQ1YyQixTQUFRO3dCQUNSQyxTQUFTbEM7a0NBRVQsNEVBQUM0Qjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ2pDLDZHQUFLQTs0Q0FBQ2lDLFdBQVU7Ozs7OztzREFDakIsOERBQUNpQjs0Q0FBR2pCLFdBQVU7c0RBQTZCOzs7Ozs7Ozs7Ozs7OENBRTdDLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFwQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDaEMsa0RBQUlBO3dCQUFDa0QsTUFBSzt3QkFBSWxCLFdBQVU7a0NBQ3ZCLDRFQUFDbkMsaUhBQVNBOzRCQUFDbUMsV0FBVTs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDaEMsa0RBQUlBO3dCQUFDa0QsTUFBSzt3QkFBVWxCLFdBQVU7a0NBQzdCLDRFQUFDcEMsa0hBQVVBOzRCQUFDb0MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7R0F0Sk05QjtLQUFBQTtBQXdKTixpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2ZhdXN0b2FsYmVycy9Db2RpbmcvZGVsbF9wcmVzZW50YXRpb24vcGFnZXMvc2xpZGUyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFycm93UmlnaHQsIEFycm93TGVmdCwgQWxlcnRDaXJjbGUsIENsb3VkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBTbGlkZTI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9uUGhhc2UsIHNldEFuaW1hdGlvblBoYXNlXSA9IHVzZVN0YXRlPCdmYWxsaW5nJyB8ICdoaXR0aW5nJyB8ICdncm93aW5nJyB8ICdwdWxzaW5nJz4oJ2ZhbGxpbmcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlcXVlbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcbiAgICAgIHNldEFuaW1hdGlvblBoYXNlKCdoaXR0aW5nJyk7XG4gICAgICBcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgICBzZXRBbmltYXRpb25QaGFzZSgnZ3Jvd2luZycpO1xuICAgICAgXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTUwMDApKTtcbiAgICAgIHNldEFuaW1hdGlvblBoYXNlKCdwdWxzaW5nJyk7XG4gICAgfTtcbiAgICBcbiAgICBzZXF1ZW5jZSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYmxvY2tWYXJpYW50cyA9IHtcbiAgICBmYWxsaW5nOiB7IFxuICAgICAgeTogXCItMjAwdmhcIixcbiAgICAgIHg6IFwiLTUwJVwiLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB5OiB7IFxuICAgICAgICAgIHR5cGU6IFwidHdlZW5cIixcbiAgICAgICAgICBkdXJhdGlvbjogMTIsXG4gICAgICAgICAgZWFzZTogXCJlYXNlSW5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBoaXR0aW5nOiB7IFxuICAgICAgeTogXCIxNDAlXCIsIFxuICAgICAgeDogXCItNTAlXCIsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIHN0aWZmbmVzczogMzAwLFxuICAgICAgICBkYW1waW5nOiAxNVxuICAgICAgfVxuICAgIH0sXG4gICAgZ3Jvd2luZzogeyBcbiAgICAgIHk6IFwiNTAlXCIsXG4gICAgICB4OiBcIi01MCVcIixcbiAgICAgIHNjYWxlOiBbMSwgMS4yLCAxLjEsIDEuNCwgMS4zLCAxLjYsIDEuNSwgMS44LCAxLjcsIDJdLFxuICAgICAgdHJhbnNpdGlvbjogeyBcbiAgICAgICAgeTogeyBkdXJhdGlvbjogMSwgZWFzZTogXCJlYXNlT3V0XCIgfSxcbiAgICAgICAgc2NhbGU6IHsgXG4gICAgICAgICAgZHVyYXRpb246IDE1LFxuICAgICAgICAgIHRpbWVzOiBbMCwgMC4xLCAwLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDFdLFxuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVsc2luZzoge1xuICAgICAgeTogXCI1MCVcIixcbiAgICAgIHg6IFwiLTUwJVwiLFxuICAgICAgc2NhbGU6IFsyLCAyLjEsIDJdLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBzY2FsZToge1xuICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRldmVsb3BlclZhcmlhbnRzID0ge1xuICAgIHN0YW5kaW5nOiB7XG4gICAgICB4OiBcIi01MCVcIixcbiAgICAgIHJvdGF0ZTogMFxuICAgIH0sXG4gICAgZmFsbGVuOiB7XG4gICAgICB4OiBcIjEwMCVcIixcbiAgICAgIHJvdGF0ZTogOTAsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIHN0aWZmbmVzczogNjAsXG4gICAgICAgIGRhbXBpbmc6IDIwLFxuICAgICAgICByZXN0RGVsdGE6IDAuMDAxXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLWFtYmVyLTUwIHRvLWFtYmVyLTEwMCBwLTggcm91bmRlZC14bCBzaGFkb3ctbGcgbWluLWgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWFtYmVyLTkwMCBtYi0zXCI+Q2hhbGxlbmdlcyBpbiBMTE0gRGV2IEN5Y2xlPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1hbWJlci03MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8QWxlcnRDaXJjbGUgY2xhc3NOYW1lPVwidy02IGgtNiBtci0yXCIgLz5cbiAgICAgICAgICBUaGUgaW50ZXJzZWN0aW9uIG9mIGltbWF0dXJlIHRlY2hub2xvZ3kgYW5kIHVucmVhbGlzdGljIGV4cGVjdGF0aW9uc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1haW4gQ29udGVudCBBcmVhICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byByZWxhdGl2ZSBoLVs1MDBweF1cIj5cbiAgICAgICAgey8qIERldmVsb3BlciBGaWd1cmUgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgb3JpZ2luLWJvdHRvbSB6LTEwXCJcbiAgICAgICAgICB2YXJpYW50cz17ZGV2ZWxvcGVyVmFyaWFudHN9XG4gICAgICAgICAgaW5pdGlhbD1cInN0YW5kaW5nXCJcbiAgICAgICAgICBhbmltYXRlPXthbmltYXRpb25QaGFzZSA9PT0gJ2hpdHRpbmcnID8gJ2ZhbGxlbicgOiAnc3RhbmRpbmcnfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsyMDBweF0gaC1bMjAwcHhdXCI+XG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTUwIDM1IEw1MCA3MCBMMzAgMTAwIE01MCA3MCBMNzAgMTAwIE01MCA1MCBMMzAgNjUgTTUwIDUwIEw3MCA2NVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzczNDgyMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiMzBcIiByPVwiMTVcIiBmaWxsPVwiIzczNDgyMlwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0zMCA2NSBMNzAgNjUgTDc1IDc1IEwyNSA3NSBaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzY2NlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIHsvKiBGYWxsaW5nIEJsb2NrICovfVxuICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHRvcC0wIHctWzMwMHB4XSB6LTIwXCJcbiAgICAgICAgICB2YXJpYW50cz17YmxvY2tWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiZmFsbGluZ1wiXG4gICAgICAgICAgYW5pbWF0ZT17YW5pbWF0aW9uUGhhc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCBib3JkZXItMiBib3JkZXItYW1iZXItNDAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTQgdGV4dC1hbWJlci03MDBcIj5cbiAgICAgICAgICAgICAgPENsb3VkIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1sLTNcIj5JbmZsYXRlZCBFeHBlY3RhdGlvbnM8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTgwMFwiPlxuICAgICAgICAgICAgICBEaXNjcmVwYW5jaWVzIGJldHdlZW4gdGhlIGNhcGFiaWxpdGllcyBvZiBMTE1zIGFuZCB0aGUgZXhwZWN0YXRpb25zIHNldCBieSBzdGFrZWhvbGRlcnNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tOCByaWdodC04IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJnLWFtYmVyLTUwMCBob3ZlcjpiZy1hbWJlci02MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3NsaWRlM1wiIGNsYXNzTmFtZT1cImJnLWFtYmVyLTUwMCBob3ZlcjpiZy1hbWJlci02MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGUyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXJyb3dSaWdodCIsIkFycm93TGVmdCIsIkFsZXJ0Q2lyY2xlIiwiQ2xvdWQiLCJMaW5rIiwibW90aW9uIiwiU2xpZGUyIiwiYW5pbWF0aW9uUGhhc2UiLCJzZXRBbmltYXRpb25QaGFzZSIsInNlcXVlbmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYmxvY2tWYXJpYW50cyIsImZhbGxpbmciLCJ5IiwieCIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZHVyYXRpb24iLCJlYXNlIiwiaGl0dGluZyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJncm93aW5nIiwic2NhbGUiLCJ0aW1lcyIsInB1bHNpbmciLCJyZXBlYXQiLCJJbmZpbml0eSIsImRldmVsb3BlclZhcmlhbnRzIiwic3RhbmRpbmciLCJyb3RhdGUiLCJmYWxsZW4iLCJyZXN0RGVsdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwic3ZnIiwidmlld0JveCIsInBhdGgiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJmaWxsIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJoMyIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/slide2.tsx\n"));

/***/ })

});