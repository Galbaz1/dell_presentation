"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slide6",{

/***/ "./pages/slide6.tsx":
/*!**************************!*\
  !*** ./pages/slide6.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight!=!lucide-react */ \"__barrel_optimize__?names=ArrowLeft,ArrowRight!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Slide6 = ()=>{\n    _s();\n    const [currentPiece, setCurrentPiece] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const gridSize = 80; // Increased size for better visibility\n    const tetrisPieces = [\n        {\n            id: 0,\n            concept: 'Tree of Thought',\n            color: '#10B981',\n            shape: 'T',\n            pattern: [\n                {\n                    x: 4,\n                    y: -4\n                },\n                {\n                    x: 4,\n                    y: 2\n                },\n                {\n                    x: 1,\n                    y: 2\n                },\n                {\n                    x: 1,\n                    y: 7\n                } // Final position\n            ]\n        },\n        {\n            id: 1,\n            concept: 'Chain of Thought',\n            color: '#3B82F6',\n            shape: 'I',\n            pattern: [\n                {\n                    x: 4,\n                    y: -4\n                },\n                {\n                    x: 4,\n                    y: 2\n                },\n                {\n                    x: 2,\n                    y: 2\n                },\n                {\n                    x: 2,\n                    y: 7\n                }\n            ]\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Slide6.useEffect\": ()=>{\n            if (currentPiece < tetrisPieces.length - 1) {\n                const timer = setTimeout({\n                    \"Slide6.useEffect.timer\": ()=>{\n                        setCurrentPiece({\n                            \"Slide6.useEffect.timer\": (prev)=>prev + 1\n                        }[\"Slide6.useEffect.timer\"]);\n                    }\n                }[\"Slide6.useEffect.timer\"], 4000); // Adjusted timing\n                return ({\n                    \"Slide6.useEffect\": ()=>clearTimeout(timer)\n                })[\"Slide6.useEffect\"];\n            }\n        }\n    }[\"Slide6.useEffect\"], [\n        currentPiece\n    ]);\n    const getShapeBlocks = (shape)=>{\n        switch(shape){\n            case 'T':\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block\",\n                            style: {\n                                gridArea: '1 / 2 / 2 / 3'\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block\",\n                            style: {\n                                gridArea: '2 / 1 / 3 / 2'\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block\",\n                            style: {\n                                gridArea: '2 / 2 / 3 / 3'\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block\",\n                            style: {\n                                gridArea: '2 / 3 / 3 / 4'\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const renderPiece = (piece, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            className: \"absolute\",\n            initial: {\n                x: piece.pattern[0].x * gridSize,\n                y: piece.pattern[0].y * gridSize\n            },\n            animate: {\n                x: piece.pattern.map((p)=>p.x * gridSize),\n                y: piece.pattern.map((p)=>p.y * gridSize)\n            },\n            transition: {\n                duration: 0.5,\n                ease: \"linear\",\n                times: piece.pattern.map((_, i)=>i / (piece.pattern.length - 1))\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                style: {\n                    width: gridSize * 3,\n                    height: gridSize * 3,\n                    display: 'grid',\n                    gridTemplateColumns: \"repeat(3, \".concat(gridSize, \"px)\"),\n                    gridTemplateRows: \"repeat(3, \".concat(gridSize, \"px)\")\n                },\n                children: [\n                    getShapeBlocks(piece.shape),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex items-center justify-center text-lg text-white font-bold text-center\",\n                        style: {\n                            pointerEvents: 'none'\n                        },\n                        children: piece.concept\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, undefined)\n        }, piece.id, false, {\n            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b5c13f165dee517\" + \" \" + \"bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"mb-16\",\n                initial: {\n                    y: -20,\n                    opacity: 0\n                },\n                animate: {\n                    y: 0,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.8\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-b5c13f165dee517\" + \" \" + \"text-4xl font-bold text-indigo-900 mb-3\",\n                        children: \"Prompt Engineering\"\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-b5c13f165dee517\" + \" \" + \"text-xl text-indigo-700\",\n                        children: \"Building Blocks of Reliable AI Interactions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b5c13f165dee517\" + \" \" + \"max-w-6xl mx-auto h-[800px] relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                    children: tetrisPieces.slice(0, currentPiece + 1).map((piece, index)=>renderPiece(piece, index))\n                }, void 0, false, {\n                    fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b5c13f165dee517\" + \" \" + \"absolute bottom-8 right-8 flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/slide5\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowLeft, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/slide7\",\n                        className: \"bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b5c13f165dee517\",\n                children: \".block.jsx-b5c13f165dee517{background-color:currentColor;border:2px solid rgba(255,255,255,.5);-webkit-box-shadow:inset 0 0 15px rgba(0,0,0,.2);-moz-box-shadow:inset 0 0 15px rgba(0,0,0,.2);box-shadow:inset 0 0 15px rgba(0,0,0,.2)}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/faustoalbers/Coding/dell_presentation/pages/slide6.tsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slide6, \"gHtwAt6pYaxUBCGxDVvYnjAozsk=\");\n_c = Slide6;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide6);\nvar _c;\n$RefreshReg$(_c, \"Slide6\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGxfcHJlc2VudGF0aW9uL3BhZ2VzL3NsaWRlNi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcnJvd0xlZnQsIEFycm93UmlnaHQsIEdpdEJyYW5jaCwgQnJhaW4sIFNjYWxlLCBDb3B5LCBUYXJnZXQsIFRpbWVyLCBTZXR0aW5ncywgVHJlZVBpbmUsIExpbmsyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbnRlcmZhY2UgVGV0cmlzUGllY2Uge1xuICBpZDogbnVtYmVyO1xuICBjb25jZXB0OiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNoYXBlOiAnVCcgfCAnSScgfCAnTCcgfCAnWicgfCAnTycgfCAnUycgfCAnSic7XG4gIHBhdHRlcm46IEFycmF5PHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT47XG59XG5cbmNvbnN0IFNsaWRlNjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UGllY2UsIHNldEN1cnJlbnRQaWVjZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBncmlkU2l6ZSA9IDgwOyAvLyBJbmNyZWFzZWQgc2l6ZSBmb3IgYmV0dGVyIHZpc2liaWxpdHlcblxuICBjb25zdCB0ZXRyaXNQaWVjZXM6IFRldHJpc1BpZWNlW10gPSBbXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBjb25jZXB0OiAnVHJlZSBvZiBUaG91Z2h0JyxcbiAgICAgIGNvbG9yOiAnIzEwQjk4MScsXG4gICAgICBzaGFwZTogJ1QnLFxuICAgICAgcGF0dGVybjogW1xuICAgICAgICB7IHg6IDQsIHk6IC00IH0sIC8vIFN0YXJ0IGFib3ZlIGNhbnZhc1xuICAgICAgICB7IHg6IDQsIHk6IDIgfSwgLy8gTW92ZSBkb3duXG4gICAgICAgIHsgeDogMSwgeTogMiB9LCAvLyBNb3ZlIGxlZnRcbiAgICAgICAgeyB4OiAxLCB5OiA3IH0gIC8vIEZpbmFsIHBvc2l0aW9uXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGNvbmNlcHQ6ICdDaGFpbiBvZiBUaG91Z2h0JyxcbiAgICAgIGNvbG9yOiAnIzNCODJGNicsXG4gICAgICBzaGFwZTogJ0knLFxuICAgICAgcGF0dGVybjogW1xuICAgICAgICB7IHg6IDQsIHk6IC00IH0sXG4gICAgICAgIHsgeDogNCwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAyLCB5OiA3IH1cbiAgICAgIF1cbiAgICB9LFxuICAgIC8vIC4uLiBjb250aW51ZSB3aXRoIG90aGVyIHBpZWNlc1xuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQaWVjZSA8IHRldHJpc1BpZWNlcy5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGllY2UocHJldiA9PiBwcmV2ICsgMSk7XG4gICAgICB9LCA0MDAwKTsgLy8gQWRqdXN0ZWQgdGltaW5nXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50UGllY2VdKTtcblxuICBjb25zdCBnZXRTaGFwZUJsb2NrcyA9IChzaGFwZTogc3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChzaGFwZSkge1xuICAgICAgY2FzZSAnVCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIiBzdHlsZT17eyBncmlkQXJlYTogJzEgLyAyIC8gMiAvIDMnIH19IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICcyIC8gMSAvIDMgLyAyJyB9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiIHN0eWxlPXt7IGdyaWRBcmVhOiAnMiAvIDIgLyAzIC8gMycgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIiBzdHlsZT17eyBncmlkQXJlYTogJzIgLyAzIC8gMyAvIDQnIH19IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICAvLyAuLi4gYWRkIG90aGVyIHNoYXBlIHBhdHRlcm5zXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBpZWNlID0gKHBpZWNlOiBUZXRyaXNQaWVjZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBrZXk9e3BpZWNlLmlkfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiXG4gICAgICAgIGluaXRpYWw9e3sgeDogcGllY2UucGF0dGVyblswXS54ICogZ3JpZFNpemUsIHk6IHBpZWNlLnBhdHRlcm5bMF0ueSAqIGdyaWRTaXplIH19XG4gICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICB4OiBwaWVjZS5wYXR0ZXJuLm1hcChwID0+IHAueCAqIGdyaWRTaXplKSxcbiAgICAgICAgICB5OiBwaWVjZS5wYXR0ZXJuLm1hcChwID0+IHAueSAqIGdyaWRTaXplKVxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHRpbWVzOiBwaWVjZS5wYXR0ZXJuLm1hcCgoXywgaSkgPT4gaSAvIChwaWVjZS5wYXR0ZXJuLmxlbmd0aCAtIDEpKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGdyaWRTaXplICogMyxcbiAgICAgICAgICAgIGhlaWdodDogZ3JpZFNpemUgKiAzLFxuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgzLCAke2dyaWRTaXplfXB4KWAsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBgcmVwZWF0KDMsICR7Z3JpZFNpemV9cHgpYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgey8qIFNoYXBlIGJsb2NrcyAqL31cbiAgICAgICAgICB7Z2V0U2hhcGVCbG9ja3MocGllY2Uuc2hhcGUpfVxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBDb25jZXB0IHRleHQgKi99XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cGllY2UuY29uY2VwdH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpZ28tNTAgdG8taW5kaWdvLTEwMCBwLTggcm91bmRlZC14bCBzaGFkb3ctbGcgbWluLWgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTE2XCJcbiAgICAgICAgaW5pdGlhbD17eyB5OiAtMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxuICAgICAgPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtaW5kaWdvLTkwMCBtYi0zXCI+UHJvbXB0IEVuZ2luZWVyaW5nPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWluZGlnby03MDBcIj5CdWlsZGluZyBCbG9ja3Mgb2YgUmVsaWFibGUgQUkgSW50ZXJhY3Rpb25zPC9wPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICB7LyogR2FtZSBBcmVhICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBoLVs4MDBweF0gcmVsYXRpdmVcIj5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7dGV0cmlzUGllY2VzLnNsaWNlKDAsIGN1cnJlbnRQaWVjZSArIDEpLm1hcCgocGllY2UsIGluZGV4KSA9PiBcbiAgICAgICAgICAgIHJlbmRlclBpZWNlKHBpZWNlLCBpbmRleClcbiAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTmF2aWdhdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggcmlnaHQtOCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zbGlkZTVcIiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNTAwIGhvdmVyOmJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3NsaWRlN1wiIGNsYXNzTmFtZT1cImJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJsb2NrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGU2OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsIkxpbmsiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJTbGlkZTYiLCJjdXJyZW50UGllY2UiLCJzZXRDdXJyZW50UGllY2UiLCJncmlkU2l6ZSIsInRldHJpc1BpZWNlcyIsImlkIiwiY29uY2VwdCIsImNvbG9yIiwic2hhcGUiLCJwYXR0ZXJuIiwieCIsInkiLCJsZW5ndGgiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJwcmV2IiwiY2xlYXJUaW1lb3V0IiwiZ2V0U2hhcGVCbG9ja3MiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdyaWRBcmVhIiwicmVuZGVyUGllY2UiLCJwaWVjZSIsImluZGV4IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJtYXAiLCJwIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInRpbWVzIiwiXyIsImkiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsInBvaW50ZXJFdmVudHMiLCJvcGFjaXR5IiwiaDEiLCJzbGljZSIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/slide6.tsx\n"));

/***/ })

});