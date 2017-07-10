webpackHotUpdate(0,{

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        look: function () {
            //                this.$http.post("/test",{name:"jmz"}).then(function(res){
            //                    console.log(JSON.parse(res.bodyText));
            //                   })
            var data = new formData(document.getElementById("#add")[0]);
            console.log(data);
        }
    }
});

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thirdFloor"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "add"
    }
  }), _c('button', {
    on: {
      "click": _vm.look
    }
  }, [_vm._v("确定")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(0).rerender("data-v-4d4071ce", module.exports)
  }
}

/***/ })

})