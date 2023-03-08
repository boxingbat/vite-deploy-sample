import{_ as h,e as m,r as P,o as s,c as n,a as c,d as t,F as l,f as b,t as T,b as $,w as f}from"./index-ed237d42.js";const{VITE_APP_PATH:d,VITE_APP_URL:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"boxingbat",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},g={data(){return{products:[]}},components:{RouterLink:m},methods:{getProducts(){this.$http.get(`${i}/v2/api/${d}/products`).then(o=>{this.products=o.data.products})},addToCart(o){const a={product_id:o,qty:1};this.$http.post(`${i}/v2/api/${d}/cart`,{data:a}).then(r=>{console.log("check point addToCart: ",r)})}},mounted(){this.getProducts()}},k={class:"table"},V=t("thead",null,[t("tr",null,[t("th",null,"產品名稱"),t("th",null,"產品圖片"),t("th")])],-1),E=["src"],x=["onClick"];function y(o,a,r,A,u,_){const p=P("RouterLink");return s(),n(l,null,[c(" 這是產品列表頁面 "),t("table",k,[V,t("tbody",null,[(s(!0),n(l,null,b(u.products,e=>(s(),n("tr",{key:e.id},[t("td",null,T(e.title),1),t("td",null,[t("img",{src:e.imageUrl,alt:"",width:"100"},null,8,E)]),t("td",null,[$(p,{to:`/product/${e.id}`,class:"btn btn-outline-primary"},{default:f(()=>[c("查看細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-primary",onClick:C=>_.addToCart(e.id)},"加入購物車",8,x)])]))),128))])])],64)}const R=h(g,[["render",y]]);export{R as default};