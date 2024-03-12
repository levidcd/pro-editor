!(function(){var m=Math.pow;(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[2305],{5101:function(y,M,p){const g=p(99419),b={};for(const e of Object.keys(g))b[g[e]]=e;const f={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};y.exports=f;for(const e of Object.keys(f)){if(!("channels"in f[e]))throw new Error("missing channels property: "+e);if(!("labels"in f[e]))throw new Error("missing channel labels property: "+e);if(f[e].labels.length!==f[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:s,labels:r}=f[e];delete f[e].channels,delete f[e].labels,Object.defineProperty(f[e],"channels",{value:s}),Object.defineProperty(f[e],"labels",{value:r})}f.rgb.hsl=function(e){const s=e[0]/255,r=e[1]/255,o=e[2]/255,t=Math.min(s,r,o),a=Math.max(s,r,o),l=a-t;let h,n;a===t?h=0:s===a?h=(r-o)/l:r===a?h=2+(o-s)/l:o===a&&(h=4+(s-r)/l),h=Math.min(h*60,360),h<0&&(h+=360);const c=(t+a)/2;return a===t?n=0:c<=.5?n=l/(a+t):n=l/(2-a-t),[h,n*100,c*100]},f.rgb.hsv=function(e){let s,r,o,t,a;const l=e[0]/255,h=e[1]/255,n=e[2]/255,c=Math.max(l,h,n),i=c-Math.min(l,h,n),u=function(d){return(c-d)/6/i+1/2};return i===0?(t=0,a=0):(a=i/c,s=u(l),r=u(h),o=u(n),l===c?t=o-r:h===c?t=1/3+s-o:n===c&&(t=2/3+r-s),t<0?t+=1:t>1&&(t-=1)),[t*360,a*100,c*100]},f.rgb.hwb=function(e){const s=e[0],r=e[1];let o=e[2];const t=f.rgb.hsl(e)[0],a=1/255*Math.min(s,Math.min(r,o));return o=1-1/255*Math.max(s,Math.max(r,o)),[t,a*100,o*100]},f.rgb.cmyk=function(e){const s=e[0]/255,r=e[1]/255,o=e[2]/255,t=Math.min(1-s,1-r,1-o),a=(1-s-t)/(1-t)||0,l=(1-r-t)/(1-t)||0,h=(1-o-t)/(1-t)||0;return[a*100,l*100,h*100,t*100]};function v(e,s){return m(e[0]-s[0],2)+m(e[1]-s[1],2)+m(e[2]-s[2],2)}f.rgb.keyword=function(e){const s=b[e];if(s)return s;let r=1/0,o;for(const t of Object.keys(g)){const a=g[t],l=v(e,a);l<r&&(r=l,o=t)}return o},f.keyword.rgb=function(e){return g[e]},f.rgb.xyz=function(e){let s=e[0]/255,r=e[1]/255,o=e[2]/255;s=s>.04045?m((s+.055)/1.055,2.4):s/12.92,r=r>.04045?m((r+.055)/1.055,2.4):r/12.92,o=o>.04045?m((o+.055)/1.055,2.4):o/12.92;const t=s*.4124+r*.3576+o*.1805,a=s*.2126+r*.7152+o*.0722,l=s*.0193+r*.1192+o*.9505;return[t*100,a*100,l*100]},f.rgb.lab=function(e){const s=f.rgb.xyz(e);let r=s[0],o=s[1],t=s[2];r/=95.047,o/=100,t/=108.883,r=r>.008856?m(r,1/3):7.787*r+16/116,o=o>.008856?m(o,1/3):7.787*o+16/116,t=t>.008856?m(t,1/3):7.787*t+16/116;const a=116*o-16,l=500*(r-o),h=200*(o-t);return[a,l,h]},f.hsl.rgb=function(e){const s=e[0]/360,r=e[1]/100,o=e[2]/100;let t,a,l;if(r===0)return l=o*255,[l,l,l];o<.5?t=o*(1+r):t=o+r-o*r;const h=2*o-t,n=[0,0,0];for(let c=0;c<3;c++)a=s+1/3*-(c-1),a<0&&a++,a>1&&a--,6*a<1?l=h+(t-h)*6*a:2*a<1?l=t:3*a<2?l=h+(t-h)*(2/3-a)*6:l=h,n[c]=l*255;return n},f.hsl.hsv=function(e){const s=e[0];let r=e[1]/100,o=e[2]/100,t=r;const a=Math.max(o,.01);o*=2,r*=o<=1?o:2-o,t*=a<=1?a:2-a;const l=(o+r)/2,h=o===0?2*t/(a+t):2*r/(o+r);return[s,h*100,l*100]},f.hsv.rgb=function(e){const s=e[0]/60,r=e[1]/100;let o=e[2]/100;const t=Math.floor(s)%6,a=s-Math.floor(s),l=255*o*(1-r),h=255*o*(1-r*a),n=255*o*(1-r*(1-a));switch(o*=255,t){case 0:return[o,n,l];case 1:return[h,o,l];case 2:return[l,o,n];case 3:return[l,h,o];case 4:return[n,l,o];case 5:return[o,l,h]}},f.hsv.hsl=function(e){const s=e[0],r=e[1]/100,o=e[2]/100,t=Math.max(o,.01);let a,l;l=(2-r)*o;const h=(2-r)*t;return a=r*t,a/=h<=1?h:2-h,a=a||0,l/=2,[s,a*100,l*100]},f.hwb.rgb=function(e){const s=e[0]/360;let r=e[1]/100,o=e[2]/100;const t=r+o;let a;t>1&&(r/=t,o/=t);const l=Math.floor(6*s),h=1-o;a=6*s-l,l&1&&(a=1-a);const n=r+a*(h-r);let c,i,u;switch(l){default:case 6:case 0:c=h,i=n,u=r;break;case 1:c=n,i=h,u=r;break;case 2:c=r,i=h,u=n;break;case 3:c=r,i=n,u=h;break;case 4:c=n,i=r,u=h;break;case 5:c=h,i=r,u=n;break}return[c*255,i*255,u*255]},f.cmyk.rgb=function(e){const s=e[0]/100,r=e[1]/100,o=e[2]/100,t=e[3]/100,a=1-Math.min(1,s*(1-t)+t),l=1-Math.min(1,r*(1-t)+t),h=1-Math.min(1,o*(1-t)+t);return[a*255,l*255,h*255]},f.xyz.rgb=function(e){const s=e[0]/100,r=e[1]/100,o=e[2]/100;let t,a,l;return t=s*3.2406+r*-1.5372+o*-.4986,a=s*-.9689+r*1.8758+o*.0415,l=s*.0557+r*-.204+o*1.057,t=t>.0031308?1.055*m(t,1/2.4)-.055:t*12.92,a=a>.0031308?1.055*m(a,1/2.4)-.055:a*12.92,l=l>.0031308?1.055*m(l,1/2.4)-.055:l*12.92,t=Math.min(Math.max(0,t),1),a=Math.min(Math.max(0,a),1),l=Math.min(Math.max(0,l),1),[t*255,a*255,l*255]},f.xyz.lab=function(e){let s=e[0],r=e[1],o=e[2];s/=95.047,r/=100,o/=108.883,s=s>.008856?m(s,1/3):7.787*s+16/116,r=r>.008856?m(r,1/3):7.787*r+16/116,o=o>.008856?m(o,1/3):7.787*o+16/116;const t=116*r-16,a=500*(s-r),l=200*(r-o);return[t,a,l]},f.lab.xyz=function(e){const s=e[0],r=e[1],o=e[2];let t,a,l;a=(s+16)/116,t=r/500+a,l=a-o/200;const h=m(a,3),n=m(t,3),c=m(l,3);return a=h>.008856?h:(a-16/116)/7.787,t=n>.008856?n:(t-16/116)/7.787,l=c>.008856?c:(l-16/116)/7.787,t*=95.047,a*=100,l*=108.883,[t,a,l]},f.lab.lch=function(e){const s=e[0],r=e[1],o=e[2];let t;t=Math.atan2(o,r)*360/2/Math.PI,t<0&&(t+=360);const l=Math.sqrt(r*r+o*o);return[s,l,t]},f.lch.lab=function(e){const s=e[0],r=e[1],t=e[2]/360*2*Math.PI,a=r*Math.cos(t),l=r*Math.sin(t);return[s,a,l]},f.rgb.ansi16=function(e,s=null){const[r,o,t]=e;let a=s===null?f.rgb.hsv(e)[2]:s;if(a=Math.round(a/50),a===0)return 30;let l=30+(Math.round(t/255)<<2|Math.round(o/255)<<1|Math.round(r/255));return a===2&&(l+=60),l},f.hsv.ansi16=function(e){return f.rgb.ansi16(f.hsv.rgb(e),e[2])},f.rgb.ansi256=function(e){const s=e[0],r=e[1],o=e[2];return s===r&&r===o?s<8?16:s>248?231:Math.round((s-8)/247*24)+232:16+36*Math.round(s/255*5)+6*Math.round(r/255*5)+Math.round(o/255*5)},f.ansi16.rgb=function(e){let s=e%10;if(s===0||s===7)return e>50&&(s+=3.5),s=s/10.5*255,[s,s,s];const r=(~~(e>50)+1)*.5,o=(s&1)*r*255,t=(s>>1&1)*r*255,a=(s>>2&1)*r*255;return[o,t,a]},f.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let s;const r=Math.floor(e/36)/5*255,o=Math.floor((s=e%36)/6)/5*255,t=s%6/5*255;return[r,o,t]},f.rgb.hex=function(e){const r=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(r.length)+r},f.hex.rgb=function(e){const s=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!s)return[0,0,0];let r=s[0];s[0].length===3&&(r=r.split("").map(h=>h+h).join(""));const o=parseInt(r,16),t=o>>16&255,a=o>>8&255,l=o&255;return[t,a,l]},f.rgb.hcg=function(e){const s=e[0]/255,r=e[1]/255,o=e[2]/255,t=Math.max(Math.max(s,r),o),a=Math.min(Math.min(s,r),o),l=t-a;let h,n;return l<1?h=a/(1-l):h=0,l<=0?n=0:t===s?n=(r-o)/l%6:t===r?n=2+(o-s)/l:n=4+(s-r)/l,n/=6,n%=1,[n*360,l*100,h*100]},f.hsl.hcg=function(e){const s=e[1]/100,r=e[2]/100,o=r<.5?2*s*r:2*s*(1-r);let t=0;return o<1&&(t=(r-.5*o)/(1-o)),[e[0],o*100,t*100]},f.hsv.hcg=function(e){const s=e[1]/100,r=e[2]/100,o=s*r;let t=0;return o<1&&(t=(r-o)/(1-o)),[e[0],o*100,t*100]},f.hcg.rgb=function(e){const s=e[0]/360,r=e[1]/100,o=e[2]/100;if(r===0)return[o*255,o*255,o*255];const t=[0,0,0],a=s%1*6,l=a%1,h=1-l;let n=0;switch(Math.floor(a)){case 0:t[0]=1,t[1]=l,t[2]=0;break;case 1:t[0]=h,t[1]=1,t[2]=0;break;case 2:t[0]=0,t[1]=1,t[2]=l;break;case 3:t[0]=0,t[1]=h,t[2]=1;break;case 4:t[0]=l,t[1]=0,t[2]=1;break;default:t[0]=1,t[1]=0,t[2]=h}return n=(1-r)*o,[(r*t[0]+n)*255,(r*t[1]+n)*255,(r*t[2]+n)*255]},f.hcg.hsv=function(e){const s=e[1]/100,r=e[2]/100,o=s+r*(1-s);let t=0;return o>0&&(t=s/o),[e[0],t*100,o*100]},f.hcg.hsl=function(e){const s=e[1]/100,o=e[2]/100*(1-s)+.5*s;let t=0;return o>0&&o<.5?t=s/(2*o):o>=.5&&o<1&&(t=s/(2*(1-o))),[e[0],t*100,o*100]},f.hcg.hwb=function(e){const s=e[1]/100,r=e[2]/100,o=s+r*(1-s);return[e[0],(o-s)*100,(1-o)*100]},f.hwb.hcg=function(e){const s=e[1]/100,o=1-e[2]/100,t=o-s;let a=0;return t<1&&(a=(o-t)/(1-t)),[e[0],t*100,a*100]},f.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},f.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},f.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},f.gray.hsl=function(e){return[0,0,e[0]]},f.gray.hsv=f.gray.hsl,f.gray.hwb=function(e){return[0,100,e[0]]},f.gray.cmyk=function(e){return[0,0,0,e[0]]},f.gray.lab=function(e){return[e[0],0,0]},f.gray.hex=function(e){const s=Math.round(e[0]/100*255)&255,o=((s<<16)+(s<<8)+s).toString(16).toUpperCase();return"000000".substring(o.length)+o},f.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},2771:function(y,M,p){const g=p(5101),b=p(3153),f={},v=Object.keys(g);function e(r){const o=function(...t){const a=t[0];return a==null?a:(a.length>1&&(t=a),r(t))};return"conversion"in r&&(o.conversion=r.conversion),o}function s(r){const o=function(...t){const a=t[0];if(a==null)return a;a.length>1&&(t=a);const l=r(t);if(typeof l=="object")for(let h=l.length,n=0;n<h;n++)l[n]=Math.round(l[n]);return l};return"conversion"in r&&(o.conversion=r.conversion),o}v.forEach(r=>{f[r]={},Object.defineProperty(f[r],"channels",{value:g[r].channels}),Object.defineProperty(f[r],"labels",{value:g[r].labels});const o=b(r);Object.keys(o).forEach(a=>{const l=o[a];f[r][a]=s(l),f[r][a].raw=e(l)})}),y.exports=f},3153:function(y,M,p){const g=p(5101);function b(){const s={},r=Object.keys(g);for(let o=r.length,t=0;t<o;t++)s[r[t]]={distance:-1,parent:null};return s}function f(s){const r=b(),o=[s];for(r[s].distance=0;o.length;){const t=o.pop(),a=Object.keys(g[t]);for(let l=a.length,h=0;h<l;h++){const n=a[h],c=r[n];c.distance===-1&&(c.distance=r[t].distance+1,c.parent=t,o.unshift(n))}}return r}function v(s,r){return function(o){return r(s(o))}}function e(s,r){const o=[r[s].parent,s];let t=g[r[s].parent][s],a=r[s].parent;for(;r[a].parent;)o.unshift(r[a].parent),t=v(g[r[a].parent][a],t),a=r[a].parent;return t.conversion=o,t}y.exports=function(s){const r=f(s),o={},t=Object.keys(r);for(let a=t.length,l=0;l<a;l++){const h=t[l];r[h].parent!==null&&(o[h]=e(h,r))}return o}},99419:function(y){"use strict";y.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},2489:function(y,M,p){var g=p(99419),b=p(27933),f=Object.hasOwnProperty,v=Object.create(null);for(var e in g)f.call(g,e)&&(v[g[e]]=e);var s=y.exports={to:{},get:{}};s.get=function(t){var a=t.substring(0,3).toLowerCase(),l,h;switch(a){case"hsl":l=s.get.hsl(t),h="hsl";break;case"hwb":l=s.get.hwb(t),h="hwb";break;default:l=s.get.rgb(t),h="rgb";break}return l?{model:h,value:l}:null},s.get.rgb=function(t){if(!t)return null;var a=/^#([a-f0-9]{3,4})$/i,l=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,h=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,n=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,c=/^(\w+)$/,i=[0,0,0,1],u,d,w;if(u=t.match(l)){for(w=u[2],u=u[1],d=0;d<3;d++){var k=d*2;i[d]=parseInt(u.slice(k,k+2),16)}w&&(i[3]=parseInt(w,16)/255)}else if(u=t.match(a)){for(u=u[1],w=u[3],d=0;d<3;d++)i[d]=parseInt(u[d]+u[d],16);w&&(i[3]=parseInt(w+w,16)/255)}else if(u=t.match(h)){for(d=0;d<3;d++)i[d]=parseInt(u[d+1],0);u[4]&&(u[5]?i[3]=parseFloat(u[4])*.01:i[3]=parseFloat(u[4]))}else if(u=t.match(n)){for(d=0;d<3;d++)i[d]=Math.round(parseFloat(u[d+1])*2.55);u[4]&&(u[5]?i[3]=parseFloat(u[4])*.01:i[3]=parseFloat(u[4]))}else return(u=t.match(c))?u[1]==="transparent"?[0,0,0,0]:f.call(g,u[1])?(i=g[u[1]],i[3]=1,i):null:null;for(d=0;d<3;d++)i[d]=r(i[d],0,255);return i[3]=r(i[3],0,1),i},s.get.hsl=function(t){if(!t)return null;var a=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,l=t.match(a);if(l){var h=parseFloat(l[4]),n=(parseFloat(l[1])%360+360)%360,c=r(parseFloat(l[2]),0,100),i=r(parseFloat(l[3]),0,100),u=r(isNaN(h)?1:h,0,1);return[n,c,i,u]}return null},s.get.hwb=function(t){if(!t)return null;var a=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,l=t.match(a);if(l){var h=parseFloat(l[4]),n=(parseFloat(l[1])%360+360)%360,c=r(parseFloat(l[2]),0,100),i=r(parseFloat(l[3]),0,100),u=r(isNaN(h)?1:h,0,1);return[n,c,i,u]}return null},s.to.hex=function(){var t=b(arguments);return"#"+o(t[0])+o(t[1])+o(t[2])+(t[3]<1?o(Math.round(t[3]*255)):"")},s.to.rgb=function(){var t=b(arguments);return t.length<4||t[3]===1?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},s.to.rgb.percent=function(){var t=b(arguments),a=Math.round(t[0]/255*100),l=Math.round(t[1]/255*100),h=Math.round(t[2]/255*100);return t.length<4||t[3]===1?"rgb("+a+"%, "+l+"%, "+h+"%)":"rgba("+a+"%, "+l+"%, "+h+"%, "+t[3]+")"},s.to.hsl=function(){var t=b(arguments);return t.length<4||t[3]===1?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},s.to.hwb=function(){var t=b(arguments),a="";return t.length>=4&&t[3]!==1&&(a=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+a+")"},s.to.keyword=function(t){return v[t.slice(0,3)]};function r(t,a,l){return Math.min(Math.max(a,t),l)}function o(t){var a=Math.round(t).toString(16).toUpperCase();return a.length<2?"0"+a:a}},22305:function(y,M,p){const g=p(2489),b=p(2771),f=["keyword","gray","hex"],v={};for(const n of Object.keys(b))v[[...b[n].labels].sort().join("")]=n;const e={};function s(n,c){if(!(this instanceof s))return new s(n,c);if(c&&c in f&&(c=null),c&&!(c in b))throw new Error("Unknown model: "+c);let i,u;if(n==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(n instanceof s)this.model=n.model,this.color=[...n.color],this.valpha=n.valpha;else if(typeof n=="string"){const d=g.get(n);if(d===null)throw new Error("Unable to parse color from string: "+n);this.model=d.model,u=b[this.model].channels,this.color=d.value.slice(0,u),this.valpha=typeof d.value[u]=="number"?d.value[u]:1}else if(n.length>0){this.model=c||"rgb",u=b[this.model].channels;const d=Array.prototype.slice.call(n,0,u);this.color=h(d,u),this.valpha=typeof n[u]=="number"?n[u]:1}else if(typeof n=="number")this.model="rgb",this.color=[n>>16&255,n>>8&255,n&255],this.valpha=1;else{this.valpha=1;const d=Object.keys(n);"alpha"in n&&(d.splice(d.indexOf("alpha"),1),this.valpha=typeof n.alpha=="number"?n.alpha:0);const w=d.sort().join("");if(!(w in v))throw new Error("Unable to parse color from object: "+JSON.stringify(n));this.model=v[w];const{labels:k}=b[this.model],x=[];for(i=0;i<k.length;i++)x.push(n[k[i]]);this.color=h(x)}if(e[this.model])for(u=b[this.model].channels,i=0;i<u;i++){const d=e[this.model][i];d&&(this.color[i]=d(this.color[i]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}s.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(n){let c=this.model in g.to?this:this.rgb();c=c.round(typeof n=="number"?n:1);const i=c.valpha===1?c.color:[...c.color,this.valpha];return g.to[c.model](i)},percentString(n){const c=this.rgb().round(typeof n=="number"?n:1),i=c.valpha===1?c.color:[...c.color,this.valpha];return g.to.rgb.percent(i)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const n={},{channels:c}=b[this.model],{labels:i}=b[this.model];for(let u=0;u<c;u++)n[i[u]]=this.color[u];return this.valpha!==1&&(n.alpha=this.valpha),n},unitArray(){const n=this.rgb().color;return n[0]/=255,n[1]/=255,n[2]/=255,this.valpha!==1&&n.push(this.valpha),n},unitObject(){const n=this.rgb().object();return n.r/=255,n.g/=255,n.b/=255,this.valpha!==1&&(n.alpha=this.valpha),n},round(n){return n=Math.max(n||0,0),new s([...this.color.map(o(n)),this.valpha],this.model)},alpha(n){return n!==void 0?new s([...this.color,Math.max(0,Math.min(1,n))],this.model):this.valpha},red:t("rgb",0,a(255)),green:t("rgb",1,a(255)),blue:t("rgb",2,a(255)),hue:t(["hsl","hsv","hsl","hwb","hcg"],0,n=>(n%360+360)%360),saturationl:t("hsl",1,a(100)),lightness:t("hsl",2,a(100)),saturationv:t("hsv",1,a(100)),value:t("hsv",2,a(100)),chroma:t("hcg",1,a(100)),gray:t("hcg",2,a(100)),white:t("hwb",1,a(100)),wblack:t("hwb",2,a(100)),cyan:t("cmyk",0,a(100)),magenta:t("cmyk",1,a(100)),yellow:t("cmyk",2,a(100)),black:t("cmyk",3,a(100)),x:t("xyz",0,a(95.047)),y:t("xyz",1,a(100)),z:t("xyz",2,a(108.833)),l:t("lab",0,a(100)),a:t("lab",1),b:t("lab",2),keyword(n){return n!==void 0?new s(n):b[this.model].keyword(this.color)},hex(n){return n!==void 0?new s(n):g.to.hex(this.rgb().round().color)},hexa(n){if(n!==void 0)return new s(n);const c=this.rgb().round().color;let i=Math.round(this.valpha*255).toString(16).toUpperCase();return i.length===1&&(i="0"+i),g.to.hex(c)+i},rgbNumber(){const n=this.rgb().color;return(n[0]&255)<<16|(n[1]&255)<<8|n[2]&255},luminosity(){const n=this.rgb().color,c=[];for(const[i,u]of n.entries()){const d=u/255;c[i]=d<=.04045?d/12.92:m((d+.055)/1.055,2.4)}return .2126*c[0]+.7152*c[1]+.0722*c[2]},contrast(n){const c=this.luminosity(),i=n.luminosity();return c>i?(c+.05)/(i+.05):(i+.05)/(c+.05)},level(n){const c=this.contrast(n);return c>=7?"AAA":c>=4.5?"AA":""},isDark(){const n=this.rgb().color;return(n[0]*2126+n[1]*7152+n[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const n=this.rgb();for(let c=0;c<3;c++)n.color[c]=255-n.color[c];return n},lighten(n){const c=this.hsl();return c.color[2]+=c.color[2]*n,c},darken(n){const c=this.hsl();return c.color[2]-=c.color[2]*n,c},saturate(n){const c=this.hsl();return c.color[1]+=c.color[1]*n,c},desaturate(n){const c=this.hsl();return c.color[1]-=c.color[1]*n,c},whiten(n){const c=this.hwb();return c.color[1]+=c.color[1]*n,c},blacken(n){const c=this.hwb();return c.color[2]+=c.color[2]*n,c},grayscale(){const n=this.rgb().color,c=n[0]*.3+n[1]*.59+n[2]*.11;return s.rgb(c,c,c)},fade(n){return this.alpha(this.valpha-this.valpha*n)},opaquer(n){return this.alpha(this.valpha+this.valpha*n)},rotate(n){const c=this.hsl();let i=c.color[0];return i=(i+n)%360,i=i<0?360+i:i,c.color[0]=i,c},mix(n,c){if(!n||!n.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof n);const i=n.rgb(),u=this.rgb(),d=c===void 0?.5:c,w=2*d-1,k=i.alpha()-u.alpha(),x=((w*k===-1?w:(w+k)/(1+w*k))+1)/2,F=1-x;return s.rgb(x*i.red()+F*u.red(),x*i.green()+F*u.green(),x*i.blue()+F*u.blue(),i.alpha()*d+u.alpha()*(1-d))}};for(const n of Object.keys(b)){if(f.includes(n))continue;const{channels:c}=b[n];s.prototype[n]=function(...i){return this.model===n?new s(this):i.length>0?new s(i,n):new s([...l(b[this.model][n].raw(this.color)),this.valpha],n)},s[n]=function(...i){let u=i[0];return typeof u=="number"&&(u=h(i,c)),new s(u,n)}}function r(n,c){return Number(n.toFixed(c))}function o(n){return function(c){return r(c,n)}}function t(n,c,i){n=Array.isArray(n)?n:[n];for(const u of n)(e[u]||(e[u]=[]))[c]=i;return n=n[0],function(u){let d;return u!==void 0?(i&&(u=i(u)),d=this[n](),d.color[c]=u,d):(d=this[n]().color[c],i&&(d=i(d)),d)}}function a(n){return function(c){return Math.max(0,Math.min(n,c))}}function l(n){return Array.isArray(n)?n:[n]}function h(n,c){for(let i=0;i<c;i++)typeof n[i]!="number"&&(n[i]=0);return n}y.exports=s},48254:function(y){y.exports=function(p){return!p||typeof p=="string"?!1:p instanceof Array||Array.isArray(p)||p.length>=0&&(p.splice instanceof Function||Object.getOwnPropertyDescriptor(p,p.length-1)&&p.constructor.name!=="String")}},27933:function(y,M,p){"use strict";var g=p(48254),b=Array.prototype.concat,f=Array.prototype.slice,v=y.exports=function(s){for(var r=[],o=0,t=s.length;o<t;o++){var a=s[o];g(a)?r=b.call(r,f.call(a)):r.push(a)}return r};v.wrap=function(e){return function(){return e(v(arguments))}}}}]);
}());