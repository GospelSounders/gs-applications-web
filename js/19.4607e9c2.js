(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{9129:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"padding bg-grey-1"},[t("breadcrumbs",{staticClass:"bg-secondary",attrs:{links:a.links}}),t("div",{staticClass:"bg-secondary"},[t("q-tabs",{attrs:{align:"left"},model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},[t("q-tab",{attrs:{name:"wholebible",label:"Whole Bible"}}),t("q-tab",{attrs:{name:"OT",label:"OT"}}),t("q-tab",{attrs:{name:"NT",label:"NT"}}),t("q-tab",{attrs:{name:"Apocrypha",label:"Apocrypha"}})],1),t("q-separator")],1),t("q-tab-panels",{staticClass:"full-width q-ma-none q-pa-none",attrs:{animated:""},model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},[t("q-tab-panel",{staticClass:"full-width q-pa-none",attrs:{name:"wholebible"}},[t("bibleSummary",{attrs:{portion:"whole"}})],1),t("q-tab-panel",{staticClass:"full-width q-pa-none",attrs:{name:"OT"}},[t("bibleSummary",{attrs:{portion:"OT"}})],1),t("q-tab-panel",{staticClass:"full-width q-pa-none",attrs:{name:"NT"}},[t("bibleSummary",{attrs:{portion:"NT"}})],1),t("q-tab-panel",{staticClass:"full-width q-pa-none",attrs:{name:"Apocrypha"}},[t("bibleSummary",{attrs:{portion:"Apocrypha"}})],1)],1)],1)},r=[],l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"padding bg-grey-1"},[t("q-table",{attrs:{grid:"","card-container-class":a.cardContainerClass,data:a.summaryList,summaryColumns:a.summaryColumns,summaryFilter:a.summaryFilter,"row-key":"name","hide-header":"","hide-bottom":"","rows-per-page-options":[0]},scopedSlots:a._u([{key:"item",fn:function(e){return[t("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},[t("q-card",{staticClass:"bg-white"},[t("q-card-section",{staticClass:"flex flex-center"},[t("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-primary cursor-pointer q-hoverable",staticStyle:{width:"80vw"}},[t("q-card-section",{staticClass:"text-center bg-secondary"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-11",staticStyle:{"font-size":"6em"}},[a._v("50%")]),t("div",{staticClass:"col-1 text-right"},[t("div",{staticClass:"row"},[a._v("1")]),t("q-separator"),t("div",{staticClass:"row"},[a._v("1000")])],1)])]),t("q-card-section",{staticClass:"flex flex-center text-white"},[t("div",[a._v(a._s(e.row.name))])])],1)],1)],1)],1)]}}])}),a._v("\n  REOSURCEs\n")],1)},n=[],i=(t("cf57"),t("310f")),o=t("2cbd");t("c2a1").default,t("1712").to,t("0924").default,t("20e6");var c={name:"bibleSummary",components:{loginForm:i["a"],breadcrumbs:o["a"]},data(){return{summaryList:[{name:"Books",description:".."},{name:"Chapters",description:".."},{name:"Verses",description:".."}],summaryFilter:"",summaryColumns:[{name:"name",label:"Name",field:"name"},{name:"description",label:"Description",field:"description"},{name:"icon",label:"Icon",field:"icon"}],translationProgress:{books:{translated:0,all:0,percentage:0},chapters:{translated:0,all:0,percentage:0},verses:{translated:0,all:0,percentage:0}}}},async created(){},methods:{selectApplication(a){window.location.assign(a)}},computed:{cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},b=c,m=t("2877"),d=t("9989"),p=t("eaac"),u=t("f09f"),h=t("a370"),f=t("0016"),y=t("eb85"),C=t("714f"),g=t("eebe"),w=t.n(g),q=Object(m["a"])(b,l,n,!1,null,null,null),v=q.exports;w()(q,"components",{QPage:d["a"],QTable:p["a"],QCard:u["a"],QCardSection:h["a"],QIcon:f["a"],QSeparator:y["a"]}),w()(q,"directives",{Ripple:C["a"]});t("c2a1").default,t("1712").to,t("20e6");var Q={name:"kjvSwahili",components:{bibleSummary:v,breadcrumbs:o["a"]},data(){return{tab:"wholebible",links:[{label:"Publishing",icon:"library_books",to:"/publishing"},{label:"kjv-swahili",icon:"library_books",to:"/kjv-swahili"}]}},async created(){},methods:{}},k=Q,S=t("429bb"),x=t("7460"),T=t("adad"),_=t("823b"),O=t("2c91"),N=t("27f9"),P=Object(m["a"])(k,s,r,!1,null,null,null);e["default"]=P.exports;w()(P,"components",{QPage:d["a"],QTabs:S["a"],QTab:x["a"],QSeparator:y["a"],QTabPanels:T["a"],QTabPanel:_["a"],QTable:p["a"],QSpace:O["a"],QInput:N["a"],QIcon:f["a"],QCard:u["a"],QCardSection:h["a"]}),w()(P,"directives",{Ripple:C["a"]})}}]);