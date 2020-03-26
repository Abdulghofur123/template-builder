(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{315:function(n,e,i){"use strict";i.r(e);var r=i(319),l=i.n(r),c=i(321),o=i.n(c),s=i(320),a=i(322),d=i.n(a),u=i(323),p=i.n(u),E={name:"Encryption",components:{Actions:d.a,ActionButton:p.a},directives:{ClickOutside:o.a},data:function(){return{fullDiskEncryptionEnabled:!1,serverSideEncryptionEnabled:!1,isAdmin:!0,isEditing:!1,isSavingChanges:!1}},computed:{label:function(){return this.serverSideEncryptionEnabled||this.fullDiskEncryptionEnabled?this.serverSideEncryptionEnabled&&!this.fullDiskEncryptionEnabled?t("privacy","Your files are encrypted with {linkopen}server-side-encryption ↗{linkclose}.").replace("{linkopen}",'<a href="https://nextcloud.com/blog/encryption-in-nextcloud/" target="_blank" title="" rel="noreferrer noopener">').replace("{linkclose}","</a>"):!this.serverSideEncryptionEnabled&&this.fullDiskEncryptionEnabled?t("privacy","This server is protected with full-disk-encryption."):t("privacy","Your files are encrypted with {linkopen}server-side-encryption ↗{linkclose}. Additionally, this server is protected with full-disk-encryption.").replace("{linkopen}",'<a href="https://nextcloud.com/blog/encryption-in-nextcloud/" target="_blank" title="" rel="noreferrer noopener">').replace("{linkclose}","</a>"):t("privacy","Your files are not protected by encryption.")},checkboxLabel:function(){return t("privacy","This server is using full-disk-encryption.")}},created:function(){this.fullDiskEncryptionEnabled=this.$parent.fullDiskEncryptionEnabled,this.serverSideEncryptionEnabled=this.$parent.serverSideEncryptionEnabled,this.isAdmin=OC.isUserAdmin()},methods:{openEditFullDiskEncryptionForm:function(){var n=this;setTimeout((function(){n.isEditing=!0}),0)},cancelEditFullDiskEncryptionForm:function(){this.isEditing=!1},saveFullDiskEncryptionForm:function(){var n=this,e=Object(s.generateUrl)("/apps/privacy/api/fullDiskEncryption");this.isSavingChanges=!0,l.a.post(e,{enabled:this.fullDiskEncryptionEnabled?"1":"0"}).then((function(e){n.isSavingChanges=!1,n.isEditing=!1}))}}},k=i(318),f=Object(k.a)(E,(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"who-has-access"},[i("p",{directives:[{name:"show",rawName:"v-show",value:!n.isEditing,expression:"!isEditing"}],domProps:{innerHTML:n._s(n.label)}}),n._v(" "),n.isAdmin&&!n.isEditing?i("Actions",[i("ActionButton",{attrs:{icon:"icon-rename"},on:{click:n.openEditFullDiskEncryptionForm}})],1):n._e(),n._v(" "),n.isEditing?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:n.cancelEditFullDiskEncryptionForm,expression:"cancelEditFullDiskEncryptionForm"}]},[i("form",[i("input",{directives:[{name:"model",rawName:"v-model",value:n.fullDiskEncryptionEnabled,expression:"fullDiskEncryptionEnabled"}],staticClass:"checkbox",attrs:{id:"fullDiskEncryptionEnabledCheckbox",disabled:n.isSavingChanges,type:"checkbox",name:"fullDiskEncryptionEnabledCheckbox"},domProps:{checked:Array.isArray(n.fullDiskEncryptionEnabled)?n._i(n.fullDiskEncryptionEnabled,null)>-1:n.fullDiskEncryptionEnabled},on:{change:[function(e){var i=n.fullDiskEncryptionEnabled,t=e.target,r=!!t.checked;if(Array.isArray(i)){var l=n._i(i,null);t.checked?l<0&&(n.fullDiskEncryptionEnabled=i.concat([null])):l>-1&&(n.fullDiskEncryptionEnabled=i.slice(0,l).concat(i.slice(l+1)))}else n.fullDiskEncryptionEnabled=r},n.saveFullDiskEncryptionForm]}}),n._v(" "),i("label",{attrs:{for:"fullDiskEncryptionEnabledCheckbox"}},[n._v("\n\t\t\t\t"+n._s(n.checkboxLabel)+"\n\t\t\t")])])]):n._e()],1)}),[],!1,null,null,null);e.default=f.exports},321:function(n,e){function i(n){return"function"==typeof n.value||(console.warn("[Vue-click-outside:] provided expression",n.expression,"is not a function."),!1)}function t(n){return void 0!==n.componentInstance&&n.componentInstance.$isServer}n.exports={bind:function(n,e,r){function l(e){if(r.context){var i=e.path||e.composedPath&&e.composedPath();i&&i.length>0&&i.unshift(e.target),n.contains(e.target)||function(n,e){if(!n||!e)return!1;for(var i=0,t=e.length;i<t;i++)try{if(n.contains(e[i]))return!0;if(e[i].contains(n))return!1}catch(n){return!1}return!1}(r.context.popupItem,i)||n.__vueClickOutside__.callback(e)}}i(e)&&(n.__vueClickOutside__={handler:l,callback:e.value},!t(r)&&document.addEventListener("click",l))},update:function(n,e){i(e)&&(n.__vueClickOutside__.callback=e.value)},unbind:function(n,e,i){!t(i)&&document.removeEventListener("click",n.__vueClickOutside__.handler),delete n.__vueClickOutside__}}}}]);
//# sourceMappingURL=privacy.5.582ef157c325085b8c08.js.map