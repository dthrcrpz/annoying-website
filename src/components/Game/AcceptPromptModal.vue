<template>
  <div class="modal bg-red-500 z-20">
    <p>
      Please read <br>
      and <br>
      accept terms and conditions first!
    </p>

    <div class="closer text-sm bg-black table px-2 py-2 rounded-full absolute right-0 top-5" @click="close()" v-if="clickedOkay">x (close)</div>

    <button class="btn warning" @click="clickedOkay = true">Okay</button>
    <h1 class="text-5xl" v-if="clickedOkay">thanks!</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    clickedOkay: false
  }),
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>