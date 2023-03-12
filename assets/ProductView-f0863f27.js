import{_,o as r,c as a,a as t,t as c,F as m,f as u}from"./index-6557581e.js";const{VITE_APP_URL:l,VITE_APP_PATH:n}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"boxingbat",BASE_URL:"/vite-deploy-sample/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{product:{},shops:[{id:"1",imgUrl:"https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",name:"桃園樂善店",address:"台灣區桃園市樂善實路88號"},{id:"2",imgUrl:"https://images.unsplash.com/photo-1587006158786-7b79525a2147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",name:"桃園忠正店",address:"台灣區桃園市忠正三路303號"}]}},methods:{getProduct(){console.log(this.$route.params);const{id:e}=this.$route.params;this.$http.get(`${l}/v2/api/${n}/product/${e}`).then(s=>{console.log(s),this.product=s.data.product})},addToCart(e){const s={product_id:e,qty:1};this.$http.post(`${l}/v2/api/${n}/cart`,{data:s}).then(i=>{console.log("check point addToCart: ",i)})}},mounted(){this.getProduct()}},f={class:"container"},x={class:"row py-md-5 py-3"},b={class:"col-md-8"},g={class:"card p-md-3"},v={class:"card-body mb-md-3 mb-1"},y={class:"card-title"},P={class:"pe-3 mb-2 pe-md-5 mb-md-3"},w=t("small",{class:"text-primary"},"產品描述",-1),A={class:"card-text"},T=t("small",{class:"text-primary"},"詳細資訊",-1),V={class:"card-text"},B=["src"],D={class:"col-md-4"},E=["src"],H={class:"card-body p-1"},M=t("small",{class:"text-primary fw-bold"},"分店",-1),U={class:"card-text mb-0"},$=t("small",{class:"text-primary fw-bold"},"地址",-1),k={class:"card-text"};function C(e,s,i,G,o,p){return r(),a("div",null,[t("div",f,[t("div",x,[t("div",b,[t("div",g,[t("div",v,[t("h5",y,c(o.product.title),1),t("div",P,[w,t("p",A,c(o.product.content),1),T,t("p",V,c(o.product.description),1)]),t("div",{onClick:s[0]||(s[0]=d=>p.addToCart(o.product.id)),class:"btn btn-primary rounded-pill w-50"},"加入購物車")]),t("img",{src:o.product.imageUrl,class:"card-img-bottom img-fluid rounded-3",alt:""},null,8,B)])]),t("div",D,[(r(!0),a(m,null,u(o.shops,d=>(r(),a("div",{class:"card rounded-0 border-0 mx-3 mb-3",key:d.id},[t("img",{src:d.imgUrl,class:"card-img-top rounded-0",alt:"..."},null,8,E),t("div",H,[M,t("p",U,c(d.name),1),$,t("p",k,c(d.address),1)])]))),128))])])])])}const L=_(h,[["render",C]]);export{L as default};
