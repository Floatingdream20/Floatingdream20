webpackJsonp([28],{2562:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(419),d=n(s),f=a(658),p=a(2563),m=n(p),y=a(2564),h=n(y),E={active:{border:"1px solid #ddd",borderBottom:"1px solid #fff",backgroundColor:"#fff"}},g=(u=(0,f.connect)(function(e){return{operatorId:e.router.location.query.operatorId}}))(i=function(e){function t(){var e,a,n,o;l(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={index:n.props.operatorId?2:1},n.changeItem=function(e){return function(){n.setState({index:e})}},o=a,r(n,o)}return o(t,e),c(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"container-wrapper url-container-wrapper"},d.default.createElement("div",{className:"container member-container"},d.default.createElement("div",{className:"system-setting"},d.default.createElement("p",{className:"table-name"},"费用中心"),d.default.createElement("hr",null),d.default.createElement("div",{style:{marginTop:"30px"}},d.default.createElement("nav",null,d.default.createElement("span",{style:1===this.state.index?E.active:{},onClick:this.changeItem(1)},"充值记录"),d.default.createElement("span",{style:2===this.state.index?E.active:{},onClick:this.changeItem(2)},"消费记录"))),1===this.state.index?d.default.createElement(m.default,null):d.default.createElement(h.default,null))))}}]),t}(s.Component))||i;t.default=g},2563:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(419),d=n(s),f=a(949),p=n(f),m=a(658),y=a(708),h=n(y),E=a(728),g=n(E),b=a(1087),N=a(711),v=n(N),C=a(2042),S=n(C),D=a(896),O=a(2191),T={flex:{display:"inline-flex",alignItems:"center"}},w=(u=(0,m.connect)(function(e){return{costInfo:e.order.costInfo,pathname:e.router.location.pathname,orderStatus:e.router.location.query.orderStatus}}))(i=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={date:null,startDate:"",endDate:"",showCancelModal:!1,showDetailModal:!1},a.componentWillMount=function(){a.doQuery()},a.date=function(e){return new Date(e).getTime()},a.doQuery=function(e){var t=""===a.state.startDate?"":a.date(a.state.startDate),n=""===a.state.endDate?"":0===a.date(a.state.endDate)?"":a.date(a.state.endDate),l=a.status;a.props.dispatch((0,O.getCost)({feeType:"IN",keyword:"",startDate:t,endDate:n,refType:"",tradeStatus:l,userId:"",pageNo:a.pageNo,pageSize:a.props.size?a.props.size:a.pageSize}))},a.queryByStatus=function(e){a.status!==e&&(a.status=e,a.pageNo=0,a.doQuery(a.props))},a.handlePageClick=function(e){a.pageNo=e.selected,a.doQuery(a.props)},a.openCancelModal=function(e){return function(){a.setState({showCancelModal:!0}),a.currOrder=e}},a.closeCancelModal=function(){a.setState({showCancelModal:!1})},a.handleDeleteOrder=function(e){a.props.dispatch((0,O.deleteOrder)(e,function(){a.closeCancelModal(),a.doQuery(a.props)}))},a.queryByPageSize=function(e){a.pageSize!=e&&(a.pageSize=e,a.pageNo=0,a.doQuery(a.props))},a.queryByPageNo=function(e){a.pageNo!=e-1&&(a.pageNo=e-1,a.doQuery(a.props))},a.showDetail=function(e){a.props.dispatch((0,O.getSingleOrder)(e,function(e){a.orderDetail=e,a.forceUpdate(),a.setState({showDetailModal:!0})}))},a.closeDetailModal=function(){a.setState({showDetailModal:!1})},a.resetCondition(),a}return o(t,e),c(t,[{key:"resetCondition",value:function(){this.status=this.props.orderStatus||"",this.pageNo=0,this.pageSize=20,this.orderDetail={}}},{key:"render",value:function(){var e=this,t=this.props,a=t.costInfo,n=t.BQChainAccountTime,l=t.pathname,r=p.default.get("yyyy/mm/dd hh:MM"),o=0===l.indexOf("/customer/cost-center"),u=[{label:"订单编号",prop:"id",minWidth:"19%"},{label:"下单时间",prop:"createdDate",minWidth:"16%",sortable:!0,render:function(e){return d.default.createElement("span",null,r.format(e.createdDate))}},{label:"订单详情",prop:"description",minWidth:"15%"},{label:"订单金额",prop:"amount",minWidth:"15%",render:function(e){return d.default.createElement("div",null,e.createdDate>=n?d.default.createElement("span",null,parseFloat(e.amount).toFixed(2)," 宝泉币"):d.default.createElement("span",null,"¥ ",parseFloat(e.amount).toFixed(2)))}},{label:"订单状态",prop:"tradeStatus",minWidth:"10%",render:function(e){return d.default.createElement("span",null,S.default.payStatus(e.tradeStatus))}},{label:"支付方式",prop:"tradeStatus",minWidth:"10%",render:function(e){return d.default.createElement("span",null,"TRADE_SUCCESS"===e.tradeStatus?S.default.payType(e.payType):"——")}},o?{label:"操作",minWidth:"0%",render:function(e){return d.default.createElement("span",null)}}:{label:"操作",minWidth:"15%",render:function(t){return d.default.createElement("div",null,"WAIT_BUYER_PAY"===t.tradeStatus?d.default.createElement("div",{style:T.flex},d.default.createElement(g.default,{to:"/order/"+t.id+"?type=evidence"},d.default.createElement("p",{className:"blue"},"立即支付")),d.default.createElement("p",{onClick:e.openCancelModal(t),style:{marginLeft:20,cursor:"pointer"},className:"operates blue"},"取消交易")):"TRADE_SUCCESS"===t.tradeStatus&&"充值"===t.description?d.default.createElement("span",{className:"operates blue",style:{cursor:"pointer"},onClick:function(){return e.showDetail(t.id)}},"查看详情"):d.default.createElement("span",{className:"no-operates"},"——"))}}];return d.default.createElement("div",null,d.default.createElement("div",{className:"table-search-bar"},d.default.createElement("div",{className:"left-search-bar"},d.default.createElement(b.DateRangePicker,{value:this.state.date,placeholder:"选择日期范围",onChange:function(t){e.setState({date:t}),null!==t?(e.state.startDate=e.date(t[0]),e.state.endDate=e.date(t[1])):(e.state.startDate="",e.state.endDate=""),e.doQuery()}}),o?"":d.default.createElement(b.Select,{value:this.status,placeholder:"",onChange:function(t){return e.queryByStatus(t)}},d.default.createElement(b.Select.Option,{key:"",label:"全部订单状态",value:""}),d.default.createElement(b.Select.Option,{key:"WAIT_BUYER_PAY",label:h.default.translate("order.un-pay"),value:"WAIT_BUYER_PAY"}),d.default.createElement(b.Select.Option,{key:"TRADE_SUCCESS",label:h.default.translate("order.pay"),value:"TRADE_SUCCESS"}),d.default.createElement(b.Select.Option,{key:"TRADE_CLOSED",label:"已取消",value:"TRADE_CLOSED"})))),d.default.createElement("div",{className:(0,v.default)("common-table-wrapper",{"orders-table":this.props.isShortTable})},d.default.createElement(b.Table,{style:{width:"100%"},columns:u,data:a.data}),a.data&&a.data.length>0?d.default.createElement("div",{className:"common-page-wrapper"},d.default.createElement(b.Pagination,{layout:"total, sizes, prev, pager, next, jumper",pageCount:a.totalPage,pageSizes:[20,50,100,500],pageSize:this.pageSize,currentPage:this.pageNo+1,onSizeChange:function(t){return e.queryByPageSize(t)},onCurrentChange:function(t){return e.queryByPageNo(t)},total:a.totalElements})):""),this.state.showCancelModal?d.default.createElement(D.ModalContainer,{onClose:this.closeCancelModal},d.default.createElement(D.ModalDialog,{onClose:this.closeCancelModal,width:665,className:"example-dialog",dismissOnBackgroundClick:!0},d.default.createElement("h1",null,h.default.translate("order.cancel")),d.default.createElement("form",{className:"confirm"},d.default.createElement("p",null,h.default.translate("order.to-cancel"),"?"),d.default.createElement("div",{className:"button-group"},d.default.createElement("button",{type:"button",className:"yes",onClick:function(t){return e.handleDeleteOrder(e.currOrder.id)}},h.default.translate("order.ok")))))):null,this.state.showDetailModal?d.default.createElement(D.ModalContainer,{onClose:this.closeDetailModal},d.default.createElement(D.ModalDialog,{onClose:this.closeDetailModal,width:665,className:"example-dialog",dismissOnBackgroundClick:!0},d.default.createElement("h1",null,"客户基础功能套餐购买"),d.default.createElement("div",{className:"modal-content",style:{padding:"0 0 20px 0"}},d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"订单编号"),d.default.createElement("p",null,this.orderDetail.id)),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"订单类型"),d.default.createElement("p",null,this.orderDetail.description)),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"订单创建时间"),d.default.createElement("p",null,r.format(this.orderDetail.createdDate))),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"支付时间"),d.default.createElement("p",null,this.orderDetail.paidDate?r.format(this.orderDetail.paidDate):"——")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"支付方式"),d.default.createElement("p",null,this.orderDetail.payType?S.default.payType(this.orderDetail.payType):"——")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"支付商户流水号"),d.default.createElement("p",null,this.orderDetail.tradeNo||"——")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"支付金额（元）"),d.default.createElement("p",null,this.orderDetail.amount)))))):null)}}]),t}(s.Component))||i;t.default=w},2564:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(419),d=n(s),f=a(949),p=n(f),m=a(658),y=a(1087),h=a(711),E=n(h),g=a(2042),b=n(g),N=a(2191),v=a(2565),C=n(v),S=a(869),D=a(2191),O=a(865),T=n(O),w=void 0,_=(u=(0,m.connect)(function(e){return{costInfo:e.order.costInfo,dictionaries:e.user.dictionaries,operatorList:e.user.operatorList,operatorId:e.router.location.query.operatorId}}))(i=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={showModal:!1,modalType:"",date:null,startDate:"",endDate:""},a.componentWillMount=function(){a.doQuery();var e={parantId:"",dictNames:"OrderConsumeType",keyWord:""};a.props.dispatch((0,S.getAllDictionaries)(e)),w="TEAM_MAIN"===T.default.userIdentity||"BOTH_MAIN"===T.default.userIdentity},a.date=function(e){return new Date(e).getTime()},a.doQuery=function(e){var t=""===a.state.startDate?"":a.date(a.state.startDate),n=""===a.state.endDate?"":0===a.date(a.state.endDate)?"":a.date(a.state.endDate);a.props.dispatch((0,N.getCost)({feeType:"OUT",keyword:"",startDate:t,endDate:n,refType:a.refType,status:"",userId:a.operate,pageNo:a.pageNo,pageSize:a.props.size?a.props.size:a.pageSize}))},a.queryByRefType=function(e){a.refType!==e&&(a.refType=e,a.pageNo=0,a.doQuery(a.props))},a.queryByOperate=function(e){a.operate!==e&&(a.operate=e,a.pageNo=0,a.doQuery(a.props))},a.handlePageClick=function(e){a.pageNo=e.selected,a.doQuery(a.props)},a.queryByPageSize=function(e){a.pageSize!=e&&(a.pageSize=e,a.pageNo=0,a.doQuery(a.props))},a.queryByPageNo=function(e){a.pageNo!=e-1&&(a.pageNo=e-1,a.doQuery(a.props))},a.getName=function(e){var t=a.props.dictionaries,n="";return t&&t.OrderConsumeType&&t.OrderConsumeType.length>0&&t.OrderConsumeType.map(function(t){if(t.enumName===e)return void(n=t.name)}),n},a.getOnlineDetail=function(e,t){a.props.dispatch((0,D.getConsumeOrderOnline)(t,function(e){a.openModal(e.data,"online")})),a.time=e,a.forceUpdate()},a.getOfflineDetail=function(e,t){a.props.dispatch((0,D.getConsumeOrderOffline)(t,function(e){a.openModal(e.data,"offline")})),a.time=e,a.forceUpdate()},a.openModal=function(e,t){a.setState({showModal:!0,modalType:t}),a.orderDetail=e,a.forceUpdate()},a.hideModal=function(){a.setState({showModal:!1,modalType:""}),a.orderDetail={},a.forceUpdate()},a.resetCondition(),a}return o(t,e),c(t,[{key:"resetCondition",value:function(){this.refType="",this.operate=this.props.operatorId?this.props.operatorId:"",this.pageNo=0,this.pageSize=20,this.orderDetail={},this.time}},{key:"render",value:function(){var e=this,t=this.props,a=t.costInfo,n=t.BQChainAccountTime,l=t.dictionaries,r=t.operatorList,o=p.default.get("yyyy/mm/dd hh:MM"),u=[{label:"消费类型",prop:"refType",minWidth:"15%",render:function(t){return d.default.createElement("span",null,e.getName(t.refType))}},{label:"消费时间",prop:"createdDate",minWidth:"15%",sortable:!0,render:function(e){return d.default.createElement("span",null,o.format(e.createdDate))}},{label:"消费详情",prop:"description",minWidth:"15%"},{label:"消费金额",prop:"amount",minWidth:"15%",render:function(e){return d.default.createElement("div",null,e.createdDate>=n?d.default.createElement("span",null,parseFloat(e.amount).toFixed(2)," 宝泉币"):d.default.createElement("span",null,"¥ ",parseFloat(e.amount).toFixed(2)))}},{label:"支付方式",prop:"tradeStatus",minWidth:"10%",render:function(e){return d.default.createElement("span",null,b.default.payType(e.payType))}},w?{label:"操作人",prop:"realName",minWidth:"15%",render:function(e){return d.default.createElement("span",null,e.realName?e.realName:"——")}}:{label:"操作人",prop:"status",minWidth:"0%",render:function(e){return d.default.createElement("span",null)}},{label:"操作",minWidth:"15%",render:function(t){return d.default.createElement("div",null,t.itemPriceId&&null!==t.itemPriceId?d.default.createElement("span",{className:"operates blue",style:{cursor:"pointer"},onClick:function(){return e.getOnlineDetail(t.createdDate,{itemId:t.itemPriceId,productType:t.refType})}},"查看详情"):t.mainSonItemId&&null!==t.mainSonItemId?d.default.createElement("span",{className:"operates blue",style:{cursor:"pointer"},onClick:function(){return e.getOfflineDetail(t.createdDate,{itemId:t.mainSonItemId})}},"查看详情"):d.default.createElement("span",null,"——"))}}];return d.default.createElement("div",null,d.default.createElement("div",{className:"table-search-bar"},d.default.createElement("div",{className:"left-search-bar"},d.default.createElement(y.DateRangePicker,{value:this.state.date,placeholder:"选择日期范围",onChange:function(t){e.setState({date:t}),null!==t?(e.state.startDate=e.date(t[0]),e.state.endDate=e.date(t[1])):(e.state.startDate="",e.state.endDate=""),e.doQuery()}}),d.default.createElement(y.Select,{value:this.refType,placeholder:"",onChange:function(t){return e.queryByRefType(t)}},d.default.createElement(y.Select.Option,{key:"",label:"全部消费类型",value:""}),l&&l.OrderConsumeType?l.OrderConsumeType.map(function(e,t){return d.default.createElement(y.Select.Option,{key:e.enumName,label:e.name,value:e.enumName})}):""),w?d.default.createElement(y.Select,{value:this.operate,placeholder:"",onChange:function(t){return e.queryByOperate(t)}},d.default.createElement(y.Select.Option,{key:"",label:"全部操作人",value:""}),r.length>0?r.map(function(e){return d.default.createElement(y.Select.Option,{key:e.code,label:e.realName,value:e.code})}):""):"")),d.default.createElement("div",{className:(0,E.default)("common-table-wrapper",{"orders-table":this.props.isShortTable})},d.default.createElement(y.Table,{style:{width:"100%"},columns:u,data:a.data}),a.data&&a.data.length>0?d.default.createElement("div",{className:"common-page-wrapper"},d.default.createElement(y.Pagination,{layout:"total, sizes, prev, pager, next, jumper",pageCount:a.totalPage,pageSizes:[20,50,100,500],pageSize:this.pageSize,currentPage:this.pageNo+1,onSizeChange:function(t){return e.queryByPageSize(t)},onCurrentChange:function(t){return e.queryByPageNo(t)},total:a.totalElements})):""),this.state.showModal?d.default.createElement(C.default,{type:this.state.modalType,info:this.orderDetail,hide:this.hideModal,time:this.time}):"")}}]),t}(s.Component))||i;t.default=_},2565:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(419),d=n(s),f=a(896),p=a(658),m=a(949),y=n(m),h=a(2566),E=(n(h),(u=(0,p.connect)(function(e){return{}}))(i=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.modalNameOnline=function(e){switch(e){case"ATTESTATION":return"存证确权套餐购买";case"URLATTESTATION":return"网页取证套餐购买"}},a.modalNameOffline=function(e){return e?"购买公证消费":"基础功能套餐购买"},a}return o(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.info,n=e.hide,l=e.time,r=y.default.get("yyyy/mm/dd hh:MM:ss");return d.default.createElement(f.ModalContainer,{onClose:n},d.default.createElement(f.ModalDialog,{onClose:n,width:800,className:"example-dialog",dismissOnBackgroundClick:!0},"online"===t?d.default.createElement("h1",{className:"admin-table-title copyright-model-title"},this.modalNameOnline(a.productType)):d.default.createElement("h1",{className:"admin-table-title copyright-model-title"},"SON"===a.mainSonAccount?"客户":"",this.modalNameOffline(a.purchase)),"online"===t?d.default.createElement("div",{className:"modal-content purchase-history-modal",style:{margin:"30px 30px",padding:0}},d.default.createElement("div",null,d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"套餐名称"),d.default.createElement("span",{className:"item-info"},a.name)),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"消费时间"),d.default.createElement("span",{className:"item-info"},l?r.format(l):"——")))),d.default.createElement("div",null,d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"套餐价格"),d.default.createElement("span",{className:"item-info"},a.amount,"宝泉币")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"套餐包含"),"URLATTESTATION"==a.productType?d.default.createElement("span",{className:"item-info"},"网页取证",a.usedCount,"次（",a.expiryDate,"年）"):a.storageCapacity&&""!==a.storageCapacity&&null!==a.storageCapacity&&0!==a.storageCapacity?d.default.createElement("span",{className:"item-info"},"存证容量",a.storageCapacity,"G（",a.expiryDate,"年）"):d.default.createElement("span",{className:"item-info"},"存证容量",a.usedCount,"G（",a.expiryDate,"年）"))))):"offline"===t?d.default.createElement("div",{className:"modal-content purchase-history-modal",style:{margin:"30px 30px",padding:0}},d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"发放账号"),d.default.createElement("span",{className:"item-info"},a.userPhone,"SON"===a.mainSonAccount?"（客户）":"")),"SON"===a.mainSonAccount?d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"客户名称"),d.default.createElement("span",{className:"item-info"},a.userRealName)):""),d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"消费金额"),d.default.createElement("span",{className:"item-info"},a.totalPrice,"宝泉币")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"消费时间"),d.default.createElement("span",{className:"item-info"},l?r.format(l):"——"))),a.purchase?d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"购买公证"),d.default.createElement("span",{className:"item-info"},a.reason?a.reason:"——"))):[d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"存证确权"),d.default.createElement("span",{className:"item-info"},a.urlAttestionCount,"G (单价",a.urlAttestionCountUnit,"宝泉币/10G）")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"站点监测"),d.default.createElement("span",{className:"item-info"},a.monitorCount,"次 (单价",a.monitorCountUnit,"宝泉币/次）"))),d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"网页取证"),d.default.createElement("span",{className:"item-info"},a.urlAttestionCount,"次 (单价",a.urlAttestionCountUnit,"宝泉币/次）")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"过程取证"),d.default.createElement("span",{className:"item-info"},a.processEvidence,"分钟 (单价",a.processEvidenceUnit,"宝泉币/分钟）"))),d.default.createElement("article",null,d.default.createElement("section",{className:"left-item"},d.default.createElement("span",{className:"name"},"保全公证"),d.default.createElement("span",{className:"item-info"},a.capacity,"份 (单价",a.capacityUnit,"宝泉币/份）")),d.default.createElement("section",null,d.default.createElement("span",{className:"name"},"司法鉴定"),d.default.createElement("span",{className:"item-info"},a.verifyCount,"份 (单价",a.verifyCountUnit,"宝泉币/份）")))]):""))}}]),t}(s.Component))||i);t.default=E},2566:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(708),o=(function(e){e&&e.__esModule?e:{default:e}}(r),function(){function e(){n(this,e)}return l(e,null,[{key:"bytesToSize",value:function(e){if(0===e)return"0";return e/1024/1024}}]),e}());t.default=o}});