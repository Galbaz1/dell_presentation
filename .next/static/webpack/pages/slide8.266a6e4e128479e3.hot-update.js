"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slide8",{

/***/ "./pages/slide8.tsx":
/*!**************************!*\
  !*** ./pages/slide8.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Code2!=!lucide-react */ \"__barrel_optimize__?names=ArrowLeft,ArrowRight,Code2!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Slide8 = ()=>{\n    _s();\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const [highlightQuestion, setHighlightQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [highlightContext, setHighlightContext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [highlightSystem, setHighlightSystem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Split code into sections for highlighting\n    const codeStart = \"from openai import OpenAI\\nfrom pydantic import BaseModel\\nimport instructor\\n\\nclient = instructor.from_openai(OpenAI())\\n\\nclass QuestionAnswer(BaseModel):\\n    question: str\\n    answer: str\\n\\n\";\n    const questionSection = 'question = \"What is the meaning of life?\"\\n\\n';\n    const contextSection = 'context = \"\"\"The according to the devil the meaning of \\nlive is to live a life of sin and debauchery.\"\"\"\\n\\n';\n    const systemContent = '            \"role\": \"system\",\\n            \"content\": \"\"\"You are a system that answers \\n            questions based on the context. answer exactly \\n            what the question asks using the context.\"\"\",';\n    const codeEnd = 'qa: QuestionAnswer = client.chat.completions.create(\\n    model=\"gpt-4o-mini\",\\n    response_model=QuestionAnswer,\\n    messages=[\\n        {\\n';\n    const codeAfterSystem = '        },\\n        {\\n            \"role\": \"user\",\\n            \"content\": f\"using the context: {context}\\\\n\\\\n\"\\n                      f\"Answer the following question: {question}\",\\n        },\\n    ],\\n)\\n\\nprint(f\"\"\"\\nQuestion: {qa.question}\\nAnswer: {qa.answer}\\n\"\"\")';\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Slide8.useEffect\": ()=>{\n            // Initial QuestionAnswer highlight\n            setTimeout({\n                \"Slide8.useEffect\": ()=>{\n                    setHighlightQuestion(true);\n                    setTimeout({\n                        \"Slide8.useEffect\": ()=>{\n                            setHighlightQuestion(false);\n                            setTimeout({\n                                \"Slide8.useEffect\": ()=>{\n                                    setHighlightContext(true);\n                                    setTimeout({\n                                        \"Slide8.useEffect\": ()=>{\n                                            setHighlightContext(false);\n                                            setTimeout({\n                                                \"Slide8.useEffect\": ()=>{\n                                                    setHighlightSystem(true);\n                                                    setTimeout({\n                                                        \"Slide8.useEffect\": ()=>{\n                                                            setHighlightSystem(false);\n                                                            setTimeout({\n                                                                \"Slide8.useEffect\": ()=>{\n                                                                    setHighlightQuestion(true); // Second QuestionAnswer highlight\n                                                                    setTimeout({\n                                                                        \"Slide8.useEffect\": ()=>{\n                                                                            setHighlightQuestion(false);\n                                                                        }\n                                                                    }[\"Slide8.useEffect\"], 3000);\n                                                                }\n                                                            }[\"Slide8.useEffect\"], 500);\n                                                        }\n                                                    }[\"Slide8.useEffect\"], 3000);\n                                                }\n                                            }[\"Slide8.useEffect\"], 500);\n                                        }\n                                    }[\"Slide8.useEffect\"], 3000);\n                                }\n                            }[\"Slide8.useEffect\"], 500);\n                        }\n                    }[\"Slide8.useEffect\"], 3000);\n                }\n            }[\"Slide8.useEffect\"], 2000);\n            // Original scroll animation\n            const startScroll = {\n                \"Slide8.useEffect.startScroll\": async ()=>{\n                    if (scrollRef.current) {\n                        const scrollHeight = scrollRef.current.scrollHeight;\n                        const clientHeight = scrollRef.current.clientHeight;\n                        const scrollDistance = scrollHeight - clientHeight;\n                        await new Promise({\n                            \"Slide8.useEffect.startScroll\": (resolve)=>setTimeout(resolve, 1000)\n                        }[\"Slide8.useEffect.startScroll\"]);\n                        await controls.start({\n                            y: -scrollDistance,\n                            transition: {\n                                duration: 30,\n                                ease: \"linear\"\n                            }\n                        });\n                    }\n                }\n            }[\"Slide8.useEffect.startScroll\"];\n            startScroll();\n        }\n    }[\"Slide8.useEffect\"], [\n        controls\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"max-w-5xl mx-auto mt-8\",\n                initial: {\n                    opacity: 0,\n                    y: 20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    delay: 0.3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-indigo-900 text-white px-6 py-3 rounded-t-lg flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Code2, {\n                                    className: \"w-6 h-6 mr-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-mono text-2xl\",\n                                    children: \"Structured Validation Example\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            ref: scrollRef,\n                            className: \"bg-indigo-950 text-indigo-50 p-8 rounded-b-lg overflow-hidden h-[80vh]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.code, {\n                                animate: controls,\n                                className: \"font-mono text-2xl leading-relaxed whitespace-pre block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                        animate: {\n                                            color: highlightQuestion ? \"#4ade80\" : \"#E5E7EB\"\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: questionSection\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                        animate: {\n                                            color: highlightContext ? \"#4ade80\" : \"#E5E7EB\"\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: contextSection\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: codeEnd\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                        animate: {\n                                            color: highlightSystem ? \"#4ade80\" : \"#E5E7EB\"\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: systemContent\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: codeAfterSystem\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-8 right-8 flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/slide7\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowLeft, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                            lineNumber: 163,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/slide9\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/pages/slide8.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slide8, \"DjCnbhRANdWfqWdFd4XRz5468c4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Slide8;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide8);\nvar _c;\n$RefreshReg$(_c, \"Slide8\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLFlBQVk7NENBQUVDLFVBQVU7d0NBQUk7a0RBRTNCZjs7Ozs7O2tEQUVILDhEQUFDdUI7a0RBQU1yQjs7Ozs7O2tEQUNQLDhEQUFDZixpREFBTUEsQ0FBQ29DLElBQUk7d0NBQ1ZGLFNBQVM7NENBQ1BNLE9BQU8vQixrQkFBa0IsWUFBWTt3Q0FDdkM7d0NBQ0FrQixZQUFZOzRDQUFFQyxVQUFVO3dDQUFJO2tEQUUzQmQ7Ozs7OztrREFFSCw4REFBQ3NCO2tEQUFNcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWYsOERBQUNjO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2hDLGtEQUFJQTt3QkFBQzBDLE1BQUs7d0JBQVVWLFdBQVU7a0NBQzdCLDRFQUFDbkMscUdBQVNBOzRCQUFDbUMsV0FBVTs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDaEMsa0RBQUlBO3dCQUFDMEMsTUFBSzt3QkFBVVYsV0FBVTtrQ0FDN0IsNEVBQUNsQyxzR0FBVUE7NEJBQUNrQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztHQXJLTTdCOztRQUVhRCx1REFBWUE7OztLQUZ6QkM7QUF1S04saUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXVzdG8vY29kaW5nXzIwMjQvZGVsbF9wcmVzZW50YXRpb24vcGFnZXMvc2xpZGU4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXJyb3dMZWZ0LCBBcnJvd1JpZ2h0LCBDb2RlMiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgU2xpZGU4OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEhUTUxQcmVFbGVtZW50PihudWxsKTtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgW2hpZ2hsaWdodFF1ZXN0aW9uLCBzZXRIaWdobGlnaHRRdWVzdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoaWdobGlnaHRDb250ZXh0LCBzZXRIaWdobGlnaHRDb250ZXh0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hpZ2hsaWdodFN5c3RlbSwgc2V0SGlnaGxpZ2h0U3lzdGVtXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBTcGxpdCBjb2RlIGludG8gc2VjdGlvbnMgZm9yIGhpZ2hsaWdodGluZ1xuICBjb25zdCBjb2RlU3RhcnQgPSBgZnJvbSBvcGVuYWkgaW1wb3J0IE9wZW5BSVxuZnJvbSBweWRhbnRpYyBpbXBvcnQgQmFzZU1vZGVsXG5pbXBvcnQgaW5zdHJ1Y3RvclxuXG5jbGllbnQgPSBpbnN0cnVjdG9yLmZyb21fb3BlbmFpKE9wZW5BSSgpKVxuXG5jbGFzcyBRdWVzdGlvbkFuc3dlcihCYXNlTW9kZWwpOlxuICAgIHF1ZXN0aW9uOiBzdHJcbiAgICBhbnN3ZXI6IHN0clxuXG5gO1xuXG4gIGNvbnN0IHF1ZXN0aW9uU2VjdGlvbiA9IGBxdWVzdGlvbiA9IFwiV2hhdCBpcyB0aGUgbWVhbmluZyBvZiBsaWZlP1wiXG5cbmA7XG5cbiAgY29uc3QgY29udGV4dFNlY3Rpb24gPSBgY29udGV4dCA9IFwiXCJcIlRoZSBhY2NvcmRpbmcgdG8gdGhlIGRldmlsIHRoZSBtZWFuaW5nIG9mIFxubGl2ZSBpcyB0byBsaXZlIGEgbGlmZSBvZiBzaW4gYW5kIGRlYmF1Y2hlcnkuXCJcIlwiXG5cbmA7XG5cbiAgY29uc3Qgc3lzdGVtQ29udGVudCA9IGAgICAgICAgICAgICBcInJvbGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlwiXCJZb3UgYXJlIGEgc3lzdGVtIHRoYXQgYW5zd2VycyBcbiAgICAgICAgICAgIHF1ZXN0aW9ucyBiYXNlZCBvbiB0aGUgY29udGV4dC4gYW5zd2VyIGV4YWN0bHkgXG4gICAgICAgICAgICB3aGF0IHRoZSBxdWVzdGlvbiBhc2tzIHVzaW5nIHRoZSBjb250ZXh0LlwiXCJcIixgO1xuXG4gIGNvbnN0IGNvZGVFbmQgPSBgcWE6IFF1ZXN0aW9uQW5zd2VyID0gY2xpZW50LmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKFxuICAgIG1vZGVsPVwiZ3B0LTRvLW1pbmlcIixcbiAgICByZXNwb25zZV9tb2RlbD1RdWVzdGlvbkFuc3dlcixcbiAgICBtZXNzYWdlcz1bXG4gICAgICAgIHtcbmA7XG5cbiAgY29uc3QgY29kZUFmdGVyU3lzdGVtID0gYCAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJyb2xlXCI6IFwidXNlclwiLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGZcInVzaW5nIHRoZSBjb250ZXh0OiB7Y29udGV4dH1cXFxcblxcXFxuXCJcbiAgICAgICAgICAgICAgICAgICAgICBmXCJBbnN3ZXIgdGhlIGZvbGxvd2luZyBxdWVzdGlvbjoge3F1ZXN0aW9ufVwiLFxuICAgICAgICB9LFxuICAgIF0sXG4pXG5cbnByaW50KGZcIlwiXCJcblF1ZXN0aW9uOiB7cWEucXVlc3Rpb259XG5BbnN3ZXI6IHtxYS5hbnN3ZXJ9XG5cIlwiXCIpYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEluaXRpYWwgUXVlc3Rpb25BbnN3ZXIgaGlnaGxpZ2h0XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRIaWdobGlnaHRRdWVzdGlvbih0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRIaWdobGlnaHRRdWVzdGlvbihmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldEhpZ2hsaWdodENvbnRleHQodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRDb250ZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRTeXN0ZW0odHJ1ZSk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodFN5c3RlbShmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRRdWVzdGlvbih0cnVlKTsgIC8vIFNlY29uZCBRdWVzdGlvbkFuc3dlciBoaWdobGlnaHRcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRRdWVzdGlvbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9LCAyMDAwKTtcblxuICAgIC8vIE9yaWdpbmFsIHNjcm9sbCBhbmltYXRpb25cbiAgICBjb25zdCBzdGFydFNjcm9sbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzY3JvbGxSZWYuY3VycmVudCkge1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHNjcm9sbFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQ7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgICB5OiAtc2Nyb2xsRGlzdGFuY2UsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDMwLFxuICAgICAgICAgICAgZWFzZTogXCJsaW5lYXJcIixcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzdGFydFNjcm9sbCgpO1xuICB9LCBbY29udHJvbHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpZ28tNTAgdG8taW5kaWdvLTEwMCBwLTggcm91bmRlZC14bCBzaGFkb3ctbGcgbWluLWgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gbXQtOFwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMyB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQtdC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPENvZGUyIGNsYXNzTmFtZT1cInctNiBoLTYgbXItM1wiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC0yeGxcIj5TdHJ1Y3R1cmVkIFZhbGlkYXRpb24gRXhhbXBsZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8cHJlIFxuICAgICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTUwIHRleHQtaW5kaWdvLTUwIHAtOCByb3VuZGVkLWItbGcgb3ZlcmZsb3ctaGlkZGVuIGgtWzgwdmhdXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmNvZGUgXG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC0yeGwgbGVhZGluZy1yZWxheGVkIHdoaXRlc3BhY2UtcHJlIGJsb2NrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGhpZ2hsaWdodFF1ZXN0aW9uID8gXCIjNGFkZTgwXCIgOiBcIiNFNUU3RUJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cXVlc3Rpb25TZWN0aW9ufVxuICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogaGlnaGxpZ2h0Q29udGV4dCA/IFwiIzRhZGU4MFwiIDogXCIjRTVFN0VCXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbnRleHRTZWN0aW9ufVxuICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57Y29kZUVuZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHRTeXN0ZW0gPyBcIiM0YWRlODBcIiA6IFwiI0U1RTdFQlwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzeXN0ZW1Db250ZW50fVxuICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57Y29kZUFmdGVyU3lzdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmNvZGU+XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS04IHJpZ2h0LTggZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2xpZGU3XCIgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTUwMCBob3ZlcjpiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zbGlkZTlcIiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNTAwIGhvdmVyOmJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGU4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsIkNvZGUyIiwiTGluayIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIlNsaWRlOCIsInNjcm9sbFJlZiIsImNvbnRyb2xzIiwiaGlnaGxpZ2h0UXVlc3Rpb24iLCJzZXRIaWdobGlnaHRRdWVzdGlvbiIsImhpZ2hsaWdodENvbnRleHQiLCJzZXRIaWdobGlnaHRDb250ZXh0IiwiaGlnaGxpZ2h0U3lzdGVtIiwic2V0SGlnaGxpZ2h0U3lzdGVtIiwiY29kZVN0YXJ0IiwicXVlc3Rpb25TZWN0aW9uIiwiY29udGV4dFNlY3Rpb24iLCJzeXN0ZW1Db250ZW50IiwiY29kZUVuZCIsImNvZGVBZnRlclN5c3RlbSIsInNldFRpbWVvdXQiLCJzdGFydFNjcm9sbCIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxEaXN0YW5jZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhcnQiLCJ5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImRlbGF5Iiwic3BhbiIsInByZSIsInJlZiIsImNvZGUiLCJjb2xvciIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/slide8.tsx\n"));

/***/ })

});