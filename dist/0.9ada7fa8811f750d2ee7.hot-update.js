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

            var formData = new FormData(document.getElementById("add").value);
            this.$http.post("/test", formData).then(function (res) {
                console.log("成功");
            });
        }
    }
});

/***/ })

})