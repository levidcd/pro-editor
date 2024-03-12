"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[4941],{17269:function(L,d,n){n.r(d);var f=n(42308),h=n(11527);d.default=function(){return(0,h.jsx)(f.y,{language:"java",children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},52461:function(L,d,n){n.r(d);var f=n(42308),h=n(11527);d.default=function(){return(0,h.jsx)(f.y,{language:"java",theme:"dark",onCopy:function(y){console.log("\u590D\u5236\u4EE3\u7801",y)},children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},30838:function(L,d,n){n.r(d);var f=n(42308),h=n(11527);d.default=function(){return(0,h.jsx)(f.y,{lineNumber:!0,onCopy:function(y){console.log("\u590D\u5236\u4EE3\u7801",y)},language:"java",children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},8041:function(L,d,n){n.r(d);var f=n(42308),h=n(11527);d.default=function(){return(0,h.jsx)(f.y,{language:"java",shiki:!1,children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},56567:function(L,d,n){n.r(d),n.d(d,{default:function(){return E}});var f=n(48305),h=n.n(f),A=n(42308),y=n(46545),G=n(41812),S=n(50959),x=[{language:"bash",text:"Bash",code:`#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \\\\/" > text.txt

`},{language:"css",text:"Css",code:`@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`},{language:"java",text:"Java",code:`/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}`},{language:"javascript",text:"Javascript",code:`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`},{language:"json",text:"Json",code:`[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]`},{language:"jsx",text:"Jsx",code:`import React from 'react';
import { Button, Tag, Space } from 'antd';
import { ProList } from '@ant-design/pro-components';

