"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slide10",{

/***/ "./pages/slide10.tsx":
/*!***************************!*\
  !*** ./pages/slide10.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Code2!=!lucide-react */ \"__barrel_optimize__?names=ArrowLeft,ArrowRight,Code2!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Slide10 = ()=>{\n    _s();\n    const [displayedText, setDisplayedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const [highlightValidator, setHighlightValidator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fullText = \"Adding Custom Validation\\nBy adding a validator to the answer field, we can try to catch the issue and correct it.\";\n    const codeStart = \"class QuestionAnswerNoEvil(BaseModel):\\n    question: str\\n    answer: Annotated[\\n        str,\\n        BeforeValidator(\";\n    const validatorSection = '            \\n  llm_validator(\\n                \"don\\'t say objectionable things\", \\n                client=client, \\n                allow_override=True\\n            )';\n    const codeEnd = \"        ),\\n    ]\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Slide10.useEffect\": ()=>{\n            let index = 0;\n            const timer = setInterval({\n                \"Slide10.useEffect.timer\": ()=>{\n                    if (index <= fullText.length) {\n                        setDisplayedText(fullText.slice(0, index));\n                        index++;\n                    } else {\n                        clearInterval(timer);\n                        // Start validator highlight after text completion\n                        setTimeout({\n                            \"Slide10.useEffect.timer\": ()=>{\n                                setHighlightValidator(true);\n                                setTimeout({\n                                    \"Slide10.useEffect.timer\": ()=>{\n                                        setHighlightValidator(false);\n                                    }\n                                }[\"Slide10.useEffect.timer\"], 3000);\n                            }\n                        }[\"Slide10.useEffect.timer\"], 2000);\n                    }\n                }\n            }[\"Slide10.useEffect.timer\"], 30);\n            return ({\n                \"Slide10.useEffect\": ()=>clearInterval(timer)\n            })[\"Slide10.useEffect\"];\n        }\n    }[\"Slide10.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[120px] flex items-center justify-center mb-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"max-w-4xl mx-auto text-center\",\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                        mode: \"wait\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                initial: {\n                                    opacity: 0.5\n                                },\n                                animate: {\n                                    opacity: 1\n                                },\n                                className: \"text-3xl font-medium text-indigo-950 whitespace-pre-line\",\n                                children: displayedText\n                            }, displayedText, false, {\n                                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            displayedText.length < fullText.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                className: \"inline-block w-1 h-8 bg-indigo-600 ml-1\",\n                                animate: {\n                                    opacity: [\n                                        1,\n                                        0\n                                    ]\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    repeat: Infinity\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"max-w-5xl mx-auto\",\n                initial: {\n                    opacity: 0,\n                    y: 20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    delay: 0.3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-indigo-900 text-white px-6 py-3 rounded-t-lg flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Code2, {\n                                    className: \"w-6 h-6 mr-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-mono text-2xl\",\n                                    children: \"Custom Validation Example\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            ref: scrollRef,\n                            className: \"bg-indigo-950 text-indigo-50 p-8 rounded-b-lg overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.code, {\n                                animate: controls,\n                                className: \"font-mono text-2xl leading-relaxed whitespace-pre block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: codeStart\n                                    }, void 0, false, {\n                                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                        animate: {\n                                            color: highlightValidator ? \"#4ade80\" : \"#E5E7EB\"\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: validatorSection\n                                    }, void 0, false, {\n                                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: codeEnd\n                                    }, void 0, false, {\n                                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-8 right-8 flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/slide9\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowLeft, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/slide11\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide10.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slide10, \"sFz+WJj0MNVLSCauwjb77fTAIDs=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Slide10;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide10);\nvar _c;\n$RefreshReg$(_c, \"Slide10\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBT2YsOERBQUNRO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3ZCLGtEQUFJQTt3QkFBQ3VDLE1BQUs7d0JBQVVoQixXQUFVO2tDQUM3Qiw0RUFBQzFCLHFHQUFTQTs0QkFBQzBCLFdBQVU7Ozs7Ozs7Ozs7O2tDQUV2Qiw4REFBQ3ZCLGtEQUFJQTt3QkFBQ3VDLE1BQUs7d0JBQVdoQixXQUFVO2tDQUM5Qiw0RUFBQ3pCLHNHQUFVQTs0QkFBQ3lCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDO0dBNUhNbkI7O1FBR2FELHVEQUFZQTs7O0tBSHpCQztBQThITixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2ZhdXN0b2FsYmVycy9Db2RpbmcvZGVsbF9wcmVzZW50YXRpb24vcGFnZXMvc2xpZGUxMC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFycm93TGVmdCwgQXJyb3dSaWdodCwgQ29kZTIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgU2xpZGUxMDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkaXNwbGF5ZWRUZXh0LCBzZXREaXNwbGF5ZWRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEhUTUxQcmVFbGVtZW50PihudWxsKTtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgW2hpZ2hsaWdodFZhbGlkYXRvciwgc2V0SGlnaGxpZ2h0VmFsaWRhdG9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGZ1bGxUZXh0ID0gXCJBZGRpbmcgQ3VzdG9tIFZhbGlkYXRpb25cXG5CeSBhZGRpbmcgYSB2YWxpZGF0b3IgdG8gdGhlIGFuc3dlciBmaWVsZCwgd2UgY2FuIHRyeSB0byBjYXRjaCB0aGUgaXNzdWUgYW5kIGNvcnJlY3QgaXQuXCI7XG5cbiAgY29uc3QgY29kZVN0YXJ0ID0gYGNsYXNzIFF1ZXN0aW9uQW5zd2VyTm9FdmlsKEJhc2VNb2RlbCk6XG4gICAgcXVlc3Rpb246IHN0clxuICAgIGFuc3dlcjogQW5ub3RhdGVkW1xuICAgICAgICBzdHIsXG4gICAgICAgIEJlZm9yZVZhbGlkYXRvcihgO1xuXG4gIGNvbnN0IHZhbGlkYXRvclNlY3Rpb24gPSBgICAgICAgICAgICAgXG4gIGxsbV92YWxpZGF0b3IoXG4gICAgICAgICAgICAgICAgXCJkb24ndCBzYXkgb2JqZWN0aW9uYWJsZSB0aGluZ3NcIiwgXG4gICAgICAgICAgICAgICAgY2xpZW50PWNsaWVudCwgXG4gICAgICAgICAgICAgICAgYWxsb3dfb3ZlcnJpZGU9VHJ1ZVxuICAgICAgICAgICAgKWA7XG5cbiAgY29uc3QgY29kZUVuZCA9IGAgICAgICAgICksXG4gICAgXWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGluZGV4IDw9IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgICBzZXREaXNwbGF5ZWRUZXh0KGZ1bGxUZXh0LnNsaWNlKDAsIGluZGV4KSk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgLy8gU3RhcnQgdmFsaWRhdG9yIGhpZ2hsaWdodCBhZnRlciB0ZXh0IGNvbXBsZXRpb25cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0SGlnaGxpZ2h0VmFsaWRhdG9yKHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0VmFsaWRhdG9yKGZhbHNlKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgfSwgMzApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20taW5kaWdvLTUwIHRvLWluZGlnby0xMDAgcC04IHJvdW5kZWQteGwgc2hhZG93LWxnIG1pbi1oLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cbiAgICAgIHsvKiBTdHJlYW1pbmcgVGV4dCBDb250YWluZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzEyMHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0xNlwiPlxuICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41IH19XG4gICAgICAgID5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9J3dhaXQnPlxuICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgIGtleT17ZGlzcGxheWVkVGV4dH1cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLjUgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTk1MCB3aGl0ZXNwYWNlLXByZS1saW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rpc3BsYXllZFRleHR9XG4gICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAge2Rpc3BsYXllZFRleHQubGVuZ3RoIDwgZnVsbFRleHQubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMSBoLTggYmctaW5kaWdvLTYwMCBtbC0xXCJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IFsxLCAwXSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgcmVwZWF0OiBJbmZpbml0eSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDb2RlIEJsb2NrIENvbnRhaW5lciAqL31cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4zIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICB7LyogQ29kZSBIZWFkZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQtdC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPENvZGUyIGNsYXNzTmFtZT1cInctNiBoLTYgbXItM1wiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC0yeGxcIj5DdXN0b20gVmFsaWRhdGlvbiBFeGFtcGxlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBDb2RlIENvbnRlbnQgKi99XG4gICAgICAgICAgPHByZSBcbiAgICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTk1MCB0ZXh0LWluZGlnby01MCBwLTggcm91bmRlZC1iLWxnIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5jb2RlIFxuICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtMnhsIGxlYWRpbmctcmVsYXhlZCB3aGl0ZXNwYWNlLXByZSBibG9ja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntjb2RlU3RhcnR9PC9zcGFuPlxuICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogaGlnaGxpZ2h0VmFsaWRhdG9yID8gXCIjNGFkZTgwXCIgOiBcIiNFNUU3RUJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dmFsaWRhdG9yU2VjdGlvbn1cbiAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2NvZGVFbmR9PC9zcGFuPlxuICAgICAgICAgICAgPC9tb3Rpb24uY29kZT5cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tOCByaWdodC04IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3NsaWRlOVwiIGNsYXNzTmFtZT1cImJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICA8QXJyb3dMZWZ0IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2xpZGUxMVwiIGNsYXNzTmFtZT1cImJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZTEwOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsIkNvZGUyIiwiTGluayIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZUFuaW1hdGlvbiIsIlNsaWRlMTAiLCJkaXNwbGF5ZWRUZXh0Iiwic2V0RGlzcGxheWVkVGV4dCIsInNjcm9sbFJlZiIsImNvbnRyb2xzIiwiaGlnaGxpZ2h0VmFsaWRhdG9yIiwic2V0SGlnaGxpZ2h0VmFsaWRhdG9yIiwiZnVsbFRleHQiLCJjb2RlU3RhcnQiLCJ2YWxpZGF0b3JTZWN0aW9uIiwiY29kZUVuZCIsImluZGV4IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNsaWNlIiwiY2xlYXJJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJtb2RlIiwic3BhbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJ5IiwicHJlIiwicmVmIiwiY29kZSIsImNvbG9yIiwiaHJlZiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/slide10.tsx\n"));

/***/ })

});