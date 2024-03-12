"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[399],{55359:function(be,G,e){e.r(G),e.d(G,{default:function(){return q}});var H=e(4645),g=e(73970),le=e(26068),z=e.n(le),ee=e(3626),W=e(86865),v=e(3341),T=e.n(v),te=e(50959),c=e(11527),ne=(0,te.memo)(function(){var X=(0,ee.oR)(function(ie){return ie.config},T());return console.log(X),(0,c.jsx)(W.ZP,z()({},X))}),B=e(48305),ce=e.n(B),N=e(56982),b=e(32189),S=e(75957),p=e(32923),Z=e(24819),V=e(50487),l={type:"object",properties:{children:{type:"string",description:"\u8BBE\u7F6E\u6309\u94AE\u6587\u672C",title:"\u6587\u672C",renderProps:{allowClear:!0,placeholder:"\u7A7A\u503C\u5C06\u65E0\u6CD5\u6B63\u5E38\u663E\u793A",autoFocus:!0}},type:{type:"string",title:"\u7C7B\u578B",renderType:"radioGroup",default:"default",enum:["primary","default","dashed","link","text"],enumNames:["\u5F3A\u8C03","\u9ED8\u8BA4","\u865A\u7EBF","\u94FE\u63A5","\u6587\u672C"],renderOptions:{layout:"vertical",noLabel:!0}},danger:{type:"boolean",renderType:"boolean",title:"\u5371\u9669\u6001",default:!1},icon:{type:"string",title:"\u56FE\u6807",default:""},size:{title:"\u5927\u5C0F",type:"string",renderType:"radioGroup",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],default:"middle",category:"style"},shape:{title:"\u5F62\u72B6",type:"string",renderType:"radioGroup",enumOptions:[{label:"\u9ED8\u8BA4"},{label:"\u5706\u5F62",value:"circle"},{label:"\u80F6\u56CA",value:"round"}],category:"style",renderOptions:{}},loading:{type:"boolean",renderType:"boolean",title:"\u52A0\u8F7D\u4E2D",default:!1,category:"status"},disabled:{type:"boolean",renderType:"boolean",title:"\u7981\u7528",default:!1,category:"status"},ghost:{type:"boolean",renderType:"boolean",title:"\u5E7D\u7075\u6309\u94AE",default:!1,category:"style"}}},f={key:"content",schema:function(){return l},emitter:function(ie){return{icon:ie.content.text,children:ie.content.text}}},he=(0,te.memo)(function(){var X=(0,ee.oR)(function(y){return y.config},T()),ie=(0,ee.oR)(function(y){return[y.setConfig,y.undo,y.redo,y.undoStack().length,y.redoStack().length]},V.X),ge=ce()(ie,5),Ce=ge[0],Te=ge[1],U=ge[2],d=ge[3],A=ge[4];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S.Z,{schema:f.schema(),onChange:function(C,R){Ce(R,{replace:!0})},value:X,title:"Button"}),(0,c.jsx)(p.Z,{}),(0,c.jsxs)(Z.D,{horizontal:!0,gap:4,align:"center",padding:8,children:["\u9884\u8BBE\uFF1A",(0,c.jsx)(W.ZP,{onClick:function(){Ce({children:"\u9ED8\u8BA4\u6309\u94AE",type:"default"},{replace:!0})},children:"\u9ED8\u8BA4\u6309\u94AE"}),(0,c.jsx)(W.ZP,{onClick:function(){Ce({children:"\u4E3B\u8981\u6309\u94AE",size:"small",type:"primary"},{replace:!0})},children:"\u4E3B\u8981\u6309\u94AE"}),(0,c.jsx)(W.ZP,{onClick:function(){Ce({children:"\u5371\u9669\u6309\u94AE",type:"dashed",danger:!0,size:"large",ghost:!0,shape:"round"},{replace:!0})},children:"\u5371\u9669\u6309\u94AE"})]}),(0,c.jsx)(p.Z,{}),(0,c.jsxs)(Z.D,{horizontal:!0,padding:12,gap:8,children:[(0,c.jsx)(W.ZP,{icon:(0,c.jsx)(N.Z,{}),onClick:Te,disabled:d===0,children:(0,c.jsx)(Z.D,{style:{display:"inline-flex"},horizontal:!0,gap:4,children:(0,c.jsx)("div",{children:"\u64A4\u9500"})})}),(0,c.jsx)(W.ZP,{icon:(0,c.jsx)(b.Z,{}),onClick:U,disabled:A===0,children:"\u91CD\u505A"})]})]})}),Q=e(89801),de=e(95878),D=e.n(de),P=function(ie){var ge="";try{var Ce=e(77192),Te=[e(70775)];ge=Ce.format(ie,{parser:"typescript",plugins:Te,semi:!0,singleQuote:!0,printWidth:100,trailingComma:"all",proseWrap:"never",endOfLine:"lf"})}catch(U){console.error("err",U),ge=`\u4EE3\u7801\u683C\u5F0F\u5316\u5931\u8D25\uFF0C\u683C\u5F0F\u5316\u524D\u4E3A:
 `.concat(ie)}return ge},F=`
import { Button } from 'antd';

