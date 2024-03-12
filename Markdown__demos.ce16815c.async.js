"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[7439],{13046:function(ln,f,n){n.r(f);var S=n(84147),h=n(98458),B=n(11527);f.default=function(){return(0,B.jsx)(S.Z,{children:h.KW})}},96201:function(ln,f,n){n.r(f);var S=n(84147),h=n(5018),B=n(98458),X=n(11527);f.default=function(){return(0,X.jsx)(S.Z,{rehypePlugins:[h.Z],children:B.HA})}},70125:function(ln,f,n){n.r(f);var S=n(84147),h=n(98458),B=n(11527);f.default=function(){return(0,B.jsx)(S.Z,{children:h.kQ})}},86381:function(ln,f,n){n.d(f,{Z:function(){return w}});var S=n(26068),h=n.n(S),B=n(67825),X=n.n(B),on=n(86865),I=n(27850),z=n(82710),R=n(53649),O=n.n(R),D=n(41132),G,H,Z,$=(0,D.kc)(function(L,o){var M=L.token,A=L.css,Y=L.cx,V=L.prefixCls,en=o.size,sn=o.className,an="".concat(V,"-").concat(M.editorPrefix,"-icon"),s=typeof en=="number"?A(G||(G=O()([`
          width: `,`px !important;
          height: `,`px !important;
        `])),en,en):"",C=A(H||(H=O()([`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: `,` !important;
    }

    &:active {
      scale: 0.8;
      color: `,`;
    }

    transition: color 600ms `,", scale 400ms ",`,
      background-color 100ms `,`;
  `])),M.colorText,M.colorText,M.motionEaseOut,M.motionEaseOut,M.motionEaseOut);return{container:Y(an,C,s,sn),tooltip:A(Z||(Z=O()([`
      pointer-events: none;
    `])))}}),c=n(11527),j=["placement","title","icon","cursor","onClick","className","arrow","size","tooltipDelay"],d=function(o){var M=o.placement,A=o.title,Y=o.icon,V=o.cursor,en=o.onClick,sn=o.className,an=o.arrow,s=an===void 0?!1:an,C=o.size,g=C===void 0?"default":C,k=o.tooltipDelay,P=k===void 0?.5:k,F=X()(o,j),b=$({size:g}),T=b.styles,N=b.cx,E=(0,c.jsx)(on.ZP,h()(h()({icon:Y,className:N(T.container,sn),type:"text",style:{cursor:V},size:typeof g=="number"||g==="default"?"middle":g},F),{},{onClick:en}));return(0,c.jsx)(c.Fragment,{children:A?(0,c.jsx)(I.Z,{arrow:s,overlayClassName:T.tooltip,title:A,mouseEnterDelay:P,placement:M,children:E}):E})},tn=function(o){var M=o||{},A=M.size,Y=$({size:A}),V=Y.theme;return(0,c.jsx)(z.iV,{componentToken:{Button:{colorText:V.colorTextTertiary,colorBgTextHover:V.colorFillSecondary,colorBgTextActive:V.colorFill}},children:(0,c.jsx)(d,h()({},o))})},w=tn},55884:function(ln,f,n){var S=n(86381);f.ZP=S.Z},42308:function(ln,f,n){n.d(f,{y:function(){return cn}});var S=n(26068),h=n.n(S),B=n(82710),X=n(94211),on=n(82187),I=n.n(on),z=n(50959),R=n(48305),O=n.n(R),D=n(6983),G=n(39881),H=n(90943),Z=n.n(H),$=n(53649),c=n.n($),j=n(41132),d=n(48843),tn,w,L=(0,j.kc)(function(a,i){var m=a.css,e=a.token,y=a.prefixCls,u=a.cx,p=i.theme,r="".concat(y,"-").concat(e.editorPrefix,"-highlight"),x=(0,d.p)(p==="dark"),U=x.colorFillTertiary,Q=x.colorText;return{copy:u("".concat(r,"-copy"),m(tn||(tn=c()([`
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
      `])),U)),copyIcon:u("".concat(r,"-copy-icon"),m(w||(w=c()([`
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
      `])),Q))}}),o=n(11527),M=function(i){var m=i.content,e=i.onCopy,y=i.theme,u=y===void 0?"light":y,p=i.style,r=(0,z.useState)(),x=O()(r,2),U=x[0],Q=x[1],rn=L({theme:u}),dn=rn.styles;(0,z.useEffect)(function(){return function(){window.clearTimeout(U)}});var fn=(0,z.useState)(!1),pn=O()(fn,2),gn=pn[0],vn=pn[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(Z(),{text:m&&m.length?m:"",onCopy:function(){vn(!0);var yn=window.setTimeout(function(){vn(!1)},2e3);Q(yn),e&&e(m)},children:(0,o.jsxs)("button",{type:"button",disabled:gn,className:dn.copy,style:p,children:[(0,o.jsx)(D.Z,{className:I()(dn.copyIcon,{scoll:gn})}),(0,o.jsx)(G.Z,{className:dn.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},A=M,Y=n(1657),V=n(59084),en=n(22305),sn=n.n(en),an,s,C,g=(0,j.kc)(function(a,i){var m=a.cx,e=a.css,y=a.token,u=a.prefixCls,p=i.theme,r="".concat(u,"-").concat(y.editorPrefix,"-highlight"),x=(0,d.p)(p==="dark"),U=x.colorFillTertiary,Q=x.colorText,rn=x.colorTextSecondary,dn=sn()(U).mix(sn()(p==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:m("".concat(r,"-tag-small"),e(an||(an=c()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:m(e(s||(s=c()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),dn,y.fontFamilyCode,rn)),tag:m("".concat(r,"-tag"),e(C||(C=c()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),Q,y.borderRadius,Q,y.colorFill))}}),k=function(i){var m=i||{},e=m.children,y=m.size,u=y===void 0?"default":y,p=m.theme,r=p===void 0?"light":p,x=g({theme:r}),U=x.styles,Q=x.cx;return(0,o.jsx)(V.Z,{bordered:!1,className:Q(U.tag,U.lang,u==="small"&&U.small),children:e})},P=k,F=n(31759),b=n.n(F),T=function(i,m){var e=(0,z.useRef)();function y(u,p){return Object.keys(u).forEach(function(r){b()(u[r])==="object"&&u[r].handle?p.addEventListener(r,u[r].handle,u[r].options):p.addEventListener(r,u[r])}),function(){Object.keys(u).forEach(function(r){b()(u[r])==="object"&&u[r].handle?p.removeEventListener(r,u[r].handle,u[r].options):p.removeEventListener(r,u[r])})}}return(0,z.useEffect)(function(){if(i.current)return y({keydown:function(p){var r=window.getSelection();if((p.ctrlKey||p.metaKey)&&p.code==="KeyA"&&e.current&&i.current){var x=document.createRange();x.selectNodeContents(i.current),r.removeAllRanges(),r.addRange(x),p.preventDefault()}(p.ctrlKey||p.metaKey)&&p.code==="KeyC"&&e.current&&i.current&&m&&r&&m(r.toString())},focus:function(){e.current=!0},blur:function(){e.current=!1}},i.current)},[i.current,i]),null},N,E,K=(0,j.kc)(function(a,i){var m=a.css,e=a.cx,y=a.token,u=a.prefixCls,p=i.theme,r=i.type,x="".concat(u,"-").concat(y==null?void 0:y.editorPrefix,"-highlight"),U=(0,d.p)(p==="dark"),Q=U.colorFillTertiary,rn=m(N||(N=c()([`
      background-color: `,`;
    `])),r==="block"?Q:"transparent");return{container:e("".concat(x,"-container"),rn,m(E||(E=c()([`
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
        `])),y.borderRadius,y.motionEaseOut,x,x,r==="pure"?0:"16px 24px"))}}),J=n(67401),q=(0,z.memo)(function(a){var i=a.children,m=a.style,e=a.className,y=a.lineNumber,u=y===void 0?!1:y,p=a.copyable,r=p===void 0?!0:p,x=a.theme,U=x===void 0?J.ly:x,Q=a.language,rn=Q===void 0?"tsx":Q,dn=a.shiki,fn=dn===void 0?!0:dn,pn=a.showLanguage,gn=pn===void 0?!0:pn,vn=a.type,jn=vn===void 0?"block":vn,yn=a.onCopy,l=(0,X.r)(),v=l.appearance,W=v==="dark"?"dark":"light",t=U===J.ly?W:U,_=K({theme:t,type:jn}),nn=_.styles,un=(0,z.createRef)();return T(un,yn),(0,o.jsxs)("div",{ref:un,tabIndex:-1,style:m,className:I()(nn.container,e),children:[r&&(0,o.jsx)(A,{onCopy:yn,theme:t,content:i}),gn&&rn&&(0,o.jsx)(P,{theme:t,children:rn.toLowerCase()}),(0,o.jsx)(Y.Z,{lineNumber:u,language:rn,theme:t,shiki:fn,children:i})]})}),cn=function(i){return(0,o.jsx)(B.iV,{children:(0,o.jsx)(q,h()({},i))})}},98458:function(ln,f,n){n.d(f,{HA:function(){return h},KW:function(){return B},kQ:function(){return S}});var S=`# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

