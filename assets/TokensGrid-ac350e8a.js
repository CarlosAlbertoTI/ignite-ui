var s=Object.defineProperty;var i=(r,n)=>s(r,"name",{value:n,configurable:!0});import{a as t,j as e}from"./jsx-runtime-59396065.js";function l({tokens:r,hasRenValue:n=!1}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Valor em PX"})]})}),e("tbody",{children:Object.entries(r).map(([a,d])=>t("tr",{children:[e("td",{children:a}),e("td",{children:d}),n&&t("td",{children:[Number(d.replace("rem",""))*14,"px"]})]},a))})]})}i(l,"TokensGrid");try{l.displayName="TokensGrid",l.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRenValue:{defaultValue:{value:"false"},description:"",name:"hasRenValue",required:!1,type:{name:"boolean"}}}}}catch{}export{l as T};
//# sourceMappingURL=TokensGrid-ac350e8a.js.map