webpackJsonp([23],{"4hVX":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c("c/Tr"),r=c.n(n),a=c("lHA8"),l=c.n(a),o=c("xJrl"),u=c("Og03"),s=c("STSY"),i={name:"allocResource",data:function(){return{roleId:null,allResource:null,allResourceCate:null}},created:function(){this.roleId=this.$route.query.roleId,this.getAllResourceCateList()},methods:{getAllResourceList:function(){var e=this;Object(o.c)().then(function(t){e.allResource=t.data;for(var c=0;c<e.allResource.length;c++)e.allResource[c].checked=!1;e.getResourceByRole(e.roleId)})},getAllResourceCateList:function(){var e=this;Object(u.c)().then(function(t){e.allResourceCate=t.data;for(var c=0;c<e.allResourceCate.length;c++)e.allResourceCate[c].checked=!1;e.getAllResourceList()})},getResourceByCate:function(e){var t=[];if(null==this.allResource)return null;for(var c=0;c<this.allResource.length;c++){var n=this.allResource[c];n.categoryId===e&&t.push(n)}return t},getResourceByRole:function(e){var t=this;Object(s.h)(e).then(function(e){var c=e.data;t.allResource.forEach(function(e){e.checked=t.getResourceChecked(e.id,c)}),t.allResourceCate.forEach(function(e){e.checked=t.isAllChecked(e.id)}),t.$forceUpdate()})},getResourceChecked:function(e,t){if(null==t||0===t.length)return!1;for(var c=0;c<t.length;c++)if(t[c].id===e)return!0;return!1},isIndeterminate:function(e){var t=this.getResourceByCate(e);if(null==t)return!1;for(var c=0,n=0;n<t.length;n++)!0===t[n].checked&&c++;return!(0===c||c===t.length)},isAllChecked:function(e){var t=this.getResourceByCate(e);if(null==t)return!1;for(var c=0,n=0;n<t.length;n++)!0===t[n].checked&&c++;return 0!==c&&c===t.length},handleSave:function(){var e=this;this.$confirm("是否分配资源？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=new l.a;null!=e.allResource&&e.allResource.length>0&&e.allResource.forEach(function(e){e.checked&&t.add(e.id)});var c=new URLSearchParams;c.append("roleId",e.roleId),c.append("resourceIds",r()(t)),Object(s.b)(c).then(function(t){e.$message({message:"分配成功",type:"success",duration:1e3}),e.$router.back()})})},handleClear:function(){this.allResourceCate.forEach(function(e){e.checked=!1}),this.allResource.forEach(function(e){e.checked=!1}),this.$forceUpdate()},handleCheckAllChange:function(e){for(var t=this.getResourceByCate(e.id),c=0;c<t.length;c++)t[c].checked=e.checked;this.$forceUpdate()},handleCheckChange:function(e){var t=this;this.allResourceCate.forEach(function(c){c.id===e.categoryId&&(c.checked=t.isAllChecked(e.categoryId))}),this.$forceUpdate()}}},h={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[e._l(e.allResourceCate,function(t,n){return c("div",{key:"cate"+t.id,class:0===n?"top-line":null},[c("el-row",{staticClass:"table-layout",staticStyle:{background:"#F2F6FC"}},[c("el-checkbox",{attrs:{indeterminate:e.isIndeterminate(t.id)},on:{change:function(c){e.handleCheckAllChange(t)}},model:{value:t.checked,callback:function(c){e.$set(t,"checked",c)},expression:"cate.checked"}},[e._v("\n        "+e._s(t.name)+"\n      ")])],1),e._v(" "),c("el-row",{staticClass:"table-layout"},e._l(e.getResourceByCate(t.id),function(t){return c("el-col",{key:t.id,staticStyle:{padding:"4px 0"},attrs:{span:8}},[c("el-checkbox",{on:{change:function(c){e.handleCheckChange(t)}},model:{value:t.checked,callback:function(c){e.$set(t,"checked",c)},expression:"resource.checked"}},[e._v("\n          "+e._s(t.name)+"\n        ")])],1)}))],1)}),e._v(" "),c("div",{staticStyle:{"margin-top":"20px"},attrs:{align:"center"}},[c("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSave()}}},[e._v("保存")]),e._v(" "),c("el-button",{on:{click:function(t){e.handleClear()}}},[e._v("清空")])],1)],2)},staticRenderFns:[]};var d=c("VU/8")(i,h,!1,function(e){c("H5e+")},"data-v-7c0d3690",null);t.default=d.exports},"H5e+":function(e,t){},xJrl:function(e,t,c){"use strict";t.d=function(e){return Object(n.a)({url:"/resource/list",method:"get",params:e})},t.a=function(e){return Object(n.a)({url:"/resource/create",method:"post",data:e})},t.e=function(e,t){return Object(n.a)({url:"/resource/update/"+e,method:"post",data:t})},t.b=function(e){return Object(n.a)({url:"/resource/delete/"+e,method:"post"})},t.c=function(){return Object(n.a)({url:"/resource/listAll",method:"get"})};var n=c("vLgD")}});