The point of reference-style links is not that they\u2019re easier to write. The point is that with reference-style links, your document source is vastly more readable. Compare the above examples: using reference-style links, the paragraph itself is only 81 characters long; with inline-style links, it\u2019s 176 characters; and as raw \`HTML\`, it\u2019s 234 characters. In the raw \`HTML\`, there\u2019s more markup than there is text.

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

an example | *an example* | **an example**

---

1. Bird
1. McHale
1. Parish
    1. Bird
    1. McHale
        1. Parish

---

- Red
- Green
- Blue
    - Red
    - Green
        - Blue

---

This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>


| title | title | title |
| --- | --- | --- |
| content | content | content |


\`\`\`bash
$ pnpm install
\`\`\`


\`\`\`javascript
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useDropNodeOnCanvas } from './useDropNodeOnCanvas';
\`\`\`

---

\u4EE5\u4E0B\u662F\u4E00\u6BB5Markdown\u683C\u5F0F\u7684LaTeX\u6570\u5B66\u516C\u5F0F\uFF1A

\u6211\u662F\u4E00\u4E2A\u884C\u5185\u516C\u5F0F\uFF1A$E=mc^2$

\u6211\u662F\u4E00\u4E2A\u72EC\u7ACB\u516C\u5F0F\uFF1A
$$
\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\ldots + x_n
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u5206\u5F0F\u7684\u516C\u5F0F\uFF1A
$$
\\frac{{n!}}{{k!(n-k)!}} = \\binom{n}{k}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u4E0A\u4E0B\u6807\u7684\u516C\u5F0F\uFF1A
$$
x^{2} + y^{2} = r^{2}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u79EF\u5206\u7B26\u53F7\u7684\u516C\u5F0F\uFF1A
$$
\\int_{a}^{b} f(x) \\, dx
$$
`,h=`
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Custom Html Dom Render</title>
</head>
<body>
<div>Custom Html Dom Render</div>
<ul>
    <li>Ant Desgin</li>
    <li>Ant Desgin Pro</li>
    <li>Ant Desgin Pro Components</li>
</ul>

</body>
</html>
`,B=`
\`\`\`bash
$ pnpm install
\`\`\`


\`\`\`javascript
import { Collapse, Divider, Typography } from 'antd';
import { CSSProperties, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { PluggableList } from 'react-markdown/lib/react-markdown';
import { withProvider } from '..';
import { Code } from './CodeBlock';
import { useStyles } from './style';

export interface MarkdownProps {
  children: string;
  /**
   * @description ClassName
   */
  className?: string;
  onDoubleClick?: () => void;
  style?: CSSProperties;
  rehypePlugins?: PluggableList;
  remarkPlugins?: PluggableList;
}

const MemoHr = memo((props) => (
  <Divider style={{ marginBottom: '1em', marginTop: 0 }} {...props} />
));
const MemoDetails = memo((props) => <Collapse style={{ marginBottom: '1em' }} {...props} />);
const MemoImage = memo((props) => <img {...props} />);
const MemoAlink = memo((props) => <Typography.Link {...props} />);

const Markdown = memo<MarkdownProps>(
  ({
    children,
    className,
    style,
    onDoubleClick,
    rehypePlugins: outRehypePlugins,
    remarkPlugins: outRemarkPlugins,
    ...rest
  }) => {
    const { styles } = useStyles();
    const components: any = {
      details: MemoDetails,
      hr: MemoHr,
      a: MemoAlink,
      img: MemoImage,
      pre: Code,
    };

    const rehypePlugins = [rehypeKatex, ...(outRehypePlugins || [])];
    const remarkPlugins = [remarkGfm, remarkMath, ...(outRemarkPlugins || [])];

    return (
      <Typography className={className} onDoubleClick={onDoubleClick} style={style}>
        <ReactMarkdown
          className={styles.markdown}
          components={components}
          rehypePlugins={rehypePlugins as PluggableList}
          remarkPlugins={remarkPlugins as PluggableList}
          {...rest}
        >
          {children}
        </ReactMarkdown>
      </Typography>
    );
  },
);

export default withProvider(Markdown) as React.FC<MarkdownProps>;

\`\`\`
`},84147:function(ln,f,n){n.d(f,{Z:function(){return yn}});var S=n(15558),h=n.n(S),B=n(67825),X=n.n(B),on=n(26068),I=n.n(on),z=n(32923),R=n(20187),O=n(31342),D=n(50959),G=n(80496),H=n(18385),Z=n(77959),$=n(40020),c=n(82710),j=n(53649),d=n.n(j),tn=n(61503),w=n(18605),L=n(48305),o=n.n(L),M=n(53065),A=n(67462),Y=n(99082),V=n(89578),en=n(42308),sn=n(86381),an=n(7068),s=n(86865),C=n(82187),g=n.n(C),k=n(24819),P=n(41132),F,b,T,N,E,K,J,q,cn,a,i,m=(0,P.kc)(function(l){var v=l.css,W=l.cx,t=l.token,_=l.prefixCls,nn="".concat(_,"-").concat(t==null?void 0:t.editorPrefix,"-markdown");return{container:v(F||(F=d()([`
      :not(:last-child) {
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
      }
    `]))),highlight:v(b||(b=d()([`
      pre {
        padding: 12px !important;
      }
    `]))),markdown:v(T||(T=d()([`
      color: `,`;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin-block-start: 0;
        margin-block-end: 0;

        font-size: 14px;
        line-height: 1.8;
        color: `,`;
        word-break: break-all;
        word-wrap: break-word;

        + * {
          margin-block-end: 0.5em;
        }
      }

      > *:last-child {
        margin-bottom: 0 !important;
      }

      blockquote {
        margin: 16px 0;
        padding: 0 12px;

        p {
          font-style: italic;
          color: `,`;
        }
      }

      p:not(:last-child) {
        margin-bottom: 1em;
      }

      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;
        border-radius: `,`px;

        > code {
          padding: 0 !important;
          border: none !important;
        }
      }

      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        font-size: `,`px;
        border-radius: `,`px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding: 8px;

        border: 1px solid `,`;
        border-radius: `,`px;

        code {
          display: inline-flex;
        }
      }

      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
      }

      thead {
        tr {
          th {
            background: `,`;

            &:first-child {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
            }

            &:last-child {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
        }
      }

      > ol > li::marker {
        color: `,` !important;
      }

      > ul > li {
        line-height: 1.8;
        list-style-type: disc;

        &::marker {
          color: `,` !important;
        }
      }

      ol,
      ul {
        > li::marker {
          color: `,`;
        }
      }

      details {
        margin-bottom: 1em;
        padding: 12px 16px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        transition: all 400ms `,`;
      }

      details[open] {
        summary {
          padding-bottom: 12px;
          border-bottom: 1px solid `,`;
        }
      }
    `])),t.colorText,t.colorText,t.colorTextDescription,t.colorLink,t.colorLinkHover,t.colorLinkActive,t.borderRadius,t.fontSizeSM,t.borderRadiusSM,t.colorBorderSecondary,t.borderRadius,t.colorFillTertiary,t.borderRadius,t.borderRadius,t.borderRadius,t.borderRadius,t.colorPrimary,t.colorPrimary,t.colorTextDescription,t.colorFillTertiary,t.colorBorderSecondary,t.borderRadiusLG,t.motionEaseOut,t.colorBorder),wrapper:W(v(N||(N=d()([`
        background-color: `,`;
        border-radius: `,`px;
      `])),t.colorFillTertiary,t.borderRadius)),highlighter:v(E||(E=d()([`
      max-height: 400px;
      overflow: auto;
    `]))),header:W("".concat(nn,"-header"),v(K||(K=d()([`
        padding: 4px 8px;
        width: auto !important; // override self width
      `]))),v(J||(J=d()([`
        .`,`-btn {
          &:hover {
            color: `,` !important;
          }
        }
      `])),nn,t.colorTextSecondary)),copy:v(q||(q=d()([`
      background-color: transparent;
      position: inherit;
      width: 30px;
      padding-left: 6px;
    `]))),select:v(cn||(cn=d()([`
      min-width: 100px;
      .`,`-select-selector {
        padding-inline-end: 4px !important;
      }
      .`,`-select-selection-overflow-item-suffix {
        .`,`-select-selection-search {
          display: none;
        }
      }
    `])),_,_,_),trigger:v(a||(a=d()([`
      min-width: 100px;
      display: flex;
      justify-content: center;
      span {
        font-family: `,` !important;
      }
    `])),t.fontFamilyCode),lang:W(v(i||(i=d()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;

        font-family: `,`;
        color: `,`;

        transition: opacity 0.1s;
      `])),t.fontFamilyCode,t.colorTextSecondary))}}),e=n(11527),y=V.W.map(function(l){return{label:l,value:l.toLowerCase()}}),u=(0,D.memo)(function(l){var v=l||{},W=v.children,t=v.language,_=t===void 0?"markdown":t,nn=v.className,un=v.style,mn=(0,D.useState)(!0),hn=o()(mn,2),Cn=hn[0],Tn=hn[1],En=(0,D.useState)(_),Pn=o()(En,2),bn=Pn[0],Sn=Pn[1],On=m(),xn=On.styles,Mn=(0,D.useMemo)(function(){return(0,e.jsx)(en.y,{language:bn==null?void 0:bn.toLowerCase(),copyable:!1,showLanguage:!1,type:"block",children:W})},[bn,W]);return(0,e.jsxs)("div",{className:g()(xn.wrapper,nn),style:un,children:[(0,e.jsxs)(k.D,{align:"center",className:xn.header,horizontal:!0,justify:"space-between",children:[(0,e.jsx)(sn.Z,{icon:Cn?(0,e.jsx)(A.Z,{size:14}):(0,e.jsx)(Y.Z,{size:14}),onClick:function(){return Tn(!Cn)},size:24}),(0,e.jsx)(an.P,{bordered:!1,className:xn.select,onSelect:Sn,mode:"tags",options:y,tagRender:function(Ln){return(0,e.jsx)("div",{className:xn.trigger,children:(0,e.jsx)(s.ZP,{type:"text",size:"small",children:Ln.label})})},showSearch:!0,size:"small",suffixIcon:!1,value:[bn.toLowerCase()]}),(0,e.jsx)(M.Z,{className:xn.copy,content:W})]}),(0,e.jsx)("div",{className:xn.highlighter,children:Cn?Mn:null})]})}),p=u,r,x,U=(0,w.kc)(function(l){var v=l.css;return{container:v(r||(r=d()([`
    :not(:last-child) {
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  `]))),highlight:v(x||(x=d()([`
    pre {
      padding: 12px !important;
    }
  `])))}}),Q=function(v){var W=/\n/g,t=v.match(W);return t?t.length:1},rn=(0,D.memo)(function(l){var v=U(),W=v.styles,t=v.cx;if(l.children[0]){var _=l.children[0].props,nn=_.children,un=_.className;if(nn){var mn=Array.isArray(nn)?nn[0]:nn,hn=(un==null?void 0:un.replace("language-",""))||"txt";return Q(mn)===1&&mn.length<=60?(0,e.jsx)(tn.p,{className:t(W.container),style:{display:"flex"},"data-code-type":"highlighter",language:hn,symbol:"",type:"block",children:mn}):(0,e.jsx)(p,{className:t(W.container,W.highlight),language:hn,children:mn})}}}),dn=["children","className","style","onDoubleClick","rehypePlugins","remarkPlugins"],fn=(0,D.memo)(function(l){return(0,e.jsx)(z.Z,I()({style:{marginBottom:"1em",marginTop:0}},l))}),pn=(0,D.memo)(function(l){return(0,e.jsx)(R.Z,I()({style:{marginBottom:"1em"}},l))}),gn=(0,D.memo)(function(l){return(0,e.jsx)("img",I()({},l))}),vn=(0,D.memo)(function(l){return(0,e.jsx)(O.Z.Link,I()({},l))}),jn=(0,D.memo)(function(l){var v=l.children,W=l.className,t=l.style,_=l.onDoubleClick,nn=l.rehypePlugins,un=l.remarkPlugins,mn=X()(l,dn),hn=m(),Cn=hn.styles,Tn={details:pn,hr:fn,a:vn,img:gn,pre:rn},En=[H.Z].concat(h()(nn||[])),Pn=[Z.Z,$.Z].concat(h()(un||[]));return(0,e.jsx)(O.Z,{className:W,onDoubleClick:_,style:t,children:(0,e.jsx)(G.D,I()(I()({className:Cn.markdown,components:Tn,rehypePlugins:En,remarkPlugins:Pn},mn),{},{children:v}))})}),yn=(0,c.nh)(jn)},61503:function(ln,f,n){n.d(f,{p:function(){return an}});var S=n(26068),h=n.n(S),B=n(67825),X=n.n(B),on=n(1657),I=n(53065),z=n(48305),R=n.n(z),O=n(50959),D=n(53649),G=n.n(D),H=n(41132),Z,$=(0,H.kc)(function(s,C){var g,k,P=s.css,F=s.token,b=s.isDarkMode,T=C.offset,N=C.outside,E=C.size,K=((g=T==null?void 0:T.x)!==null&&g!==void 0?g:0)+"px",J=((k=T==null?void 0:T.y)!==null&&k!==void 0?k:0)+"px",q=N?"0":".1",cn=E+"px";return P(Z||(Z=G()([`
      pointer-events: none;

      position: absolute;
      z-index: 1;
      inset: 0;

      opacity: `,`;
      background: radial-gradient(
        `," circle at "," ",`,
        `,`,
        `,`
      );
      border-radius: inherit;

      transition: all 0.2s;
    `])),q,cn,K,J,b?F.colorText:"#fff",b?"transparent":F.colorTextQuaternary)}),c=n(11527),j=["className","size"],d=function(){var C=(0,O.useState)(),g=R()(C,2),k=g[0],P=g[1],F=(0,O.useState)(!0),b=R()(F,2),T=b[0],N=b[1],E=(0,O.useRef)();return(0,O.useEffect)(function(){if(E.current&&E.current.parentElement){var K=E.current.parentElement,J=function(a){var i=K.getBoundingClientRect();P({x:a.clientX-i.x,y:a.clientY-i.y}),N(!1)},q=function(){N(!0)};return K.addEventListener("mousemove",J),K.addEventListener("mouseleave",q),function(){K.removeEventListener("mousemove",J),K.removeEventListener("mouseleave",q)}}},[]),[k,T,E]},tn=(0,O.memo)(function(s){var C=s.className,g=s.size,k=g===void 0?64:g,P=X()(s,j),F=d(),b=R()(F,3),T=b[0],N=b[1],E=b[2],K=$({offset:T,outside:N,size:k}),J=K.styles,q=K.cx;return(0,c.jsx)("div",h()({className:q(J,C),ref:E},P))}),w=tn,L=n(82710),o=n(94211),M,A,Y,V=(0,H.kc)(function(s,C){var g=s.css,k=s.cx,P=s.token,F=s.prefixCls,b=C.type,T=g(M||(M=G()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),b==="block"?P.colorFillTertiary:"transparent",b==="block"?"transparent":P.colorBorder),N="".concat(F,"-").concat(P==null?void 0:P.editorPrefix),E="".concat(N,"-snippet");return{container:k("".concat(E,"-container"),T,g(A||(A=G()([`
        position: relative;
        overflow: hidden;
        display: inline-flex;
        gap: 8px;
        align-items: center;
        max-width: 100%;
        height: 38px;
        padding: 0 8px 0 12px;

        border-radius: `,`px;

        transition: background-color 100ms `,`;

        &:hover {
          background-color: `,`;
        }

        pre {
          overflow-x: auto !important;
          overflow-y: hidden !important;
          display: flex;
          align-items: center;

          width: 100%;
          height: 36px !important;
          margin: 0 !important;

          line-height: 1;

          background: none !important;
        }

        code[class*='language-'] {
          background: none !important;
        }
      `])),P.borderRadius,P.motionEaseOut,P.colorFillTertiary)),highlighter:k("".concat(E,"-highlighter"),g(Y||(Y=G()([`
        position: relative;
        overflow: hidden;
        flex: 1;
      `]))))}}),en=["symbol","language","children","copyable","type","spotlight","className"],sn=(0,O.memo)(function(s){var C=s.symbol,g=C===void 0?"$":C,k=s.language,P=k===void 0?"tsx":k,F=s.children,b=s.copyable,T=b===void 0?!0:b,N=s.type,E=N===void 0?"ghost":N,K=s.spotlight,J=s.className,q=X()(s,en),cn=(0,o.r)(),a=cn.isDarkMode,i=V({type:E}),m=i.styles,e=i.cx;return(0,c.jsxs)("div",h()(h()({className:e(m.container,J)},q),{},{children:[K&&(0,c.jsx)(w,{}),(0,c.jsx)("div",{className:m.highlighter,children:(0,c.jsx)(on.Z,{language:P,theme:a?"dark":"light",shiki:!0,children:g?[g,F].join(" "):F})}),T&&(0,c.jsx)(I.Z,{content:F})]}))}),an=function(C){return(0,c.jsx)(L.iV,{children:(0,c.jsx)(sn,h()({},C))})}},7068:function(ln,f,n){n.d(f,{P:function(){return G}});var S=n(26068),h=n.n(S),B=n(53649),X=n.n(B),on=n(46545),I=n(18605),z=n(82710),R=n(11527),O,D=(0,I.kc)(function(H){var Z=H.css,$=H.stylish,c=H.prefixCls,j="".concat(c,"-select"),d=":not(.".concat(j,"-disabled):not(.").concat(j,"-customize-input)");return Z(O||(O=X()([`
    &.`,` {
      &-multiple:not(&-customize-input) &.`,`-selector {
        `,`;
      }

      &`,` {
        &:hover {
          .`,`-selector {
            border-color: transparent;
            `,`;
          }
        }
      }

      &-focused`,` {
        &:hover {
          .`,`-selector {
            `,`;
          }
        }

        .`,`-selector {
          `,`;
        }
      }
    }

    .`,` {
      &-arrow {
        top: 13px;
        right: 8px;
        width: 10px;
        height: 10px;
        font-size: 10px;
      }
    }
  `])),j,j,$.controlContainer,d,j,$.controlContainer,d,j,$.controlContainerFocused,j,$.controlContainerFocused,j)}),G=function(Z){var $=D(),c=$.styles,j=$.cx;return(0,R.jsx)(z.iV,{children:(0,R.jsx)(on.Z,h()(h()({},Z),{},{className:j(c,Z.className)}))})}},53065:function(ln,f,n){n.d(f,{Z:function(){return j}});var S=n(26068),h=n.n(S),B=n(67825),X=n.n(B),on=n(6983),I=n(874),z=n.n(I),R=n(50959),O=n(55884),D=n(48305),G=n.n(D),H=function(){var tn=(0,R.useState)(!1),w=G()(tn,2),L=w[0],o=w[1];(0,R.useEffect)(function(){if(L){var A=setTimeout(function(){o(!1)},2e3);return function(){clearTimeout(A)}}},[L]);var M=(0,R.useCallback)(function(){return o(!0)},[]);return(0,R.useMemo)(function(){return{copied:L,setCopied:M}},[L])},Z=n(11527),$=["content","className","placement"],c=(0,R.memo)(function(d){var tn=d.content,w=d.className,L=d.placement,o=L===void 0?"right":L,M=X()(d,$),A=H(),Y=A.copied,V=A.setCopied;return(0,Z.jsx)(O.ZP,h()(h()({},M),{},{className:w,icon:(0,Z.jsx)(on.Z,{size:12}),onClick:function(){z()(tn),V()},placement:o,title:Y?"\u2705 Success":"Copy"}))}),j=c}}]);
