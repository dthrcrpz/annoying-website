<template>
  <Navbar/>
  <ModalBackground/>
  <Cookies/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cookies from './components/Cookies.vue'
import ModalBackground from './components/ModalBackground.vue'

export default {
  components: {
    Navbar, Cookies, ModalBackground
  }
}
</script>

<style>

</style>