export default () => <%= component %>;
`,L=D()(F),w=function(ie){var ge=L({component:(0,Q.vq)("Button",z()({},ie))});return P(ge)},K=w,me=e(38648),J=function(){return{}},I=(0,me.I)(),re=I.useStore,ae={id:"Button",createStore:J,ui:{rules:[],Component:ne,ConfigPanel:he},models:[f],defaultConfig:{children:"\u9ED8\u8BA4\u6309\u94AE"},storeOptions:{devtools:{name:"ButtonAssetStore"}},codeEmitter:K},k=new H.J(ae),q=function(){return(0,c.jsx)(g.R,{componentAsset:k,style:{height:600},__EDITOR_STORE_DEVTOOLS__:{name:"ButtonEditor"}})}},43975:function(be,G,e){e.r(G);var H=e(48305),g=e.n(H),le=e(28434),z=e(4645),ee=e(73970),W=e(42308),v=e(96754),T=e(24819),te=e(11527),c=new z.J(le.sd);G.default=function(){var ne=(0,v.Z)("DEMO-PRO-EDITOR"),B=g()(ne,2),ce=B[0],N=B[1];return(0,te.jsxs)(T.D,{children:[(0,te.jsx)(ee.R,{componentAsset:c,editorAwareness:ce,onEditorAwarenessChange:N,style:{height:"calc(100vh - 100px)"}}),(0,te.jsxs)(T.D,{children:["\u5F53\u524D\u89C6\u56FE\u72B6\u6001\uFF1A",(0,te.jsx)(W.y,{children:JSON.stringify(ce,null,2)})]})]})}},72306:function(be,G,e){e.r(G);var H=e(26068),g=e.n(H),le=e(28434),z=e(73970),ee=e(4645),W=e(11527);G.default=function(){return(0,W.jsx)(z.R,{componentAsset:new ee.J(g()(g()({},le.sd),{},{storeOptions:{devtools:!0}})),style:{height:600},onCopy:function(T){console.log("\u4EE3\u7801\u590D\u5236",T)}})}},34679:function(be,G,e){e.r(G);var H=e(73970),g=e(11527);G.default=function(){return(0,g.jsx)(H.R,{style:{height:300}})}},4645:function(be,G,e){e.d(G,{J:function(){return ce}});var H=e(26068),g=e.n(H),le=e(25298),z=e.n(le),ee=e(17069),W=e.n(ee),v=e(82092),T=e.n(v),te=e(89801),c=function(N){return N.Runtime="runtime",N.Code="code",N}({}),ne=e(38648),B=e(11527),ce=function(){function N(b){var S=this,p,Z;z()(this,N),T()(this,"id",void 0),T()(this,"Component",void 0),T()(this,"ConfigPanel",void 0),T()(this,"CanvasStarter",void 0),T()(this,"DesignController",void 0),T()(this,"DevelopController",void 0),T()(this,"AssetProvider",void 0),T()(this,"ErrorBoundary",function(Q){var de=Q.children;return(0,B.jsx)(B.Fragment,{children:de})}),T()(this,"rules",void 0),T()(this,"models",void 0),T()(this,"defaultConfig",void 0),T()(this,"componentStore",void 0),T()(this,"componentStoreApi",void 0),T()(this,"configSelector",void 0),T()(this,"setConfig",void 0),T()(this,"codeEmitter",void 0),T()(this,"isStarterMode",function(){return!1}),T()(this,"generateProps",function(Q){var de=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.Runtime,D={};return Object.keys(Q).forEach(function(P){S.models.forEach(function(F){if(F.key===P){var L=F.emitter(Q,de);Object.assign(D,L)}})}),D}),this.id=b.id,this.models=b.models,b.defaultConfig&&(this.defaultConfig=b.defaultConfig);var V=(0,ne.F)(b.createStore,b.storeOptions),l=V.createStore,f=V.Provider,he=V.useStoreApi;this.componentStore=l(),this.componentStoreApi=he,this.AssetProvider=f,this.configSelector=((p=b.storeOptions)===null||p===void 0?void 0:p.getConfig)||function(Q){return JSON.parse(JSON.stringify(Q))},this.setConfig=((Z=b.storeOptions)===null||Z===void 0?void 0:Z.setConfig)||function(Q,de){return de(Q)},this.rules=b.ui.rules,this.Component=b.ui.Component,this.ConfigPanel=b.ui.ConfigPanel,this.CanvasStarter=b.ui.CanvasStarter,this.DesignController=b.ui.DesignController,this.DevelopController=b.ui.DevelopController,b.ui.ErrorBoundary&&(this.ErrorBoundary=b.ui.ErrorBoundary),b.ui.isStarterMode&&(this.isStarterMode=b.ui.isStarterMode),this.codeEmitter=b.codeEmitter}return W()(N,[{key:"generateCode",value:function(S){if(!this.codeEmitter)throw Error("\u6682\u672A\u5B9E\u73B0 generateCode \u65B9\u6CD5\uFF0C\u8BF7\u5728\u521D\u59CB\u5316\u65F6\u4F20\u5165 codeEmitter");if(!S)return"\u6682\u65E0\u751F\u6210\u4EE3\u7801";var p=this.generateProps(S,c.Code);return this.codeEmitter(S,p)}},{key:"getDefaultConfig",value:function(S){var p={};return this.models.forEach(function(Z){if(Z.schema){var V=Z.schema(S),l=(0,te.NM)(V);Object.assign(p,T()({},Z.key,l))}}),g()(g()({},p),this.defaultConfig)}},{key:"registerConfigPanel",value:function(S){this.ConfigPanel=S}}]),N}()},28434:function(be,G,e){e.d(G,{sd:function(){return b}});var H=e(26068),g=e.n(H),le=e(38648),z=function(p,Z){return{content:{text:"123",icon:""},setText:function(l){var f=Z(),he=f.content;p({content:g()(g()({},he),{},{text:l})})}}},ee=(0,le.I)(),W=ee.useStore,v=e(11527),T=function(p){var Z=p.id,V=W(),l=V.content,f=V.setText;return(0,v.jsx)("button",{type:"button","data-testid":Z,onClick:function(){f("clicked")},children:l.text})},te=function(p){var Z=p.id,V=Z===void 0?"component":Z;return(0,v.jsx)(T,{id:V})},c=function(){var p=W(),Z=p.content;return(0,v.jsx)("div",{"data-testid":"panel",children:Z.text})},ne=c,B={type:"object",properties:{text:{type:"string",title:"\u6587\u672C"},icon:{type:"string",title:"\u56FE\u6807",default:""}}},ce={key:"content",schema:function(){return B},emitter:function(p){return{icon:p.content.text,children:p.content.text}}},N=g()(g()({},ce),{},{schema:function(p){return{type:"object",properties:{text:{type:"string",title:"\u6587\u672C",default:p==="prod"?"prod":"dev"},icon:{type:"string",title:"\u56FE\u6807",default:""}}}}}),b={id:"Button",createStore:z,ui:{Component:te,ConfigPanel:ne,rules:[]},models:[ce],codeEmitter:function(){return""}}},38648:function(be,G,e){e.d(G,{F:function(){return c},I:function(){return ne}});var H=e(3341),g=e.n(H),le=e(89108),z=e(31965),ee=e(43820),W=(0,le.k)(),v=W.Provider,T=W.useStore,te=W.useStoreApi,c=function(ce,N){var b=function(){var p=(N==null?void 0:N.devtools)===!1?{}:(N==null?void 0:N.devtools)===!0?{name:"ProEditor-AssetStore"}:N==null?void 0:N.devtools,Z=(0,z.v)((N==null?void 0:N.devtools)!==!1);return(0,ee.F)()(Z(ce,p),g())};return{Provider:v,createStore:b,useStoreApi:te}},ne=function(){return{useStore:T,useStoreApi:te,AssetProvider:v}}},79550:function(be,G,e){e.d(G,{_:function(){return U}});var H=e(50959),g=e(82710),le=e(26068),z=e.n(le),ee=e(82092),W=e.n(ee),v=e(48305),T=e.n(v),te=e(79494),c=e(81057),ne=e(93251),B=e(67462),ce=e(50083),N=e(58334),b=e(99082),S=e(53649),p=e.n(S),Z=e(41132),V,l,f,he,Q,de,D,P,F,L,w,K,me,J=(0,Z.kc)(function(d){var A=d.token,y=d.css,C=d.cx,R=d.prefixCls,x="".concat(R,"-").concat(A==null?void 0:A.editorPrefix,"-draggable-panel"),j=y(V||(V=p()([`
    position: relative;
    &::before {
      position: absolute;
      z-index: 50;
      transition: all 0.3s ease-in-out;
      content: '';
    }

    &:hover,
    &:active {
      &::before {
        background: `,`;
      }
    }
  `])),A.colorPrimary),_=y(l||(l=p()([`
    position: absolute;
    opacity: 0;
    z-index: 1001;
    transition: opacity 0.1s;

    border-radius: 4px;
    cursor: pointer;
    background: `,`;
    border-width: 1px;
    border-style: solid;
    color: `,`;
    border-color: `,`;

    &:hover {
      color: `,`;
      background: `,`;
    }
  `])),A.colorBgElevated,A.colorTextTertiary,A.colorBorder,A.colorTextSecondary,A.colorFillQuaternary),Y=17,oe=40,ve=16;return{container:C(x,y(f||(f=p()([`
        flex-shrink: 0;
        position: relative;
        border: 0 solid `,`;

        &:hover {
          .`,`-toggle {
            opacity: 1;
          }
        }
      `])),A.colorSplit,x)),toggleLeft:C("".concat(x,"-toggle"),"".concat(x,"-toggle-left"),_,y(he||(he=p()([`
        width: `,`px;
        height: `,`px;
        left: -`,`px;
        top: 50%;
        margin-top: -20px;
        border-radius: 4px 0 0 4px;
        border-right-width: 0;
      `])),ve,oe,Y)),toggleRight:C("".concat(x,"-toggle"),"".concat(x,"-toggle-right"),_,y(Q||(Q=p()([`
        width: `,`px;
        height: `,`px;
        right: -`,`px;
        top: 50%;
        margin-top: -20px;
        border-radius: 0 4px 4px 0;
        border-left-width: 0;
      `])),ve,oe,Y)),toggleTop:C("".concat(x,"-toggle"),"".concat(x,"-toggle-top"),_,y(de||(de=p()([`
        height: `,`px;
        width: `,`px;
        top: -`,`px;
        left: 50%;
        margin-left: -20px;
        border-radius: 4px 4px 0 0;
        border-bottom-width: 0;
      `])),ve,oe,Y)),toggleBottom:C("".concat(x,"-toggle"),"".concat(x,"-toggle-bottom"),_,y(D||(D=p()([`
        height: 16px;
        width: `,`px;
        bottom: -`,`px;
        left: 50%;
        margin-left: -20px;
        border-radius: 0 0 4px 4px;
        border-top-width: 0;
      `])),oe,Y)),fixed:C("".concat(x,"-fixed"),y(P||(P=p()([`
        background: `,`;
        overflow: hidden;
      `])),A.colorBgContainer)),float:C("".concat(x,"-float"),y(F||(F=p()([`
        overflow: hidden;
        border-radius: 8px;
        background: `,`;
        box-shadow: `,`;
        z-index: 2000;
      `])),A.colorBgElevated,A.boxShadowSecondary)),leftHandle:C(y(L||(L=p()([`
        `,`;

        &::before {
          left: 50%;
          width: 2px;
          height: 100%;
        }
      `])),j),"".concat(x,"-left-handle")),rightHandle:C(y(w||(w=p()([`
        `,`;
        &::before {
          right: 50%;
          width: 2px;
          height: 100%;
        }
      `])),j),"".concat(x,"-right-handle")),topHandle:C("".concat(x,"-top-handle"),y(K||(K=p()([`
        `,`;

        &::before {
          top: 50%;
          height: 2px;
          width: 100%;
        }
      `])),j)),bottomHandle:C("".concat(x,"-bottom-handle"),y(me||(me=p()([`
        `,`;

        &::before {
          bottom: 50%;
          height: 2px;
          width: 100%;
        }
      `])),j))}}),I=e(11527),re=150,ae=400,k=function(A){switch(A){case"bottom":return"top";case"top":return"bottom";case"right":return"left";case"left":return"right"}},q=(0,H.memo)(function(d){var A=d.children,y=d.placement,C=y===void 0?"right":y,R=d.resize,x=d.style,j=d.size,_=d.defaultSize,Y=d.minWidth,oe=d.minHeight,ve=d.maxHeight,Ee=d.maxWidth,Ae=d.onSizeChange,Se=d.onSizeDragging,je=d.expandable,xe=je===void 0?!0:je,De=d.isExpand,Pe=d.onExpandChange,Oe=d.className,fe=C==="top"||C==="bottom",Re=J(),pe=Re.styles,Ie=Re.cx,Le=(0,ne.Z)(!0,{value:De,onChange:Pe}),Ue=T()(Le,2),ze=Ue[0],Ne=Ue[1],_e=R!==!1&&ze,Xe=(0,H.useMemo)(function(){return _e?W()({},k(C),pe["".concat(k(C),"Handle")]):{}},[_e,C]),Ge=z()(W()({top:!1,bottom:!1,right:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},k(C),!0),R),$e=(0,H.useMemo)(function(){return fe?z()({width:"100%",height:re},_):z()({width:ae,height:"100%"},_)},[fe]),ke=ze?{minWidth:typeof Y=="number"?Math.max(Y,0):280,minHeight:typeof oe=="number"?Math.max(oe,0):void 0,maxHeight:typeof ve=="number"?Math.max(ve,0):void 0,maxWidth:typeof Ee=="number"?Math.max(Ee,0):void 0,defaultSize:$e,size:j,style:x}:{minWidth:0,minHeight:0,size:{width:0,height:0}},Ve=(0,H.useMemo)(function(){switch(C){case"top":return{className:"Bottom",Arrow:B.Z};case"bottom":return{className:"Top",Arrow:ce.Z};case"right":return{className:"Left",Arrow:N.Z};case"left":return{className:"Right",Arrow:b.Z}}},[pe,C]),Qe=Ve.Arrow,we=Ve.className;return(0,I.jsxs)("div",{className:Ie(pe.container,Oe),style:W()({},"border".concat(we,"Width"),1),children:[xe&&(0,I.jsx)(c.Z,{className:Ie(pe["toggle".concat(we)]),onClick:function(){Ne(!ze)},style:{opacity:ze?void 0:1},children:(0,I.jsx)(Qe,{rotate:ze?180:0})}),(0,I.jsx)(te.e,z()(z()({},ke),{},{className:pe.fixed,enable:_e?Ge:void 0,handleClasses:Xe,onResizeStop:function(Ye,qe,We,Ke){Ae==null||Ae(Ke,{width:We.style.width,height:We.style.height})},onResize:function(Ye,qe,We,Ke){Se==null||Se(Ke,{width:We.style.width,height:We.style.height})},children:A}))]})}),X=e(7378),ie=300,ge=400,Ce=(0,H.memo)(function(d){var A=d.children,y=d.direction,C=d.resize,R=d.style,x=d.position,j=d.onPositionChange,_=d.size,Y=d.defaultSize,oe=d.defaultPosition,ve=d.minWidth,Ee=ve===void 0?280:ve,Ae=d.minHeight,Se=Ae===void 0?200:Ae,je=d.maxHeight,xe=d.maxWidth,De=d.canResizing,Pe=J(),Oe=Pe.styles,fe=(0,H.useMemo)(function(){return De?{right:Oe.rightHandle,left:Oe.leftHandle,top:Oe.topHandle,bottom:Oe.bottomHandle}:{}},[De,y]),Re=(0,H.useMemo)(function(){return De?C:z()({top:!0,bottom:!0,right:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},C)},[De,C]),pe=z()({width:ge,height:ie},Y),Ie=z()({x:100,y:100},oe),Le={minWidth:Math.max(Ee,0),minHeight:Math.max(Se,0),maxHeight:je?Math.max(je,0):void 0,maxWidth:xe?Math.max(xe,0):void 0,defaultSize:pe,size:_,style:R};return(0,I.jsx)(X.s,z()(z()({position:x,resizeHandleClasses:fe,default:z()(z()({},Ie),pe),onDragStop:function(ze,Ne){j==null||j({x:Ne.x,y:Ne.y})},bound:"parent",enableResizing:Re},Le),{},{className:Oe.float,children:A}))}),Te=(0,H.memo)(function(d){var A=d.children,y=d.className,C=d.mode,R=d.placement,x=d.resize,j=d.style,_=d.position,Y=d.onPositionChange,oe=d.size,ve=d.defaultSize,Ee=d.defaultPosition,Ae=d.minWidth,Se=d.minHeight,je=d.maxHeight,xe=d.maxWidth,De=d.onSizeChange,Pe=d.onSizeDragging,Oe=d.expandable,fe=Oe===void 0?!0:Oe,Re=d.isExpand,pe=d.onExpandChange;switch(C){case"fixed":default:return(0,I.jsx)(q,{size:oe,defaultSize:ve,onSizeDragging:Pe,onSizeChange:De,minHeight:Se,minWidth:Ae,maxHeight:je,maxWidth:xe,resize:x,onExpandChange:pe,expandable:fe,isExpand:Re,className:y,placement:R,style:j,children:A});case"float":return(0,I.jsx)(Ce,{defaultPosition:Ee,position:_,onPositionChange:Y,minHeight:Se,minWidth:Ae,maxHeight:je,maxWidth:xe,defaultSize:ve,size:oe,onSizeDragging:Pe,onSizeChange:De,resize:x,canResizing:x!==!1,className:y,style:j,children:A})}}),U=(0,g.nh)(Te)},63527:function(be,G,e){e.d(G,{Z:function(){return de}});var H=e(25298),g=e.n(H),le=e(17069),z=e.n(le),ee=e(62657),W=e.n(ee),v=e(21742),T=e.n(v),te=e(83136),c=e.n(te),ne=e(82092),B=e.n(ne),ce=e(31342),N=e(72171),b=e(41812),S=e(86865),p=e(40384),Z=e(14205),V=e(50959),l=e(24819),f=e(11527),he=ce.Z.Title,Q=ce.Z.Text,de=function(D){T()(F,D);var P=c()(F);function F(){var L;g()(this,F);for(var w=arguments.length,K=new Array(w),me=0;me<w;me++)K[me]=arguments[me];return L=P.call.apply(P,[this].concat(K)),B()(W()(L),"state",{error:void 0,info:{componentStack:""}}),B()(W()(L),"errorInfo",function(){var J,I=L.state,re=I.error,ae=I.info;return(0,f.jsxs)(l.D,{style:{width:800,background:"rgba(0,0,0,0.02)",padding:"24px 40px"},gap:12,children:[(0,f.jsx)("div",{children:(0,f.jsxs)(Q,{children:["\u9519\u8BEF\u4FE1\u606F\uFF1A",re==null?void 0:re.toString()]})}),(0,f.jsx)(l.D,{children:(J=ae==null?void 0:ae.componentStack.split(`
