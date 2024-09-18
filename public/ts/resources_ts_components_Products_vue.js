"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_components_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Questions.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var vuex_1 = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var PageBanner_vue_1 = __webpack_require__(/*! ./Shared/PageBanner.vue */ "./resources/ts/components/Shared/PageBanner.vue");
exports["default"] = {
  name: "products",
  props: ["canEdit", "canApply"],
  components: {
    PageBanner: PageBanner_vue_1["default"]
  },
  data: function data() {
    return {
      newProductDescription: '',
      newProductQty: 0,
      calculatedPrice: 0,
      requestedQuantity: 0,
      invalidQty: false,
      insufficientQty: false,
      editMode: false,
      showBanner: true,
      headers: [{
        text: "ID",
        value: "productID",
        sortable: true
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Quantity (Units)",
        value: "quantity",
        sortable: true
      }, {
        text: "",
        value: "actions"
      }, {
        text: "",
        value: "apply"
      }]
    };
  },
  computed: tslib_1.__assign(tslib_1.__assign({}, vuex_1.mapGetters("products", {
    products: "getProducts",
    isLoading: "isLoading"
  })), {
    actionButtons: function actionButtons() {
      if (!this.editMode) {
        return ['Add New Product'];
      }
      return ['Cancel'];
    }
  }),
  mounted: function mounted() {
    this.loadProducts();
  },
  methods: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, vuex_1.mapActions("products", ["loadProducts", "createOrUpdateProduct", "calcPriceForQuantity", "commitApplication"])), vuex_1.mapMutations("products", ["editProduct", "clearEdit"])), {
    actionClick: function actionClick(value) {
      if (value === 'Add New Product') {
        this.addRowHandler();
      }
      if (value === 'Cancel') {
        this.cancelAdd();
      }
    },
    editRowHandler: function editRowHandler(productID, isEdit, descr) {
      if (isEdit) {
        this.createOrUpdateProduct({
          "description": this.newProductDescription,
          "productID": productID
        });
        this.newProductDescription = '';
        return;
      }
      this.newProductDescription = descr;
      this.editProduct(productID);
    },
    cancelEditRow: function cancelEditRow(productID) {
      this.newProductDescription = '';
      this.requestedQuantity = 0;
      this.editProduct(productID);
    },
    cancelAdd: function cancelAdd() {
      this.editMode = false;
    },
    inputHandler: function inputHandler(value, index, key) {
      this.products[index][key] = value;
      this.$set(this.products, index, this.products[index]);
      this.$emit("input", this.products);
    },
    addRowHandler: function addRowHandler() {
      this.editMode = true;
    },
    saveProduct: function saveProduct() {
      this.createOrUpdateProduct({
        "productID": 0,
        "description": this.newProductDescription,
        "qty": this.newProductQty
      });
      this.newProductDescription = '';
      this.newProductQty = 0;
      this.editMode = false;
    },
    getPriceForQuantity: function getPriceForQuantity(productID, quantity) {
      this.invalidQty = false;
      this.insufficientQty = false;
      if (this.requestedQuantity <= 0) {
        this.invalidQty = true;
        return;
      }
      if (this.requestedQuantity > quantity) {
        this.insufficientQty = true;
        return;
      }
      this.calcPriceForQuantity({
        "productID": productID,
        "requestedQuantity": this.requestedQuantity
      });
    },
    applyQuantity: function applyQuantity(productID) {
      this.commitApplication({
        "productID": productID,
        "quantity": this.requestedQuantity
      });
      this.requestedQuantity = 0;
    }
  })
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Welcome.vue",
  props: {
    title: String,
    subtitle: String,
    actions: []
  },
  methods: {
    click: function click(action) {
      this.$emit('clickAction', action);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=template&id=6a30d405&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Questions.vue?vue&type=template&id=6a30d405&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", [_vm.canEdit ? _c("PageBanner", {
    attrs: {
      title: "Inventory",
      subtitle: "Inventory product management",
      actions: _vm.actionButtons
    },
    on: {
      clickAction: _vm.actionClick
    }
  }) : _vm._e(), _vm._v(" "), _vm.editMode ? _c("v-card", {
    staticClass: "mx-auto",
    attrs: {
      "max-width": "344",
      variant: "outlined"
    }
  }, [_c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Product description"
    },
    model: {
      value: _vm.newProductDescription,
      callback: function callback($$v) {
        _vm.newProductDescription = $$v;
      },
      expression: "newProductDescription"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Opening quantity",
      type: "number"
    },
    model: {
      value: _vm.newProductQty,
      callback: function callback($$v) {
        _vm.newProductQty = $$v;
      },
      expression: "newProductQty"
    }
  })], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "#78be20",
      disabled: this.newProductDescription.length < 4 || this.newProductQty <= 0,
      block: ""
    },
    on: {
      click: function click($event) {
        return _vm.saveProduct();
      }
    }
  }, [_vm._v("Save Product")])], 1)], 1) : _vm._e(), _vm._v(" "), _c("b-alert", {
    attrs: {
      show: this.invalidQty,
      variant: "warning"
    }
  }, [_c("p", [_vm._v("Quantity must be greater than zero")])]), _vm._v(" "), _c("b-alert", {
    attrs: {
      show: this.insufficientQty,
      variant: "warning"
    }
  }, [_c("p", [_vm._v("Quantity to be applied exceeds the quantity on hand")])]), _vm._v(" "), _vm.products.length > 1 ? _c("v-data-table", {
    staticClass: "elevation-0",
    attrs: {
      headers: _vm.headers,
      items: _vm.products,
      loading: this.isLoading
    },
    scopedSlots: _vm._u([{
      key: "item.quantity",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_vm._v("\n      " + _vm._s(item.quantity.toLocaleString("en-US")) + "\n    ")];
      }
    }, this.canEdit ? {
      key: "item.description",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [item.isEdit ? _c("v-text-field", {
          attrs: {
            type: "text"
          },
          model: {
            value: _vm.newProductDescription,
            callback: function callback($$v) {
              _vm.newProductDescription = $$v;
            },
            expression: "newProductDescription"
          }
        }) : _c("span", [_vm._v(_vm._s(item.description))])];
      }
    } : null, this.canEdit ? {
      key: "item.actions",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [!item.isEdit ? _c("v-btn", {
          on: {
            click: function click($event) {
              var _item$isEdit;
              return _vm.editRowHandler(item.productID, (_item$isEdit = item.isEdit) !== null && _item$isEdit !== void 0 ? _item$isEdit : false, item.description);
            }
          }
        }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), item.isEdit ? _c("v-btn", {
          attrs: {
            color: "#78be20"
          },
          on: {
            click: function click($event) {
              var _item$isEdit2;
              return _vm.editRowHandler(item.productID, (_item$isEdit2 = item.isEdit) !== null && _item$isEdit2 !== void 0 ? _item$isEdit2 : false, item.description);
            }
          }
        }, [_vm._v("Save Changes")]) : _vm._e(), _vm._v(" "), item.isEdit ? _c("v-btn", {
          on: {
            click: function click($event) {
              return _vm.cancelEditRow(item.productID);
            }
          }
        }, [_vm._v("Cancel")]) : _vm._e()];
      }
    } : null, this.canApply ? {
      key: "item.apply",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [!item.isEdit && item.quantity > 0 ? _c("v-btn", {
          on: {
            click: function click($event) {
              var _item$isEdit3;
              return _vm.editRowHandler(item.productID, (_item$isEdit3 = item.isEdit) !== null && _item$isEdit3 !== void 0 ? _item$isEdit3 : false);
            }
          }
        }, [_vm._v("Apply")]) : _vm._e(), _vm._v(" "), item.isEdit ? _c("v-text-field", {
          attrs: {
            type: "number"
          },
          model: {
            value: _vm.requestedQuantity,
            callback: function callback($$v) {
              _vm.requestedQuantity = $$v;
            },
            expression: "requestedQuantity"
          }
        }) : _vm._e(), _vm._v(" "), item.isEdit && (item.calculatedPrice == 0 || !item.calculatedPrice) ? _c("v-btn", {
          on: {
            click: function click($event) {
              return _vm.getPriceForQuantity(item.productID, item.quantity);
            }
          }
        }, [_vm._v("Calculate")]) : _vm._e(), _vm._v(" "), item.calculatedPrice > 0 ? _c("v-card", {
          staticClass: "mx-auto",
          attrs: {
            "max-width": "344",
            variant: "outlined"
          }
        }, [_c("v-card-text", [_c("div", [_c("div", {
          staticClass: "text-overline mb-1"
        }, [_vm._v("Application Value")]), _vm._v(" "), _c("div", {
          staticClass: "text-h6 mb-1"
        }, [_vm._v("NZD$ " + _vm._s(item.calculatedPrice.toLocaleString("en-US")))])])]), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
          attrs: {
            color: "#78be20"
          },
          on: {
            click: function click($event) {
              return _vm.applyQuantity(item.productID);
            }
          }
        }, [_vm._v("Confirm Application")]), _vm._v(" "), item.isEdit ? _c("v-btn", {
          on: {
            click: function click($event) {
              return _vm.cancelEditRow(item.productID);
            }
          }
        }, [_vm._v("Cancel")]) : _vm._e()], 1)], 1) : _vm._e()];
      }
    } : null], null, true)
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=template&id=d588d258&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=template&id=d588d258& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", [_c("div", {
    staticClass: "col-12 text-center"
  }, [_c("b-jumbotron", {
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.title))];
      },
      proxy: true
    }, {
      key: "lead",
      fn: function fn() {
        return [_vm._v("\n        " + _vm._s(_vm.subtitle) + "\n      ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._v(" "), _vm.actions ? _c("hr", {
    staticClass: "my-4"
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.actions, function (action) {
    return _c("v-list-item-action", {
      key: action
    }, [_c("v-btn", {
      on: {
        click: function click($event) {
          return _vm.click(action);
        }
      }
    }, [_vm._v(_vm._s(action))])], 1);
  })], 2)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Questions.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#app[data-v-6a30d405] {\n  text-align: center;\n  margin: 60px;\n}\nthead[data-v-6a30d405], tbody[data-v-6a30d405], tfoot[data-v-6a30d405], tr[data-v-6a30d405], td[data-v-6a30d405], th[data-v-6a30d405] {\n  text-align: left;\n  width: 100px;\n  vertical-align: middle;\n}\npre[data-v-6a30d405] {\n  text-align: left;\n  color: #d63384;\n}\n.tableInput[data-v-6a30d405] {\n  border-style: solid;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.jumbotron {\n  border-radius: 12px;\n  background-color: #8c9eff;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Questions.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_6a30d405_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_6a30d405_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_6a30d405_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_d588d258_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_d588d258_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_d588d258_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/ts/components/Products.vue":
/*!**********************************************!*\
  !*** ./resources/ts/components/Questions.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _Products_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.__esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_6a30d405_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Questions.vue?vue&type=template&id=6a30d405&scoped=true& */ "./resources/ts/components/Products.vue?vue&type=template&id=6a30d405&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questions.vue?vue&type=script&lang=ts& */ "./resources/ts/components/Products.vue?vue&type=script&lang=ts&");
/* harmony import */ var _Products_vue_vue_type_style_index_0_id_6a30d405_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questions.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css& */ "./resources/ts/components/Products.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_6a30d405_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_6a30d405_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6a30d405",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/ts/components/Questions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/ts/components/Shared/PageBanner.vue":
/*!*******************************************************!*\
  !*** ./resources/ts/components/Shared/PageBanner.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageBanner_vue_vue_type_template_id_d588d258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBanner.vue?vue&type=template&id=d588d258& */ "./resources/ts/components/Shared/PageBanner.vue?vue&type=template&id=d588d258&");
