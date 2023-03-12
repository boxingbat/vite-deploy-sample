<template>
  <router-view />
</template>

<script>
import AOS from 'aos'
export default {
  mounted () {
    AOS.init()
  }
}
</script>

<style lang="scss"></style>
