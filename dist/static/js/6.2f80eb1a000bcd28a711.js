webpackJsonp([6],{"8B2t":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Edqs"),n=a.n(r),s=a("Hmpo"),o=a.n(s),i=a("vYJH"),l=a.n(i),c=a("gm1x"),u=a("T452"),d=a("rV7I"),p={name:"service",data:function(){return{serviceData:[],searchForm:{},page:1,total:0,pagesize:10}},created:function(){this.serviceLists()},methods:{resetForm:function(t){this.$refs[t].resetFields()},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.serviceLists()})},serviceLists:function(){var t=this;return l()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.c)(t.searchForm);case 2:a=e.sent,t.loading=!0,a.data.code==u.d?(t.serviceData=a.data.data,t.total=10*a.data.data.total,t.loading=!1):Object(d.Message)(a.data.message);case 5:case"end":return e.stop()}},e,t)}))()},handleEdit:function(t){this.$router.push({path:"/service/edit/"+t})},handleCurrentChange:function(t){var e=n()(this.searchForm,{page:t});this.userLists(e)}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t._m(0),t._v(" "),a("div",{staticClass:"ibox-content"},[a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleEdit(0)}}},[t._v("新建服务")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.serviceData.data,border:""}},[a("el-table-column",{attrs:{prop:"protocol",label:"通信协议"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"host",label:"主机"}}),t._v(" "),a("el-table-column",{attrs:{prop:"path",label:"请求路径"}}),t._v(" "),a("el-table-column",{attrs:{prop:"port",label:"服务器端口"}}),t._v(" "),a("el-table-column",{attrs:{prop:"retries",label:"失败重试次数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"connect_timeout",label:"连接超时时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.row.id)}}},[t._v("编辑")])]}}])})],1),t._v(" "),t.total>10?a("el-row",{staticStyle:{"margin-top":"30px"},attrs:{type:"flex",justify:"center"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h3",[this._v("服务列表")])])}]},m=a("D8HT")(p,v,!1,null,null,null);e.default=m.exports},gm1x:function(t,e,a){"use strict";e.c=function(t){return Object(r.a)({url:"/kong/service/lists",method:"get",params:t})},e.a=function(t){return Object(r.a)({url:"/kong/service/add",method:"post",data:t})},e.d=function(t){return Object(r.a)({url:"/kong/service/upload",method:"post",data:t})},e.b=function(t){return Object(r.a)({url:"/kong/service/info",method:"get",params:t})};var r=a("BXx+")}});
//# sourceMappingURL=6.2f80eb1a000bcd28a711.js.map