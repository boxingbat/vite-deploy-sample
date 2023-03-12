<template>
  <div class="sticky-body">
    <!-- 這是前台頁面
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/login">登入/後台產品頁面</router-link> |
    <hr> -->
    <FrontNavbar/>
    <RouterView></RouterView>
    <FooterComponent class="sticky-bottom" />
  </div>
</template>
<script>
import { RouterView } from 'vue-router'
import FooterComponent from '../../src/components/FooterComponent.vue'
import FrontNavbar from '../../src/components/FrontNavbar.vue'

export default {
  components: {
    RouterView, FooterComponent, FrontNavbar
  }
}
</script>
<style lang="scss">
.sticky-body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sticky-bottom {
  margin-top: auto;
}
</style>
