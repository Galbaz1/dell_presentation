"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FootstepsAnimation.tsx":
/*!*******************************************!*\
  !*** ./components/FootstepsAnimation.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst RightFootprint = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((_, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ref: ref,\n        width: \"24\",\n        height: \"36\",\n        viewBox: \"0 0 16 32\",\n        fill: \"currentColor\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"footstep right-step\",\n        style: {\n            transform: \"rotate(90deg)\",\n            fill: \"#b45309\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z\"\n        }, void 0, false, {\n            fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined));\n_c = RightFootprint;\nconst LeftFootprint = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((_, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ref: ref,\n        width: \"24\",\n        height: \"36\",\n        viewBox: \"20 0 16 32\",\n        fill: \"currentColor\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"footstep left-step\",\n        style: {\n            transform: \"rotate(90deg)\",\n            fill: \"#b45309\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693z\"\n        }, void 0, false, {\n            fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, undefined));\n_c1 = LeftFootprint;\nconst FootstepsAnimation = ()=>{\n    _s();\n    const leftFootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const rightFootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ghostTrailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!leftFootRef.current || !rightFootRef.current || !ghostTrailRef.current) return;\n        // River-like flowing path with gentle curves\n        const flowingPath = [\n            // Start at first orange circle (Academic Foundation)\n            {\n                x: 280,\n                y: 100\n            },\n            {\n                x: 330,\n                y: 95\n            },\n            {\n                x: 380,\n                y: 90\n            },\n            {\n                x: 430,\n                y: 95\n            },\n            {\n                x: 480,\n                y: 100\n            },\n            {\n                x: 530,\n                y: 95\n            },\n            {\n                x: 580,\n                y: 90\n            },\n            {\n                x: 630,\n                y: 95\n            },\n            {\n                x: 680,\n                y: 100\n            },\n            {\n                x: 730,\n                y: 95\n            },\n            {\n                x: 780,\n                y: 90\n            },\n            {\n                x: 830,\n                y: 95\n            },\n            {\n                x: 880,\n                y: 100\n            },\n            {\n                x: 930,\n                y: 95\n            },\n            {\n                x: 980,\n                y: 90\n            },\n            {\n                x: 1030,\n                y: 95\n            },\n            {\n                x: 1080,\n                y: 100\n            },\n            {\n                x: 1130,\n                y: 95\n            },\n            {\n                x: 1180,\n                y: 90\n            },\n            {\n                x: 1230,\n                y: 95\n            },\n            {\n                x: 1280,\n                y: 100\n            }\n        ];\n        const createGhostTrail = function(element, x, y) {\n            let rotation = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;\n            if (!ghostTrailRef.current) return;\n            const ghost = element.cloneNode(true);\n            ghost.style.position = \"absolute\";\n            ghost.style.left = \"\".concat(x, \"px\");\n            ghost.style.top = \"\".concat(y, \"px\");\n            ghost.style.transform = \"rotate(\".concat(rotation + 90, \"deg)\");\n            ghost.style.color = \"#d97706\";\n            ghost.classList.add(\"ghost-trail\");\n            ghostTrailRef.current.appendChild(ghost);\n            gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(ghost, {\n                opacity: 0.25,\n                duration: 3,\n                ease: \"none\"\n            });\n        };\n        const animateFootstep = (foot, path, delay, isLeft)=>{\n            path.forEach((point, index)=>{\n                const prevPoint = index > 0 ? path[index - 1] : point;\n                const nextPoint = index < path.length - 1 ? path[index + 1] : point;\n                const rotation = Math.atan2(nextPoint.y - prevPoint.y, nextPoint.x - prevPoint.x) * 180 / Math.PI;\n                // Swapped vertical offsets and reduced distance by 50%\n                const verticalOffset = isLeft ? 5 : -5; // Changed from -10/+10 to +5/-5\n                gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(foot, {\n                    x: point.x + (isLeft ? -12 : 12),\n                    y: point.y + verticalOffset,\n                    rotation: rotation + 90 + (isLeft ? -15 : 15),\n                    duration: 0.6,\n                    delay: delay + index * 0.7,\n                    ease: \"power2.inOut\",\n                    onComplete: ()=>createGhostTrail(foot, point.x + (isLeft ? -12 : 12), point.y + verticalOffset, rotation + (isLeft ? -15 : 15))\n                });\n            });\n        };\n        // Start animations with proper timing\n        const timeline = gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline();\n        // Animate both feet with slight offset for natural walking\n        animateFootstep(leftFootRef.current, flowingPath, 0, true);\n        animateFootstep(rightFootRef.current, flowingPath, 0.35, false); // Increased offset\n        return ()=>{\n            timeline.kill();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 pointer-events-none\",\n        style: {\n            zIndex: 50\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ghostTrailRef,\n                className: \"ghost-trail-container\",\n                style: {\n                    zIndex: 50\n                }\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LeftFootprint, {\n                ref: leftFootRef\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RightFootprint, {\n                ref: rightFootRef\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FootstepsAnimation, \"zNqrOtmob5/AbFHcy1ky8sCUnGM=\");\n_c2 = FootstepsAnimation;\nRightFootprint.displayName = \"RightFootprint\";\nLeftFootprint.displayName = \"LeftFootprint\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (FootstepsAnimation);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"RightFootprint\");\n$RefreshReg$(_c1, \"LeftFootprint\");\n$RefreshReg$(_c2, \"FootstepsAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlxQixDQUFBQSxTQUFTLENBQUMsS0FBSyxFQUFDLEdBQzNCRSxNQUFNdEIsQ0FBQyxHQUFHOEIsZ0JBQ1YzQixXQUFZaUIsQ0FBQUEsU0FBUyxDQUFDLEtBQUssRUFBQztnQkFFaEM7WUFDRjtRQUNGO1FBRUEsc0NBQXNDO1FBQ3RDLE1BQU1ZLFdBQVd4RCxxREFBYTtRQUU5QiwyREFBMkQ7UUFDM0R5QyxnQkFBZ0J2QixZQUFZRyxPQUFPLEVBQUVDLGFBQWEsR0FBRztRQUNyRG1CLGdCQUFnQnRCLGFBQWFFLE9BQU8sRUFBRUMsYUFBYSxNQUFNLFFBQVEsbUJBQW1CO1FBRXBGLE9BQU87WUFDTGtDLFNBQVNDLElBQUk7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJL0MsV0FBVTtRQUFvQ0MsT0FBTztZQUFFK0MsUUFBUTtRQUFHOzswQkFDckUsOERBQUNEO2dCQUNDdEQsS0FBS2dCO2dCQUNMVCxXQUFVO2dCQUNWQyxPQUFPO29CQUFFK0MsUUFBUTtnQkFBRzs7Ozs7OzBCQUV0Qiw4REFBQzNDO2dCQUFjWixLQUFLYzs7Ozs7OzBCQUNwQiw4REFBQ2pCO2dCQUFlRyxLQUFLZTs7Ozs7Ozs7Ozs7O0FBRzNCO0dBckhNRjtNQUFBQTtBQXVITmhCLGVBQWUyRCxXQUFXLEdBQUc7QUFDN0I1QyxjQUFjNEMsV0FBVyxHQUFHO0FBRTVCLCtEQUFlM0Msa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdHN0ZXBzQW5pbWF0aW9uLnRzeD9kODRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pbnRlcmZhY2UgRm9vdFByb3BzIHtcbiAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8U1ZHU1ZHRWxlbWVudD47XG59XG5cbmNvbnN0IFJpZ2h0Rm9vdHByaW50ID0gUmVhY3QuZm9yd2FyZFJlZjxTVkdTVkdFbGVtZW50PigoXywgcmVmKSA9PiAoXG4gIDxzdmcgXG4gICAgcmVmPXtyZWZ9XG4gICAgd2lkdGg9XCIyNFwiIFxuICAgIGhlaWdodD1cIjM2XCIgXG4gICAgdmlld0JveD1cIjAgMCAxNiAzMlwiIFxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgY2xhc3NOYW1lPVwiZm9vdHN0ZXAgcmlnaHQtc3RlcFwiXG4gICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKScsIGZpbGw6ICcjYjQ1MzA5JyB9fVxuICA+XG4gICAgPHBhdGggZD1cIk01LjA1OCAyMC45MThsNi4yMS0xLjY2NGMtMC4yMDQtMi4yMiAwLTQuNzQ1IDEuMjA1LTcuMTEgMC4xOC02LjE5NS0xLjg2Ny0xMS45NjItNi44MzUtMTAuNjMxLTUuNDY4IDEuNDY1LTQuODY1IDEzLjg5OS0wLjU4IDE5LjQwNHYwek01LjQ2OCAyMy41MzdjMC4zNDMgMTEuOTc0IDEyLjUxMiA2LjQ5NyA2LjMxOC0xLjY5M2wtNi4zMTggMS42OTN6XCIgLz5cbiAgPC9zdmc+XG4pKTtcblxuY29uc3QgTGVmdEZvb3RwcmludCA9IFJlYWN0LmZvcndhcmRSZWY8U1ZHU1ZHRWxlbWVudD4oKF8sIHJlZikgPT4gKFxuICA8c3ZnIFxuICAgIHJlZj17cmVmfVxuICAgIHdpZHRoPVwiMjRcIiBcbiAgICBoZWlnaHQ9XCIzNlwiIFxuICAgIHZpZXdCb3g9XCIyMCAwIDE2IDMyXCIgXG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiIFxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICBjbGFzc05hbWU9XCJmb290c3RlcCBsZWZ0LXN0ZXBcIlxuICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknLCBmaWxsOiAnI2I0NTMwOScgfX1cbiAgPlxuICAgIDxwYXRoIGQ9XCJNMjcuMjI3IDIwLjkxN2wtNi4yMS0xLjY2NGMwLjIwNC0yLjIyLTAtNC43NDUtMS4yMDUtNy4xMS0wLjE4LTYuMTk1IDEuODY3LTExLjk2MiA2LjgzNS0xMC42MzEgNS40NjggMS40NjYgNC44NjUgMTMuOSAwLjU4IDE5LjQwNHYwek0yNi44MTggMjMuNTM2Yy0wLjM0MyAxMS45NzMtMTIuNTEyIDYuNDk3LTYuMzE4LTEuNjkzbDYuMzE4IDEuNjkzelwiIC8+XG4gIDwvc3ZnPlxuKSk7XG5cbmNvbnN0IEZvb3RzdGVwc0FuaW1hdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGxlZnRGb290UmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCByaWdodEZvb3RSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGdob3N0VHJhaWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsZWZ0Rm9vdFJlZi5jdXJyZW50IHx8ICFyaWdodEZvb3RSZWYuY3VycmVudCB8fCAhZ2hvc3RUcmFpbFJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAvLyBSaXZlci1saWtlIGZsb3dpbmcgcGF0aCB3aXRoIGdlbnRsZSBjdXJ2ZXNcbiAgICBjb25zdCBmbG93aW5nUGF0aCA9IFtcbiAgICAgIC8vIFN0YXJ0IGF0IGZpcnN0IG9yYW5nZSBjaXJjbGUgKEFjYWRlbWljIEZvdW5kYXRpb24pXG4gICAgICB7IHg6IDI4MCwgeTogMTAwIH0sICAgIC8vIFN0YXJ0aW5nIGF0IGZpcnN0IGNpcmNsZVxuICAgICAgeyB4OiAzMzAsIHk6IDk1IH0sICAgICAvLyBHZW50bGUgY3VydmUgdXBcbiAgICAgIHsgeDogMzgwLCB5OiA5MCB9LCAgICAgLy8gUGVha1xuICAgICAgeyB4OiA0MzAsIHk6IDk1IH0sICAgICAvLyBDb21pbmcgZG93blxuICAgICAgeyB4OiA0ODAsIHk6IDEwMCB9LCAgICAvLyBMZXZlbFxuICAgICAgeyB4OiA1MzAsIHk6IDk1IH0sICAgICAvLyBSaXNlXG4gICAgICB7IHg6IDU4MCwgeTogOTAgfSwgICAgIC8vIFBlYWtcbiAgICAgIHsgeDogNjMwLCB5OiA5NSB9LCAgICAgLy8gRGVzY2VuZFxuICAgICAgeyB4OiA2ODAsIHk6IDEwMCB9LCAgICAvLyBTZWNvbmQgY2lyY2xlIHBvc2l0aW9uXG4gICAgICB7IHg6IDczMCwgeTogOTUgfSwgICAgIC8vIEJlZ2luIHJpc2VcbiAgICAgIHsgeDogNzgwLCB5OiA5MCB9LCAgICAgLy8gUGVha1xuICAgICAgeyB4OiA4MzAsIHk6IDk1IH0sICAgICAvLyBTdGFydCBkZXNjZW50XG4gICAgICB7IHg6IDg4MCwgeTogMTAwIH0sICAgIC8vIExldmVsXG4gICAgICB7IHg6IDkzMCwgeTogOTUgfSwgICAgIC8vIFJpc2VcbiAgICAgIHsgeDogOTgwLCB5OiA5MCB9LCAgICAgLy8gUGVha1xuICAgICAgeyB4OiAxMDMwLCB5OiA5NSB9LCAgICAvLyBEZXNjZW5kXG4gICAgICB7IHg6IDEwODAsIHk6IDEwMCB9LCAgIC8vIFRoaXJkIGNpcmNsZSBwb3NpdGlvblxuICAgICAgeyB4OiAxMTMwLCB5OiA5NSB9LCAgICAvLyBGaW5hbCByaXNlXG4gICAgICB7IHg6IDExODAsIHk6IDkwIH0sICAgIC8vIExhc3QgcGVha1xuICAgICAgeyB4OiAxMjMwLCB5OiA5NSB9LCAgICAvLyBGaW5hbCBkZXNjZW50XG4gICAgICB7IHg6IDEyODAsIHk6IDEwMCB9LCAgIC8vIEVuZCBwb3NpdGlvblxuICAgIF07XG5cbiAgICBjb25zdCBjcmVhdGVHaG9zdFRyYWlsID0gKFxuICAgICAgZWxlbWVudDogU1ZHU1ZHRWxlbWVudCwgXG4gICAgICB4OiBudW1iZXIsIFxuICAgICAgeTogbnVtYmVyLFxuICAgICAgcm90YXRpb246IG51bWJlciA9IDBcbiAgICApOiB2b2lkID0+IHtcbiAgICAgIGlmICghZ2hvc3RUcmFpbFJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICBcbiAgICAgIGNvbnN0IGdob3N0ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHU1ZHRWxlbWVudDtcbiAgICAgIGdob3N0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGdob3N0LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgIGdob3N0LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICAgICAgZ2hvc3Quc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3JvdGF0aW9uICsgOTB9ZGVnKWA7XG4gICAgICBnaG9zdC5zdHlsZS5jb2xvciA9ICcjZDk3NzA2JztcbiAgICAgIGdob3N0LmNsYXNzTGlzdC5hZGQoJ2dob3N0LXRyYWlsJyk7XG4gICAgICBcbiAgICAgIGdob3N0VHJhaWxSZWYuY3VycmVudC5hcHBlbmRDaGlsZChnaG9zdCk7XG4gICAgICBcbiAgICAgIGdzYXAudG8oZ2hvc3QsIHtcbiAgICAgICAgb3BhY2l0eTogMC4yNSxcbiAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFuaW1hdGVGb290c3RlcCA9IChcbiAgICAgIGZvb3Q6IFNWR1NWR0VsZW1lbnQsXG4gICAgICBwYXRoOiBBcnJheTx7eDogbnVtYmVyLCB5OiBudW1iZXJ9PixcbiAgICAgIGRlbGF5OiBudW1iZXIsXG4gICAgICBpc0xlZnQ6IGJvb2xlYW5cbiAgICApOiB2b2lkID0+IHtcbiAgICAgIHBhdGguZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZQb2ludCA9IGluZGV4ID4gMCA/IHBhdGhbaW5kZXggLSAxXSA6IHBvaW50O1xuICAgICAgICBjb25zdCBuZXh0UG9pbnQgPSBpbmRleCA8IHBhdGgubGVuZ3RoIC0gMSA/IHBhdGhbaW5kZXggKyAxXSA6IHBvaW50O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBNYXRoLmF0YW4yKFxuICAgICAgICAgIG5leHRQb2ludC55IC0gcHJldlBvaW50LnksXG4gICAgICAgICAgbmV4dFBvaW50LnggLSBwcmV2UG9pbnQueFxuICAgICAgICApICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN3YXBwZWQgdmVydGljYWwgb2Zmc2V0cyBhbmQgcmVkdWNlZCBkaXN0YW5jZSBieSA1MCVcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSBpc0xlZnQgPyA1IDogLTU7IC8vIENoYW5nZWQgZnJvbSAtMTAvKzEwIHRvICs1Ly01XG4gICAgICAgIFxuICAgICAgICBnc2FwLnRvKGZvb3QsIHtcbiAgICAgICAgICB4OiBwb2ludC54ICsgKGlzTGVmdCA/IC0xMiA6IDEyKSxcbiAgICAgICAgICB5OiBwb2ludC55ICsgdmVydGljYWxPZmZzZXQsXG4gICAgICAgICAgcm90YXRpb246IHJvdGF0aW9uICsgOTAgKyAoaXNMZWZ0ID8gLTE1IDogMTUpLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgZGVsYXk6IGRlbGF5ICsgKGluZGV4ICogMC43KSxcbiAgICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiLFxuICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IGNyZWF0ZUdob3N0VHJhaWwoXG4gICAgICAgICAgICBmb290LCBcbiAgICAgICAgICAgIHBvaW50LnggKyAoaXNMZWZ0ID8gLTEyIDogMTIpLFxuICAgICAgICAgICAgcG9pbnQueSArIHZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICAgICAgcm90YXRpb24gKyAoaXNMZWZ0ID8gLTE1IDogMTUpXG4gICAgICAgICAgKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gU3RhcnQgYW5pbWF0aW9ucyB3aXRoIHByb3BlciB0aW1pbmdcbiAgICBjb25zdCB0aW1lbGluZSA9IGdzYXAudGltZWxpbmUoKTtcbiAgICBcbiAgICAvLyBBbmltYXRlIGJvdGggZmVldCB3aXRoIHNsaWdodCBvZmZzZXQgZm9yIG5hdHVyYWwgd2Fsa2luZ1xuICAgIGFuaW1hdGVGb290c3RlcChsZWZ0Rm9vdFJlZi5jdXJyZW50LCBmbG93aW5nUGF0aCwgMCwgdHJ1ZSk7XG4gICAgYW5pbWF0ZUZvb3RzdGVwKHJpZ2h0Rm9vdFJlZi5jdXJyZW50LCBmbG93aW5nUGF0aCwgMC4zNSwgZmFsc2UpOyAvLyBJbmNyZWFzZWQgb2Zmc2V0XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGltZWxpbmUua2lsbCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lXCIgc3R5bGU9e3sgekluZGV4OiA1MCB9fT5cbiAgICAgIDxkaXYgXG4gICAgICAgIHJlZj17Z2hvc3RUcmFpbFJlZn0gXG4gICAgICAgIGNsYXNzTmFtZT1cImdob3N0LXRyYWlsLWNvbnRhaW5lclwiIFxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDUwIH19XG4gICAgICAvPlxuICAgICAgPExlZnRGb290cHJpbnQgcmVmPXtsZWZ0Rm9vdFJlZn0gLz5cbiAgICAgIDxSaWdodEZvb3RwcmludCByZWY9e3JpZ2h0Rm9vdFJlZn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblJpZ2h0Rm9vdHByaW50LmRpc3BsYXlOYW1lID0gJ1JpZ2h0Rm9vdHByaW50JztcbkxlZnRGb290cHJpbnQuZGlzcGxheU5hbWUgPSAnTGVmdEZvb3RwcmludCc7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RzdGVwc0FuaW1hdGlvbjsgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZ3NhcCIsIlJpZ2h0Rm9vdHByaW50IiwiZm9yd2FyZFJlZiIsIl8iLCJyZWYiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsInBhdGgiLCJkIiwiTGVmdEZvb3RwcmludCIsIkZvb3RzdGVwc0FuaW1hdGlvbiIsImxlZnRGb290UmVmIiwicmlnaHRGb290UmVmIiwiZ2hvc3RUcmFpbFJlZiIsImN1cnJlbnQiLCJmbG93aW5nUGF0aCIsIngiLCJ5IiwiY3JlYXRlR2hvc3RUcmFpbCIsImVsZW1lbnQiLCJyb3RhdGlvbiIsImdob3N0IiwiY2xvbmVOb2RlIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiY29sb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVGb290c3RlcCIsImZvb3QiLCJkZWxheSIsImlzTGVmdCIsImZvckVhY2giLCJwb2ludCIsImluZGV4IiwicHJldlBvaW50IiwibmV4dFBvaW50IiwibGVuZ3RoIiwiTWF0aCIsImF0YW4yIiwiUEkiLCJ2ZXJ0aWNhbE9mZnNldCIsIm9uQ29tcGxldGUiLCJ0aW1lbGluZSIsImtpbGwiLCJkaXYiLCJ6SW5kZXgiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FootstepsAnimation.tsx\n"));

/***/ })

});