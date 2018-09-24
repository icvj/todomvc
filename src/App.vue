<template>
  <section class="todoapp">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
export default {
  // 注册组件
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
</style>
