<template>
  <p>下層ページ1</p>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {
    }
  },
  head: {
    title: {
      inner: '下層01'
    },
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
</style>