(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"245a":function(e,a,t){},"3f3b":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"padding bg-grey-1"},[t("breadcrumbs",{staticClass:"bg-secondary",attrs:{links:e.links}}),t("div",{staticClass:" q-ma-none q-pa-none"},[t("q-table",{staticClass:"bg-white ",staticStyle:{height:"100%"},attrs:{data:e.data,columns:e.columns,"row-key":"index","virtual-scroll":"",filter:e.verseFilter,pagination:e.pagination,"rows-per-page-options":[0],"hide-bottom":!0,"hide-header":!0,"wrap-cells":!0},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-btn",{attrs:{flat:""}},[t("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(a){return e.sideBarOpener.loadLanguages()}}})],1),t("q-space"),t("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},model:{value:e.verseFilter,callback:function(a){e.verseFilter=a},expression:"verseFilter"}},[t("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1)]},proxy:!0}])})],1)],1)},o=[],i=(t("5319"),t("ddb0"),t("2cbd"));const r=t("c2a1").default,s=t("1712").to;t("20e6");var l={name:"bibleReaderPage",components:{breadcrumbs:i["a"]},data(){return{data:[],verseFilter:"",pagination:{rowsPerPage:0},columns:[{name:"absoluteVerseNr",label:"#",field:"absoluteVerseNr"},{name:"content",required:!0,label:"content",align:"left",field:e=>e.content,format:e=>`${e}`,sortable:!1}],versions:[],book:"",chapter:"",verse:"",bookData:{},main:this,loadingSomethingBigger:!1,tab:"languages",links:[{label:"Publishing",icon:"library_books",to:"/publishing"},{label:"Bible Reader",icon:"construction",to:"/bible-reader"}]}},async created(){let e="KJV",a=1,t=1,n=1,o=window.location.hash.replace(/^[#]*[\/]*/,""),i=o.match(/bible-reader\/([a-zA-Z0-9\-]+).*/);i&&2==i.length&&(e=i[1]),i=o.match(/bible-reader\/[a-zA-Z0-9\-]+\/([a-zA-Z0-9\-]+).*/),i&&2==i.length&&(a=i[1]),i=o.match(/bible-reader\/[a-zA-Z0-9\-]+\/[a-zA-Z0-9\-]+\/([0-9]+).*/),i&&2==i.length&&(t=i[1]),i=o.match(/bible-reader\/[a-zA-Z0-9\-]+\/[a-zA-Z0-9\-]+\/[a-zA-Z0-9\-]+\/([0-9]+).*/),i&&2==i.length&&(n=i[1]),this.toolBar.loadingSomethingBigger=!0;let[l,c]=await s(r.versionIsInstalled(e));if(this.toolBar.loadingSomethingBigger=!1,l)return this.goBackToVersionSelection();let b=c.versions[e];c.lang;if(!b)return this.goBackToVersionSelection();if(this.toolBar.loadingSomethingBigger=!0,[l,c]=await s(r.versionBooks(e)),this.toolBar.loadingSomethingBigger=!1,l)return this.goBackToVersionSelection();let g=c;this.bookData=c,parseInt(a).toString().length===a.length&&(a=parseInt(a),a=Object.keys(g)[a-1]),a||(a=Object.keys(g)[0]),t=parseInt(t)||1,n=parseInt(n)||1,t<=0&&(t=1),t>=g[a].length&&(t=g[a].length),n<=0&&(n=1),n>=g[a][t-1]&&(n=g[a][t-1]);let d=`/bible-reader/${e}/${a}/${t}/${n}`;d!==o&&window.location.assign("/#"+d),this.versions=[e],this.book=a,this.chapter=t,this.verse=n,this.getText()},props:["toolBar"],methods:{goBackToVersionSelection(){let e="/#/bible-tools/en";window.location.assign(e)},async getText(){return new Promise((async(e,a)=>{let{book:t,chapter:n}=this,o=this.versions.map((e=>r.getText({version:e,book:t,chapter:n}))),[i,l]=await s(Promise.all(o));console.log(l),this.data=[],l.map((e=>{this.data=this.data.concat([...e])}))}))}}},c=l,b=(t("679f"),t("2877")),g=t("9989"),d=t("6b1d"),h=t("2bb1"),p=t("eaac"),u=t("9c40"),m=t("0016"),f=t("2c91"),k=t("27f9"),w=t("429bb"),v=t("7460"),B=t("eb85"),S=t("adad"),y=t("823b"),Q=t("eebe"),T=t.n(Q),q=Object(b["a"])(c,n,o,!1,null,"6b87389c",null);a["default"]=q.exports;T()(q,"components",{QPage:g["a"],QLinearProgress:d["a"],QMarkupTable:h["a"],QTable:p["a"],QBtn:u["a"],QIcon:m["a"],QSpace:f["a"],QInput:k["a"],QTabs:w["a"],QTab:v["a"],QSeparator:B["a"],QTabPanels:S["a"],QTabPanel:y["a"]})},"679f":function(e,a,t){"use strict";t("245a")}}]);