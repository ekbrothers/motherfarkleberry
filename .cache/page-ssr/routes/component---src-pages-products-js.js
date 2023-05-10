"use strict";
exports.id = "component---src-pages-products-js";
exports.ids = ["component---src-pages-products-js"];
exports.modules = {

/***/ "./src/pages/products.js?export=default":
/*!**********************************************!*\
  !*** ./src/pages/products.js?export=default ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// src/pages/products.js

const query = "3053364965";
const ProductsPage = ({
  data
}) => {
  const products = data.allContentfulProduct.edges;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, products.map(({
    node
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: node.id
  }, node.commonName))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-products-js.js.map