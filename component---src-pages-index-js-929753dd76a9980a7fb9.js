(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,n){"use strict";n.r(t);var r,a=n("dI71"),l=n("q1tI"),i=n.n(l),o=n("Wbzz"),c=n("mwIZ"),f=n.n(c),d=n("SbOt"),u=n("uL9F"),s=n.n(u);function p(e){var t=null==e?0:e.length;return t?e[Math.floor(Math.random()*t)]:void 0}var m=null!=(r=p(["#ff2d55","#5856d6","#ff9500","#ffcc00","#ff3b30","#5ac8fa","#007aff","#4cd964"]))?r:"yellow",h=function(e){var t=e.particleBouncyness,n=void 0===t?.3:t,r=e.ballCount,a=void 0===r?1500:r,o=e.ballSize,c=void 0===o?2:o,f=e.pegSize,d=void 0===f?1:f,u=Object(l.useRef)(null),p=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e=s.a.Engine,t=s.a.Render,r=s.a.Runner,l=s.a.World,i=s.a.Bodies,o=s.a.Body,f=s.a.Events,h=e.create({enableSleeping:!0}),b=t.create({element:u.current,engine:h,canvas:p.current,options:{width:300,height:550,background:"#000000",wireframes:!1,showSleeping:!1}});t.run(b);var v=r.create();r.run(v,h);var g=function(e,t){return i.circle(e,t,d,{isStatic:!0,render:{fillStyle:"#555555"}})},y=function(e,t,n,r){return i.rectangle(e,t,n,r,{isStatic:!0,render:{fillStyle:"#555555"}})},w=function(e,t,n,r,a){return i.rectangle(e,t,n,r,{isStatic:!0,angle:a,render:{fillStyle:"#555555"}})};l.add(h.world,[y(150,0,300,20),y(150,550,300,20),y(0,550,20,1100),y(300,550,20,1100)]),l.add(h.world,[w(190,45,95,2,-.3*Math.PI),w(110,45,95,2,.3*Math.PI),w(196,100,75,2,.153*Math.PI),w(104,100,75,2,-.153*Math.PI),w(260,180,140,2,.353*Math.PI),w(40,180,140,2,-.353*Math.PI)]);var E,k,j=[];for(E=0;E<21;E++)for(k=1;k<E;k++)E>9&&j.push(l.add(h.world,g(14*k-7*E+150,14*E-10)));for(var _=20;_<=280;_+=10)if(0!==_){var O=y(_,415,1,260);l.add(h.world,O)}var S=function(e,t){return Math.random()*(t-e)+e},I=function(){var e=function(e,t){return i.circle(e,t,c,{restitution:n,friction:1e-5,frictionAir:.042,sleepThreshold:25,render:{fillStyle:m}})}(150+S(-1,1),15);o.setVelocity(e,{x:S(-.05,.05),y:0}),o.setAngularVelocity(e,S(-.05,.05)),f.on(e,"sleepStart",(function(){o.setStatic(e,!0)})),l.add(h.world,e)},M=0,x=setInterval((function(){M===a&&clearInterval(x),I(),M++}),10);return function(){return clearInterval(x)}}),[]),i.a.createElement("div",{ref:u,style:{width:300,height:550}},i.a.createElement("canvas",{ref:p}))},b=n("7oih"),v=n("EYWl");function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=function(e){if(t=e.projectId,Object(l.useEffect)((function(){if(!window.__feedback_fish_injected__){window.__feedback_fish_injected__=!0;var e=document.createElement("script");e.src="https://feedback.fish/ff.js?pid="+t,e.defer=!0,e.addEventListener("error",(function(){return e.remove()})),document.body.appendChild(e)}}),[]),!e.children)return null;var t,n=g({"data-feedback-fish":!0,"data-feedback-fish-userid":e.userId},Object.keys(e.metadata||{}).reduce((function(t,n){var r,a;return g({},t,((a={})["data-feedback-fish-"+n]=null==e||null==(r=e.metadata)?void 0:r[n],a))}),{}));return i.a.isValidElement(e.children)?i.a.cloneElement(e.children,n):"function"==typeof e.children?e.children(n):null},w=n("p3AD"),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("footer",{style:{fontFamily:"sans-serif",marginTop:Object(w.a)(2.5),paddingTop:Object(w.a)(1),display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},i.a.createElement("div",null,i.a.createElement("a",{href:"https://twitter.com/ergenekonyigit",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",i.a.createElement("a",{href:"https://github.com/ergenekonyigit",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/ergenekonyigit/",target:"_blank",rel:"noopener noreferrer"},"linkedin")," ","•"," ",i.a.createElement("a",{href:"mailto:yigitergenekon@gmail.com",target:"_blank",rel:"noopener noreferrer"},"e-mail")),i.a.createElement("div",null,i.a.createElement(y,{projectId:"e12f9ac7f0ce05"},i.a.createElement("a",null,"send feedback"))," ","•"," ",i.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")))},t}(i.a.Component),k=n("L6NH"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=f()(this,"props.data.site.siteMetadata.title"),t=f()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(b.a,{location:this.props.location,title:e},i.a.createElement(v.a,null),i.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"space-between",flexWrap:"wrap",marginBottom:Object(w.a)(2.5)}},i.a.createElement(d.a,null),i.a.createElement(h,null)),t.map((function(e){var t=e.node,n=f()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("div",{style:{fontFamily:"sans-serif",fontSize:18,color:"rgba(255, 255, 255, 0.5)",marginBottom:Object(w.a)(1/4)}},i.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},n),i.a.createElement("small",null," • "+Object(k.a)(t.timeToRead)+" • ",t.frontmatter.date)))})),i.a.createElement(E,null))},t}(i.a.Component);t.default=j}}]);
//# sourceMappingURL=component---src-pages-index-js-929753dd76a9980a7fb9.js.map