webpackJsonp([35783957827783],{61:function(e,t){function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function r(e){if(d===setTimeout)return setTimeout(e,0);if((d===a||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function o(e){if(u===clearTimeout)return clearTimeout(e);if((u===l||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}function s(){h&&m&&(h=!1,m.length?p=m.concat(p):y=-1,p.length&&n())}function n(){if(!h){var e=r(s);h=!0;for(var t=p.length;t;){for(m=p,p=[];++y<t;)m&&m[y].run();y=-1,t=p.length}m=null,h=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function i(){}var d,u,f=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:a}catch(e){d=a}try{u="function"==typeof clearTimeout?clearTimeout:l}catch(e){u=l}}();var m,p=[],h=!1,y=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];p.push(new c(e,t)),1!==p.length||h||r(n)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=i,f.addListener=i,f.once=i,f.off=i,f.removeListener=i,f.removeAllListeners=i,f.emit=i,f.prependListener=i,f.prependOnceListener=i,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},95:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Featured=void 0;var r=a(11),o=l(r),s=a(1),n=l(s),c=a(47),i=(l(c),a(30)),d=(l(i),a(29)),u=l(d),f=a(16),m=l(f),p=a(21),h=l(p),y=a(51),_=(t.Featured=function(e){var t=e.title,a=e.sizes;return n.default.createElement("div",{className:o.default.dynamic([["208921455",[m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg,m.default.colors.grey]]])+" featured"},n.default.createElement(u.default,{alt:t,sizes:a,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}}),n.default.createElement("div",{className:o.default.dynamic([["208921455",[m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg,m.default.colors.grey]]])+" content"},n.default.createElement(h.default,null,n.default.createElement("h1",{className:o.default.dynamic([["208921455",[m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg,m.default.colors.grey]]])},t))),n.default.createElement(o.default,{styleId:"208921455",css:[".featured.__jsx-style-dynamic-selector{display:block;position:relative;height:450px;line-height:1.5;margin-bottom:2em;}",".content.__jsx-style-dynamic-selector{position:absolute;bottom:0;width:100%;z-index:2;color:"+m.default.colors.white+";background-color:"+m.default.colors.red+";}",".content.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:1.5em;line-height:2em;margin-bottom:0;}","@media(min-width:"+m.default.breakpoints.md+"px){.content.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2em;}}","@media(min-width:"+m.default.breakpoints.lg+"px){.content.__jsx-style-dynamic-selector{background-color:#eee;color:"+m.default.colors.grey+";}}"],dynamic:[m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg,m.default.colors.grey]}))},function(e){return n.default.createElement("div",{className:o.default.dynamic([["1452392076",[m.default.colors.red,m.default.colors.white,m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg]]])+" hero"},n.default.createElement(u.default,{alt:"Norwich Castle",sizes:e.sizes,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}}),n.default.createElement("div",{className:o.default.dynamic([["1452392076",[m.default.colors.red,m.default.colors.white,m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg]]])+" content"},n.default.createElement("h2",{className:o.default.dynamic([["1452392076",[m.default.colors.red,m.default.colors.white,m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg]]])},"Castle Electrical Services Ltd"),n.default.createElement("h1",{className:o.default.dynamic([["1452392076",[m.default.colors.red,m.default.colors.white,m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg]]])},"Norwich Electrical Contractors"),n.default.createElement("p",{className:o.default.dynamic([["1452392076",[m.default.colors.red,m.default.colors.white,m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg]]])},"Qualified Electricians based in Eaton, Norwich. Carrying out all types of Electrical Wiring, Electrical Testing, covering Norwich, Norfolk, Suffolk and East Anglia."),n.default.createElement("button",{onClick:e.scrollHandler,className:o.default.dynamic([["1452392076",[m.default.colors.red,m.default.colors.white,m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg]]])},n.default.createElement(y.MdArrowDropDown,null))),n.default.createElement(o.default,{styleId:"1452392076",css:[".hero.__jsx-style-dynamic-selector{display:block;position:relative;height:400px;line-height:1.5;}","button.__jsx-style-dynamic-selector{display:none;cursor:pointer;background-color:"+m.default.colors.red+";padding:0;line-height:0;outline:none;border:none;margin-top:6rem;font-size:6rem;border-radius:3rem;}","button.__jsx-style-dynamic-selector svg{margin:0;padding:0;line-height:0;fill:"+m.default.colors.white+";}",".hero.__jsx-style-dynamic-selector:after{display:block;position:absolute;content:'';left:0;right:0;top:0;bottom:0;z-index:1;background-color:rgba(0,0,0,0.4);}",".content.__jsx-style-dynamic-selector{position:absolute;z-index:3;min-width:250px;color:"+m.default.colors.white+";left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}",".content.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-transform:uppercase;font-size:1.5em;line-height:1;margin:0;}",".content.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-size:1em;display:inline-block;padding:.5em .4em;border-radius:.4em;background-color:rgba(255,255,255,0.5);color:"+m.default.colors.red+";margin-bottom:1em;}",".content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-weight:normal;margin-top:1em;font-size:14px;}","@media(min-width:"+m.default.breakpoints.md+"px){.content.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2em;}.content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:1em;}}","@media(min-width:"+m.default.breakpoints.lg+"px){button.__jsx-style-dynamic-selector{display:block;}.hero.__jsx-style-dynamic-selector{height:100vh;}.content.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:3.5em;}.content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:1.2em;}}"],dynamic:[m.default.colors.red,m.default.colors.white,m.default.colors.white,m.default.colors.red,m.default.breakpoints.md,m.default.breakpoints.lg]}))});t.default=_},96:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(11),o=l(r),s=a(1),n=l(s),c=a(30),i=l(c),d=a(29),u=l(d),f=a(16),m=l(f),p=function(e){var t=e.data,a=t.map(function(e){return n.default.createElement(i.default,{key:e.node.id,to:e.node.frontmatter.path,className:"service"},n.default.createElement("div",{className:o.default.dynamic([["2833339685",[m.default.colors.white,m.default.colors.red,m.default.breakpoints.lg]]])+" service-image"},n.default.createElement(u.default,{alt:e.node.frontmatter.title,sizes:e.node.frontmatter.featuredImage.childImageSharp.sizes})),n.default.createElement("div",{className:o.default.dynamic([["2833339685",[m.default.colors.white,m.default.colors.red,m.default.breakpoints.lg]]])+" service-excerpt"},n.default.createElement("h4",{className:o.default.dynamic([["2833339685",[m.default.colors.white,m.default.colors.red,m.default.breakpoints.lg]]])},e.node.frontmatter.title),n.default.createElement("div",{className:o.default.dynamic([["2833339685",[m.default.colors.white,m.default.colors.red,m.default.breakpoints.lg]]])+" service-excerpt-content"},e.node.excerpt+"Read More")),n.default.createElement(o.default,{styleId:"2833339685",css:[".service-image.__jsx-style-dynamic-selector{position:relative;}",".service-excerpt.__jsx-style-dynamic-selector{position:absolute;background-color:rgba(0,0,0,0.3);-webkit-transition:top 0.2s ease-in-out;transition:top 0.2s ease-in-out;top:calc(100% - 32px);left:0;right:0;bottom:0;z-index:2;}",".service-excerpt-content.__jsx-style-dynamic-selector{position:relative;top:50%;width:80%;display:block;font-size:14px;padding:1em;color:"+m.default.colors.white+";}","h4.__jsx-style-dynamic-selector{color:white;padding:.5em;margin:0;background-color:"+m.default.colors.red+";bottom:0;}","@media(min-width:"+m.default.breakpoints.lg+"px){.service:hover .service-excerpt.__jsx-style-dynamic-selector{top:0;}}"],dynamic:[m.default.colors.white,m.default.colors.red,m.default.breakpoints.lg]}))});return n.default.createElement("div",{className:o.default.dynamic([["2946859764",[m.default.breakpoints.md]]])+" services-block"},a,n.default.createElement(o.default,{styleId:"2946859764",css:[".services-block.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}",".services-block.__jsx-style-dynamic-selector .service{display:block;position:relative;overflow:hidden;width:100%;margin-bottom:2em;}","@media(min-width:"+m.default.breakpoints.md+"px){.services-block.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.services-block.__jsx-style-dynamic-selector .service{width:calc(50% - 1em);}}"],dynamic:[m.default.breakpoints.md]}))};t.default=p,e.exports=t.default},240:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var n=a(11),c=l(n),i=a(1),d=l(i),u=a(30),f=l(u),m=a(29),p=(l(m),a(66)),h=l(p),y=a(69),_=l(y),g=a(95),b=l(g),w=a(21),E=l(w),x=a(54),k=l(x),v=a(96),j=l(v),N=a(51),C=a(244),H=l(C),M="Norwich Electrical Contractors",T="We are your premier electrical contractors based in Eaton, covering Norwich and surrounding areas. At Castle Electrical Services Ltd, we pride ourselves on providing complete customer satisfaction and security which is assured by our experience of over 20 years in the Electrical Contracting Industry.",z=function(e){function t(a){r(this,t);var l=o(this,e.call(this,a));return l.scrollHandler=l.scrollHandler.bind(l),l}return s(t,e),t.prototype.scrollHandler=function(){(0,H.default)(this.scrollEl.offsetTop-94)},t.prototype.render=function(){var e=this,t=this.props,a=t.data,l=t.transition;t.location;return d.default.createElement("main",{id:"home",style:l&&l.style,className:"jsx-"+_.default.__scopedHash},d.default.createElement(h.default,{title:M+" | Castle Electrical Services Ltd",meta:[{name:"description",content:T},{property:"og:title",content:""+M},{property:"og:type",content:"article"},{property:"og:description",content:T},{property:"og:url",content:"https://johnwilson65.github.io/}"},{property:"og:site_name",content:"Castle Electrical Services Ltd"},{property:"og:image",content:"https://johnwilson65.github.io/logos/logo-1024.png"},{name:"robots",content:"noindex, nofollow"}]}),d.default.createElement(b.default,{scrollHandler:this.scrollHandler,sizes:a.headerImage.sizes}),d.default.createElement("span",{ref:function(t){return e.scrollEl=t},className:"jsx-"+_.default.__scopedHash}),d.default.createElement(k.default,{id:"to-here",data:a}),d.default.createElement(E.default,null,d.default.createElement("h2",{className:"jsx-"+_.default.__scopedHash+" title"},"Electrical Contractors with over 20 years experience."),d.default.createElement("p",{className:"jsx-"+_.default.__scopedHash},"We are your premier electrical contractors based in Eaton, covering Norwich and surrounding areas."," ","At Castle Electrical Services Ltd, we pride ourselves on providing complete customer satisfaction and security"," ","which is assured by our experience of over 20 years in the Electrical Contracting Industry."),d.default.createElement("p",{className:"jsx-"+_.default.__scopedHash},"We serve most electrical installation needs and our customers include homeowners, landlords, architects, designers, offices, shops and factories."),d.default.createElement("p",{className:"jsx-"+_.default.__scopedHash},"Anyone requiring quality electrical work can call our expert electrical contractors for help. We can work with you in building efficient facilities for home, work, education, and other purposes."),d.default.createElement("p",{className:"jsx-"+_.default.__scopedHash},"All our electricians are directly employed by us. For added confidence we are in the Norfolk Trusted Trader scheme run by Norfolk trading standards, Please see our testimonials in the referenceline box above."," ","We have a broad range of electrical services covering all ",d.default.createElement(f.default,{to:"/services/domestic"},"domestic")," and ",d.default.createElement(f.default,{to:"/services/commercial"},"commercial")," requirements."),d.default.createElement("p",{className:"jsx-"+_.default.__scopedHash},"Of course, the most important thing for you to know is that we are honest and reliable; this is backed up by our membership of the NICEIC which effectively guarantees our work for 2 years"," ","and few companies nowadays offer such a level of guarantee. Our long experience in the industry and our growing number of clients are proof of the quality work we provide."),d.default.createElement("p",{className:"jsx-"+_.default.__scopedHash},"We place great effort and emphasis on our client relationships and pride"," ","ourselves on our ability to respond rapidly in an effecient and cost effective way."," ","All our electricians are City & Guilds trained to current 18th edition regulations."),d.default.createElement("ul",{className:"jsx-"+_.default.__scopedHash+" tick-list"},d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"NICEIC approved contractors and domestic installers"),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Norfolk Trusted Trader Member"),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Electrical Part P Qualified"),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"All work covered by a 2 year warranty")),d.default.createElement("hr",{className:"jsx-"+_.default.__scopedHash+" rule"}),d.default.createElement("h2",{className:"jsx-"+_.default.__scopedHash+" title"},"All Electrical Work Undertaken"),d.default.createElement("ul",{className:"jsx-"+_.default.__scopedHash+" tick-list"},d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Testing, Inspection & Electrical Landlord Reports."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Electrical Rewires, extra sockets and lights."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Electrical Showers, Heated Towel Rails."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"City Centre shops serviced."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Low energy lighting, LED lights."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Cooker Installation, Extra Kitchen Sockets"),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Dual RCD Metal Consumer units installed. 18th edition."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Electric economy 7 storage heaters, panel heaters."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Emergency lighting & Alarm systems."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Fault finding, maintenance."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Kitchen & Bathroom Extractor Fans."),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Repairs & Upgrades"),d.default.createElement("li",{className:"jsx-"+_.default.__scopedHash},d.default.createElement(N.MdCheck,null),"Industrial Power & lighting trunking systems.")),d.default.createElement("hr",{className:"jsx-"+_.default.__scopedHash+" rule"}),d.default.createElement("h2",{className:"jsx-"+_.default.__scopedHash+" title"},"See Our Services"),d.default.createElement(j.default,{data:a.allMarkdownRemark.edges})),d.default.createElement(c.default,{styleId:_.default.__scopedHash,css:_.default.__scoped}))},t}(d.default.Component);t.default=z;t.pageQuery="** extracted graphql fragment **"},244:function(e,t){"use strict";t.__esModule=!0;var a=function(e,t,a,l){var r=window.scrollY||document.documentElement.scrollTop,o=e||0,s=t||2e3,n=a||"easeOutSine",c=0;console.log(s);var i=Math.max(.1,Math.min(Math.abs(r-o)/s,.8)),d={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}},u=function e(){c+=1/60;var t=c/i,a=d[n](t);t<1?(requestAnimationFrame(e),window.scrollTo(0,r+(o-r)*a)):(window.scrollTo(0,o),"function"==typeof l&&l())};u()};t.default=a,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-6d0fdf99a6d3384836c9.js.map