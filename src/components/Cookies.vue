<template>
  <div class="modal bg-teal-900 z-20">
    <p class="text-2xl text-right">This site DOES NOT use cookies.</p>
    <p class="text-2xl text-right">BUT THERE'S THIS BOX ANYWAY!!!</p>
    <p class="text-xl text-left">Is This 0kaY</p>
    <p class="text-3xl text-left">for you mate?</p>
    <marquee class="mt-5" scrollamount="5" behavior="alternate">
      <button class="btn primary mr-3 translate-y-2" @click="choose('no')">No</button>
      <button class="btn danger mr-3 translate-y-[-10px]" @click="choose('yes')">yes</button>
      <button class="btn warning mr-3 translate-y-1" @click="choose()">Do nothing</button>
    </marquee>
    <div class="mt-3">
      <p class="text-red-300" v-if="selected == 'no'">You cannot select "No". Try other options</p>
      <p class="text-blue-300 text-xl" v-if="selected == 'yes'">Thanks. Click "yes" again.</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null
  }),
  inject: ['toggleCookies'],
  methods: {
    choose (action = null) {
      if (this.selected == 'yes' && action == 'yes') {
        this.toggleCookies(false)
      }

      this.selected = action
    }
  }
}
</script>