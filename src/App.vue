<template>
  <Navbar/>
  <ModalBackground v-if="modal"/>
  <Cookies v-if="cookies"/>

  <div class="fixed top-1 left-1 text-red-600" v-if="startedGame">
    Time elapsed: <span class="font-bold text-lg">{{ timerFormatted }}</span>
  </div>

  <div class="wrapper mt-5" v-if="!startedGame">
    <div>
      <h1 class="text-4xl text-teal-600">- Why?</h1>
      <p class="text-xl mt-3">- By going through a <span class="text-red-600 font-bold">painful</span> website experience, you guys will appreciate <br> a  website/application with good design and UX (user-experience)</p>
      <p class="text-xl mt-3">- Learn why you SHOULD NOT take good <span class="text-teal-600">developers/programmers</span> and <span class="text-teal-600">designers</span> for granted</p>
      <p class="text-xl mt-3">- To make you realize how <b class="text-red-600">SHITTY</b> most our government's <b>OnLinE sErviceS</b> are because they corrupt the budget! <br> That includes my very corrupt uncle.</p>
      <p class="text-xl mt-3">- YOU GUYS DESERVE A GOOD UI/UX..... <span class="text-red-600 font-bold">OR NOT(?)</span></p>
    </div>

    <div class="mt-5">
      <h2 class="text-5xl text-center">Let's get you started!</h2>
      <div class="flex justify-center mt-5">
        <button class="px-5 bg-blue-500 text-white py-5 text-4xl shadow-md hover:shadow-lg hover:bg-blue-800 transition-all" @click="startGame()">PLAY GAME</button>
      </div>
    </div>
  </div>

  <Game v-if="startedGame"/>
  <IdleCheck v-if="idleCheck"/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cookies from './components/Cookies.vue'
import ModalBackground from './components/ModalBackground.vue'
import Game from './components/Game/Game.vue'
import IdleCheck from './components/Game/IdleCheck.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Navbar,
    Cookies,
    ModalBackground,
    Game,
    IdleCheck
  },
  data: () => ({
    cookies: false,
    timerCount: 0,
    timer: null,
    idleCheckTimer: null,
    finished: false,
    startedGame: false,
    date: new Date(null),
    idleCheck: false
  }),
  computed: {
    ...mapState({
      modal: state => state.globals.modal
    }),
    timerFormatted () {
      this.date.setSeconds(this.timerCount)
      return this.date.toISOString().substr(11, 8)
    }
  },
  provide () {
    return {
      toggleCookies: this.toggleCookies,
      toggleModal: this.toggleModal,
      toggleIdleCheck: this.toggleIdleCheck
    }
  },
  methods: {
    ...mapMutations({
      'toggleModal': 'globals/toggleModal'
    }),
    toggleIdleCheck (state = true) {
      this.idleCheck = state
      this.toggleModal(state)

      if (state == false) {
        clearTimeout(this.idleCheckTimer)
        this.startIdleChecking()
      }
    },
    toggleCookies (state = true) {
      this.cookies = state
      this.toggleModal(state)

      if (state == false) {
        this.startIdleChecking()
      }
    },
    startGame () {
      if (this.startedGame) {
        return 
      }

      this.startedGame = true
      this.toggleCookies(true)

      this.startTimer()
    },
    startTimer () {
      this.timer = setInterval(() => {
        if (!this.finished) {
          this.timerCount += 1
        } else {
          clearTimeout(this.timer)
        }
      }, 1000)
    },
    startIdleChecking () {
      this.idleCheckTimer = setInterval(() => {
        this.toggleIdleCheck(true)
      }, 30000)
    }
  }
}
</script>

<style>

</style>