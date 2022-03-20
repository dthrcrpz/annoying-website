<template>
  <div class="modal bg-teal-600 z-50 shadow-2xl">
    <p class="text-4xl text-right mb-5">Are you still there?</p>
    <label>Type "Yes" (exactly) if you are still there</label>
    <input type="text" placeholder='Type "Yes" if you are still there' class="w-full py-2 px-4 text-black" v-model="answer" ref="textbox">
    <div class="block" v-if="answer == 'Yes'">
      <button class="btn primary" @click="answer = 'No, I am not here. Sorry!     '">Accept reset</button>
      <button class="btn danger" @click="closeMe()">Reject insubmission</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    answer: 'No, I am not here. Sorry!     '
  }),
  inject: ['toggleIdleCheck'],
  methods: {
    closeMe () {
      this.toggleIdleCheck(false)
    }
  },
  mounted () {
    console.log(this.$refs.textbox)
    this.$refs.textbox.focus()
  }
}
</script>