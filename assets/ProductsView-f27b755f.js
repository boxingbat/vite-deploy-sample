import{_ as f,j as u,r as h,o as s,c as i,a as t,F as m,f as x,d as b,w,t as c,h as g}from"./index-6557581e.js";const{VITE_APP_PATH:r,VITE_APP_URL:n}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"boxingbat",BASE_URL:"/vite-deploy-sample/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{products:[],items:[{id:1,title:"雙人沙發",imageUrl:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",price:1e4,description:"柔軟舒適的兩人座沙發，提供您和摯愛共享放鬆時光的絕佳選擇，創造浪漫與幸福。"},{id:2,title:"三人座沙發",imageUrl:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",price:2e4,description:"舒適寬敞的三人座沙發，讓您和家人一起共享放鬆的時光，創造歡樂與溫馨。"},{id:3,title:"單人椅沙發",imageUrl:"https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",price:5e3,description:"簡約時尚的單人椅沙發，為您打造個人休閒空間，享受獨處的美好時光。"},{id:4,title:"L型沙發",imageUrl:"https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",price:25e3,description:"舒適休閒的 L 型沙發，為您提供全身支撐和放鬆的極致體驗，讓您身心舒暢。"}]}},components:{RouterLink:u},methods:{getProducts(){this.$http.get(`${n}/v2/api/${r}/products`).then(o=>{this.products=o.data.products})},addToCart(o){const a={product_id:o,qty:1};this.$http.post(`${n}/v2/api/${r}/cart`,{data:a}).then(d=>{console.log("check point addToCart: ",d)})}},mounted(){this.getProducts()}},y={class:"container"},P={class:"row row-cols-md-4 row-cols-1 g-4 my-md-3 my-1"},H={key:0,class:"card shadow-sm bg-body border-0 rounded overflow-hidden mb-md-3"},V=["src"],M={class:"card-body"},B={class:"card-title"},D={class:"d-flex"},k={class:"card-text flex-grow-1"},A={class:"card-body border-top border-light text-center fw-bold"},$=["onClick"];function L(o,a,d,T,l,p){const _=h("RouterLink");return s(),i("div",null,[t("div",y,[t("div",P,[(s(!0),i(m,null,x(l.products,e=>(s(),i("div",{class:"col rounded-5",key:e.id},[e.unit=="all"?(s(),i("div",H,[b(_,{to:`/product/${e.id}`},{default:w(()=>[t("img",{src:e.imageUrl,class:"card-img-top img-fluid",alt:"..."},null,8,V)]),_:2},1032,["to"]),t("div",M,[t("h5",B,c(e.title),1),t("div",D,[t("p",k,c(e.description),1)])]),t("div",A,[t("button",{type:"button",class:"btn btn-link",onClick:C=>p.addToCart(e.id)},"加入購物車",8,$)])])):g("",!0)]))),128))])])])}const G=f(v,[["render",L],["__scopeId","data-v-e8d7ab82"]]);export{G as default};
