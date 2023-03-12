<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand font-logo" href="#" @click="closeMenu"><h1 class="h4 mb-0">傢聚</h1></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-target="#myNavbar"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="myNavbar" ref="collapse">
        <ul class="navbar-nav my-1 my-lg-2 justify-content-end w-100">
          <li class="nav-item me-lg-3">
            <router-link class="nav-link fw-bold" to="/" @click="closeMenu">首頁</router-link>
          </li>
          <li class="nav-item me-lg-3">
            <router-link class="nav-link" to="/products" @click="closeMenu">熱銷商品</router-link>
          </li>
          <li class="nav-item me-lg-3">
            <router-link class="nav-link" to="/special" @click="closeMenu">特別企劃</router-link>
          </li>
          <li class="nav-item me-lg-3">
            <router-link class="nav-link" to="/products" @click="closeMenu">所有商品</router-link>
          </li>
          <li class="nav-item me-lg-3">
            <router-link class="nav-link" to="/cart" @click="closeMenu">購物車</router-link>
          </li>
          <li class="nav-item me-lg-3">
            <router-link class="nav-link btn btn-primary rounded-pill px-4 py-1" to="/login" @click="closeMenu">
              後台登入
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin'
export default {
  name: 'FrontNavbar',
  mixins: [collapseMixin]
}
</script>
<style lang="scss" scoped>
</style>