/* harmony import */ var _PageBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageBanner.vue?vue&type=script&lang=js& */ "./resources/ts/components/Shared/PageBanner.vue?vue&type=script&lang=js&");
/* harmony import */ var _PageBanner_vue_vue_type_style_index_0_id_d588d258_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css& */ "./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageBanner_vue_vue_type_template_id_d588d258___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageBanner_vue_vue_type_template_id_d588d258___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/ts/components/Shared/PageBanner.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/ts/components/Products.vue?vue&type=script&lang=ts&":
/*!***********************************************************************!*\
  !*** ./resources/ts/components/Questions.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_23_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_23_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-23!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_23_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/ts/components/Shared/PageBanner.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/ts/components/Shared/PageBanner.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/ts/components/Products.vue?vue&type=template&id=6a30d405&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/components/Questions.vue?vue&type=template&id=6a30d405&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6a30d405_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6a30d405_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6a30d405_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=template&id=6a30d405&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=template&id=6a30d405&scoped=true&");


/***/ }),

/***/ "./resources/ts/components/Shared/PageBanner.vue?vue&type=template&id=d588d258&":
/*!**************************************************************************************!*\
  !*** ./resources/ts/components/Shared/PageBanner.vue?vue&type=template&id=d588d258& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_template_id_d588d258___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_template_id_d588d258___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_template_id_d588d258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageBanner.vue?vue&type=template&id=d588d258& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=template&id=d588d258&");


/***/ }),

/***/ "./resources/ts/components/Products.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/ts/components/Questions.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_6a30d405_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Products.vue?vue&type=style&index=0&id=6a30d405&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_d588d258_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/ts/components/Shared/PageBanner.vue?vue&type=style&index=0&id=d588d258&lang=css&");


/***/ })

}]);