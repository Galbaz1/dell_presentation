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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,Code2!=!lucide-react */ \"__barrel_optimize__?names=ArrowLeft,Code2!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\nconst Slide8 = ()=>{\n    const codeString = 'from openai import OpenAI\\nfrom pydantic import BaseModel\\nimport instructor\\n\\n# Apply the patch to the OpenAI client\\n# enables response_model keyword\\nclient = instructor.from_openai(OpenAI())\\n\\n\\nclass QuestionAnswer(BaseModel):\\n    question: str\\n    answer: str\\n\\n\\nquestion = \"What is the meaning of life?\"\\ncontext = \"\"\"The according to the devil the meaning of \\nlive is to live a life of sin and debauchery.\"\"\"\\n\\n# Create a structured response using the model\\nqa: QuestionAnswer = client.chat.completions.create(\\n    model=\"gpt-4o-mini\",\\n    response_model=QuestionAnswer,\\n    messages=[\\n        {\\n            \"role\": \"system\",\\n            \"content\": \"\"\"You are a system that answers \\n            questions based on the context. answer exactly \\n            what the question asks using the context.\"\"\",\\n        },\\n        {\\n            \"role\": \"user\",\\n            \"content\": f\"using the context: {context}\\\\n\\\\n\"\\n                      f\"Answer the following question: {question}\",\\n        },\\n    ],\\n)\\n\\n# Print the structured response\\nprint(f\"\"\"\\nQuestion: {qa.question}\\nAnswer: {qa.answer}\\n\"\"\")';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"max-w-6xl mx-auto mt-8\",\n                initial: {\n                    opacity: 0,\n                    y: 20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    delay: 0.3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-indigo-900 text-white px-6 py-3 rounded-t-lg flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Code2, {\n                                    className: \"w-6 h-6 mr-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-mono text-xl\",\n                                    children: \"Structured Validation Example\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            className: \"bg-indigo-950 text-indigo-50 p-8 rounded-b-lg overflow-x-auto h-[80vh]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"font-mono text-xl leading-relaxed whitespace-pre\",\n                                children: codeString\n                            }, void 0, false, {\n                                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-8 right-8 flex items-center space-x-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/slide7\",\n                    className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_Code2_lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowLeft, {\n                        className: \"w-6 h-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide8.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Slide8;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide8);\nvar _c;\n$RefreshReg$(_c, \"Slide8\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zbGlkZTgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0I7QUFDbkI7QUFDVTtBQUV2QyxNQUFNSyxTQUFtQjtJQUN2QixNQUFNQyxhQUFjO0lBMkNwQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNKLGlEQUFNQSxDQUFDRyxHQUFHO2dCQUNUQyxXQUFVO2dCQUNWQyxTQUFTO29CQUFFQyxTQUFTO29CQUFHQyxHQUFHO2dCQUFHO2dCQUM3QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLFlBQVk7b0JBQUVDLE9BQU87Z0JBQUk7MEJBRXpCLDRFQUFDUDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ04sc0ZBQUtBO29DQUFDTSxXQUFVOzs7Ozs7OENBQ2pCLDhEQUFDTztvQ0FBS1AsV0FBVTs4Q0FBb0I7Ozs7Ozs7Ozs7OztzQ0FJdEMsOERBQUNROzRCQUFJUixXQUFVO3NDQUNiLDRFQUFDUztnQ0FBS1QsV0FBVTswQ0FDYkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1QsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTCxrREFBSUE7b0JBQUNlLE1BQUs7b0JBQVVWLFdBQVU7OEJBQzdCLDRFQUFDUCwwRkFBU0E7d0JBQUNPLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7S0E3RU1IO0FBK0VOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZmF1c3RvYWxiZXJzL0NvZGluZy9kZWxsX3ByZXNlbnRhdGlvbi9wYWdlcy9zbGlkZTgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcnJvd0xlZnQsIENvZGUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgU2xpZGU4OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY29kZVN0cmluZyA9IGBmcm9tIG9wZW5haSBpbXBvcnQgT3BlbkFJXG5mcm9tIHB5ZGFudGljIGltcG9ydCBCYXNlTW9kZWxcbmltcG9ydCBpbnN0cnVjdG9yXG5cbiMgQXBwbHkgdGhlIHBhdGNoIHRvIHRoZSBPcGVuQUkgY2xpZW50XG4jIGVuYWJsZXMgcmVzcG9uc2VfbW9kZWwga2V5d29yZFxuY2xpZW50ID0gaW5zdHJ1Y3Rvci5mcm9tX29wZW5haShPcGVuQUkoKSlcblxuXG5jbGFzcyBRdWVzdGlvbkFuc3dlcihCYXNlTW9kZWwpOlxuICAgIHF1ZXN0aW9uOiBzdHJcbiAgICBhbnN3ZXI6IHN0clxuXG5cbnF1ZXN0aW9uID0gXCJXaGF0IGlzIHRoZSBtZWFuaW5nIG9mIGxpZmU/XCJcbmNvbnRleHQgPSBcIlwiXCJUaGUgYWNjb3JkaW5nIHRvIHRoZSBkZXZpbCB0aGUgbWVhbmluZyBvZiBcbmxpdmUgaXMgdG8gbGl2ZSBhIGxpZmUgb2Ygc2luIGFuZCBkZWJhdWNoZXJ5LlwiXCJcIlxuXG4jIENyZWF0ZSBhIHN0cnVjdHVyZWQgcmVzcG9uc2UgdXNpbmcgdGhlIG1vZGVsXG5xYTogUXVlc3Rpb25BbnN3ZXIgPSBjbGllbnQuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoXG4gICAgbW9kZWw9XCJncHQtNG8tbWluaVwiLFxuICAgIHJlc3BvbnNlX21vZGVsPVF1ZXN0aW9uQW5zd2VyLFxuICAgIG1lc3NhZ2VzPVtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJyb2xlXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJcIlwiWW91IGFyZSBhIHN5c3RlbSB0aGF0IGFuc3dlcnMgXG4gICAgICAgICAgICBxdWVzdGlvbnMgYmFzZWQgb24gdGhlIGNvbnRleHQuIGFuc3dlciBleGFjdGx5IFxuICAgICAgICAgICAgd2hhdCB0aGUgcXVlc3Rpb24gYXNrcyB1c2luZyB0aGUgY29udGV4dC5cIlwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicm9sZVwiOiBcInVzZXJcIixcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBmXCJ1c2luZyB0aGUgY29udGV4dDoge2NvbnRleHR9XFxcXG5cXFxcblwiXG4gICAgICAgICAgICAgICAgICAgICAgZlwiQW5zd2VyIHRoZSBmb2xsb3dpbmcgcXVlc3Rpb246IHtxdWVzdGlvbn1cIixcbiAgICAgICAgfSxcbiAgICBdLFxuKVxuXG4jIFByaW50IHRoZSBzdHJ1Y3R1cmVkIHJlc3BvbnNlXG5wcmludChmXCJcIlwiXG5RdWVzdGlvbjoge3FhLnF1ZXN0aW9ufVxuQW5zd2VyOiB7cWEuYW5zd2VyfVxuXCJcIlwiKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20taW5kaWdvLTUwIHRvLWluZGlnby0xMDAgcC04IHJvdW5kZWQteGwgc2hhZG93LWxnIG1pbi1oLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cbiAgICAgIHsvKiBDb2RlIEJsb2NrIENvbnRhaW5lciAqL31cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIG10LThcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjMgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIHsvKiBDb2RlIEhlYWRlciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgdGV4dC13aGl0ZSBweC02IHB5LTMgcm91bmRlZC10LWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8Q29kZTIgY2xhc3NOYW1lPVwidy02IGgtNiBtci0zXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhsXCI+U3RydWN0dXJlZCBWYWxpZGF0aW9uIEV4YW1wbGU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIENvZGUgQ29udGVudCAqL31cbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImJnLWluZGlnby05NTAgdGV4dC1pbmRpZ28tNTAgcC04IHJvdW5kZWQtYi1sZyBvdmVyZmxvdy14LWF1dG8gaC1bODB2aF1cIj5cbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCB3aGl0ZXNwYWNlLXByZVwiPlxuICAgICAgICAgICAgICB7Y29kZVN0cmluZ31cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tOCByaWdodC04IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3NsaWRlN1wiIGNsYXNzTmFtZT1cImJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICA8QXJyb3dMZWZ0IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlODsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcnJvd0xlZnQiLCJDb2RlMiIsIkxpbmsiLCJtb3Rpb24iLCJTbGlkZTgiLCJjb2RlU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInNwYW4iLCJwcmUiLCJjb2RlIiwiaHJlZiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/slide8.tsx\n"));

/***/ })

});