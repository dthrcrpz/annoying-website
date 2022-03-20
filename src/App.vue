<template>
  <Navbar/>
  <ModalBackground v-if="modal"/>
  <Cookies v-if="cookies"/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cookies from './components/Cookies.vue'
import ModalBackground from './components/ModalBackground.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Navbar, Cookies, ModalBackground
  },
  data: () => ({
    cookies: false
  }),
  computed: {
    ...mapState({
      modal: state => state.globals.modal
    })
  },
  provide () {
    return {
      toggleCookies: this.toggleCookies
    }
  },
  methods: {
    ...mapMutations({
      'toggleModal': 'globals/toggleModal'
    }),
    toggleCookies (state = true) {
      this.cookies = state
      this.toggleModal(state)
    }
  },
  mounted () {
    this.toggleCookies(true)
  }
}
</script>

<style>

</style>