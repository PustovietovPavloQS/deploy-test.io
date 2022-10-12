(function(){var t={5273:function(t){const e={face:"FACE",surface:"SURFACE",image:"IMAGE"};t.exports=e},6394:function(t,e,n){"use strict";var i=n(9242),o=n(3396);const r={id:"app"};function s(t,e){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(n)])}var a=n(89);const c={},u=(0,a.Z)(c,[["render",s]]);var h=u,d=n(2483),l=n(7139);const f={id:"app"},p={class:"baseContainer",ref:"baseContainerVideo"},g={ref:"photo"},m={class:"baseContainer"},w=(0,o._)("canvas",{id:"unity-canvas"},null,-1),v={key:0,class:"loadingIndicator"},y=(0,o._)("div",{class:"loader"},null,-1),b=[y];function M(t,e,n,r,s,a){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",{class:"control",onClick:e[0]||(e[0]=t=>a.CalculateTargets())}),(0,o.wy)((0,o._)("div",p,[(0,o._)("video",{ref:"video",class:(0,l.C_)(a.Flipped)},null,2),(0,o.wy)((0,o._)("canvas",g,null,512),[[i.F8,!1]])],512),[[i.F8,!s.ShowUnityPlayer]]),(0,o.wy)((0,o._)("div",m,[w,(0,o._)("div",{id:"container",ref:"container",class:(0,l.C_)(a.Flipped)},null,2)],512),[[i.F8,!0]]),s.ShowLoading?((0,o.wg)(),(0,o.iD)("div",v,b)):(0,o.kq)("",!0)])}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}toJson(){return`{ "x": ${this.x}, "y": ${this.y}, "z": ${this.z} }`}}class O{constructor(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){O.prototype.isMatrix4x4=!0,this.elements=t}clone(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}decompose(t,e,n){const i=this.elements;let o=new A(i[0],i[1],i[2]).magnitude();const r=new A(i[4],i[5],i[6]).magnitude(),s=new A(i[8],i[9],i[10]).magnitude(),a=this.determinant();a<0&&(o=-o);const c=1/o,u=1/r,h=1/s,d=new O;return d.clone(this),d.elements[0]*=c,d.elements[1]*=c,d.elements[2]*=c,d.elements[4]*=u,d.elements[5]*=u,d.elements[6]*=u,d.elements[8]*=h,d.elements[9]*=h,d.elements[10]*=h,t.set(i[12],i[14],i[13]),n.set(o,r,s),e.setFromRotationMatrix(d),this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],s=t[5],a=t[9],c=t[13],u=t[2],h=t[6],d=t[10],l=t[14],f=t[3],p=t[7],g=t[11],m=t[15];return f*(+o*a*h-i*c*h-o*s*d+n*c*d+i*s*l-n*a*l)+p*(+e*a*l-e*c*d+o*r*d-i*r*l+i*c*u-o*a*u)+g*(+e*c*h-e*s*l-o*r*h+n*r*l+o*s*u-n*c*u)+m*(-i*s*u-e*a*h+e*s*d+i*r*h-n*r*d+n*a*u)}}class E{constructor(t=0,e=0,n=0,i=1){E.prototype.isQuaternion=!0,this.x=t,this.y=e,this.z=n,this.w=i}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],s=e[5],a=e[9],c=e[2],u=e[6],h=e[10],d=n+s+h;if(d>0){const t=.5/Math.sqrt(d+1);this.x=(u-a)*t,this.y=(r-i)*t,this.z=(o-c)*t,this.w=.25/t}else if(n>s&&n>h){const t=2*Math.sqrt(1+n-s-h);this.x=.25*t,this.y=(o+c)/t,this.z=(i+r)/t,this.w=(u-a)/t}else if(s>h){const t=2*Math.sqrt(1+s-n-h);this.x=(i+r)/t,this.y=(a+u)/t,this.z=.25*t,this.w=(o-c)/t}else{const t=2*Math.sqrt(1+h-n-s);this.x=(o+c)/t,this.y=.25*t,this.z=(a+u)/t,this.w=(r-i)/t}return this.x*=-1,this}toJson(){return`{ "x": ${this.x}, "y": ${this.y}, "z": ${this.z}, "w":${this.w} }`}}class T{constructor(){T.prototype.isJSON=!0}toJson(){}isValid(){}}class x extends T{constructor(t,e,n,i=60,o=[]){super(),x.prototype.isFaceTransform=!0,t||(t=new A),e||(t=new E),n||(t=new A),this.position=t,this.rotation=e,this.scale=n,this.camerFOV=i,this.faceMeshData=o}toJson(){const t=this.position.toJson(),e=this.rotation.toJson(),n=this.scale.toJson();let i=this.faceMeshData.join();return`{\n\t\t\t\t\t"position": ${t}, \n\t\t\t\t\t"rotation": ${e}, \n\t\t\t\t\t"scale": ${n}, \n\t\t\t\t\t"camerFOV": ${this.camerFOV}, \n\t\t\t\t\t"facemesh": "${i}"\n\t\t\t\t}`}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.camerFOV&&this.faceMeshData)}}class C extends T{constructor(t,e,n,i=60){super(),C.prototype.isImageTransform=!0,t||(t=new A),e||(t=new E),n||(t=new A),this.position=t,this.rotation=e,this.scale=n,this.camerFOV=i}toJson(){const t=this.position.toJson(),e=this.rotation.toJson(),n=this.scale.toJson();return`{\n\t\t\t\t\t"position": ${t}, \n\t\t\t\t\t"rotation": ${e}, \n\t\t\t\t\t"scale": ${n}, \n\t\t\t\t\t"camerFOV": ${this.camerFOV} \n\t\t\t\t}`}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.camerFOV)}}const _="AR-Renderer-Face-Track-Controller";function F(t){t.SendMessage(_,"StartTracking")}function I(t,e,n,i,o,r){k(t,e,n,i,o,r)}function S(t){t.SendMessage(_,"StopTracking")}function k(t,e,n,i,o,r){let s=new x(e,n,i,o,r);if(!s.isValid())throw"Face transform is invalid!";t&&t.SendMessage(_,"Tracking",s.toJson())}const R="AR-Renderer-Image-Track-Controller";function D(t){t.SendMessage(R,"StartTracking")}function L(t,e,n,i,o){U(t,e,n,i,o)}function N(t){t.SendMessage(R,"StopTracking")}function U(t,e,n,i,o){let r=new C(e,n,i,o);if(!r.isValid())throw"Image transform is invalid!";t&&t.SendMessage(R,"Tracking",r.toJson())}let $;function j(t,e){var n="./Build",i=n+"/DeployTest.loader.js",o={dataUrl:n+"/DeployTest.data",frameworkUrl:n+"/DeployTest.framework.js",codeUrl:n+"/DeployTest.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"PustovietovQS",productName:"ar-unity-renderer-test-0.3.3",productVersion:"0.1"};t.width=window.innerWidth,t.height=window.innerHeight;var r=document.createElement("script");r.src=i,r.onload=()=>{createUnityInstance(t,o,(()=>{})).then((t=>{console.warn(t),$=t,e(t)})).catch((t=>{}))},t.appendChild(r)}function z(){D($)}function V(t,e){q(t,((t,n,i)=>{L($,t,n,i,e)}))}function P(){N($)}function J(){F($)}function G(t,e,n){q(t,((t,i,o)=>{I($,t,i,o,e,n)}))}function W(){S($)}function q(t,e){const n=new O(t),i=new A,o=new A,r=new E;return n.decompose(i,r,o),e(i,r,o)}n(4200);const H=new window.MINDAR.IMAGE.Compiler;async function B(t){const e=[];for(let o=0;o<t.length;o++){let n=await K(t[o]);e.push(n)}await H.compileImageTargets(e,(t=>{console.log(t)}));const n=await H.exportData();let i=Y(n);return i}async function K(t){return new Promise(((e,n)=>{let i=new Image;i.onload=()=>e(i),i.onerror=n,i.src=t}))}function Y(t){var e=new Blob([t]),n=window.document.createElement("a");return n.download="targets.mind",n.href=window.URL.createObjectURL(e),n.href}const Z="#scanningOverlay",Q="#loadingOverlay",X=5,tt=10,et=.001,nt=1e3;var it,ot,rt,st=!1;async function at(t,e,n){let i,o;e?i=ut(e,t):(i=ht(t),o=i.addFaceMesh()),i.addAnchor(0),it=i.renderer,ot=i.scene,rt=i.camera;const r=async()=>{await i.start(),n(),it.setAnimationLoop((()=>{it.render(ot,rt),ct(i,o?.geometry?.positions)}))};setTimeout((()=>{r()}),2e3)}function ct(t,e){let n=t.container.offsetWidth/t.container.offsetHeight,i=n<4/3?t.camera.fov:t.camera.fov*(4/3)/n,o=t.anchors[0];if(o.group.visible){let t=o.group.matrix.elements;st||(st=!0,e?J():z()),e?G(t,i,e):V(t,i)}else st&&(st=!1,e?W():P())}function ut(t,e){return new window.MINDAR.IMAGE.MindARThree({container:e,imageTargetSrc:t,uiScanning:Z,uiLoading:Q,warmupTolerance:X,missTolerance:tt,filterMinCF:et,filterBeta:nt})}function ht(t){return new window.MINDAR.FACE.MindARThree({container:t,videoWidth:1280,videoHeight:720})}var dt=n(5273),lt=n.n(dt),ft={name:"App",data(){return{targets:void 0,TRACKING_MODE:"face",UNITY_LOADED:!1,ShowLoading:!1,ShowUnityPlayer:!1}},computed:{Flipped(){return"FACE"===this.GetTrackingMode()?"fliped":""}},created(){window.onunload=function(){fetch("/quit").catch((t=>{throw t}))}},mounted(){this.Initialization()},methods:{async Initialization(){this.LoadUnityPlayer((t=>{t&&(this.RunVideo(),this.UNITY_LOADED=!0,"FACE"!==this.GetTrackingMode()&&"IMAGE"!==this.GetTrackingMode()||this.CalculateTargets())}))},Resize(){let t,e,n=this.$refs.video,i=this.$refs.baseContainerVideo;if(!n)return;const o=n.videoWidth/n.videoHeight,r=i.clientWidth/i.clientHeight;o>r?(e=i.clientHeight,t=e*o):(t=i.clientWidth,e=t/o),n.style.top=-(e-i.clientHeight)/2+"px",n.style.left=-(t-i.clientWidth)/2+"px",n.style.width=t+"px",n.style.height=e+"px"},async RunVideo(){let t=this.$refs.video,e=this.$refs.baseContainerVideo;t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.setAttribute("ref","video"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.zIndex="-2",e.appendChild(t),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"FACE"===this.GetTrackingMode()?"face":"environment"}}).then((e=>{t.addEventListener("loadedmetadata",(()=>{t.setAttribute("width",t.videoWidth+"px"),t.setAttribute("height",t.videoHeight+"px"),window.addEventListener("resize",this.Resize())})),t.srcObject=e})).catch((t=>{console.log("getUserMedia error",t)}))},async LoadUnityPlayer(t){let e=document.querySelector("#unity-canvas");j(e,(async e=>{t(e)}))},GetTrackingMode(){let t=this.TRACKING_MODE.toLowerCase();return lt()[t]},ShowLoadingIndicator(t){this.ShowLoading=t},async CalculateTargets(){if(void 0===this.targets&&this.UNITY_LOADED){let o=this.GetTrackingMode();switch(o){case lt().image:this.ShowLoadingIndicator(!0),this.targets=await B(["./target.png"]);break;case lt().surface:this.ShowLoadingIndicator(!0);var t=this.$refs.video,e=this.$refs.photo;e.width=240,e.height=t.videoHeight/t.videoWidth*e.width,e.getContext("2d").drawImage(t,0,0,e.width,e.height);var i=e.toDataURL("image/jpeg");this.targets=await B([i]);break;default:this.targets=null;break}let r=this.$refs.container;null===this.targets?n.e(816).then(n.t.bind(n,9816,23)).then((async()=>{at(r,void 0,(()=>{this.ShowUnityPlayer=!0,this.ShowLoadingIndicator(!1),this.Resize()}))})):n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{at(r,this.targets,(()=>{this.ShowUnityPlayer=!0,this.ShowLoadingIndicator(!1),this.Resize()}))}))}},OnError(t){return console.error(t)}}};const pt=(0,a.Z)(ft,[["render",M]]);var gt=pt;const mt=d.p7({history:d.r5(),routes:[{path:"/:id?",component:gt}]});(0,i.ri)(h).use(mt).mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var s=1/0;for(h=0;h<t.length;h++){i=t[h][0],o=t[h][1],r=t[h][2];for(var a=!0,c=0;c<i.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(a=!1,r<s&&(s=r));if(a){t.splice(h--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var h=t.length;h>0&&t[h-1][2]>r;h--)t[h]=t[h-1];t[h]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"===typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"===typeof i.then)return i}var r=Object.create(null);n.r(r);var s={};t=t||[null,e({}),e([]),e(e)];for(var a=2&o&&i;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((function(t){s[t]=function(){return i[t]}}));return s["default"]=function(){return i},n.d(r,s),r}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{528:"3b8c0e95",816:"563740fe"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ar-unity-renderer:";n.l=function(i,o,r,s){if(t[i])t[i].push(o);else{var a,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),h=0;h<u.length;h++){var d=u[h];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+r){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+r),a.src=i),t[i]=[o];var l=function(e,n){a.onerror=a.onload=null,clearTimeout(f);var o=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var r=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=r);var s=n.p+n.u(e),a=new Error,c=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,o[1](a)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,s=i[0],a=i[1],c=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var h=c(n)}for(e&&e(i);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(h)},i=self["webpackChunkar_unity_renderer"]=self["webpackChunkar_unity_renderer"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6394)}));i=n.O(i)})();
//# sourceMappingURL=app.e7403cd8.js.map
