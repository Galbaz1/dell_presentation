"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slide12",{

/***/ "./pages/slide12.tsx":
/*!***************************!*\
  !*** ./pages/slide12.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Code2!=!lucide-react */ \"__barrel_optimize__?names=ArrowLeft,ArrowRight,Code2!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Slide12 = ()=>{\n    _s();\n    const [displayedText, setDisplayedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [showHighlight, setShowHighlight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMaxRetriesGreen, setIsMaxRetriesGreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const fullText = \"Retrying with Corrections:\\nBy adding the max_retries parameter, we can retry the request with corrections and use the error message to correct the output.\";\n    const codeString = 'qa: QuestionAnswerNoEvil = client.chat.completions.create(\\n    model=\"gpt-4o-mini\",\\n    response_model=QuestionAnswerNoEvil,'.concat(showHighlight ? '\\n    max_retries=3,' : '', '\\n    messages=[\\n        {\\n            \"role\": \"system\",\\n            \"content\": \"You are a system that answers questions based on the context. answer exactly what the question asks using the context.\",\\n        },\\n    ],\\n)');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Slide12.useEffect\": ()=>{\n            let index = 0;\n            const timer = setInterval({\n                \"Slide12.useEffect.timer\": ()=>{\n                    if (index <= fullText.length) {\n                        setDisplayedText(fullText.slice(0, index));\n                        index++;\n                    } else {\n                        clearInterval(timer);\n                        // Show highlighted line after text finishes streaming\n                        setTimeout({\n                            \"Slide12.useEffect.timer\": ()=>{\n                                setShowHighlight(true);\n                                // Start color transition timer\n                                setTimeout({\n                                    \"Slide12.useEffect.timer\": ()=>{\n                                        setIsMaxRetriesGreen(false);\n                                    }\n                                }[\"Slide12.useEffect.timer\"], 3000);\n                            }\n                        }[\"Slide12.useEffect.timer\"], 500);\n                    }\n                }\n            }[\"Slide12.useEffect.timer\"], 30);\n            return ({\n                \"Slide12.useEffect\": ()=>clearInterval(timer)\n            })[\"Slide12.useEffect\"];\n        }\n    }[\"Slide12.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[120px] flex items-center justify-center mb-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"max-w-4xl mx-auto text-center\",\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                        mode: \"wait\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                initial: {\n                                    opacity: 0.5\n                                },\n                                animate: {\n                                    opacity: 1\n                                },\n                                className: \"text-3xl font-medium text-indigo-950 whitespace-pre-line\",\n                                children: displayedText\n                            }, displayedText, false, {\n                                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            displayedText.length < fullText.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                className: \"inline-block w-1 h-8 bg-indigo-600 ml-1\",\n                                animate: {\n                                    opacity: [\n                                        1,\n                                        0\n                                    ]\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    repeat: Infinity\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"max-w-5xl mx-auto\",\n                initial: {\n                    opacity: 0,\n                    y: 20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    delay: 0.3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-indigo-900 text-white px-6 py-3 rounded-t-lg flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Code2, {\n                                    className: \"w-6 h-6 mr-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-mono text-2xl\",\n                                    children: \"Validation Implementation\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            ref: scrollRef,\n                            className: \"bg-indigo-950 text-indigo-50 p-8 rounded-b-lg overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.code, {\n                                animate: controls,\n                                className: \"font-mono text-2xl leading-relaxed whitespace-pre-wrap block\",\n                                dangerouslySetInnerHTML: {\n                                    __html: showHighlight ? codeString.replace('max_retries=3,', '<span class=\"transition-colors duration-500 '.concat(isMaxRetriesGreen ? 'text-green-400' : 'text-white', ' font-bold\">max_retries=3,</span>')) : codeString\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-8 right-8 flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/slide11\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowLeft, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/slide13\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide12.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slide12, \"RnNxhMEYeKhtcUDTSbGZn4YAXYM=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Slide12;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide12);\nvar _c;\n$RefreshReg$(_c, \"Slide12\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN2QixrREFBSUE7d0JBQUN5QyxNQUFLO3dCQUFXbEIsV0FBVTtrQ0FDOUIsNEVBQUMxQixxR0FBU0E7NEJBQUMwQixXQUFVOzs7Ozs7Ozs7OztrQ0FFdkIsOERBQUN2QixrREFBSUE7d0JBQUN5QyxNQUFLO3dCQUFXbEIsV0FBVTtrQ0FDOUIsNEVBQUN6QixzR0FBVUE7NEJBQUN5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztHQXhITW5COztRQUthRCx1REFBWUE7OztLQUx6QkM7QUEwSE4saUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXVzdG8vY29kaW5nXzIwMjQvZGVsbF9wcmVzZW50YXRpb24vcGFnZXMvc2xpZGUxMi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFycm93TGVmdCwgQXJyb3dSaWdodCwgQ29kZTIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgU2xpZGUxMjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkaXNwbGF5ZWRUZXh0LCBzZXREaXNwbGF5ZWRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dIaWdobGlnaHQsIHNldFNob3dIaWdobGlnaHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNYXhSZXRyaWVzR3JlZW4sIHNldElzTWF4UmV0cmllc0dyZWVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8SFRNTFByZUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuICBcbiAgY29uc3QgZnVsbFRleHQgPSBcIlJldHJ5aW5nIHdpdGggQ29ycmVjdGlvbnM6XFxuQnkgYWRkaW5nIHRoZSBtYXhfcmV0cmllcyBwYXJhbWV0ZXIsIHdlIGNhbiByZXRyeSB0aGUgcmVxdWVzdCB3aXRoIGNvcnJlY3Rpb25zIGFuZCB1c2UgdGhlIGVycm9yIG1lc3NhZ2UgdG8gY29ycmVjdCB0aGUgb3V0cHV0LlwiO1xuXG4gIGNvbnN0IGNvZGVTdHJpbmcgPSBgcWE6IFF1ZXN0aW9uQW5zd2VyTm9FdmlsID0gY2xpZW50LmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKFxuICAgIG1vZGVsPVwiZ3B0LTRvLW1pbmlcIixcbiAgICByZXNwb25zZV9tb2RlbD1RdWVzdGlvbkFuc3dlck5vRXZpbCwke3Nob3dIaWdobGlnaHQgPyAnXFxuICAgIG1heF9yZXRyaWVzPTMsJyA6ICcnfVxuICAgIG1lc3NhZ2VzPVtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJyb2xlXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJZb3UgYXJlIGEgc3lzdGVtIHRoYXQgYW5zd2VycyBxdWVzdGlvbnMgYmFzZWQgb24gdGhlIGNvbnRleHQuIGFuc3dlciBleGFjdGx5IHdoYXQgdGhlIHF1ZXN0aW9uIGFza3MgdXNpbmcgdGhlIGNvbnRleHQuXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbilgO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChpbmRleCA8PSBmdWxsVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgc2V0RGlzcGxheWVkVGV4dChmdWxsVGV4dC5zbGljZSgwLCBpbmRleCkpO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIC8vIFNob3cgaGlnaGxpZ2h0ZWQgbGluZSBhZnRlciB0ZXh0IGZpbmlzaGVzIHN0cmVhbWluZ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRTaG93SGlnaGxpZ2h0KHRydWUpO1xuICAgICAgICAgIC8vIFN0YXJ0IGNvbG9yIHRyYW5zaXRpb24gdGltZXJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldElzTWF4UmV0cmllc0dyZWVuKGZhbHNlKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9LCAzMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpZ28tNTAgdG8taW5kaWdvLTEwMCBwLTggcm91bmRlZC14bCBzaGFkb3ctbGcgbWluLWgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgey8qIFN0cmVhbWluZyBUZXh0IENvbnRhaW5lciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTIwcHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTE2XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT0nd2FpdCc+XG4gICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAga2V5PXtkaXNwbGF5ZWRUZXh0fVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAuNSB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tOTUwIHdoaXRlc3BhY2UtcHJlLWxpbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGlzcGxheWVkVGV4dH1cbiAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICB7ZGlzcGxheWVkVGV4dC5sZW5ndGggPCBmdWxsVGV4dC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0xIGgtOCBiZy1pbmRpZ28tNjAwIG1sLTFcIlxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogWzEsIDBdIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCByZXBlYXQ6IEluZmluaXR5IH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvZGUgQmxvY2sgQ29udGFpbmVyICovfVxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG9cIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjMgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIHsvKiBDb2RlIEhlYWRlciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgdGV4dC13aGl0ZSBweC02IHB5LTMgcm91bmRlZC10LWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8Q29kZTIgY2xhc3NOYW1lPVwidy02IGgtNiBtci0zXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LTJ4bFwiPlZhbGlkYXRpb24gSW1wbGVtZW50YXRpb248L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIENvZGUgQ29udGVudCAqL31cbiAgICAgICAgICA8cHJlIFxuICAgICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTUwIHRleHQtaW5kaWdvLTUwIHAtOCByb3VuZGVkLWItbGcgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmNvZGUgXG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC0yeGwgbGVhZGluZy1yZWxheGVkIHdoaXRlc3BhY2UtcHJlLXdyYXAgYmxvY2tcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogc2hvd0hpZ2hsaWdodCBcbiAgICAgICAgICAgICAgICAgID8gY29kZVN0cmluZy5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICdtYXhfcmV0cmllcz0zLCcsIFxuICAgICAgICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXhSZXRyaWVzR3JlZW4gPyAndGV4dC1ncmVlbi00MDAnIDogJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgfSBmb250LWJvbGRcIj5tYXhfcmV0cmllcz0zLDwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogY29kZVN0cmluZ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tOCByaWdodC04IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3NsaWRlMTFcIiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNTAwIGhvdmVyOmJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3NsaWRlMTNcIiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNTAwIGhvdmVyOmJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGUxMjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJDb2RlMiIsIkxpbmsiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ1c2VBbmltYXRpb24iLCJTbGlkZTEyIiwiZGlzcGxheWVkVGV4dCIsInNldERpc3BsYXllZFRleHQiLCJzaG93SGlnaGxpZ2h0Iiwic2V0U2hvd0hpZ2hsaWdodCIsImlzTWF4UmV0cmllc0dyZWVuIiwic2V0SXNNYXhSZXRyaWVzR3JlZW4iLCJzY3JvbGxSZWYiLCJjb250cm9scyIsImZ1bGxUZXh0IiwiY29kZVN0cmluZyIsImluZGV4IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNsaWNlIiwiY2xlYXJJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJtb2RlIiwic3BhbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJ5IiwicHJlIiwicmVmIiwiY29kZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVwbGFjZSIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/slide12.tsx\n"));

/***/ })

});