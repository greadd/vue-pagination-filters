(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1f60"],{"7d52":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[a("v-card",{staticClass:"elevation-6",attrs:{tile:""}},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Реактирование товара")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Кличка*",type:"text",outlined:"",dense:"",rules:t.nameRules},model:{value:t.cat.name,callback:function(e){t.$set(t.cat,"name",e)},expression:"cat.name"}}),a("v-text-field",{attrs:{label:"Порода",type:"text",outlined:"",dense:""},model:{value:t.cat.breed,callback:function(e){t.$set(t.cat,"breed",e)},expression:"cat.breed"}}),a("v-text-field",{attrs:{label:"Окрас",type:"text",outlined:"",dense:""},model:{value:t.cat.color,callback:function(e){t.$set(t.cat,"color",e)},expression:"cat.color"}}),a("v-radio-group",{attrs:{label:"Пол*",row:"",dense:"",rules:t.genderRules},model:{value:t.cat.gender,callback:function(e){t.$set(t.cat,"gender",e)},expression:"cat.gender"}},[a("v-radio",{attrs:{label:"Кот",value:"Кот"}}),a("v-radio",{attrs:{label:"Кошка",value:"Кошка"}})],1),a("v-text-field",{attrs:{label:"Возраст",type:"text",outlined:"",dense:"",rules:t.ageRules},model:{value:t.cat.age,callback:function(e){t.$set(t.cat,"age",e)},expression:"cat.age"}}),a("v-textarea",{attrs:{label:"Комментарий",outlined:"",dense:""},model:{value:t.cat.comment,callback:function(e){t.$set(t.cat,"comment",e)},expression:"cat.comment"}})],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"mb-2 ml-2",attrs:{color:"primary",to:"/",tile:""}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left-circle")]),t._v("Назад ")],1),a("v-spacer"),a("v-btn",{staticClass:"mb-2 mr-2",attrs:{disabled:!t.valid||t.loadingBtn,loading:t.loadingBtn,color:"success",tile:""},on:{click:t.updateCat}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-content-save-edit")]),t._v("Сохранить ")],1)],1)],1)],1)],1)],1)},r=[],l=(a("7db0"),a("96cf"),a("1da1")),o={data:function(){return{valid:!0,loader:null,loadingBtn:!1,cat:{name:"",breed:"",color:"",gender:"",age:"",comment:""},nameRules:[function(t){return!!t||"Введите кличку"},function(t){return t&&t.length>1||"Кличка не можеть быть короче 2-х символов"}],genderRules:[function(t){return!!t||"Укажите"}],ageRules:[function(t){return!t||/^\d+$/.test(t)||"Возраст не может быть дробным числом"}]}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){return t[e]=!1}),1500),this.loader=null}},mounted:function(){var t=this;this.cat=this.$store.getters.cats.find((function(e){return e.id==t.$route.params.id}))},methods:{updateCat:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loader="loadingBtn",!t.$refs.form.validate()){e.next=4;break}return e.next=4,setTimeout((function(){t.$store.dispatch("updateCat",t.cat),t.$router.go(-1)}),1500);case 4:case"end":return e.stop()}}),e)})))()}}},c=o,i=a("2877"),s=a("6544"),d=a.n(s),u=a("8336"),v=a("b0af"),f=a("99d9"),m=a("62ad"),b=a("a523"),p=a("4bd4"),g=a("132d"),x=a("67b6"),h=a("43a6"),V=a("0fd9"),k=a("2fa4"),w=a("8654"),$=a("a844"),C=a("71d9"),R=a("2a7f"),y=Object(i["a"])(c,n,r,!1,null,null,null);e["default"]=y.exports;d()(y,{VBtn:u["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["c"],VCol:m["a"],VContainer:b["a"],VForm:p["a"],VIcon:g["a"],VRadio:x["a"],VRadioGroup:h["a"],VRow:V["a"],VSpacer:k["a"],VTextField:w["a"],VTextarea:$["a"],VToolbar:C["a"],VToolbarTitle:R["a"]})}}]);
//# sourceMappingURL=chunk-2d0e1f60.68b57c5b.js.map