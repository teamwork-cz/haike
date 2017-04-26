<template>
  <div class="app"
       :style="{height: '100%'}">
    <div class="main"
         :style="{height: '100%'}">
      <router-view></router-view>
    </div>
    <footer-nav :showNav="showNav"></footer-nav>
  </div>
</template>

<script>
import { footerNav } from './components/'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      direction: 'forward',
      showNav: true
    }
  },
  components: {
    footerNav
  },
  watch: {
    // 如果路由有变化，会执行该方法
    '$route': function () {
      this.routeChange()
    }
  },
  mounted() {
    this.initClothBox()
    this.initAddresses()
  },
  methods: {
    ...mapActions(['initClothBox','initAddresses']),
    routeChange() {
      //可配置底部显示
      let path = this.$route.path
      let name = this.$route.name
      if (path === '/' || path === '/me' || name === 'hiSelect') {
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  }
  // ,
  // created() {
  //   this.routeChange()
  // }
}
</script>

<style>
body {
  background: #f5f5f5;
}
</style>

