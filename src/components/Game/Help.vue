<template>
  <div :class="`fixed bg-red-600 text-white right-4 z-40 px-5 py-5 rounded-t-lg opacity-80 helper ${bottom ? 'at-bottom' : ''}`">
    <div class="flex justify-between w-full">
      <p>How can we help?</p>
      <button class="btn warning" @click="close()">x</button>
    </div>
    <textarea name="" id="" cols="30" rows="10" class="text-black w-full" v-model="message"></textarea>
    <div class="flex justify-between w-full">
      <a href="javascript:void(0)" class="block" @click="getHelp()"><u>help</u></a>
      <button class="btn primary block" @click="sendToBottom()">Send to bottom</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: `Type your issues here. We will do our very very very very very very very very best to help you`,
    bottom: false
  }),
  methods: {
    close () {
      this.bottom = false
      this.message = `DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. `
    },
    getHelp () {
      this.message = `Sorry. We are helping other people. Your current number in queue is 561. Please wait for your turn`
    },
    sendToBottom () {
      this.bottom = !this.bottom
    }
  }
}
</script>

<style lang="sass">
  .helper
    bottom: 0
    transition: 1s
    transform: translateY(0)
    &.at-bottom
      transform: translateY(84%)
      transition: 30s
</style>