(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(A,g,C){"use strict";C.r(g);var I=C(6),e=C.n(I),t=C(0),n=C.n(t),r=C(138),a=C(158),i=C.n(a),o=C(151),l=C(142),c=C(155),f=C(139),s=function(A){function g(){return A.apply(this,arguments)||this}return e()(g,A),g.prototype.render=function(){return n.a.createElement("footer",{style:{fontFamily:"sans-serif",marginTop:Object(f.a)(2.5),paddingTop:Object(f.a)(1)}},n.a.createElement("div",{style:{float:"right"}},n.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),n.a.createElement("a",{href:"https://twitter.com/ergenekonyigit",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",n.a.createElement("a",{href:"https://github.com/ergenekonyigit",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/ergenekonyigit/",target:"_blank",rel:"noopener noreferrer"},"linkedin")," ","•"," ",n.a.createElement("a",{href:"mailto:yigitergenekon@gmail.com",target:"_blank",rel:"noopener noreferrer"},"e-mail"))},g}(n.a.Component),u=C(157);C.d(g,"pageQuery",function(){return p});var d=function(A){function g(){return A.apply(this,arguments)||this}return e()(g,A),g.prototype.render=function(){var A=i()(this,"props.data.site.siteMetadata.title"),g=i()(this,"props.data.allMarkdownRemark.edges");return n.a.createElement(l.a,{location:this.props.location,title:A},n.a.createElement(c.a,null),n.a.createElement(o.a,null),g.map(function(A){var g=A.node,C=i()(g,"frontmatter.title")||g.fields.slug;return n.a.createElement("div",{key:g.fields.slug},n.a.createElement("div",{style:{fontFamily:"sans-serif",marginBottom:Object(f.a)(.25)}},n.a.createElement(r.Link,{style:{boxShadow:"none"},to:g.fields.slug},C),n.a.createElement("small",null," • "+Object(u.a)(g.timeToRead)+" • ",g.frontmatter.date)))}),n.a.createElement(s,null))},g}(n.a.Component),p=(g.default=d,"2238924210")},138:function(A,g,C){"use strict";C.r(g),C.d(g,"graphql",function(){return s}),C.d(g,"StaticQueryContext",function(){return c}),C.d(g,"StaticQuery",function(){return f});var I=C(0),e=C.n(I),t=C(4),n=C.n(t),r=C(137),a=C.n(r);C.d(g,"Link",function(){return a.a}),C.d(g,"withPrefix",function(){return r.withPrefix}),C.d(g,"navigate",function(){return r.navigate}),C.d(g,"push",function(){return r.push}),C.d(g,"replace",function(){return r.replace}),C.d(g,"navigateTo",function(){return r.navigateTo});var i=C(140),o=C.n(i);C.d(g,"PageRenderer",function(){return o.a});var l=C(29);C.d(g,"parsePath",function(){return l.a});var c=e.a.createContext({}),f=function(A){return e.a.createElement(c.Consumer,null,function(g){return A.data||g[A.query]&&g[A.query].data?(A.render||A.children)(A.data?A.data.data:g[A.query].data):e.a.createElement("div",null,"Loading (StaticQuery)")})};function s(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},139:function(A,g,C){"use strict";C.d(g,"a",function(){return a}),C.d(g,"b",function(){return i});var I=C(153),e=C.n(I),t=C(154),n=C.n(t);n.a.overrideThemeStyles=function(){return{a:{color:"#000000"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},"p code":{fontSize:"1.1rem"},"li code":{fontSize:"1rem"}}},delete n.a.googleFonts;var r=new e.a(n.a);var a=r.rhythm,i=r.scale},140:function(A,g,C){var I;A.exports=(I=C(141))&&I.default||I},141:function(A,g,C){"use strict";C.r(g);C(28);var I=C(0),e=C.n(I),t=C(4),n=C.n(t),r=C(47),a=C(2),i=function(A){var g=A.location,C=a.default.getResourcesForPathnameSync(g.pathname);return e.a.createElement(r.a,Object.assign({location:g,pageResources:C},C.json))};i.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},g.default=i},142:function(A,g,C){"use strict";C(28);var I=C(6),e=C.n(I),t=C(0),n=C.n(t),r=C(138),a=C(139),i=function(A){function g(){return A.apply(this,arguments)||this}return e()(g,A),g.prototype.render=function(){var A,g=this.props,C=g.location,I=(g.title,g.children);return A="/"===C.pathname?n.a.createElement("h1",{style:Object.assign({},Object(a.b)(1),{fontFamily:"sans-serif",marginBottom:Object(a.a)(1.5),marginTop:0})},n.a.createElement(r.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Ergenekon Yiğit")):n.a.createElement("h3",{style:{fontFamily:"sans-serif",marginTop:0,marginBottom:Object(a.a)(-1)}},n.a.createElement(r.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#000000"},to:"/"},"Ergenekon Yiğit")),n.a.createElement("div",{style:{fontFamily:"sans-serif",backgroundColor:"#fafafa",marginLeft:"auto",marginRight:"auto",maxWidth:Object(a.a)(30),padding:Object(a.a)(1.5)+" "+Object(a.a)(.75)}},A,I)},g}(n.a.Component);g.a=i},151:function(A,g,C){"use strict";var I=C(6),e=C.n(I),t=C(0),n=C.n(t),r=(C(152),C(139)),a=function(A){function g(){return A.apply(this,arguments)||this}return e()(g,A),g.prototype.render=function(){return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(r.a)(2.5)}},n.a.createElement("p",{style:{maxWidth:310,fontFamily:"sans-serif"}},"A developer currently living in Istanbul."))},g}(n.a.Component);g.a=a},152:function(A,g){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCARXhpZgAATU0AKgAAAAgABAESAAMAAAABAAEAAAEaAAUAAAABAAAAPgEbAAUAAAABAAAARodpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAHCgAwAEAAAAAQAAAHAAAAAA/+EJIWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAcABwAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hp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"},155:function(A,g,C){"use strict";C(28);var I=C(156),e=C(0),t=C.n(e),n=C(162),r=C.n(n),a=C(4),i=C.n(a),o=C(138),l="3236765318";function c(A){var g=A.meta,C=A.image,e=A.title,n=A.description,a=A.slug;return t.a.createElement(o.StaticQuery,{query:l,render:function(A){var I=A.site.siteMetadata,i=n||I.description,o=C?I.siteUrl+"/"+C:null,l=""+I.siteUrl+a;return t.a.createElement(r.a,Object.assign({htmlAttributes:{lang:"en"}},e?{titleTemplate:"%s - "+I.title,title:e}:{title:I.title},{meta:[{name:"description",content:i},{property:"og:url",content:l},{property:"og:title",content:e||I.title},{name:"og:description",content:i},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:I.social.twitter},{name:"twitter:title",content:e||I.title},{name:"twitter:description",content:i}].concat(o?[{property:"og:image",content:o},{name:"twitter:image",content:o}]:[]).concat(g)}))},data:I})}c.defaultProps={meta:[],title:"",slug:""},c.propTypes={description:i.a.string,image:i.a.string,meta:i.a.array,slug:i.a.string,title:i.a.string.isRequired},g.a=c},156:function(A){A.exports={data:{site:{siteMetadata:{title:"Blog",author:"Ergenekon Yigit",description:"Personal blog by Ergenekon Yigit.",siteUrl:"https://ergenekonyigit.github.io",social:{twitter:"@ergenekonyigit"}}}}}},157:function(A,g,C){"use strict";function I(A){var g=Math.round(A/5);return new Array(g||1).join("")+" "+A+" min"}C.d(g,"a",function(){return I})}}]);
//# sourceMappingURL=component---src-pages-index-js-85f7f6dbdb774d3b4712.js.map