const dataSource = [
  {
    name: '\u8BED\u96C0\u7684\u5929\u7A7A',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: '\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'ProEditor',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">Ant Design</Tag>
              <Tag color="#5BD8A6">ProEditor</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"markdown",text:"Markdown",code:`# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`},{language:"python",text:"Python",code:`@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`},{language:"sql",text:"Sql",code:`CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`},{language:"tsx",text:"Tsx",code:`import React from 'react';
import { Button, Tag, Space } from 'antd';
import { ProList } from '@ant-design/pro-components';

const dataSource = [
  {
    name: '\u8BED\u96C0\u7684\u5929\u7A7A',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: '\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'ProEditor',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList<any>
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record: any) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">Ant Design</Tag>
              <Tag color="#5BD8A6">ProEditor</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"typescript",text:"Typescript",code:`class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`},{language:"xml",text:"Xml",code:`<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
<\/script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`},{language:"yaml",text:"Yaml",code:`---
# comment
string_1: "Bar"
string_2: 'bar'
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
  "

ansible_variables: "foo {{variable}}"

array_nested:
- a
- b: 1
  c: 2
- b
- comment`}],k=x,u=n(11527),M="typescript",N="light",D="false",R="block",b=y.Z.Option,E=function(){var w=(0,S.useState)(N),O=h()(w,2),F=O[0],H=O[1],J=(0,S.useState)(M),g=h()(J,2),K=g[0],X=g[1],Q=(0,S.useState)(R),U=h()(Q,2),_=U[0],$=U[1],z=(0,S.useState)(D),I=h()(z,2),W=I[0],q=I[1],nn=k.find(function(v){return v.language===K}).code||"";return(0,u.jsxs)("div",{children:[(0,u.jsxs)(G.Z,{children:["\u8BED\u8A00\u9009\u62E9:",(0,u.jsx)(y.Z,{defaultValue:M,style:{width:120},onChange:function(T){return X(T)},children:k.map(function(v){return(0,u.jsx)(b,{value:v.language,children:v.text},v.language)})}),"\u4E3B\u9898\u9009\u62E9:",(0,u.jsxs)(y.Z,{defaultValue:N,style:{width:120},onChange:function(T){return H(T)},children:[(0,u.jsx)(b,{value:"light",children:"\u4EAE\u8272\u4E3B\u9898"}),(0,u.jsx)(b,{value:"dark",children:"\u6697\u8272\u4E3B\u9898"})]}),"\u5C55\u793A\u884C\u53F7:",(0,u.jsxs)(y.Z,{defaultValue:D,style:{width:120},onChange:function(T){return q(T)},children:[(0,u.jsx)(b,{value:"false",children:"\u4E0D\u5C55\u793A"}),(0,u.jsx)(b,{value:"true",children:"\u5C55\u793A"})]}),"\u5C55\u793A\u7C7B\u578B:",(0,u.jsxs)(y.Z,{defaultValue:R,style:{width:120},onChange:function(T){return $(T)},children:[(0,u.jsx)(b,{value:"block",children:"block"}),(0,u.jsx)(b,{value:"pure",children:"pure"})]})]}),(0,u.jsx)("div",{style:{height:400,width:"100%",overflowY:"scroll",marginBlockStart:"16px"},children:(0,u.jsx)(A.y,{language:K,theme:F,lineNumber:W!==D,type:_,children:nn})})]})}},42308:function(L,d,n){n.d(d,{y:function(){return gn}});var f=n(26068),h=n.n(f),A=n(82710),y=n(94211),G=n(82187),S=n.n(G),x=n(50959),k=n(48305),u=n.n(k),M=n(6983),N=n(39881),D=n(90943),R=n.n(D),b=n(53649),E=n.n(b),w=n(41132),O=n(48843),F,H,J=(0,w.kc)(function(t,r){var i=t.css,c=t.token,l=t.prefixCls,a=t.cx,o=r.theme,e="".concat(l,"-").concat(c.editorPrefix,"-highlight"),s=(0,O.p)(o==="dark"),p=s.colorFillTertiary,m=s.colorText;return{copy:a("".concat(e,"-copy"),i(F||(F=E()([`
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
      `])),p)),copyIcon:a("".concat(e,"-copy-icon"),i(H||(H=E()([`
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
      `])),m))}}),g=n(11527),K=function(r){var i=r.content,c=r.onCopy,l=r.theme,a=l===void 0?"light":l,o=r.style,e=(0,x.useState)(),s=u()(e,2),p=s[0],m=s[1],j=J({theme:a}),C=j.styles;(0,x.useEffect)(function(){return function(){window.clearTimeout(p)}});var en=(0,x.useState)(!1),B=u()(en,2),Z=B[0],P=B[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(R(),{text:i&&i.length?i:"",onCopy:function(){P(!0);var V=window.setTimeout(function(){P(!1)},2e3);m(V),c&&c(i)},children:(0,g.jsxs)("button",{type:"button",disabled:Z,className:C.copy,style:o,children:[(0,g.jsx)(M.Z,{className:S()(C.copyIcon,{scoll:Z})}),(0,g.jsx)(N.Z,{className:C.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},X=K,Q=n(1657),U=n(59084),_=n(22305),$=n.n(_),z,I,W,q=(0,w.kc)(function(t,r){var i=t.cx,c=t.css,l=t.token,a=t.prefixCls,o=r.theme,e="".concat(a,"-").concat(l.editorPrefix,"-highlight"),s=(0,O.p)(o==="dark"),p=s.colorFillTertiary,m=s.colorText,j=s.colorTextSecondary,C=$()(p).mix($()(o==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:i("".concat(e,"-tag-small"),c(z||(z=E()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:i(c(I||(I=E()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),C,l.fontFamilyCode,j)),tag:i("".concat(e,"-tag"),c(W||(W=E()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),m,l.borderRadius,m,l.colorFill))}}),nn=function(r){var i=r||{},c=i.children,l=i.size,a=l===void 0?"default":l,o=i.theme,e=o===void 0?"light":o,s=q({theme:e}),p=s.styles,m=s.cx;return(0,g.jsx)(U.Z,{bordered:!1,className:m(p.tag,p.lang,a==="small"&&p.small),children:c})},v=nn,T=n(31759),tn=n.n(T),cn=function(r,i){var c=(0,x.useRef)();function l(a,o){return Object.keys(a).forEach(function(e){tn()(a[e])==="object"&&a[e].handle?o.addEventListener(e,a[e].handle,a[e].options):o.addEventListener(e,a[e])}),function(){Object.keys(a).forEach(function(e){tn()(a[e])==="object"&&a[e].handle?o.removeEventListener(e,a[e].handle,a[e].options):o.removeEventListener(e,a[e])})}}return(0,x.useEffect)(function(){if(r.current)return l({keydown:function(o){var e=window.getSelection();if((o.ctrlKey||o.metaKey)&&o.code==="KeyA"&&c.current&&r.current){var s=document.createRange();s.selectNodeContents(r.current),e.removeAllRanges(),e.addRange(s),o.preventDefault()}(o.ctrlKey||o.metaKey)&&o.code==="KeyC"&&c.current&&r.current&&i&&e&&i(e.toString())},focus:function(){c.current=!0},blur:function(){c.current=!1}},r.current)},[r.current,r]),null},an,on,un=(0,w.kc)(function(t,r){var i=t.css,c=t.cx,l=t.token,a=t.prefixCls,o=r.theme,e=r.type,s="".concat(a,"-").concat(l==null?void 0:l.editorPrefix,"-highlight"),p=(0,O.p)(o==="dark"),m=p.colorFillTertiary,j=i(an||(an=E()([`
      background-color: `,`;
    `])),e==="block"?m:"transparent");return{container:c("".concat(s,"-container"),j,i(on||(on=E()([`
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
        `])),l.borderRadius,l.motionEaseOut,s,s,e==="pure"?0:"16px 24px"))}}),rn=n(67401),dn=(0,x.memo)(function(t){var r=t.children,i=t.style,c=t.className,l=t.lineNumber,a=l===void 0?!1:l,o=t.copyable,e=o===void 0?!0:o,s=t.theme,p=s===void 0?rn.ly:s,m=t.language,j=m===void 0?"tsx":m,C=t.shiki,en=C===void 0?!0:C,B=t.showLanguage,Z=B===void 0?!0:B,P=t.type,ln=P===void 0?"block":P,V=t.onCopy,hn=(0,y.r)(),pn=hn.appearance,mn=pn==="dark"?"dark":"light",Y=p===rn.ly?mn:p,fn=un({theme:Y,type:ln}),yn=fn.styles,sn=(0,x.createRef)();return cn(sn,V),(0,g.jsxs)("div",{ref:sn,tabIndex:-1,style:i,className:S()(yn.container,c),children:[e&&(0,g.jsx)(X,{onCopy:V,theme:Y,content:r}),Z&&j&&(0,g.jsx)(v,{theme:Y,children:j.toLowerCase()}),(0,g.jsx)(Q.Z,{lineNumber:a,language:j,theme:Y,shiki:en,children:r})]})}),gn=function(r){return(0,g.jsx)(A.iV,{children:(0,g.jsx)(dn,h()({},r))})}}}]);
