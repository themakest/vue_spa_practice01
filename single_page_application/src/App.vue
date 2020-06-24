<template>
  <div id="app">
    <Header/>

    <router-view></router-view>

    <Footer/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  head: {
    meta: [
      { name: 'description', content: 'ここにトップページの説明文が入ります。' },
      { property: 'og:title', content: 'トップページ' },
      { property: 'og:description', content: 'ここにトップページの説明文が入ります。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://example.com' },
      { property: 'og:image', content: 'https://example.com/img/og.png' },
      { name: 'twitter:card', content: 'summary' }
    ]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
