(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e48be"],{"914d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"info"},on:{click:t.add}},[t._v("新增")]),a("Table",{staticStyle:{"margin-top":"10px"},attrs:{columns:t.columns1,data:t.data1}}),a("Modal",{attrs:{title:"新增",loading:t.loading},on:{"on-ok":function(e){t.ok3("formAdd")},"on-cancel":t.cancel3},model:{value:t.modal3,callback:function(e){t.modal3=e},expression:"modal3"}},[a("Form",{ref:"formAdd",attrs:{model:t.formAdd,"label-width":80,rules:t.ruleValidate}},[a("FormItem",{attrs:{label:"标题",prop:"title"}},[a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入标题"},model:{value:t.formAdd.title,callback:function(e){t.$set(t.formAdd,"title",e)},expression:"formAdd.title"}})],1),a("FormItem",{attrs:{label:"内容",prop:"main"}},[a("Input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:8,placeholder:"请输入内容"},model:{value:t.formAdd.main,callback:function(e){t.$set(t.formAdd,"main",e)},expression:"formAdd.main"}})],1)],1)],1),a("Modal",{attrs:{title:"修改",loading:t.loading1},on:{"on-ok":function(e){t.ok("formItem")},"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":80,rules:t.ruleValidate2}},[a("FormItem",{attrs:{label:"标题",prop:"title"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标题"},model:{value:t.formItem.title,callback:function(e){t.$set(t.formItem,"title",e)},expression:"formItem.title"}})],1),a("FormItem",{attrs:{label:"内容",prop:"main"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"textarea",autosize:!0,placeholder:"请输入内容"},model:{value:t.formItem.main,callback:function(e){t.$set(t.formItem,"main",e)},expression:"formItem.main"}})],1)],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("Page",{staticClass:"paging",attrs:{total:t.dataCount,"page-size":t.pageSize,"show-total":""},on:{"on-change":t.changepage}})],1)],1)},i=[],l=new Date,n={data:function(){var t=this;return{ruleValidate:{title:[{required:!0,message:"不能为空",trigger:"blur"}],main:[{required:!0,message:"不能为空",trigger:"blur"}]},ruleValidate2:{title:[{required:!0,message:"不能为空",trigger:"blur"}],main:[{required:!0,message:"不能为空",trigger:"blur"}]},type:[{value:"2",label:"指定用户"},{value:"1",label:"所有用户"}],date:"",time:"",adddate:"",addtime:"",formAdd:{title:"",main:"",jwt:localStorage.getItem("jwt")},formItem:{Id:"",title:"",main:"",jwt:localStorage.getItem("jwt")},formImg:{Id:"",img:null,jwt:localStorage.getItem("jwt")},modal1:!1,modal2:!1,modal3:!1,loading:!0,loading1:!0,modal3type:!0,ajaxHistoryData:[],dataCount:0,pageSize:10,page:1,columns1:[{title:"时间",key:"time"},{title:"标题",key:"title"},{title:"内容",key:"main"},{title:"状态",key:"type"},{title:"操作",key:"action",align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px",marginBottom:"3px"},on:{click:function(){t.xiugai(a.row)}}},"修改"),e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px",marginBottom:"3px"},attrs:{style:"background-color:#d6514d;border:1px solid #d6514d"},on:{click:function(){t.delete(a.row)}}},"删除")])}}],data1:[]}},created:function(){console.log(l,"当前时间"),this.tableShow()},methods:{tableShow:function(){var t=this;this.$axios({method:"post",url:"admin/mail/show",data:this.$qs.stringify({page:this.page,jwt:localStorage.getItem("jwt")})}).then(function(e){t.ajaxHistoryData=e.data.table,t.dataCount=e.data.count,e.data.count<t.pageSize?t.data1=e.data.table:t.data1=t.ajaxHistoryData.slice(0,t.pageSize)}).catch(function(e){t.$Message.error("请求超时,请稍后再试...")})},add:function(){this.modal3=!0},ok3:function(t){var e=this;this.$refs[t].validate(function(t){t?(e.$axios({method:"post",url:"admin/mail/insert",data:e.$qs.stringify({title:e.formAdd.title,main:e.formAdd.main,jwt:localStorage.getItem("jwt")})}).then(function(t){e.tableShow(),e.modal3=!1,e.formAdd={}}).catch(function(t){e.$Message.error("请求超时,请稍后再试...")}),callback()):(e.loading=!1,e.$nextTick(function(){e.loading=!0}),e.$Message.error("新增失败,请正确填写信息!"))}),this.tableShow(),this.formAdd={}},cancel3:function(){this.tableShow(),this.formAdd={}},xiugai:function(t){this.modal1=!0,this.formItem=t,this.formItem.Id=t.Id},ok:function(t){var e=this;this.$refs[t].validate(function(t){t?(e.$axios({method:"post",url:"admin/mail/upd",data:e.$qs.stringify({Id:e.formItem.Id,title:e.formItem.title,main:e.formItem.main,jwt:localStorage.getItem("jwt")})}).then(function(t){e.modal3=!1,e.modal1=!1,e.tableShow()}).catch(function(t){e.$Message.error("请求超时,请稍后再试...")}),callback()):(e.loading1=!1,e.$nextTick(function(){e.loading1=!0}),e.$Message.error("修改失败,请正确填写信息!"))})},cancel:function(){this.modal3=!1},delete:function(t){var e=this;this.$Modal.confirm({title:"删除",content:"确认删除该条信息吗？",onOk:function(){e.$axios({method:"post",url:"admin/Mail/delete",data:e.$qs.stringify({Id:t.Id,jwt:localStorage.getItem("jwt")})}).then(function(t){e.tableShow()}).catch(function(t){e.$Message.error("请求超时,请稍后再试...")})},onCancel:function(){e.$Message.info("取消")}})},changepage:function(t){this.page=t,this.tableShow();var e=(t-1)*this.pageSize,a=t*this.pageSize;this.data1=this.ajaxHistoryData.slice(e,a)}}},r=n,d=a("2877"),s=Object(d["a"])(r,o,i,!1,null,"376f9b52",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0e48be.6533bc7f.js.map