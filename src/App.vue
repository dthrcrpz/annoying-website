<template>
  <Navbar/>
  <ModalBackground v-if="modal"/>
  <Cookies v-if="cookies"/>

  <div class="fixed top-1 left-1 text-red-500 z-50 bg-black px-1" v-if="startedGame">
    Seconds elapsed: <span class="font-bold text-lg">{{ timerCount }}</span>
  </div>

  <div class="wrapper mt-5" v-if="!startedGame">
    <div>
      <h1 class="text-4xl text-teal-600">- Why?</h1>
      <p class="text-xl mt-3">- By going through a <span class="text-red-600 font-bold">painful</span> website experience, you guys will appreciate <br> websites/applications with good design and UX (User Experience)</p>
      <p class="text-xl mt-3">- Learn why you SHOULD NOT take good <span class="text-teal-600">developers/programmers</span> and <span class="text-teal-600">designers</span> for granted</p>
      <p class="text-xl mt-3">- To make you understand t<b>ha</b>t you need <span class="text-teal-600">GOOD COPYWRITERS</span> as well <b>TOO as</b> well. You know, to deliver your stuff<span class="text-red-500 font-bold">s</span> properlie </p>
      <p class="text-xl mt-3">- To make you realize how <b class="text-red-600">SHITTY</b> most our government's <b>OnLinE sErviceS</b> are because they corrupt the budget! <br> My very corrupt uncle is one of them.</p>
      <p class="text-xl mt-3">- YOU GUYS DESERVE THE BEST..... <span class="text-red-600 font-bold">OR NOT(?)</span></p>
    </div>

    <div class="mt-5 mb-10">
      <h2 class="text-5xl text-center">Let's get you started!</h2>
      <div class="flex justify-center mt-5">
        <button :class="`px-5 bg-blue-500 text-white py-5 text-4xl shadow-md hover:shadow-lg hover:bg-blue-800 transition-all ${!gameReady ? 'opacity-50 cursor-not-allowed' : ''}`" @click="startGame()">PLAY GAME</button>
      </div>
      <p class="text-center" v-if="!gameReady">
        Game will be playable after <b>{{ gameReadyTimer }}</b> seconds. <br>
        Keep reading for now. 
      </p>
    </div>
  </div>

  <Game v-if="startedGame" @finish="finishGame()"/>
  <IdleCheck v-if="idleCheck"/>
  <Help v-if="showHelp"/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cookies from './components/Cookies.vue'
import ModalBackground from './components/ModalBackground.vue'
import Game from './components/Game/Game.vue'
import IdleCheck from './components/Game/IdleCheck.vue'
import Help from './components/Game/Help.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Navbar,
    Cookies,
    ModalBackground,
    Game,
    IdleCheck,
    Help
  },
  data: () => ({
    gameReady: false,
    gameReadyTimer: 10,
    startedGame: false,
    cookies: false,
    timerCount: 0,
    timer: null,
    idleCheckTimer: null,
    finished: false,
    date: new Date(null),
    idleCheck: false,
    showHelp: false
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
    finishGame () {
      this.finished = true
    },
    toggleIdleCheck (state = true) {
      this.idleCheck = state
      this.toggleModal(state)

      if (state == false) {
        clearInterval(this.idleCheckTimer)
        this.startIdleChecking()
      }
    },
    toggleCookies (state = true) {
      this.cookies = state
      this.toggleModal(state)

      if (state == false) {
        this.startIdleChecking()
        this.showHelp = true
      }
    },
    startGame () {
      if (this.startedGame || !this.gameReady) {
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
          clearInterval(this.timer)
        }
      }, 1000)
    },
    startIdleChecking () {
      this.idleCheckTimer = setInterval(() => {
        this.toggleIdleCheck(true)
      }, 30000)
    },
  },
  mounted () {
    let timer = setInterval(() => {
      if (this.gameReadyTimer > 0) {
        this.gameReadyTimer -= 1
      } else {
        this.gameReady = true
        clearInterval(timer)
      }
    }, 1000)
  }
}
</script>