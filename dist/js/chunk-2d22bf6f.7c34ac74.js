(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bf6f"],{f0e4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Button",{staticStyle:{"margin-right":"6px",float:"left"},attrs:{type:"info"},on:{click:t.add}},[t._v("新增")]),a("div",{staticStyle:{float:"left"}},[a("Select",{staticStyle:{width:"200px","margin-right":"3px"},attrs:{placeholder:"请选择机型大类键字搜索"}},t._l(t.data2,function(e){return a("Option",{key:e.Id,staticStyle:{width:"80px"},attrs:{value:e.name},nativeOn:{click:function(a){t.chioce4(e)}}},[t._v(t._s(e.name))])})),a("Select",{staticStyle:{width:"200px","margin-right":"3px"},attrs:{placeholder:"请选择品牌键字搜索"}},t._l(t.data3,function(e){return a("Option",{key:e.Id,staticStyle:{width:"80px"},attrs:{value:e.name},nativeOn:{click:function(a){t.chioce5(e)}}},[t._v(t._s(e.name))])}))],1),a("Input",{staticClass:"search-input",staticStyle:{width:"200px","margin-right":"3px"},attrs:{clearable:"",placeholder:"请输入关键字搜索"},model:{value:t.juti_name,callback:function(e){t.juti_name=e},expression:"juti_name"}}),a("Button",{attrs:{type:"info"},on:{click:t.handSeek}},[t._v("搜索")]),a("Table",{staticStyle:{"margin-top":"10px"},attrs:{columns:t.columns1,data:t.data1}}),a("Modal",{attrs:{title:"新增机型信息",loading:t.loading},on:{"on-ok":function(e){t.ok3("formAdd")},"on-cancel":t.cancel3},model:{value:t.modal3,callback:function(e){t.modal3=e},expression:"modal3"}},[a("Form",{ref:"formAdd",attrs:{model:t.formAdd,"label-width":80,rules:t.ruleValidate}},[a("FormItem",{attrs:{label:"机型大类",prop:"jixing"}},[a("Select",{staticStyle:{width:"200px"},model:{value:t.formAdd.jixing,callback:function(e){t.$set(t.formAdd,"jixing",e)},expression:"formAdd.jixing"}},t._l(t.jixing,function(e){return a("Option",{key:e.id,attrs:{value:e.name},nativeOn:{click:function(a){t.chioce(e)}}},[t._v(t._s(e.name))])}))],1),a("FormItem",{attrs:{label:"品牌",prop:"bid"}},[a("Select",{staticStyle:{width:"200px"},model:{value:t.formAdd.bid,callback:function(e){t.$set(t.formAdd,"bid",e)},expression:"formAdd.bid"}},t._l(t.pinpai,function(e){return a("Option",{key:e.id,attrs:{value:e.name},nativeOn:{click:function(a){t.chioce1(e)}}},[t._v(t._s(e.name))])}))],1),a("FormItem",{attrs:{label:"机型",prop:"name"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:""},model:{value:t.formAdd.name,callback:function(e){t.$set(t.formAdd,"name",e)},expression:"formAdd.name"}})],1)],1)],1),a("Modal",{attrs:{title:"修改机型信息",loading:t.loading1},on:{"on-ok":function(e){t.ok("formItem")},"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":80,rules:t.ruleValidate2}},[a("FormItem",{attrs:{label:"机型大类",prop:"jixing"}},[a("Select",{staticStyle:{width:"200px"},model:{value:t.formItem.jixing,callback:function(e){t.$set(t.formItem,"jixing",e)},expression:"formItem.jixing"}},t._l(t.jixing,function(e){return a("Option",{key:e.id,attrs:{value:e.name},nativeOn:{click:function(a){t.chioce2(e)}}},[t._v(t._s(e.name))])}))],1),a("FormItem",{attrs:{label:"品牌",prop:"bid"}},[a("Select",{staticStyle:{width:"200px"},model:{value:t.formItem.bid,callback:function(e){t.$set(t.formItem,"bid",e)},expression:"formItem.bid"}},t._l(t.pinpai1,function(e){return a("Option",{key:e.id,attrs:{value:e.name},nativeOn:{click:function(a){t.chioce3(e)}}},[t._v(t._s(e.name))])}))],1),a("FormItem",{attrs:{label:"机型",prop:"name"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:""},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1)],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("Page",{staticClass:"paging",attrs:{total:t.dataCount,"page-size":t.pageSize,"show-total":""},on:{"on-change":t.changepage}})],1)],1)},n=[],o=(a("7f7f"),{data:function(){var t=this;return{ruleValidate:{laptop_name:[{required:!0,message:"不能为空",trigger:"blur"}],series_name:[{required:!0,message:"不能为空",trigger:"blur"}],juti_name:[{required:!0,message:"不能为空",trigger:"blur"}]},ruleValidate2:{laptop_name:[{required:!0,message:"不能为空",trigger:"blur"}],series_name:[{required:!0,message:"不能为空",trigger:"blur"}],juti_name:[{required:!0,message:"不能为空",trigger:"blur"}]},juti_name:"",jixing:[],jixingId:"",pinpai:[],pinpai1:[],pinpaiId:"",laptop_name:"",series_name:"",formAdd:{bid:"",jixing:"",name:"",jwt:localStorage.getItem("jwt")},formItem:{Id:"",bid:"",jixing:"",name:"",jwt:localStorage.getItem("jwt")},modal1:!1,modal2:!1,modal3:!1,loading:!0,loading1:!0,ajaxHistoryData:[],dataCount:0,pageSize:10,page:1,columns1:[{title:"机型大类",key:"category_name"},{title:"品牌",key:"type_name"},{title:"机型",key:"name"},{title:"操作",key:"action",align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px",marginBottom:"5px"},on:{click:function(){t.xiugai(a.row)}}},"修改"),e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px",marginBottom:"5px"},attrs:{style:"background-color:#d6514d;border:1px solid #d6514d"},on:{click:function(){t.delete(a.row)}}},"删除")])}}],data1:[],data2:[],data3:[]}},created:function(){this.tableShow(),this.Lei(),this.pinpaishow()},methods:{tableShow:function(){var t=this;this.$axios({method:"post",url:"admin/Version/show",data:this.$qs.stringify({cid:this.jixingId,bid:this.pinpaiId,name:this.juti_name,page:this.page,jwt:localStorage.getItem("jwt")})}).then(function(e){t.ajaxHistoryData=e.data.table,t.dataCount=e.data.count,e.data.count<t.pageSize?t.data1=e.data.table:t.data1=t.ajaxHistoryData.slice(0,t.pageSize)}).catch(function(e){t.$Message.error("请求超时,请稍后再试...")})},chioce4:function(t){this.jixingId=t.Id,this.pinpaishow()},chioce5:function(t){this.pinpaiId=t.Id},handSeek:function(){this.tableShow()},Lei:function(){var t=this;this.$axios({method:"post",url:"admin/Category/show",data:this.$qs.stringify({name:this.juti_name,jwt:localStorage.getItem("jwt")})}).then(function(e){t.jixing=e.data.table,t.data2=e.data.table}).catch(function(e){t.$Message.error("请求超时,请稍后再试...")})},pinpaishow:function(){var t=this;this.$axios({method:"post",url:"admin/Brand/show",data:this.$qs.stringify({name:this.juti_name,cid:this.jixingId,jwt:localStorage.getItem("jwt")})}).then(function(e){t.pinpai=e.data.table,t.pinpai1=e.data.table,t.data3=e.data.table}).catch(function(e){t.$Message.error("请求超时,请稍后再试...")})},add:function(){this.modal3=!0,this.Lei()},chioce:function(t){this.jixingId=t.Id,this.pinpaishow()},chioce1:function(t){this.pinpaiId=t.Id},ok3:function(t){var e=this;this.$refs[t].validate(function(t){t?(e.$axios({method:"post",url:"admin/Version/insert",data:e.$qs.stringify({bid:e.pinpaiId,name:e.formAdd.name,jwt:localStorage.getItem("jwt")})}).then(function(t){e.tableShow(),e.modal3=!1,e.formAdd={}}).catch(function(t){e.modal3=!1,e.$Message.error("请求超时,请稍后再试...")}),callback()):(e.loading=!1,e.$nextTick(function(){e.loading=!0}),e.$Message.error("新增失败，请填写完整的信息!"))}),this.tableShow(),this.formAdd={}},cancel3:function(){this.tableShow(),this.formAdd={}},xiugai:function(t){this.modal1=!0,this.formItem=t,this.formItem.Id=t.Id,this.Lei()},chioce2:function(t){this.jixingId=t.Id,this.pinpaishow()},chioce3:function(t){this.pinpaiId=t.Id},ok:function(t){var e=this;this.$refs[t].validate(function(t){t?(e.$axios({method:"post",url:"admin/Version/upd",data:e.$qs.stringify({Id:e.formItem.Id,bid:e.pinpaiId,name:e.formItem.name,jwt:localStorage.getItem("jwt")})}).then(function(t){e.modal1=!1,e.tableShow()}).catch(function(t){e.$Message.error("请求超时,请稍后再试...")}),callback()):(e.loading=!1,e.$nextTick(function(){e.loading=!0}),e.$Message.error("修改失败,请正确填写信息!"))}),this.tableShow()},cancel:function(){this.modal3=!1},delete:function(t){var e=this;this.$Modal.confirm({title:"删除",content:"确认删除该条信息吗？",onOk:function(){e.$axios({method:"post",url:"admin/Version/delete",data:e.$qs.stringify({Id:t.Id,jwt:localStorage.getItem("jwt")})}).then(function(t){e.tableShow()}).catch(function(t){e.$Message.error("请求超时,请稍后再试...")})},onCancel:function(){e.$Message.info("取消")}})},changepage:function(t){this.page=t,this.tableShow();var e=(t-1)*this.pageSize,a=t*this.pageSize;this.data1=this.ajaxHistoryData.slice(e,a)}}}),l=o,r=a("2877"),s=Object(r["a"])(l,i,n,!1,null,"1de8deab",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d22bf6f.7c34ac74.js.map