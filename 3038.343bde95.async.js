"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[3038,4759],{3038:function(s,n,e){e.r(n),e.d(n,{default:function(){return d}});var a=e(43001),t=e(24105),i=e(4759),c=e(58422),l=e(85451),u=e(71191),r=e(95492);const o=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/davidrios/pug-tmbundle/blob/master/Syntaxes/Pug.JSON-tmLanguage","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/davidrios/pug-tmbundle/commit/ae1dd60ca4aa4b45617f236d584216cd8d19eecf",name:"pug",scopeName:"text.pug",patterns:[{match:"^(!!!|doctype)(\\s*[a-zA-Z0-9-_]+)?",name:"meta.tag.sgml.doctype.html",comment:"Doctype declaration."},{begin:"^(\\s*)//-",end:"^(?!(\\1\\s)|\\s*$)",name:"comment.unbuffered.block.pug",comment:"Unbuffered (pug-only) comments."},{begin:"^(\\s*)//",end:"^(?!(\\1\\s)|\\s*$)",name:"string.comment.buffered.block.pug",comment:"Buffered (html) comments.",patterns:[{captures:{1:{name:"invalid.illegal.comment.comment.block.pug"}},match:"^\\s*(//)(?!-)",name:"string.comment.buffered.block.pug",comment:"Buffered comments inside buffered comments will generate invalid html."}]},{begin:"<!--",end:"--\\s*>",name:"comment.unbuffered.block.pug",patterns:[{match:"--",name:"invalid.illegal.comment.comment.block.pug"}]},{begin:"^(\\s*)-$",end:"^(?!(\\1\\s)|\\s*$)",name:"source.js",comment:"Unbuffered code block.",patterns:[{include:"source.js"}]},{begin:"^(\\s*)(script)((\\.$)|(?=[^\\n]*((text|application)/javascript|module).*\\.$))",beginCaptures:{2:{name:"entity.name.tag.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"meta.tag.other",comment:"Script tag with JavaScript code.",patterns:[{begin:"\\G(?=\\()",end:"$",patterns:[{include:"#tag_attributes"}]},{begin:"\\G(?=[.#])",end:"$",patterns:[{include:"#complete_tag"}]},{include:"source.js"}]},{begin:"^(\\s*)(style)((\\.$)|(?=[.#(].*\\.$))",beginCaptures:{2:{name:"entity.name.tag.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"meta.tag.other",comment:"Style tag with CSS code.",patterns:[{begin:"\\G(?=\\()",end:"$",patterns:[{include:"#tag_attributes"}]},{begin:"\\G(?=[.#])",end:"$",patterns:[{include:"#complete_tag"}]},{include:"source.css"}]},{begin:"^(\\s*):(sass)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.sass.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.sass.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.sass"}]},{begin:"^(\\s*):(scss)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.scss.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.css.scss.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.css.scss"}]},{begin:"^(\\s*):(less)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.less.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.less.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.less"}]},{begin:"^(\\s*):(stylus)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.stylus.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",patterns:[{include:"#tag_attributes"},{include:"source.stylus"}]},{begin:"^(\\s*):(coffee(-?script)?)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.coffeescript.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.coffeescript.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.coffee"}]},{begin:"^(\\s*):(uglify-js)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.js.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.js.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.js"}]},{begin:"^(\\s*)((:(?=.))|(:$))",beginCaptures:{4:{name:"invalid.illegal.empty.generic.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",comment:"Generic Pug filter.",patterns:[{begin:"\\G(?<=:)(?=.)",end:"$",name:"name.generic.filter.pug",patterns:[{match:"\\G\\(",name:"invalid.illegal.name.generic.filter.pug"},{match:"[\\w-]",name:"constant.language.name.generic.filter.pug"},{include:"#tag_attributes"},{match:"\\W",name:"invalid.illegal.name.generic.filter.pug"}]}]},{begin:`^(\\s*)(?:(?=\\.$)|(?:(?=[\\w.#].*?\\.$)(?=(?:(?:(?:(?:(?:#[\\w-]+)|(?:\\.[\\w-]+))|(?:(?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))(?:(?:#[\\w-]+)|(?:\\.[\\w-]+)|(?:\\((?:[^()\\'\\"]*(?:(?:\\'(?:[^\\']|(?:(?<!\\\\)\\\\\\'))*\\')|(?:\\"(?:[^\\"]|(?:(?<!\\\\)\\\\\\"))*\\")))*[^()]*\\))*)*)(?:(?:(?::\\s+)|(?<=\\)))(?:(?:(?:(?:#[\\w-]+)|(?:\\.[\\w-]+))|(?:(?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))(?:(?:#[\\w-]+)|(?:\\.[\\w-]+)|(?:\\((?:[^()\\'\\"]*(?:(?:\\'(?:[^\\']|(?:(?<!\\\\)\\\\\\'))*\\')|(?:\\"(?:[^\\"]|(?:(?<!\\\\)\\\\\\"))*\\")))*[^()]*\\))*)*))*)\\.$)(?:(?:(#[\\w-]+)|(\\.[\\w-]+))|((?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))))`,beginCaptures:{2:{name:"meta.selector.css entity.other.attribute-name.id.css.pug"},3:{name:"meta.selector.css entity.other.attribute-name.class.css.pug"},4:{name:"meta.tag.other entity.name.tag.pug"}},end:"^(?!(\\1\\s)|\\s*$)",comment:"Generated from dot_block_tag.py",patterns:[{match:"\\.$",name:"storage.type.function.pug.dot-block-dot"},{include:"#tag_attributes"},{include:"#complete_tag"},{begin:"^(?=.)",end:"$",name:"text.block.pug",patterns:[{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]}]},{begin:"^\\s*",end:"$",comment:"All constructs that generally span a single line starting with any number of white-spaces.",patterns:[{include:"#inline_pug"},{include:"#blocks_and_includes"},{include:"#unbuffered_code"},{include:"#mixin_definition"},{include:"#mixin_call"},{include:"#flow_control"},{include:"#flow_control_each"},{include:"#case_conds"},{begin:"\\|",end:"$",name:"text.block.pipe.pug",comment:"Tag pipe text line.",patterns:[{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},{include:"#printed_expression"},{begin:"\\G(?=(#[^\\{\\w-])|[^\\w.#])",end:"$",comment:"Line starting with characters incompatible with tag name/id/class is standalone text.",patterns:[{begin:"</?(?=[!#])",end:">|$",patterns:[{include:"#inline_pug"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},{include:"#complete_tag"}]}],repository:{blocks_and_includes:{captures:{1:{name:"storage.type.import.include.pug"},4:{name:"variable.control.import.include.pug"}},match:"(extends|include|yield|append|prepend|block( (append|prepend))?)\\s+(.*)$",name:"meta.first-class.pug",comment:"Template blocks and includes."},unbuffered_code:{begin:"(-|(([a-zA-Z0-9_]+)\\s+=))",beginCaptures:{3:{name:"variable.parameter.javascript.embedded.pug"}},end:"(?=\\])|(({\\s*)?$)",name:"source.js",comment:"name = function() {}",patterns:[{include:"#js_brackets"},{include:"#babel_parens"},{include:"source.js"}]},mixin_definition:{match:"(mixin\\s+)([\\w-]+)(?:(\\()\\s*((?:[a-zA-Z_]\\w*\\s*)(?:,\\s*[a-zA-Z_]\\w*\\s*)*)(\\)))?$",captures:{1:{name:"storage.type.function.pug"},2:{name:"meta.tag.other entity.name.function.pug"},3:{name:"punctuation.definition.parameters.begin.js"},4:{name:"variable.parameter.function.js"},5:{name:"punctuation.definition.parameters.begin.js"}}},mixin_call:{begin:"((?:mixin\\s+)|\\+)([\\w-]+)",beginCaptures:{1:{name:"storage.type.function.pug"},2:{name:"meta.tag.other entity.name.function.pug"}},end:"(?!\\()|$",patterns:[{begin:"(?<!\\))\\(",end:"\\)",name:"args.mixin.pug",patterns:[{include:"#js_parens"},{match:"([^\\s(),=/]+)\\s*=\\s*",captures:{1:{name:"meta.tag.other entity.other.attribute-name.tag.pug"}}},{include:"source.js"}]},{include:"#tag_attributes"}]},flow_control:{begin:"(for|if|else if|else|until|while|unless|case)(\\s+|$)",captures:{1:{name:"storage.type.function.pug"}},end:"$",name:"meta.control.flow.pug",comment:"Pug control flow.",patterns:[{begin:"",end:"$",name:"js.embedded.control.flow.pug",patterns:[{include:"source.js"}]}]},flow_control_each:{begin:"(each)(\\s+|$)",captures:{1:{name:"storage.type.function.pug"}},end:"$",name:"meta.control.flow.pug.each",patterns:[{match:"([\\w$_]+)(?:\\s*,\\s*([\\w$_]+))?",name:"variable.other.pug.each-var"},{begin:"",end:"$",name:"js.embedded.control.flow.pug",patterns:[{include:"source.js"}]}]},case_when_paren:{begin:"\\(",end:"\\)",name:"js.when.control.flow.pug",patterns:[{include:"#case_when_paren"},{match:":",name:"invalid.illegal.name.tag.pug"},{include:"source.js"}]},case_conds:{begin:"(default|when)((\\s+|(?=:))|$)",captures:{1:{name:"storage.type.function.pug"}},end:"$",name:"meta.control.flow.pug",comment:"Pug case conditionals.",patterns:[{begin:"\\G(?!:)",end:"(?=:\\s+)|$",name:"js.embedded.control.flow.pug",patterns:[{include:"#case_when_paren"},{include:"source.js"}]},{begin:":\\s+",end:"$",name:"tag.case.control.flow.pug",patterns:[{include:"#complete_tag"}]}]},complete_tag:{begin:"(?=[\\w.#])|(:\\s*)",end:"(\\.?$)|(?=:.)",endCaptures:{1:{name:"storage.type.function.pug.dot-block-dot"}},patterns:[{include:"#blocks_and_includes"},{include:"#unbuffered_code"},{include:"#mixin_call"},{include:"#flow_control"},{include:"#flow_control_each"},{match:"(?<=:)\\w.*$",name:"invalid.illegal.name.tag.pug"},{include:"#tag_name"},{include:"#tag_id"},{include:"#tag_classes"},{include:"#tag_attributes"},{include:"#tag_mixin_attributes"},{match:"((\\.)\\s+$)|((:)\\s*$)",captures:{2:{name:"invalid.illegal.end.tag.pug"},4:{name:"invalid.illegal.end.tag.pug"}}},{include:"#printed_expression"},{include:"#tag_text"}]},tag_name:{begin:"([#!]\\{(?=.*?\\}))|(\\w(([\\w:-]+[\\w-])|([\\w-]*)))",end:"(\\G(?<!\\5[^\\w-]))|\\}|$",name:"meta.tag.other entity.name.tag.pug",patterns:[{begin:"\\G(?<=\\{)",end:"(?=\\})",name:"meta.tag.other entity.name.tag.pug",patterns:[{match:"{",name:"invalid.illegal.tag.pug"},{include:"source.js"}]}]},tag_id:{match:"#[\\w-]+",name:"meta.selector.css entity.other.attribute-name.id.css.pug"},tag_classes:{match:"\\.([^\\w-])?[\\w-]*",captures:{1:{name:"invalid.illegal.tag.pug"}},name:"meta.selector.css entity.other.attribute-name.class.css.pug"},tag_attributes:{begin:"(\\(\\s*)",captures:{1:{name:"constant.name.attribute.tag.pug"}},end:"(\\))",name:"meta.tag.other",patterns:[{include:"#tag_attribute_name_paren"},{include:"#tag_attribute_name"},{match:"!(?!=)",name:"invalid.illegal.tag.pug"},{begin:"=\\s*",end:"$|(?=,|(?:\\s+[^!%&*\\-+~|<>?/])|\\))",name:"attribute_value",patterns:[{include:"#js_parens"},{include:"#js_brackets"},{include:"#js_braces"},{include:"source.js"}]},{begin:"(?<=[%&*\\-+~|<>:?/])\\s+",end:"$|(?=,|(?:\\s+[^!%&*\\-+~|<>?/])|\\))",name:"attribute_value2",patterns:[{include:"#js_parens"},{include:"#js_brackets"},{include:"#js_braces"},{include:"source.js"}]}]},tag_attribute_name:{match:"([^\\s(),=/!]+)\\s*",captures:{1:{name:"entity.other.attribute-name.tag.pug"}}},tag_attribute_name_paren:{begin:"\\(\\s*",end:"\\)",name:"entity.other.attribute-name.tag.pug",patterns:[{include:"#tag_attribute_name_paren"},{include:"#tag_attribute_name"}]},tag_mixin_attributes:{begin:"(&attributes\\()",captures:{1:{name:"entity.name.function.pug"}},end:"(\\))",name:"meta.tag.other",patterns:[{match:"attributes(?=\\))",name:"storage.type.keyword.pug"},{include:"source.js"}]},tag_text:{begin:"(?=.)",end:"$",patterns:[{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},inline_pug_text:{begin:"",end:"(?=\\])",patterns:[{begin:"\\[",end:"\\]",patterns:[{include:"#inline_pug_text"}]},{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},inline_pug:{begin:"(?<!\\\\)(#\\[)",captures:{1:{name:"entity.name.function.pug"},2:{name:"entity.name.function.pug"}},end:"(\\])",name:"inline.pug",patterns:[{include:"#inline_pug"},{include:"#mixin_call"},{begin:"(?<!\\])(?=[\\w.#])|(:\\s*)",end:"(?=\\]|(:.)|=|\\s)",name:"tag.inline.pug",patterns:[{include:"#tag_name"},{include:"#tag_id"},{include:"#tag_classes"},{include:"#tag_attributes"},{include:"#tag_mixin_attributes"},{include:"#inline_pug"},{match:"\\[",name:"invalid.illegal.tag.pug"}]},{include:"#unbuffered_code"},{include:"#printed_expression"},{match:"\\[",name:"invalid.illegal.tag.pug"},{include:"#inline_pug_text"}]},html_entity:{patterns:[{match:"(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.html.text.pug"},{match:"[<>&]",name:"invalid.illegal.html_entity.text.pug"}]},interpolated_value:{begin:"(?<!\\\\)[#!]\\{(?=.*?\\})",end:"\\}",name:"string.interpolated.pug",patterns:[{match:"{",name:"invalid.illegal.tag.pug"},{include:"source.js"}]},interpolated_error:{match:"(?<!\\\\)[#!]\\{(?=[^}]*$)",name:"invalid.illegal.tag.pug"},printed_expression:{begin:"(!?\\=)\\s*",captures:{1:{name:"constant"}},end:"(?=\\])|$",name:"source.js",patterns:[{include:"#js_brackets"},{include:"source.js"}]},embedded_html:{begin:"(?=<[^>]*>)",end:"$|(?=>)",name:"html",patterns:[{include:"text.html.basic"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},js_parens:{begin:"\\(",end:"\\)",patterns:[{include:"#js_parens"},{include:"source.js"}]},js_brackets:{begin:"\\[",end:"\\]",patterns:[{include:"#js_brackets"},{include:"source.js"}]},js_braces:{begin:"\\{",end:"\\}",patterns:[{include:"#js_braces"},{include:"source.js"}]},babel_parens:{begin:"\\(",end:"\\)|(({\\s*)?$)",patterns:[{include:"#babel_parens"},{include:"source.js"}]}},displayName:"Pug",aliases:["jade"],embeddedLangs:["javascript","css","sass","scss","stylus","coffee","html"]});var d=[...a.default,...t.default,...i.default,...c.default,...l.default,...u.default,...r.default,o]},4759:function(s,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({fileTypes:["sass"],foldingStartMarker:"/\\*|^#|^\\*|^\\b|*#?region|^\\.",foldingStopMarker:"\\*/|*#?endregion|^\\s*$",name:"sass",patterns:[{begin:"^(\\s*)(/\\*)",end:"(\\*/)|^(?!\\s\\1)",name:"comment.block.sass",patterns:[{include:"#comment-tag"},{include:"#comment-param"}]},{match:"^[\\t ]*/?//[\\t ]*[SRI][\\t ]*$",name:"keyword.other.sass.formatter.action"},{begin:"^[\\t ]*//[\\t ]*(import)[\\t ]*(css-variables)[\\t ]*(from)",end:"$\\n?",name:"comment.import.css.variables",captures:{1:{name:"keyword.control"},2:{name:"variable"},3:{name:"keyword.control"}},patterns:[{include:"#import-quotes"}]},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#curly-brackets"},{include:"#placeholder-selector"},{begin:"\\$[a-zA-Z0-9_-]+(?=:)",end:"$\\n?|(?=\\)\\s\\)|\\)\\n)",name:"sass.script.maps",captures:{0:{name:"variable.other.name"}},patterns:[{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#comma"},{include:"#function"},{include:"#function-content"},{include:"#operator"},{include:"#reserved-words"},{include:"#parent-selector"},{include:"#property-value"},{include:"#semicolon"},{include:"#dotdotdot"}]},{include:"#variable-root"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#comma"},{include:"#semicolon"},{include:"#dotdotdot"},{begin:"@include|\\+(?!\\W|\\d)",end:"(?=\\n|\\()",name:"support.function.name.sass.library",captures:{0:{name:"keyword.control.at-rule.css.sass"}}},{begin:"^(@use)",end:"(?=\\n)",name:"sass.use",captures:{0:{name:"keyword.control.at-rule.css.sass.use"}},patterns:[{match:"as|with",name:"support.type.css.sass"},{include:"#numeric"},{include:"#unit"},{include:"#variable-root"},{include:"#rgb-value"},{include:"#comma"},{include:"#parenthesis-open"},{include:"#parenthesis-close"},{include:"#colon"},{include:"#import-quotes"}]},{begin:"^@import(.*?)( as.*)?$",end:"(?=\\n)",name:"keyword.control.at-rule.use",captures:{1:{name:"constant.character.css.sass"},2:{name:"invalid"}}},{begin:"@mixin|^[\\t ]*=|@function",end:"$\\n?|(?=\\()",name:"support.function.name.sass",captures:{0:{name:"keyword.control.at-rule.css.sass"}},patterns:[{match:"[\\w-]+",name:"entity.name.function"}]},{begin:"@",end:"$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))",name:"keyword.control.at-rule.css.sass"},{begin:"(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|slot)\\b(?!-|\\)|:\\s)|&",end:"$\\n?|(?=\\s|,|\\(|\\)|\\.|\\#|\\[|>|-|_)",name:"entity.name.tag.css.sass.symbol",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"#",end:"$\\n?|(?=\\s|,|\\(|\\)|\\.|\\[|>)",name:"entity.other.attribute-name.id.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\.|(?<=&)(-|_)",end:"$\\n?|(?=\\s|,|\\(|\\)|\\[|>)",name:"entity.other.attribute-name.class.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\[",end:"\\]",name:"entity.other.attribute-selector.sass",patterns:[{include:"#double-quoted"},{include:"#single-quoted"},{match:"\\^|\\$|\\*|~",name:"keyword.other.regex.sass"}]},{match:`^((?<=\\]|\\)|not\\(|\\*|>|>\\s)|
*):[a-z:-]+|(::|:-)[a-z:-]+`,name:"entity.other.attribute-name.pseudo-class.css.sass"},{include:"#module"},{match:"[\\w-]*\\(",name:"entity.name.function"},{match:"\\)",name:"entity.name.function.close"},{begin:":",end:"$\\n?|(?=\\s\\(|and\\(|\\),)",name:"meta.property-list.css.sass.prop",patterns:[{match:"(?<=:)[a-z-]+\\s",name:"support.type.property-name.css.sass.prop.name"},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#curly-brackets"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#module"},{match:"--.+?(?=\\))",name:"variable.css"},{match:"[\\w-]*\\(",name:"entity.name.function"},{match:"\\)",name:"entity.name.function.close"},{include:"#flag"},{include:"#comma"},{include:"#semicolon"},{include:"#function"},{include:"#function-content"},{include:"#operator"},{include:"#parent-selector"},{include:"#property-value"}]},{include:"#rgb-value"},{include:"#function"},{include:"#function-content"},{begin:"(?<=})(?!\\n|\\(|\\)|[a-zA-Z0-9_-]+:)",end:"\\s|(?=,|\\.|\\[|\\)|\\n)",name:"entity.name.tag.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{include:"#operator"},{match:"[a-z-]+((?=:|#{))",name:"support.type.property-name.css.sass.prop.name"},{include:"#reserved-words"},{include:"#property-value"}],repository:{module:{match:"([\\w-]+?)(\\.)",name:"constant.character.module",captures:{1:{name:"constant.character.module.name"},2:{name:"constant.numeric.module.dot"}}},comma:{match:"\\band\\b|\\bor\\b|,",name:"comment.punctuation.comma.sass"},"comment-tag":{begin:"(?<={{)",end:"(?=}})",name:"comment.tag.sass"},"comment-param":{match:"\\@(\\w+)",name:"storage.type.class.jsdoc"},"curly-brackets":{match:"{|}",name:"invalid"},dotdotdot:{match:"\\.\\.\\.",name:"variable.other"},"double-slash":{begin:"//",end:"$\\n?",name:"comment.line.sass",patterns:[{include:"#comment-tag"}]},"double-quoted":{begin:'"',end:'"',name:"string.quoted.double.css.sass",patterns:[{include:"#quoted-interpolation"}]},flag:{match:"!(important|default|optional|global)",name:"keyword.other.important.css.sass"},function:{match:"(?<=[\\s|\\(|,|:])(?!url|format|attr)[a-zA-Z0-9_-][\\w-]*(?=\\()",name:"support.function.name.sass"},"function-content":{begin:"(?<=url\\(|format\\(|attr\\()",end:".(?=\\))",name:"string.quoted.double.css.sass"},"parenthesis-open":{match:"\\(",name:"entity.name.function.parenthesis.open"},"parenthesis-close":{match:"\\)",name:"entity.name.function.parenthesis.close"},colon:{match:":",name:"meta.property-list.css.sass.colon"},interpolation:{begin:"#{",end:"}",name:"support.function.interpolation.sass",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#comma"},{include:"#double-quoted"},{include:"#single-quoted"}]},numeric:{match:"(-|\\.)?[0-9]+(\\.[0-9]+)?",name:"constant.numeric.css.sass"},operator:{match:"\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~",name:"keyword.operator.sass"},"parent-selector":{match:"&",name:"entity.name.tag.css.sass"},"placeholder-selector":{begin:"(?<!\\d)%(?!\\d)",end:"$\\n?|\\s",name:"entity.other.inherited-class.placeholder-selector.css.sass"},"property-value":{match:"[a-zA-Z0-9_-]+",name:"meta.property-value.css.sass support.constant.property-value.css.sass"},"pseudo-class":{match:":[a-z:-]+",name:"entity.other.attribute-name.pseudo-class.css.sass"},"quoted-interpolation":{begin:"#{",end:"}",name:"support.function.interpolation.sass",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#comma"}]},"reserved-words":{match:"\\b(false|from|in|not|null|through|to|true)\\b",name:"support.type.property-name.css.sass"},"rgb-value":{match:"(#)([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",name:"constant.language.color.rgb-value.css.sass"},semicolon:{match:";",name:"invalid"},"single-quoted":{begin:"'",end:"'",name:"string.quoted.single.css.sass",patterns:[{include:"#quoted-interpolation"}]},unit:{match:"(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|fr|%)",name:"keyword.control.unit.css.sass"},"variable-root":{match:"\\$[a-zA-Z0-9_-]+",name:"variable.other.root"},variable:{match:"\\$[a-zA-Z0-9_-]+",name:"variable.other.value"},"import-quotes":{match:`["']?\\.{0,2}[\\w/]+["']?`,name:"constant.character.css.sass"}},scopeName:"source.sass",displayName:"Sass"})]}}]);
