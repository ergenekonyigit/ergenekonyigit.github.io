const a=document.querySelector("#nav-toggle");a.addEventListener("click",b=>{b.preventDefault(),document.querySelector("header nav").classList.add("show"),a.classList.add("hide")}),"serviceWorker"in navigator&&addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")}),location.search.includes("utm_source")&&history.replaceState({},"",location.pathname);const b="UA-130273591-1";self.dataLayer=[],self.gtag=function(){self.dataLayer.push(arguments)},gtag("js",new Date),gtag("config","UA-130273591-1",{referrer:document.referrer.split("?")[0]});const c=document.scripts[0],d=document.createElement("script");d.src=`https://www.googletagmanager.com/gtag/js?id=${"UA-130273591-1"}`,c.parentNode.insertBefore(d,c);