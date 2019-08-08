webpackJsonp([53],{"6qob":function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}Object.defineProperty(n,"__esModule",{value:!0});var s=t("1yrQ"),p=t.n(s),d=t("HAEX"),b=t.n(d),h=t("GiK3"),y=t.n(h),v=t("HwDa"),m=t("tbzj"),g=t("TVfK"),O=t("5e7e"),w=t("X1iA"),j=t.n(w),E=t("pEc1"),_=t("m328"),x=t("voi2").default,k=t("bjKi").default,P=t("CGDf").default,C=b.a.Link,L=p.a.Row,T=p.a.Col;n.default=Object(g.a)(O.a,function(e){function n(){return r(this,n),a(this,u(n).apply(this,arguments))}return l(n,e),i(n,[{key:"render",value:function(){var e=this.props,n=e.next,t=e.prev;return y.a.createElement(L,null,y.a.createElement(T,{span:20},y.a.createElement("div",{style:{paddingRight:"50px"}},y.a.createElement(_.a,{title:"\u951a\u70b9",subTitle:"Anchor",desc:"\u7528\u4e8e\u8df3\u8f6c\u5230\u9875\u9762\u6307\u5b9a\u4f4d\u7f6e\u3002"}),y.a.createElement(E.a,{title:"\u57fa\u672c\u7528\u6cd5",titleID:"anchor-0",code:y.a.createElement("code",null,'import React from \'react\';\n\nimport {Anchor} from \'@lugia/lugia-web\';\n\n\n\nconst { Link } = Anchor;\n\n\n\nexport default class AnchorDemo extends React.Component {\n\n    render(){\n\n        return (\n\n            <Anchor slideType="circle">\n\n              <Link title="\u57fa\u672c\u7528\u6cd5" href="#anchor-0" />\n\n              <Link title="\u6307\u5b9a\u5bb9\u5668" href="#anchor-1" />\n\n              <Link title="\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03" href="#anchor-2" />\n\n            </Anchor>\n\n        );\n\n    }\n\n}\n\n'),desc:"\u6700\u7b80\u5355\u7684\u7528\u6cd5",demo:y.a.createElement(x,null)}),y.a.createElement(E.a,{title:"\u6307\u5b9a\u5bb9\u5668",titleID:"anchor-1",code:y.a.createElement("code",null,'import React from \'react\';\n\nimport {Anchor} from \'@lugia/lugia-web\';\n\n\n\nconst { Link } = Anchor;\n\n\n\nexport default class AnchorDemo extends React.Component {\n\n    render(){\n\n        return (\n\n            <div style={{marginLeft: \'200px\'}}>\n\n                <Anchor slideType="circle" affix={false}>\n\n                    <Link title="\u57fa\u672c\u7528\u6cd5" href="#anchor-0" />\n\n                    <Link title="\u6307\u5b9a\u5bb9\u5668" href="#anchor-1" />\n\n                    <Link title="\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03" href="#anchor-2" />\n\n                </Anchor>\n\n            </div>\n\n        );\n\n    }\n\n}\n\n'),desc:"\u6307\u5b9a\u6eda\u52a8\u5bb9\u5668",demo:y.a.createElement(k,null)}),y.a.createElement(E.a,{title:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03",titleID:"anchor-2",code:y.a.createElement("code",null,'import React from \'react\';\n\nimport {Anchor} from \'@lugia/lugia-web\';\n\n\n\nconst { Link } = Anchor;\n\n\n\nexport default class AnchorDemo extends React.Component {\n\n    render(){\n\n        return (\n\n            <div style={{marginLeft: \'400px\'}}>\n\n                <Anchor slideType="none">\n\n                  <Link title="\u57fa\u672c\u7528\u6cd5" href="#anchor-0" />\n\n                  <Link title="\u6307\u5b9a\u5bb9\u5668" href="#anchor-1" />\n\n                  <Link title="\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03" href="#anchor-2" />\n\n                </Anchor>\n\n            </div>\n\n\n\n        );\n\n    }\n\n}\n\n'),desc:"\u53ef\u4ee5\u83b7\u53d6\u662f\u5426\u56fa\u5b9a\u72b6\u6001",demo:y.a.createElement(P,null)}),y.a.createElement(v.a,{dataSource:j.a}),y.a.createElement(m.a,{prev:t,next:n}))),y.a.createElement(T,{span:4},y.a.createElement(b.a,{slideType:"line"},y.a.createElement(C,{title:"\u57fa\u672c\u7528\u6cd5",href:"#anchor-0"}),y.a.createElement(C,{title:"\u6307\u5b9a\u5bb9\u5668",href:"#anchor-1"}),y.a.createElement(C,{title:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03",href:"#anchor-2"}))))}}]),n}(y.a.Component))},"9Ybb":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.Circle=n.Anchor=void 0;var i=o(["\n  font-size: ","rem;\n  position: relative;\n  background-color: #fff;\n  ",";\n  box-sizing: border-box;\n  padding-bottom: ",";\n\n  & > div:first-child {\n    padding-top: ",";\n  }\n"],["\n  font-size: ","rem;\n  position: relative;\n  background-color: #fff;\n  ",";\n  box-sizing: border-box;\n  padding-bottom: ",";\n\n  & > div:first-child {\n    padding-top: ",";\n  }\n"]),a=o(["\n  position: absolute;\n  ",";\n  left: -",";\n  ",";\n  transition: all 0.3s ease-in-out;\n  transform: translateX(-50%);\n"],["\n  position: absolute;\n  ",";\n  left: -",";\n  ",";\n  transition: all 0.3s ease-in-out;\n  transform: translateX(-50%);\n"]),c=t("STmI"),u=t("zVqY"),l=r(u),f=t("w2vo"),s=r(f),p=(0,c.px2emcss)(1.2),d=(0,l.default)(),b=d.themeColor,h=function(e){var n=e.slideLine;if(void 0===n||n)return"border-left: "+p(1)+" solid #e8e8e8;"},y=(n.Anchor=s.default.div(i,1.2,h,p(6),p(6)),function(e){var n=e.index,t=e.slideType;if((n||0===n)&&-1<n){var r=24*n;return"circle"===t&&(r+=8),"top: "+p(r)+";background: "+b+";"}return"display: none"}),v=function(e){return"circle"===e.slideType?"\n      width: "+p(8)+";\n      height: "+p(8)+";\n      border-radius: 8px;\n    ":"\n    width: "+p(2)+";\n    height: "+p(24)+";\n  "};n.Circle=s.default.div(a,v,p(.5),y)},CGDf:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return y});var s=t("HAEX"),p=t.n(s),d=t("GiK3"),b=t.n(d),h=p.a.Link,y=function(e){function n(){return r(this,n),a(this,u(n).apply(this,arguments))}return l(n,e),i(n,[{key:"render",value:function(){return b.a.createElement("div",{style:{marginLeft:"400px"}},b.a.createElement(p.a,{slideType:"none"},b.a.createElement(h,{title:"\u57fa\u672c\u7528\u6cd5",href:"#anchor-0"}),b.a.createElement(h,{title:"\u6307\u5b9a\u5bb9\u5668",href:"#anchor-1"}),b.a.createElement(h,{title:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03",href:"#anchor-2"})))}}]),n}(b.a.Component)},HAEX:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t("q/pM"),i=r(o),a=t("qdA+"),c=r(a);i.default.Link=c.default,n.default=i.default},HwDa:function(e,n,t){"use strict";function r(){var e=u(["\n  font-family: '\u5fae\u8f6f\u96c5\u9ed1';\n  font-size: 18px;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  &:before {\n    display: inline-block;\n    content: ' ';\n    width: 4px;\n    height: 18px;\n    background: ",";\n    border-radius: 2px;\n    margin-right: 8px;\n    vertical-align: bottom;\n  }\n"]);return r=function(){return e},e}function o(){var e=u(["\n  \n  \n"]);return o=function(){return e},e}function i(){var e=u(["\n  padding:15px 20px;\n  min-height:48px;\n  vertical-align:middle;\n  line-height:24px;\n  max-width:242px;\n  color:","\n"]);return i=function(){return e},e}function a(){var e=u(["\n  border-bottom:1px solid #e8e8e8;\n"]);return a=function(){return e},e}function c(){var e=u(["\n  border-top: 1px solid #e8e8e8;\n  border-collapse: collapse;\n  text-align: left;\n  margin: 10px 0;\n  background: #fff;\n  font-family: '\u5fae\u8f6f\u96c5\u9ed1';\n  font-size: 14px;\n  width:100%;\n"]);return c=function(){return e},e}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n,t){return n&&f(e.prototype,n),t&&f(e,t),e}function p(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?d(e):n}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,n,t){return n&&m(e.prototype,n),t&&m(e,t),e}function O(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?w(e):n}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_(e,n)}function _(e,n){return(_=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var x=t("GiK3"),k=t("w2vo"),P=t("zVqY"),C=t.n(P),L=C()(),T=L.themeColor,S=k.default.table(c()),A=k.default.tr(a()),z=k.default.td(i(),function(e){return e.mode?"#f8ac30":"#36384c"}),M=k.default.div(o()),R=k.default.div(r(),T),V=function(e){var n=[];for(var t in e)e[t].name=t,n.push(e[t]);return n},D=function(e){var n=[];return e.forEach(function(e){n.push(e.name+" : "+e.type+" ("+e.desc+")")}),n},G=function(e){return e.map(function(e){return x.createElement(M,null,e)})},B=function(e){return e&&"undefined"!==e&&"null"!==e?e.toString():"\u2014\u2014"},K=function(e,n){if(!(n&&e in n))return e;var t=n[e],r=t;return Array.isArray(t)||(r=[],t=V(t),t.forEach(function(e){r.push(e.name+"["+e.type+"]")})),e+" (\u53ef\u9009\u503c: "+r.toString()+")"},I=function(e){function n(){var e,t;l(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=p(this,(e=b(n)).call.apply(e,[this].concat(o))),t.getProps=function(e){var n=t.state.dataSource[e],r=V(n);if(!(r.length<=0)){var o="props"===e?"\u5c5e\u6027":"\u4e8b\u4ef6",i="props"===e?["\u53c2\u6570","\u63cf\u8ff0","\u6570\u636e\u7c7b\u578b","\u9ed8\u8ba4\u503c"]:["\u4e8b\u4ef6\u540d\u79f0","\u63cf\u8ff0","\u6570\u636e\u7c7b\u578b","\u56de\u8c03\u53c2\u6570"],a=t.state.dataSource.type;return x.createElement(x.Fragment,null,x.createElement(R,null,t.state.dataSource.title,"\u7ec4\u4ef6",o,"\u8bf4\u660e\u5982\u4e0b\uff1a"),x.createElement(S,null,x.createElement(A,null,i.map(function(e){return x.createElement(z,null,e)})),r.map(function(e){return e.designOnly?null:x.createElement(A,null,x.createElement(z,null,e.name),x.createElement(z,null,e.desc),x.createElement(z,null,K(e.type,a)||"Function"),x.createElement(z,null,e.args?G(D(e.args)):B(e.defaultValue)))})))}},t}return h(n,e),s(n,[{key:"render",value:function(){return x.createElement(x.Fragment,null,this.getProps("props"),this.getProps("events"))}}],[{key:"getDerivedStateFromProps",value:function(e,n){if(!n)return{dataSource:e.dataSource};var t=n.dataSource;return{dataSource:"dataSource"in n?t:e.dataSource}}}]),n}(x.Component);I.defaultProps={};var q=I;t.d(n,"a",function(){return H});var X=t("jvsk"),H=function(e){function n(){return v(this,n),O(this,j(n).apply(this,arguments))}return E(n,e),g(n,[{key:"render",value:function(){return x.createElement(q,this.props)}}],[{key:"getDerivedStateFromProps",value:function(e,n){}}]),n}(x.Component);H.defaultProps={dataSource:X}},TVfK:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){p(e,n,t[n])})}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=t("GiK3"),b=(t.n(d),t("YaEn")),h=b.a.designRouter,y=b.a.routerConfig;n.a=function(e,n){return e=s({},e,h,y),function(t){function o(){var n,t;r(this,o);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return t=a(this,(n=u(o)).call.apply(n,[this].concat(c))),t.getUrlByUrl=function(n){for(var t in e)if(e[t].sort===n)return{url:e[t].value,text:e[t].text}},t}return l(o,t),i(o,[{key:"render",value:function(){var t=this.state.path,r=e[t].sort,o=r-1>0&&this.getUrlByUrl(r-1)||{},i=this.getUrlByUrl(r+1)||{};return d.createElement(n,Object.assign({prev:o,next:i},this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=window.location.hash.match(/[^#]+/g)[0];return{path:t}}}]),o}(d.Component)}},WScj:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.Link=n.LinkWrap=void 0;var i=o(["\n  font-size: ","rem;\n  padding-top: ",";\n  padding-left: ",";\n  line-height: 1;\n"],["\n  font-size: ","rem;\n  padding-top: ",";\n  padding-left: ",";\n  line-height: 1;\n"]),a=o(["\n  display: block;\n  ",";\n  transition: all 0.3s ease-in-out;\n  text-decoration: none;\n  &:hover {\n    color: ",";\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"],["\n  display: block;\n  ",";\n  transition: all 0.3s ease-in-out;\n  text-decoration: none;\n  &:hover {\n    color: ",";\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"]),c=t("STmI"),u=t("zVqY"),l=r(u),f=t("w2vo"),s=r(f),p=(0,c.px2emcss)(1.2),d=(0,l.default)(),b=d.themeColor,h=(n.LinkWrap=s.default.div(i,1.2,p(12),p(10)),function(e){var n="#333";return e.active&&(n=b),"color: "+n+";"});n.Link=s.default.a(a,h,b)},X1iA:function(e,n){e.exports={widgetName:"Anchor",title:"\u951a\u70b9",desc:"\u7528\u4e8e\u8df3\u8f6c\u5230\u9875\u9762\u6307\u5b9a\u4f4d\u7f6e\u3002",props:{affix:{type:"boolean",desc:"\u662f\u5426\u56fa\u5b9a\u5728\u7a97\u53e3",defaultValue:!0},offsetTop:{type:"number",desc:"\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u503c\u540e\u89e6\u53d1",defaultValue:0},offsetBottom:{type:"number",desc:"\u8ddd\u79bb\u7a97\u53e3\u5e95\u90e8\u8fbe\u5230\u6307\u5b9a\u503c\u540e\u89e6\u53d1"},slideType:{type:"SlideType",desc:"\u5206\u5272\u7ebf\u6837\u5f0f",defaultValue:"circle"},slideLine:{type:"boolean",desc:"\u662f\u5426\u5c55\u793a\u5206\u5272\u7ebf",defaultValue:!0}},type:{SlideType:["circle","line"]},category:["\u5176\u4ed6"]}},bjKi:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return y});var s=t("HAEX"),p=t.n(s),d=t("GiK3"),b=t.n(d),h=p.a.Link,y=function(e){function n(){return r(this,n),a(this,u(n).apply(this,arguments))}return l(n,e),i(n,[{key:"render",value:function(){return b.a.createElement("div",{style:{marginLeft:"200px"}},b.a.createElement(p.a,{slideType:"circle",affix:!1},b.a.createElement(h,{title:"\u57fa\u672c\u7528\u6cd5",href:"#anchor-0"}),b.a.createElement(h,{title:"\u6307\u5b9a\u5bb9\u5668",href:"#anchor-1"}),b.a.createElement(h,{title:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03",href:"#anchor-2"})))}}]),n}(b.a.Component)},jvsk:function(e,n){e.exports={widgetName:"Button",title:"Button\u6309\u94ae",desc:"\u65b9\u4fbf\u7528\u6237\u70b9\u51fb\u64cd\u4f5c",props:{disabled:{type:"boolean",desc:"true \u7981\u7528 false \u53ef\u7528",defaultValue:!0},shape:{type:"ButtonShape",desc:"\u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u6309\u94ae\u98ce\u683c",defaultValue:"default"},sdfsdf:{type:"ButtonShape",desc:"\u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u6309\u94ae\u98ce\u683c\u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u6309\u94ae\u98ce\u683c",defaultValue:"undefined"}},events:{onClick:{desc:"\u70b9\u51fb\u6309\u94ae\u65f6\u89e6\u53d1",args:[{name:"event",desc:"\u70b9\u51fb\u7684DOM\u4e8b\u4ef6",type:"Object"},{name:"res",desc:"\u8fd4\u56de\u7ed3\u679c",type:"Object"}]},onMouseMove:{desc:"\u79fb\u52a8\u6309\u94ae\u65f6\u89e6\u53d1",args:[{name:"event",desc:"\u70b9\u51fb\u7684DOM\u4e8b\u4ef6",type:"Object"},{name:"res",desc:"\u8fd4\u56de\u7ed3\u679c",type:"Object"}]}},type:{ButtonShape:["default","round"],ButtonStyle:{width:{type:"number",desc:"\u7ec4\u4ef6\u5bbd\u5ea6"}}},category:["\u901a\u7528"]}},m328:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(){var e=b(["\n  font-size: 14px;\n  color: #525466;\n  margin-bottom: 40px;\n"]);return s=function(){return e},e}function p(){var e=b(["\n  font-size: 18px;\n  color: #a1a3b2;\n  margin-left: 10px;\n  display: inline-block;\n"]);return p=function(){return e},e}function d(){var e=b(["\n  font-size: 24px;\n  color: #0f1333;\n  font-weight: 600;\n  margin-bottom: 12px;\n"]);return d=function(){return e},e}function b(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",function(){return O});var h=t("GiK3"),y=(t.n(h),t("w2vo")),v=y.default.p(d()),m=y.default.p(p()),g=y.default.p(s()),O=function(e){function n(){return r(this,n),a(this,u(n).apply(this,arguments))}return l(n,e),i(n,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.subTitle,r=e.desc;return h.createElement("div",null,h.createElement(v,null,n,h.createElement(m,null,t)),h.createElement(g,null,r))}}]),n}(h.Component)},pEc1:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(){var e=g(["\n  font-size: 20px;\n  vertical-align: middle !important;\n  margin-right: 10px;\n"]);return s=function(){return e},e}function p(){var e=g(["\n  font-size: 14px;\n  height: 30px;\n  background: #f8f8f8;\n  line-height: 30px;\n  text-align: center;\n  cursor: pointer;\n  color: #a1a3b3;\n  transition: all 0.3s linear;\n  box-sizing: border-box;\n\n  &:hover {\n    color: #4d63ff;\n    background: #f2f5ff;\n  }\n"]);return p=function(){return e},e}function d(){var e=g(["\n  font-size: 14px;\n  box-sizing: border-box;\n  display: ",";\n  & > pre > code {\n    line-height: 1.2;\n  }\n"]);return d=function(){return e},e}function b(){var e=g(["\n  box-shadow: 0px 0px 6px rgba(102, 102, 102, 0.2);\n  background: #fff;\n  box-sizing: border-box;\n\n  &:hover {\n    box-shadow: 0px 0px 6px rgba(77, 99, 255, 0.2);\n  }\n"]);return b=function(){return e},e}function h(){var e=g(["\n  padding: 20px;\n\n"]);return h=function(){return e},e}function y(){var e=g(["\n  font-size: 14px;\n  margin: 12px 0 20px 0;\n  color: #525466;\n  box-sizing: border-box;\n  line-height: 1.5\n"]);return y=function(){return e},e}function v(){var e=g(["\n  font-size: 18px;\n  color: #0f1333;\n  font-weight: 500;\n  line-height: 1;\n  box-sizing: border-box;\n\n  &:before {\n    display: inline-block;\n    content: ' ';\n    width: 4px;\n    height: 18px;\n    background: #4d63ff;\n    border-radius: 2px;\n    margin-right: 8px;\n    vertical-align: bottom;\n  }\n"]);return v=function(){return e},e}function m(){var e=g(["\n  box-sizing: border-box;\n  margin-bottom: 40px\n"]);return m=function(){return e},e}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",function(){return M});var O=t("kPLI"),w=t.n(O),j=t("GiK3"),E=(t.n(j),t("w2vo")),_=t("o4Mc"),x=t.n(_),k=E.default.div(m()),P=E.default.div(v()),C=E.default.div(y()),L=E.default.div(h()),T=E.default.div(b()),S=E.default.div(d(),function(e){return e.visible?"block":"none"}),A=E.default.div(p()),z=Object(E.default)(w.a)(s()),M=function(e){function n(e){var t;return r(this,n),t=a(this,u(n).call(this,e)),t.handleClick=function(){var e=t.state.visible;t.setState({visible:!e})},t.mouseEnter=function(){t.setState({textVisible:!0})},t.mouseOver=function(){t.setState({textVisible:!1})},t.state={visible:!1,textVisible:!1},t}return l(n,e),i(n,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.desc,r=e.demo,o=e.code,i=e.titleID,a=this.state,c=a.visible,u=a.textVisible;return j.createElement(k,null,j.createElement(P,{id:i,name:i},n),j.createElement(C,null,t),j.createElement(T,null,j.createElement(L,null,j.createElement("div",null,r)),c?j.createElement(S,{visible:!0},j.createElement(x.a,{className:"language-jsx"},o)):null,j.createElement(A,{onClick:this.handleClick,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseOver},j.createElement(z,{iconClass:c?"lugia-icon-financial_code":"lugia-icon-finacial_hide_code"}),u?c?"\u9690\u85cf\u4ee3\u7801":"\u663e\u793a\u4ee3\u7801":"")))}}]),n}(j.Component)},"q/pM":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.AnchorContext=void 0;var u,l,f=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),s=t("GiK3"),p=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(s),d=t("3tHp"),b=r(d),h=t("uBLG"),y=r(h),v=t("WIBt"),m=r(v),g=t("9Ybb"),O=n.AnchorContext=p.createContext({links:[],getLinks:void 0,activeLink:void 0,onClick:void 0});n.default=(0,b.default)((l=u=function(){function e(n){i(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.initScroll=function(){var e=window&&window.location.href;if(e){var n=e.split("#")[1],r=document.getElementById(n);r&&(t.handleLinkClick(void 0,"#"+n),r.scrollIntoView({block:"start",behavior:"smooth"}))}},t.addWindowScrollListener=function(){if(!t.isClick){var e=t.props.offsetTop,n=void 0===e?0:e,r=t.getAcrossLinks(t.links,n);t.setScrollActiveLink(r)}},t.getAcrossLinks=function(e,n){var r=[];return e.forEach(function(e){var o=t.getId(e);if(o){var i=document.getElementById(o);if(i){var a=i.getBoundingClientRect().top;a<n&&r.push({link:e,top:a})}}}),r},t.setScrollActiveLink=function(e){t.setState({activeLink:t.getMaxTopLink(e)})},t.handleLinkClick=function(e,n){t.isClick=!0,t.setState({activeLink:n}),setTimeout(function(){t.isClick=!1},50)},t.updateLinks=function(e){t.links=[].concat(o(e))},t.state={activeLink:""},t.isClick=!1,t.links=[],t}return c(e,p.Component),f(e,[{key:"componentDidMount",value:function(){var e=this;this.initScroll(),setTimeout(function(){window.addEventListener("scroll",e.addWindowScrollListener)},100)}},{key:"getMaxTopLink",value:function(e){return Array.isArray(e)&&0!==e.length?e.reduce(function(e,n){return n.top>e.top?n:e}).link:""}},{key:"render",value:function(){var e=this.props,n=e.affix,t=void 0===n||n,r=e.offsetTop,o=void 0===r?0:r,i=e.children,a=e.slideType,c=void 0===a?"circle":a,u=e.slideLine,l=void 0===u||u,f=this.state.activeLink,s=void 0;f&&(s=this.links?this.links.indexOf(f):0);var d=p.createElement(g.Anchor,{slideType:c,slideLine:l},i,p.createElement(g.Circle,{slideType:c,index:s}));return p.createElement(O.Provider,{value:{links:[],getLinks:this.updateLinks,activeLink:f,onClick:this.handleLinkClick}},t?p.createElement(m.default,{offsetTop:o},d):d)}},{key:"getId",value:function(e){var n=/#([^#]+)$/.exec(e);if(n)return n[1]}}]),e}(),u.displayName="Anchor",l),y.default.Anchor)},"qdA+":function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t("GiK3"),u=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(c),l=t("q/pM"),f=t("WScj"),s=function(){function e(){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.isLoad=!1,n}return i(e,u.Component),a(e,[{key:"render",value:function(){var e=this;return u.createElement(l.AnchorContext.Consumer,null,function(n){var t=e.props,r=t.title,o=t.href,i=t.children;if(!e.isLoad){var a=n.getLinks;e.isLoad=!0,n&&n.links.push(o),a&&a(n.links)}var c=n.onClick,l=n.activeLink;return u.createElement(f.LinkWrap,null,u.createElement(f.Link,{onClick:function(e){return c&&c(e,o)},href:o,active:l===o},r),i)})}}]),e}();s.displayName="AnchorLink",n.default=s},tbzj:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(){var e=h(["\n  color: ",";\n  vertical-align: text-top !important;\n"]);return s=function(){return e},e}function p(){var e=h(["\n  color: ",";\n  font-size: 12px;\n  margin: 0 7px;\n  \n  \n"]);return p=function(){return e},e}function d(){var e=h(["\n  cursor:pointer;\n"]);return d=function(){return e},e}function b(){var e=h(["\n  text-align: right;\n  margin:50px 0;\n  position:relative;\n  z-index:3;\n"]);return b=function(){return e},e}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",function(){return T});var y=t("kPLI"),v=t.n(y),m=t("GiK3"),g=t.n(m),O=t("w2vo"),w=t("zVqY"),j=t.n(w),E=t("OUfr"),_=(t.n(E),j()()),x=_.themeColor,k=O.default.div(b()),P=O.default.span(d()),C=O.default.span(p(),x),L=Object(O.default)(v.a)(s(),x),T=function(e){function n(){var e,t;r(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return t=a(this,(e=u(n)).call.apply(e,[this].concat(i))),t.clickToGo=function(e){e&&Object(E.go)({url:e})},t}return l(n,e),i(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.prev,r=t.text,o=t.url,i=n.next,a=i.text,c=i.url;return g.a.createElement(k,null,r&&g.a.createElement(P,{onClick:function(n){return e.clickToGo(o)}},g.a.createElement(L,{iconClass:"lugia-icon-direction_Left"}),g.a.createElement(C,null,r)),r&&a&&g.a.createElement(C,null,"|"),a&&g.a.createElement(P,{onClick:function(n){return e.clickToGo(c)}},g.a.createElement(C,null,a),g.a.createElement(L,{iconClass:"lugia-icon-direction_right"})))}}]),n}(g.a.Component)},voi2:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return y});var s=t("HAEX"),p=t.n(s),d=t("GiK3"),b=t.n(d),h=p.a.Link,y=function(e){function n(){return r(this,n),a(this,u(n).apply(this,arguments))}return l(n,e),i(n,[{key:"render",value:function(){return b.a.createElement(p.a,{slideType:"circle"},b.a.createElement(h,{title:"\u57fa\u672c\u7528\u6cd5",href:"#anchor-0"}),b.a.createElement(h,{title:"\u6307\u5b9a\u5bb9\u5668",href:"#anchor-1"}),b.a.createElement(h,{title:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03",href:"#anchor-2"}))}}]),n}(b.a.Component)}});