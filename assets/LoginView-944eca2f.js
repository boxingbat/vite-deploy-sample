import{_ as c,o as m,c as p,a as f,d as s,h as l,i as d,j as g,F as _}from"./index-ed237d42.js";const{VITE_APP_URL:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"boxingbat",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{user:{username:"",password:""}}},methods:{login(){console.log(this.user);const i=`${u}admin/signin`;this.$http.post(i,this.user).then(o=>{const{expired:n,token:r}=o.data;console.log(n,r),document.cookie=`boxingBatToken=${r}; expires=${new Date(n)};`,this.$router.push("/admin/products")}).catch(o=>{console.log(o)})}},mounted(){console.log("mounted"),console.log(`${u}admin/signin`)}},w={class:"form-floating mb-3"},b=s("label",{for:"floatingInput"},"Email address",-1),P={class:"form-floating"},x=s("label",{for:"floatingPassword"},"Password",-1),V=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function E(i,o,n,r,t,a){return m(),p(_,null,[f(" 登入畫面 "),s("form",{class:"form-signin",onSubmit:o[2]||(o[2]=g((...e)=>a.login&&a.login(...e),["prevent"]))},[s("div",w,[l(s("input",{type:"email",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=e=>t.user.username=e),id:"floatingInput",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,t.user.username]]),b]),s("div",P,[l(s("input",{type:"password",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=e=>t.user.password=e),id:"floatingPassword",placeholder:"Password",required:""},null,512),[[d,t.user.password]]),x]),V],32)],64)}const v=c(h,[["render",E]]);export{v as default};