`).map(function(k,q){return(0,f.jsx)("div",{style:{textAlign:"left",fontSize:10},children:(0,f.jsx)(Q,{type:"secondary",children:k})},k+q)}))!==null&&J!==void 0?J:null})]})}),B()(W()(L),"prodInfo",function(){var J=L.props.onExportConfig;return(0,f.jsxs)(l.D,{align:"center",children:[(0,f.jsx)(N.Z,{image:(0,f.jsx)("div",{style:{fontSize:80,lineHeight:1},children:"\u{1F914}"}),description:(0,f.jsxs)(l.D,{gap:16,children:[(0,f.jsx)(he,{level:5,children:" \u7EC4\u4EF6\u6E32\u67D3\u4F3C\u4E4E\u51FA\u4E86\u70B9\u5C0F\u95EE\u9898 "}),(0,f.jsxs)("div",{children:[(0,f.jsx)(Q,{type:"secondary",children:"\u4E0D\u8FC7\u522B\u62C5\u5FC3\uFF0C\u4F60\u7684\u6570\u636E\u90FD\u8FD8\u5728\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5BFC\u51FA\u6570\u636E\u540E\u91CD\u8BD5"}),(0,f.jsx)("br",{}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsx)(Q,{type:"secondary",children:"\u5982\u91CD\u8BD5\u540E\u4ECD\u7136\u5B58\u5728\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u4EBA\u5458"})})]})]}),children:(0,f.jsx)("div",{children:(0,f.jsxs)(b.Z,{children:[(0,f.jsx)(S.ZP,{type:"primary",onClick:J,children:"\u5BFC\u51FA\u914D\u7F6E"}),(0,f.jsx)(S.ZP,{onClick:function(){p.ZP.success("\u5DF2\u63D0\u4EA4Bug")},children:"\u63D0\u4EA4Bug"})]})})}),(0,f.jsx)("div",{style:{marginTop:24},children:L.errorInfo()})]})}),L}return z()(F,[{key:"componentDidCatch",value:function(w,K){this.setState({error:w,info:K})}},{key:"render",value:function(){var w=this.props,K=w.children,me=w.onRetry,J=w.showDev,I=J===void 0?!1:J,re=this.state,ae=re.error,k=re.info;if(ae){var q;return(0,f.jsx)(l.D,{style:{padding:24},children:I?(0,f.jsx)(Z.Z,{type:"error",message:ae.toString(),showIcon:!0,description:(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:{overflow:"auto",maxHeight:"calc(100vh - 200px)"},children:(q=k==null?void 0:k.componentStack.split(`
`).map(function(X,ie){return(0,f.jsx)("div",{style:{textAlign:"left",fontSize:10},children:(0,f.jsx)(Q,{type:"secondary",children:X})},X+ie)}))!==null&&q!==void 0?q:null}),(0,f.jsx)("div",{style:{marginTop:24},children:(0,f.jsx)(S.ZP,{type:"primary",onClick:me,children:"\u91CD\u8BD5"})})]})}):this.prodInfo()})}return(0,f.jsx)(f.Fragment,{children:K})}}]),F}(V.Component)},78685:function(be,G,e){e.d(G,{Z:function(){return me}});var H=e(30963),g=e(73142),le=e(53649),z=e.n(le),ee=e(41132),W,v,T,te=(0,ee.kc)(function(J){var I=J.css;return{canvas:I(W||(W=z()([`
    height: 100%;
  `]))),control:I(v||(v=z()([`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 100;
  `]))),flow:I(T||(T=z()([`
    .react-flow {
      &__attribution {
        display: none;
      }

      &__pane,
      &__node {
        cursor: auto;
      }
    }
  `])))}}),c=e(11527),ne=function(I){var re=I.data,ae=te(),k=ae.styles;return(0,c.jsx)("div",{className:k.canvas,children:re})},B=ne,ce=e(67749),N=e(43459),b=e(11267),S=e(27850),p=e(86865),Z=e(38751),V=e(41812),l=e(18605),f=e(5899),he=e.n(f),Q=e(50959),de=e(81057),D=(0,Q.memo)(function(){var J=(0,H._K)(),I=(0,H.Sj)(),re=I.zoom,ae=function(){re===1?J.zoomTo(.5):J.zoomTo(1)};return(0,c.jsx)(S.Z,{title:re===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,c.jsxs)(p.ZP,{onClick:ae,style:{width:64},children:[Math.round(re*100),"%"]})})}),P=(0,Q.memo)(function(J){var I=J.viewport,re=J.extraBtns,ae=re===void 0?[]:re,k=(0,l.Fg)(),q=(0,H._K)(),X=function(){q.zoomIn()},ie=function(){q.zoomOut()},ge=function(){q.fitView()};return(0,Q.useEffect)(function(){he()(q.getViewport(),I)||q.setViewport(I)},[I]),(0,c.jsx)(Z.ZP,{theme:{token:{colorBgContainer:k.colorBgElevated}},children:(0,c.jsx)(de.Z,{padding:8,children:(0,c.jsxs)(V.Z,{children:[(0,c.jsx)(p.ZP,{icon:(0,c.jsx)(ce.Z,{}),onClick:ie}),(0,c.jsx)(D,{}),(0,c.jsx)(p.ZP,{icon:(0,c.jsx)(N.Z,{}),onClick:X}),(0,c.jsx)(S.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,c.jsx)(p.ZP,{icon:(0,c.jsx)(b.Z,{}),onClick:ge})}),ae]})})})}),F=P,L=e(66764),w={artboard:B},K=function(I){var re=I.children,ae=I.viewport,k=I.defaultViewport,q=I.onViewportChange,X=I.control,ie=X===void 0?!0:X,ge=I.extraControlBtns,Ce=ge===void 0?[]:ge,Te=te(),U=Te.styles;return(0,c.jsx)(H.tV,{children:(0,c.jsxs)(H.x$,{minZoom:.25,maxZoom:4,nodes:[{id:"artboard",type:"artboard",data:re,draggable:!1,connectable:!1,position:{x:0,y:0}}],defaultViewport:k,onMove:function(A,y){q==null||q(y)},nodeTypes:w,fitView:!0,onlyRenderVisibleElements:!0,panOnScroll:!0,className:U.flow,panOnDrag:!1,zoomOnScroll:!1,children:[ie&&(0,c.jsx)("div",{className:U.control,children:(0,c.jsx)(F,{viewport:ae,extraBtns:Ce})}),(0,c.jsx)(g.A,{color:"#aaa",gap:16,style:{zIndex:-1}})]})})},me=K},42308:function(be,G,e){e.d(G,{y:function(){return Te}});var H=e(26068),g=e.n(H),le=e(82710),z=e(94211),ee=e(82187),W=e.n(ee),v=e(50959),T=e(48305),te=e.n(T),c=e(6983),ne=e(39881),B=e(90943),ce=e.n(B),N=e(53649),b=e.n(N),S=e(41132),p=e(48843),Z,V,l=(0,S.kc)(function(U,d){var A=U.css,y=U.token,C=U.prefixCls,R=U.cx,x=d.theme,j="".concat(C,"-").concat(y.editorPrefix,"-highlight"),_=(0,p.p)(x==="dark"),Y=_.colorFillTertiary,oe=_.colorText;return{copy:R("".concat(j,"-copy"),A(Z||(Z=b()([`
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        width: 16px;
        height: 16px;
        padding: 0;
        overflow: hidden;
        border: 0;
        outline: none;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;
        background-color: `,`;

        &:hover {
          opacity: 0.8;
        }
      `])),Y)),copyIcon:R("".concat(j,"-copy-icon"),A(V||(V=b()([`
        width: 16px;
        color: `,`;
        height: 16px;
        font-size: 16px;

        @keyframes copy-button-trans {
          0% {
            margin-top: 0;
            opacity: 0.8;
          }
          10% {
            margin-top: -16px;
            opacity: 0.8;
          }
          90% {
            margin-top: -16px;
            opacity: 0.8;
          }
          100% {
            margin-top: 0;
            opacity: 0.8;
          }
        }

        &.scoll {
          animation: copy-button-trans 2s;
          animation-play-state: running;
        }
      `])),oe))}}),f=e(11527),he=function(d){var A=d.content,y=d.onCopy,C=d.theme,R=C===void 0?"light":C,x=d.style,j=(0,v.useState)(),_=te()(j,2),Y=_[0],oe=_[1],ve=l({theme:R}),Ee=ve.styles;(0,v.useEffect)(function(){return function(){window.clearTimeout(Y)}});var Ae=(0,v.useState)(!1),Se=te()(Ae,2),je=Se[0],xe=Se[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(ce(),{text:A&&A.length?A:"",onCopy:function(){xe(!0);var Pe=window.setTimeout(function(){xe(!1)},2e3);oe(Pe),y&&y(A)},children:(0,f.jsxs)("button",{type:"button",disabled:je,className:Ee.copy,style:x,children:[(0,f.jsx)(c.Z,{className:W()(Ee.copyIcon,{scoll:je})}),(0,f.jsx)(ne.Z,{className:Ee.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},Q=he,de=e(1657),D=e(59084),P=e(22305),F=e.n(P),L,w,K,me=(0,S.kc)(function(U,d){var A=U.cx,y=U.css,C=U.token,R=U.prefixCls,x=d.theme,j="".concat(R,"-").concat(C.editorPrefix,"-highlight"),_=(0,p.p)(x==="dark"),Y=_.colorFillTertiary,oe=_.colorText,ve=_.colorTextSecondary,Ee=F()(Y).mix(F()(x==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:A("".concat(j,"-tag-small"),y(L||(L=b()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:A(y(w||(w=b()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),Ee,C.fontFamilyCode,ve)),tag:A("".concat(j,"-tag"),y(K||(K=b()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),oe,C.borderRadius,oe,C.colorFill))}}),J=function(d){var A=d||{},y=A.children,C=A.size,R=C===void 0?"default":C,x=A.theme,j=x===void 0?"light":x,_=me({theme:j}),Y=_.styles,oe=_.cx;return(0,f.jsx)(D.Z,{bordered:!1,className:oe(Y.tag,Y.lang,R==="small"&&Y.small),children:y})},I=J,re=e(31759),ae=e.n(re),k=function(d,A){var y=(0,v.useRef)();function C(R,x){return Object.keys(R).forEach(function(j){ae()(R[j])==="object"&&R[j].handle?x.addEventListener(j,R[j].handle,R[j].options):x.addEventListener(j,R[j])}),function(){Object.keys(R).forEach(function(j){ae()(R[j])==="object"&&R[j].handle?x.removeEventListener(j,R[j].handle,R[j].options):x.removeEventListener(j,R[j])})}}return(0,v.useEffect)(function(){if(d.current)return C({keydown:function(x){var j=window.getSelection();if((x.ctrlKey||x.metaKey)&&x.code==="KeyA"&&y.current&&d.current){var _=document.createRange();_.selectNodeContents(d.current),j.removeAllRanges(),j.addRange(_),x.preventDefault()}(x.ctrlKey||x.metaKey)&&x.code==="KeyC"&&y.current&&d.current&&A&&j&&A(j.toString())},focus:function(){y.current=!0},blur:function(){y.current=!1}},d.current)},[d.current,d]),null},q,X,ie=(0,S.kc)(function(U,d){var A=U.css,y=U.cx,C=U.token,R=U.prefixCls,x=d.theme,j=d.type,_="".concat(R,"-").concat(C==null?void 0:C.editorPrefix,"-highlight"),Y=(0,p.p)(x==="dark"),oe=Y.colorFillTertiary,ve=A(q||(q=b()([`
      background-color: `,`;
    `])),j==="block"?oe:"transparent");return{container:y("".concat(_,"-container"),ve,A(X||(X=b()([`
          position: relative;
          margin: 0;
          border-radius: `,`px;
          transition: background-color 100ms `,`;

          :not(:hover) {
            .`,`-copy {
              visibility: hidden;
              opacity: 0;
            }

            .`,`-tag {
              visibility: hidden;
              opacity: 0;
            }
          }

          pre {
            margin: 0 !important;
            padding: `,` !important;
            background: none !important;
          }

          code {
            background: transparent !important;
          }
        `])),C.borderRadius,C.motionEaseOut,_,_,j==="pure"?0:"16px 24px"))}}),ge=e(67401),Ce=(0,v.memo)(function(U){var d=U.children,A=U.style,y=U.className,C=U.lineNumber,R=C===void 0?!1:C,x=U.copyable,j=x===void 0?!0:x,_=U.theme,Y=_===void 0?ge.ly:_,oe=U.language,ve=oe===void 0?"tsx":oe,Ee=U.shiki,Ae=Ee===void 0?!0:Ee,Se=U.showLanguage,je=Se===void 0?!0:Se,xe=U.type,De=xe===void 0?"block":xe,Pe=U.onCopy,Oe=(0,z.r)(),fe=Oe.appearance,Re=fe==="dark"?"dark":"light",pe=Y===ge.ly?Re:Y,Ie=ie({theme:pe,type:De}),Le=Ie.styles,Ue=(0,v.createRef)();return k(Ue,Pe),(0,f.jsxs)("div",{ref:Ue,tabIndex:-1,style:A,className:W()(Le.container,y),children:[j&&(0,f.jsx)(Q,{onCopy:Pe,theme:pe,content:d}),je&&ve&&(0,f.jsx)(I,{theme:pe,children:ve.toLowerCase()}),(0,f.jsx)(de.Z,{lineNumber:R,language:ve,theme:pe,shiki:Ae,children:d})]})}),Te=function(d){return(0,f.jsx)(le.iV,{children:(0,f.jsx)(Ce,g()({},d))})}},73970:function(be,G,e){e.d(G,{R:function(){return ln}});var H=e(26068),g=e.n(H),le=e(67825),z=e.n(le),ee=e(82710),W=e(74376),v=e(50959),T=e(94299),te=e(48305),c=e.n(te),ne=e(50487),B=e(3626),ce=function(){var t=(0,B.oR)(function(i){return[i.undo,i.redo]},ne.X),o=c()(t,2),n=o[0],r=o[1];(0,T.y1)("meta+z",function(i){i.preventDefault(),n()}),(0,T.y1)("meta+shift+z",function(i){i.preventDefault(),r()})},N=e(63527),b=e(53649),S=e.n(b),p=e(72171),Z=e(81057),V=e(41132),l=e(11527),f,he=(0,V.kc)(function(a){var t=a.token,o=a.css,n=a.cx,r=a.prefixCls,i="".concat(r,"-").concat(t.editorPrefix,"-pro-builder");return{cls:n("".concat(i,"-empty"),o(f||(f=S()([`
        height: 100%;
        background: `,`;
      `])),t.colorBgLayout))}}),Q=(0,v.memo)(function(){var a=he(),t=a.styles;return(0,l.jsx)(Z.Z,{className:t.cls,children:(0,l.jsx)(p.Z,{description:"\u672A\u627E\u5230 ComponentAsset\uFF0C\u8BF7\u5728 props \u4E2D\u4F20\u5165 ComponentAsset"})})}),de=Q,D=e(3341),P=e.n(D),F=e(77953),L=e(80111),w=function(){var t=(0,B.AC)(),o=t.getState(),n=o.deselectCanvas,r=o.undoStack,i=o.redoStack,u=o.setConfig,s=o.exportConfig,E=o.setViewport,O=o.resetConfig,m=o.undo,h=o.redo,M=o.setCanvasInteraction,se=o.togglePanelExpand,ue=(0,L.Z)(function(){return t.getState().editorAwareness.viewport}),$=(0,L.Z)(function(){return t.getState().editorAwareness}),Me=(0,L.Z)(function(){return t.getState().config}),Be=(0,L.Z)(function(){return t.getState().props}),ye=(0,L.Z)(function(){return t.getState().interaction});return(0,v.useMemo)(function(){return{getConfig:Me,setConfig:u,exportConfig:s,resetConfig:O,getViewport:ue,setViewport:E,getCanvasInteraction:ye,setCanvasInteraction:M,deselectCanvas:n,undo:m,redo:h,undoStack:r,redoStack:i,getProps:Be,getEditorAwareness:$,togglePanelExpand:se}},[])},K=(0,v.memo)(function(){var a=w(),t=(0,B.oR)(function(m){return[m.componentAsset.componentStoreApi,m.componentAsset.configSelector,m.componentAsset.setConfig,m.config]},ne.X),o=c()(t,4),n=o[0],r=o[1],i=o[2],u=o[3],s=n();(0,v.useEffect)(function(){(0,F.S)(s,a,!1,{type:"\u23EC \u6CE8\u5165 editor \u65B9\u6CD5",payload:Object.keys(a)})},[]);var E=(0,B.oR)(function(m){var h;return m.componentAsset.defaultConfig?h=m.componentAsset.defaultConfig:m.componentAsset.configSelector?h=m.componentAsset.configSelector(m.componentAsset.getDefaultConfig(m.mode)):h=m.componentAsset.getDefaultConfig(m.mode),h},P()),O=(0,B.AC)();return(0,v.useEffect)(function(){if(!u){var m={config:E};(0,F.S)(O,m,!1,{type:"\u23EC \u6CE8\u5165\u521D\u59CB\u5316 config",payload:m}),O.getState().yjsDoc.updateHistoryData(m),i(E,function(h){(0,F.S)(s,h,!1,{type:"\u{1F504} \u521D\u59CB\u5316\u72B6\u6001",payload:h})})}},[E]),(0,v.useEffect)(function(){if(u){var m=r(s.getState());if(P()(m,u))return;i(u,function(h){(0,F.S)(s,h,!1,{type:"\u{1F504} \u540C\u6B65 Editor \u72B6\u6001",payload:h})})}},[u]),null}),me=K,J=e(79550),I=(0,v.memo)(function(){var a=(0,B.oR)(function(O){return[O.editorAwareness.panelSize.width,O.updatePanelPosition,O.updatePanelSize,O.togglePanelExpand,O.componentAsset,O.editorAwareness.panelExpand]},ne.X),t=c()(a,6),o=t[0],n=t[1],r=t[2],i=t[3],u=t[4],s=t[5],E=(0,B.oR)(function(O){return O.editorAwareness.panelPosition},P());return(0,l.jsx)(J._,{isExpand:s,style:{display:"flex",flexDirection:"column"},position:E,onPositionChange:n,onSizeDragging:function(m,h){h.width&&r({width:typeof h.width=="string"?parseInt(h.width):h.width})},onExpandChange:i,minWidth:340,size:{width:o,height:"100%"},children:(0,l.jsx)(u.ConfigPanel,{})})}),re=I,ae=e(41812),k=e(24819),q,X,ie,ge=(0,V.kc)(function(a){var t=a.token,o=a.css,n=a.cx,r=a.prefixCls,i="".concat(r,"-").concat(t.editorPrefix,"-pro-builder-navbar");return{container:n(i,o(q||(q=S()([`
        background-color: `,`;
      `])),t.colorBgContainer)),logo:n("".concat(i,"-logo"),o(X||(X=S()([`
        font-size: 16px;
      `])))),img:n("".concat(i,"-logo-img"),o(ie||(ie=S()([`
        height: 24px;
      `]))))}}),Ce=(0,v.memo)(function(a){var t=a.logo,o=ge(),n=o.styles,r=(0,l.jsxs)(ae.Z,{children:[(0,l.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",alt:"ProBuilder",className:n.img}),(0,l.jsx)("div",{style:{fontSize:16},children:"ProBuilder"})]});return(0,l.jsx)(k.D,{horizontal:!0,align:"center",height:46,padding:"0 24px",distribution:"space-between",className:n.container,children:(0,l.jsx)("div",{className:n.logo,children:t!=null?t:r})})}),Te=Ce,U=e(81785),d=e(92593),A=e(56982),y=e(32189),C=e(27850),R=e(86865),x=e(78685),j=e(95617),_=e(38751),Y=e(18605),oe=function(t){if(t){if(typeof t=="string"){var o=document.querySelector(t);if(o)return o}if(t instanceof HTMLElement)return t;if(typeof t=="function")return t()}return document},ve=function(t,o,n){return t instanceof Array?{register:function(){t.forEach(function(i){i.addEventListener(o,n)})},unRegister:function(){t.forEach(function(i){i.removeEventListener(o,n)})}}:{register:function(){return t.addEventListener(o,n)},unRegister:function(){return t.removeEventListener(o,n)}}},Ee=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"data-uxid",n=document.createElement("div");return n.setAttribute(o,t),document.body.appendChild(n),n},Ae=function(t){var o=(0,v.useState)(),n=c()(o,2),r=n[0],i=n[1];return(0,v.useEffect)(function(){i(oe(t))},[]),r},Se=function(t){var o=t.interactModel,n=t.container,r=t.dispatchStatus,i=t.disabled,u=function(h){r({type:"handleContainerClick",target:h.target})},s=function(h){h.stopPropagation(),r({type:"handleClick",target:h.target})},E=function(h){r({type:"handleHover",target:h.target,action:"hover"})},O=function(){r({type:"handleHover",action:"unhover"})};return(0,v.useEffect)(function(){if(!i&&o.totalValidElements!==0){var m=o.getInteractListeners({click:s,hover:{onHoverStart:E,onHoverEnd:O}});return m.register(),function(){m.unRegister()}}},[i,o.totalValidElements]),(0,v.useEffect)(function(){if(!i&&n){var m=ve(n,"click",u),h=m.unRegister,M=m.register;return M(),function(){h()}}},[i,n]),{onClick:s}},je=e(25298),xe=e.n(je),De=e(17069),Pe=e.n(De),Oe=e(82092),fe=e.n(Oe),Re=e(5899),pe=e.n(Re),Ie=["data-uxid","data-testid"],Le=function(){function a(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;xe()(this,a),fe()(this,"rules",void 0),fe()(this,"models",void 0),fe()(this,"container",void 0),fe()(this,"initListener",function(n,r,i){return n instanceof Array?{register:function(){n.forEach(function(s){s.addEventListener(r,i)})},unRegister:function(){n.forEach(function(s){s.removeEventListener(r,i)})}}:{register:function(){return n.addEventListener(r,i)},unRegister:function(){return n.removeEventListener(r,i)}}}),this.rules=t,this.container=o,this.initModels()}return Pe()(a,[{key:"totalValidElements",get:function(){return this.getMatchedElements().length}},{key:"initModels",value:function(){var o=this;this.models=this.rules.map(function(n){return g()(g()({},n),{},{elements:a.getValidElements(n,o.container),containerMatched:o.isMatchContainer(n)})})}},{key:"getRuleAndIndexByElement",value:function(o){var n=-1,r=this.models.findIndex(function(u){var s=u.elements.findIndex(function(E){return pe()(E,o)});return s>-1&&(n=s),s>-1}),i=this.rules[r];if(i)return{index:n,rule:i};if(o.parentElement)return this.getRuleAndIndexByElement(o.parentElement)}},{key:"getHoverElements",value:function(){return this.getMatchedElements("hover")}},{key:"getClickElements",value:function(){return this.getMatchedElements("click")}},{key:"getMatchedElements",value:function(o){return this.models.filter(function(n){return o?n.actions.includes(o):n}).map(function(n){return n.elements}).flat().filter(function(n){return n})}},{key:"getElementByStatus",value:function(o){var n,r=(n=o.currentNode)!==null&&n!==void 0?n:o.activeNode;if(r){var i=r.rule,u=r.index,s=this.models.find(function(E){return E.id===i.id&&E.actions.includes(o.action)});if(s)return s.elements[u]}}},{key:"isMatchContainer",value:function(o){return pe()(this.container,document)?!1:o.selectors.some(function(n){var r=a.querySelector(n);return r.length>0})}},{key:"getClickListeners",value:function(o){var n=this.getClickElements();return this.initListener(n,"click",o)}},{key:"getHoverListeners",value:function(o,n){var r=this.getHoverElements(),i=this.initListener(r,"mouseenter",o),u=this.initListener(r,"mouseleave",n);return{register:function(){i.register(),u.register()},unRegister:function(){i.unRegister(),u.unRegister()}}}},{key:"getInteractListeners",value:function(o){var n=o.click,r=o.hover,i=this.getClickListeners(n),u=this.getHoverListeners(r.onHoverStart,r.onHoverEnd);return{register:function(){i.register(),u.register()},unRegister:function(){i.unRegister(),u.unRegister()}}}}],[{key:"getValidElements",value:function(o){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;return o.selectors.map(function(i){return n.querySelector(i,r)}).map(function(i){return Array.from(i.values())}).flat()}},{key:"querySelector",value:function(o){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=0,i=Ie;r<i.length;r++){var u=i[r],s=n.querySelectorAll("[".concat(u,'="').concat(o,'"]'));if(s.length>0)return s}return n.querySelectorAll(o)}}]),a}(),Ue=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,n=(0,v.useRef)(new Le(t,o));return(0,v.useEffect)(function(){n.current.initModels()}),(0,v.useEffect)(function(){n.current=new Le(t,o)},[t,o]),n.current},ze=function(t){var o,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(m,h){var M,se=(M=n==null?void 0:n.value)!==null&&M!==void 0?M:m;switch(h.type){case"handleContainerClick":return{status:"unSelected",action:"click"};case"handleClick":var ue=t.getRuleAndIndexByElement(h.target),$=se&&!!se.activeNode;return se&&pe()(ue,se.activeNode)?{status:$?"unSelected":"selected",action:"click",currentNode:$?void 0:ue,activeNode:$?void 0:ue}:{status:"selected",currentNode:ue,activeNode:ue,action:"click"};case"handleHover":var Me=h.target&&t.getRuleAndIndexByElement(h.target);return g()(g()({},se),{},{status:h.action,action:"hover",currentNode:Me});default:return se}},i=(0,v.useReducer)(r,n==null?void 0:n.value),u=c()(i,2),s=u[0],E=u[1];return(0,v.useEffect)(function(){n!=null&&n.onChange&&n.onChange(s)},[s]),{status:(o=n==null?void 0:n.value)!==null&&o!==void 0?o:s,dispatchStatus:E}},Ne=(0,V.kc)(function(a){var t=a.token,o=a.prefixCls,n="".concat(o,"-").concat(t.editorPrefix,"-context-canvas");return{componentPrefix:n}}),_e=function(){var t=Ne(),o=t.styles,n=(0,v.useRef)(),r=(0,v.useRef)(),i=function(){return!!n.current},u=function($,Me){$&&$.classList.add("".concat(o.componentPrefix,"-").concat(Me))},s=function($,Me){$&&$.classList.remove("".concat(o.componentPrefix,"-").concat(Me))},E=function($){s(n.current,$),s(r.current,$)},O=function($){n.current=$,u($,"click"),s($,"hover")},m=function($){s($,"click"),s($,"hover"),pe()($,n.current)&&(n.current=null)},h=function(){s(n.current,"click"),s(n.current,"hover"),n.current=null},M=function($){u($,"hover"),r.current=$},se=function(){E("hover"),r.current=null};return{renderSelected:O,renderUnselected:m,renderHover:M,renderUnHover:se,renderUnselectedAll:h,currentSelectedElementRef:n,isSelected:i}},Xe=function(t){var o=t.rules,n=t.status,r=t.onStatusChange,i=t.getContainer,u=t.disabled,s=_e(),E=Ae(i),O=Ue(o,E),m=ze(O,{value:n,onChange:r}),h=m.status,M=m.dispatchStatus,se=function(Be){if(!Be){s.renderUnselectedAll();return}var ye=O.getElementByStatus(Be);switch(Be.status){case"selected":s.renderUnselectedAll(),s.renderSelected(ye);break;case"unSelected":{ye?s.renderUnselected(ye):s.renderUnselectedAll();break}case"hover":s.renderHover(ye);break;case"unhover":s.renderUnHover();break}};(0,v.useEffect)(function(){se(h)},[h]);var ue=Se({container:E,interactModel:O,dispatchStatus:M,disabled:u}),$=ue.onClick;return{onClick:$}},Ge=e(89784),$e,ke=(0,V.kc)(function(a){var t=a.token,o=a.prefixCls;return(0,Y.hi)($e||($e=S()([`
    .`,"-",`-context-canvas {
      &-hover {
        position: relative;
        transition: opacity 0.5s ease-in !important;

        &::after {
          // \u56FA\u5B9A\u4F4D\u7F6E
          position: absolute;
          top: 0;
          left: 0;


          z-index: 100;

          // \u4FDD\u8BC1\u548C \u7236\u5BB9\u5668\u4E00\u6837\u5927\u5C0F
          display: block;
          width: 100% !important;
          height: 100% !important;

          // \u63A7\u5236\u9009\u4E2D\u6837\u5F0F
          background: `,` !important;
          border-radius: 4px !important;
          // \u4FDD\u8BC1\u53EF\u89C1
          visibility: visible !important;
          cursor: pointer;
          content: '';
        }
      }

      &-click {
        position: relative;
        overflow: visible !important;

        &::after {
          // \u56FA\u5B9A\u4F4D\u7F6E
          position: absolute;
          top: 0;
          left: 0;

          z-index: 100;

          // \u4FDD\u8BC1\u548C \u7236\u5BB9\u5668\u4E00\u6837\u5927\u5C0F
          display: block;
          width: 100% !important;
          height: 100% !important;

          // \u63A7\u5236\u9009\u4E2D\u6837\u5F0F
          background: `,` !important;
          border: 2px solid `,` !important;
          border-radius: 4px !important;
          box-shadow: `,` !important;
          // \u4FDD\u8BC1\u53EF\u89C1
          visibility: visible !important;
          cursor: pointer;
          content: '';
        }
      }
    }`])),o,t.editorPrefix,t.colorFillQuaternary,(0,Ge.DZ)(.8,t.colorPrimary),t.colorPrimary,t.boxShadowSecondary),{}}),Ve=function(t){return ke(),Xe(t),(0,l.jsx)(l.Fragment,{children:t.children})},Qe=(0,ee.nh)(Ve),we=e(80980),Je=function(){var t=(0,B.oR)(function(r){return r.internalUpdateEditorAwareness}),o=(0,we.Z)(t,{wait:100}),n=o.run;return(0,v.useMemo)(function(){return{updateEditorAwareness:n}},[])},Ye=(0,v.memo)(function(){var a=(0,Y.Fg)(),t="".concat(a.prefixCls,"-").concat(a.editorPrefix,"-pro-builder-canvas"),o=(0,B.oR)(function(M){return[M.interaction,M.enableCanvasInteraction,M.componentAsset,M.internalUpdateCanvasInteract]},ne.X),n=c()(o,4),r=n[0],i=n[1],u=n[2],s=n[3],E=(0,v.useRef)(),O=(0,j.Z)(E),m=Je(),h=m.updateEditorAwareness;return(0,v.useEffect)(function(){h({componentSizeOnCanvas:O})},[O]),(0,l.jsx)(Qe,{disabled:!i,status:r,rules:u.rules,getContainer:"#".concat(t),onStatusChange:s,children:(0,l.jsx)("div",{id:"".concat(t),ref:E,className:"".concat(t,"-component"),children:(0,l.jsx)(_.ZP,{prefixCls:"canvas",children:(0,l.jsx)(u.Component,{})})})})}),qe=Ye,We=(0,v.memo)(function(){var a=(0,B.oR)(function(M){return[M.editorAwareness.viewport,M.componentAsset,M.enableCanvasInteraction,M.toggleCanvasInteraction,M.internalUpdateEditorAwareness,M.redo,M.undo,M.redoStack().length>0,M.undoStack().length>0]},ne.X),t=c()(a,9),o=t[0],n=t[1],r=t[2],i=t[3],u=t[4],s=t[5],E=t[6],O=t[7],m=t[8],h=n.ErrorBoundary;return(0,l.jsx)(h,{children:(0,l.jsx)(x.Z,{viewport:o,onViewportChange:function(se){u({viewport:se})},extraControlBtns:[(0,l.jsx)(C.Z,{title:"\u753B\u5E03\u4EA4\u4E92\uFF1A\u5DF2".concat(r?"\u542F\u7528":"\u7981\u7528"),children:(0,l.jsx)(R.ZP,{icon:r?(0,l.jsx)(U.Z,{}):(0,l.jsx)(d.Z,{}),onClick:i})},"interaction"),(0,l.jsxs)(R.ZP.Group,{children:[(0,l.jsx)(C.Z,{title:"\u64A4\u9500",children:(0,l.jsx)(R.ZP,{icon:(0,l.jsx)(A.Z,{}),onClick:E,disabled:!m})}),(0,l.jsx)(C.Z,{title:"\u91CD\u505A",children:(0,l.jsx)(R.ZP,{icon:(0,l.jsx)(y.Z,{}),onClick:s,disabled:!O})})]},"undo-redo")],children:(0,l.jsx)(qe,{})})})}),Ke=We,yt=e(67462),Ct=e(99082),xt=e(42308),nt,ot,rt,at,it,Et=(0,V.kc)(function(a){var t=a.token,o=a.stylish,n=a.css;return{container:n(nt||(nt=S()([`
      border-top: 1px solid `,`;
      display: flex;
      flex-direction: column;
    `])),t.colorBorder),header:n(ot||(ot=S()([`
      background: `,`;
      cursor: pointer;
    `])),t.colorBgContainer),collapse:n(rt||(rt=S()([`
      background: `,`;
      &:hover {
        background: `,`;
      }
    `])),t.colorFillQuaternary,t.colorFillTertiary),headerTitle:n(at||(at=S()([`
      `,`
      `,`;

      padding: 2px 8px;

      color: `,`;
      border-radius: `,`px;
    `])),o.containerBgHover,o.textInfo,t.colorTextSecondary,t.borderRadius),code:n(it||(it=S()([`
      background: `,`;
      height: 100%;
    `])),t.colorFillQuaternary)}}),st=36,St=(0,v.memo)(function(a){var t=(0,B.oR)(function(He){return[He.config,He.componentAsset]},ne.X),o=c()(t,2),n=o[0],r=o[1],i=Et(),u=i.styles,s=i.cx,E=(0,v.useState)(!0),O=c()(E,2),m=O[0],h=O[1],M=(0,v.useState)(220),se=c()(M,2),ue=se[0],$=se[1],Me=a.onCopy,Be=(0,Y.Fg)(),ye=Be.isDarkMode,Ze=r.generateCode(n);return(0,l.jsxs)(J._,{onSizeChange:function(tt){$(ue+tt.height)},placement:"bottom",size:{height:m?ue:st},minHeight:st,className:u.container,expandable:!1,children:[(0,l.jsxs)(k.D,{padding:"6px 8px",horizontal:!0,distribution:"space-between",align:"center",className:s(u.header,m?"":u.collapse),onClick:function(){return h(!m)},children:[(0,l.jsxs)(k.D,{horizontal:!0,gap:12,className:u.headerTitle,children:[m?(0,l.jsx)(yt.Z,{}):(0,l.jsx)(Ct.Z,{}),"\u4EE3\u7801\u751F\u6210"]}),(0,l.jsx)(k.D,{horizontal:!0,gap:8,onClick:function(tt){tt.stopPropagation()}})]}),(0,l.jsx)(k.D,{className:u.code,children:(0,l.jsx)(xt.y,{theme:ye?"dark":"light",lineNumber:!0,language:"tsx",onCopy:Me,showLanguage:!1,style:{height:"100%",overflow:"auto"},children:Ze})})]})}),At=St,et=function(t){return t.mode==="design"},dn={isDesignMode:et},jt=(0,v.memo)(function(){var a=(0,B.oR)(function(n){return n.componentAsset}),t=(0,B.oR)(et),o=t?a.DesignController:a.DevelopController;return o?(0,l.jsx)(o,{}):null}),lt,dt,Pt=(0,V.kc)(function(a){var t=a.token,o=a.css,n=a.cx;return{container:n(o(lt||(lt=S()([`
      height: 100%;
    `])))),default:n(o(dt||(dt=S()([`
      padding: `,`px;

      color: `,`;
    `])),t.paddingLG,t.colorTextTertiary))}}),Dt=(0,v.memo)(function(){var a=(0,B.oR)(function(i){return[i.componentAsset]},ne.X),t=c()(a,1),o=t[0],n=Pt(),r=n.styles;return(0,l.jsx)(Z.Z,{className:r.container,children:o.CanvasStarter?(0,l.jsx)(o.CanvasStarter,{}):(0,l.jsx)(p.Z,{image:(0,l.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/rxat8ds3j/empty.svg"}),imageStyle:{height:210,marginBottom:32},className:r.default,description:"\u6682\u65E0\u914D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u4ECE\u53F3\u4FA7\u9762\u677F\u5F00\u59CB\u7F16\u8F91"})})}),Ot=Dt,ut,Mt=(0,V.kc)(function(a){var t=a.token,o=a.css,n=a.cx,r=a.prefixCls,i="".concat(r,"-").concat(t.editorPrefix,"-pro-builder-stage");return{container:n("".concat(i,"-container"),o(ut||(ut=S()([`
        overflow: auto;
      `]))))}}),bt=(0,v.memo)(function(a){var t=a.hideNavbar,o=a.onCopy,n=(0,B.oR)(function(s){return s.componentAsset.componentStore(function(E){return s.componentAsset.isStarterMode(E)})}),r=(0,B.oR)(et),i=Mt(),u=i.styles;return(0,l.jsx)("div",{className:u.container,style:{height:t?"100%":"calc(100% - 46px)"},children:(0,l.jsxs)(k.D,{height:"100%",children:[n?(0,l.jsx)(Ot,{}):(0,l.jsx)(Ke,{}),(0,l.jsx)(jt,{}),r?null:(0,l.jsx)(At,{onCopy:o})]})})}),Tt=bt,ct,vt,ft,gt=(0,V.kc)(function(a){var t=a.token,o=a.css,n=a.cx,r=a.prefixCls,i="".concat(r,"-").concat(t.editorPrefix,"-pro-builder");return{app:o(ct||(ct=S()([`
      height: 100%;
    `]))),main:n("".concat(i,"-main"),o(vt||(vt=S()([`
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        position: relative;
        background-color: `,`;
      `])),t.colorBgLayout)),left:n("".concat(i,"-left"),o(ft||(ft=S()([`
        flex-grow: 1;
      `]))))}}),Rt=(0,v.memo)(function(a){var t=a.logo,o=a.hideNavbar,n=o===void 0?!0:o,r=a.style,i=a.ErrorBoundary,u=i===void 0?N.Z:i,s=a.onCopy,E=(0,B.oR)(function(ye){return[ye.exportConfig,ye.componentAsset,ye.editorAwareness.panelSize.width,ye.editorAwareness.panelExpand]},ne.X),O=c()(E,4),m=O[0],h=O[1],M=O[2],se=O[3],ue=gt(),$=ue.styles;if(ce(),!h)return(0,l.jsx)(de,{});var Me=h.AssetProvider,Be=(0,l.jsxs)("div",{className:$.main,style:r,children:[(0,l.jsxs)("div",{className:$.left,style:{maxWidth:se?"calc(100vw - ".concat(M,"px)"):"100vw"},children:[n?null:(0,l.jsx)(Te,{logo:t}),(0,l.jsx)(Tt,{hideNavbar:n,onCopy:s})]}),(0,l.jsx)(re,{})]});return(0,l.jsx)(u,{onExportConfig:m,children:(0,l.jsxs)(Me,{createStore:function(){return h.componentStore},children:[Be,(0,l.jsx)(me,{})]})})}),Bt=Rt,It=e(31965),Lt=e(43820),Ut=e(72266),mt=e.n(Ut),zt={assetAwareness:{},onAssetAwarenessChange:null,editorAwareness:{panelPosition:{x:0,y:0},panelSize:{width:340},panelExpand:!0,viewport:{x:0,y:0,zoom:1}},onEditorAwarenessChange:null},Ft=function(t,o){return g()(g()({},zt),{},{internalUpdateAssetAwareness:function(r){var i=o(),u=i.onAssetAwarenessChange,s=i.assetAwareness,E=g()(g()({},s),r);t({assetAwareness:E},!1,{type:"\u{1F579}\u5185\u90E8\u66F4\u65B0\uFF1AassetAwareness",payload:r}),u==null||u(E)},internalUpdateEditorAwareness:function(r){var i=o(),u=i.onEditorAwarenessChange,s=i.editorAwareness,E=mt()({},s,r);t({editorAwareness:E},!1,{type:"\u{1F579}\u5185\u90E8\u66F4\u65B0\uFF1AeditorAwareness",payload:r}),u==null||u(E)}})},Ht={interaction:{},onInteractionChange:null,enableCanvasInteraction:!0},Wt=function(t,o){return g()(g()({},Ht),{},{internalUpdateCanvasInteract:function(r,i){var u=o(),s=u.onInteractionChange;t({interaction:r},!1,{type:(i==null?void 0:i.type)||"\u{1F579}\u5185\u90E8\u66F4\u65B0\uFF1Ainteraction"}),s==null||s(r)},toggleCanvasInteraction:function(){var r=o(),i=r.enableCanvasInteraction;t({enableCanvasInteraction:!i})},deselectCanvas:function(){var r=o(),i=r.internalUpdateCanvasInteract;i({status:"unSelected"})},setCanvasInteraction:function(r){o().internalUpdateCanvasInteract(r,{name:"updateCanvasInteraction \u89E6\u53D1"})},setViewport:function(r){var i=o(),u=i.internalUpdateEditorAwareness,s=i.editorAwareness;u({viewport:g()(g()({},s.viewport),r)})}})},Nt=e(62657),Fe=e.n(Nt),Zt=e(21742),_t=e.n(Zt),Kt=e(83136),$t=e.n(Kt),ht=e(54260),pt=Pe()(function a(t){xe()(this,a),fe()(this,"type",void 0),fe()(this,"name",void 0),fe()(this,"timestamp",void 0),this.type=t.type,this.name=t.name,this.timestamp=t.timestamp}),Vt=function(a){_t()(o,a);var t=$t()(o);function o(n){var r;return xe()(this,o),r=t.call(this,n),fe()(Fe()(r),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),fe()(Fe()(r),"undoManager",void 0),fe()(Fe()(r),"updateHistoryData",function(i){var u=r.getMap(r._internalHistoryKey);Object.entries(i).forEach(function(s){var E=c()(s,2),O=E[0],m=E[1];u.set(O,m)})}),fe()(Fe()(r),"recordHistoryData",function(i,u){r.transact(function(){r.updateHistoryData(i)},new pt(u))}),fe()(Fe()(r),"getHistoryMap",function(){return r.getMap(r._internalHistoryKey)}),fe()(Fe()(r),"getHistoryJSON",function(){var i=r.getMap(r._internalHistoryKey);return i.toJSON()}),fe()(Fe()(r),"redo",function(){return r.undoManager.redo()}),fe()(Fe()(r),"undo",function(){return r.undoManager.undo()}),r.undoManager=new ht.H6(r.getHistoryMap(),{trackedOrigins:new Set([pt])}),r}return Pe()(o)}(ht.QW),wt=function(t,o){var n={componentAsset:null,config:null,onConfigChange:null,props:{},yjsDoc:new Vt},r=n.yjsDoc.undoManager.undoStack.length,i=n.yjsDoc.undoManager.redoStack.length;return g()(g()({},n),{},{undoLength:r,redoLength:i,resetConfig:function(){t({config:n.config,props:n.props})},internalUpdateConfig:function(s,E,O){var m=o(),h=m.onConfigChange,M=m.componentAsset,se=O?s:g()(g()({},o().config),s);t({config:se},!1,E),h==null||h({config:se,props:M==null?void 0:M.generateProps(se),isEmpty:M==null?void 0:M.isStarterMode(se)})},exportConfig:function(){var s=document.createElement("a");s.download="pro-edior-config.json",s.style.display="none";var E=new Blob([JSON.stringify(o().config)]);s.href=URL.createObjectURL(E),document.body.appendChild(s),s.click(),document.body.removeChild(s)},setConfig:function(s){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=E.replace,m=E.recordHistory;o().internalUpdateConfig(s,{type:"\u8C03\u7528 updateConfig \u66F4\u65B0",payload:s},O);var h=mt()({},{recordHistory:!0},{recordHistory:m});h.recordHistory&&o().yjsDoc.recordHistoryData({config:s},g()(g()({},h.payload),{},{timestamp:Date.now()}))}})},Jt=e(31759),Xt=e.n(Jt),Gt=function(t,o){return{updatePanelPosition:function(r){var i=o(),u=i.editorAwareness;o().internalUpdateEditorAwareness({panelPosition:g()(g()({},u.panelPosition),r)})},updatePanelSize:function(r){o().internalUpdateEditorAwareness({panelSize:r})},togglePanelExpand:function(r){var i=o(),u=i.internalUpdateEditorAwareness,s=i.editorAwareness;Xt()(r)===void 0?u({panelExpand:!s.panelExpand}):u({panelExpand:r})}}},un=function(a){return a[a.canvas=0]="canvas",a[a.code=1]="code",a}({}),kt=function(a){return a.Design="design",a.Develop="develop",a}({}),Qt={mode:kt.Develop},Yt=function(t,o){return g()(g()({},Qt),{},{undoStack:function(){return o().yjsDoc.undoManager.undoStack},redoStack:function(){return o().yjsDoc.undoManager.redoStack},undo:function(){var r=o(),i=r.yjsDoc,u=r.internalUpdateConfig,s=i.undo(),E=i.getHistoryJSON(),O=E.config;u(O,{type:"history/undo",payload:s},!0)},redo:function(){var r=o(),i=r.yjsDoc,u=r.internalUpdateConfig,s=i.redo(),E=i.getHistoryJSON(),O=E.config;u(O,{type:"history/redo",payload:s},!0)}})},qt=function(){return g()(g()(g()(g()(g()({},Yt.apply(void 0,arguments)),wt.apply(void 0,arguments)),Wt.apply(void 0,arguments)),Gt.apply(void 0,arguments)),Ft.apply(void 0,arguments))},en=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=(0,It.v)(t!==!1),n=t===!1?void 0:t===!0?{name:"ProBuilderStore"}:t;return(0,Lt.F)()(o(qt,n),P())},tn=function(t){var o=t.children,n=t.devtoolOptions,r=!0,i=(0,l.jsx)(l.Fragment,{children:o});try{(0,B.AC)()}catch(u){r=!1}return r?i:(0,l.jsx)(B.zt,{createStore:function(){return en(n)},children:i})},nn=tn,on=e(6218),rn=(0,v.memo)(function(a){var t=a.config,o=a.onConfigChange,n=a.componentAsset,r=a.mode,i=a.onCanvasError,u=a.assetAwareness,s=a.onAssetAwarenessChange,E=a.editorAwareness,O=a.onEditorAwarenessChange,m=a.editorRef,h=(0,B.AC)(),M=(0,on.N)(h),se=h.getState(),ue=se.yjsDoc,$=function(ye,Ze){M(ye,Ze,[Ze],function(He){P()(Ze,h.getState()[ye])||((0,F.S)(h,He,!1,{type:"\u{1F4F6} useUpdateWithYjs / ".concat(ye),payload:Ze}),ue.updateHistoryData(He))})};M("mode",r),M("assetAwareness",u),M("editorAwareness",E),$("config",t),M("componentAsset",n,[]),M("onAssetAwarenessChange",s,[]),M("onEditorAwarenessChange",O,[]),M("onConfigChange",o,[]),M("onCanvasError",i,[]);var Me=w();return(0,v.useImperativeHandle)(m,function(){return Me}),null}),an=rn,sn=["style","__EDITOR_STORE_DEVTOOLS__","editorRef"],ln=(0,v.memo)(function(a){var t=a.style,o=a.__EDITOR_STORE_DEVTOOLS__,n=a.editorRef,r=z()(a,sn),i=gt(),u=i.styles;return(0,l.jsx)(T.NL,{initiallyActiveScopes:["pro-builder"],children:(0,l.jsxs)(nn,{devtoolOptions:o,children:[(0,l.jsx)(ee.iV,{children:(0,l.jsx)(W.Z,{className:u.app,style:t,children:(0,l.jsx)(Bt,g()({},r))})}),(0,l.jsx)(an,g()({editorRef:n},r))]})})})},3626:function(be,G,e){e.d(G,{AC:function(){return ee},oR:function(){return z},zt:function(){return le}});var H=e(89108),g=(0,H.k)(),le=g.Provider,z=g.useStore,ee=g.useStoreApi},89801:function(be,G,e){e.d(G,{NM:function(){return p},vq:function(){return he}});var H=e(31759),g=e.n(H),le=e(48305),z=e.n(le),ee=e(4293),W=e.n(ee),v=e(5899),T=e.n(v),te=e(67032),c=e.n(te),ne=e(52041),B=e.n(ne),ce=e(66157),N=e.n(ce),b=e(98162),S=e.n(b),p=function(D){return D.type==="object"?D.properties?Object.fromEntries(Object.entries(D.properties).map(function(P){var F=z()(P,2),L=F[0],w=F[1];return[L,w.default]})):void 0:D.type==="null"?null:D.default},Z=function(D,P){if(!P)return D;var F=p(P);if(!F)return D;var L=Object.entries(D).filter(function(w){var K=_slicedToArray(w,2),me=K[0],J=K[1],I=F[me];return typeof F[me]=="undefined"?!0:!isEqual(I,J)});return Object.fromEntries(L)},V=function(D,P,F,L){var w=Z(F,L),K=function J(I,re){return Object.entries(I).map(function(ae){var k=_slicedToArray(ae,2),q=k[0],X=k[1];return X instanceof Array?"".concat(q,"=[").concat(X.map(function(ie){return"{".concat(J(ie),"}")}).join(","),"]"):isObject(X)?J(X,q):isNil(X)?"":"".concat(re?"".concat(re,"."):"").concat(q,"=").concat(X)}).filter(function(ae){return ae}).join(",")},me=K(w);return"".concat(D.replace("/","-"),"/").concat(P,"/").concat(me)},l=function(D,P){return"import { ".concat(uniq(P).join(", ")," } from '").concat(D,"';")},f=function(D,P){switch(g()(P)){case"undefined":return"";case"object":if(P instanceof Array)return"".concat(D,"={").concat(JSON.stringify(P),"}");var F=N()(P,c());if(Object.values(F).length===0)return"";var L=function(){return P.$$__type?Q(P):JSON.stringify(F,null)};return"".concat(D,"={").concat(L(),"}");case"boolean":return P?"".concat(D):"".concat(D,"={").concat(P,"}");case"number":return"".concat(D,"={").concat(P,"}");case"string":return W()(P)?"":"".concat(D,'="').concat(P,'"');case"function":return"".concat(D,"={").concat(P.toString(),"}");case"symbol":return"".concat(D,"={Symbol.for('").concat(P.description,"')}")}},he=function(D,P){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:f;if(!P)return"<".concat(D," />");var L=!P.children,w=Object.entries(P).filter(function(K){return L?K:K[0]!=="children"}).map(function(K){return F(K[0],K[1])}).filter(function(K){return K}).join(" ");return L?"<".concat(D," ").concat(w,"/>"):"<".concat(D," ").concat(w,">").concat(Q(P.children),"</").concat(D,">")},Q=function(D){if(typeof D=="string")return D;var P=function(L){var w=L.$$__type,K=L.$$__body;switch(w){case"element":return he(K.componentName,K.props)}};return D instanceof Array?D.map(P).join(`
`):P(D)}}}]);
