<Navbar/>
{#if $modal}
  <ModalBackground/>
{/if}
{#if cookies}
  <Cookies on:toggleCookies={({ detail }) => toggleCookies(detail)}/>
{/if}

{#if startedGame}
  <div class="fixed top-1 left-1 text-red-500 z-50 bg-black px-1">
    Seconds elapsed: <span class="font-bold text-lg">{ timerCount }</span>
  </div>
{/if}

{#if !startedGame}
  <div class="wrapper mt-5">
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
        <button class={`px-5 bg-blue-500 text-white py-5 text-4xl shadow-md hover:shadow-lg hover:bg-blue-800 transition-all ${!gameReady ? 'opacity-50 cursor-not-allowed' : ''}`} on:click={startGame}>PLAY GAME</button>
      </div>
      {#if !gameReady}
        <p class="text-center" v-if="!gameReady">
          Game will be playable after <b>{ gameReadyTimer }</b> seconds. <br>
          Keep reading for now. 
        </p>
      {/if}
    </div>
  </div>
{/if}

{#if startedGame}
<Game on:finish={() => finished = true}/>
{/if}

<!-- <IdleCheck v-if="idleCheck"/> -->
<!-- <Help v-if="showHelp"/> -->

<script>
  import Navbar from "./components/globals/Navbar.svelte"
  import Cookies from "./components/game/Cookies.svelte"
  import ModalBackground from "./components/globals/ModalBackground.svelte"
  import Game from "./components/game/Game.svelte"
  import { modal } from "./stores/global"
  import { onMount } from "svelte"

  /* data */
  let gameReady = false
  let gameReadyTimer = 1
  let startedGame = true // wew: set this to false later
  let cookies = false
  let timerCount = 0
  let timer = null
  let idleCheckTimer = null
  let finished = false
  let idleCheck = false
  let showHelp = false

  /* methods */
  function toggleIdleCheck(state = true) {
    idleCheck = state
    modal.toggleModal(state)
    if (state == false) {
      clearInterval(idleCheckTimer)
      startIdleChecking()
    }
  }
  function toggleCookies(state = true) {
    state = false // remove this later
    cookies = state
    modal.toggleModal(state)
    if (state == false) {
      startIdleChecking()
      showHelp = true
    }
  }
  function startGame() {
    if (startedGame || !gameReady) {
      return 
    }
    startedGame = true
    toggleCookies(true)
    startTimer()
  }
  function startTimer() {
    timer = setInterval(() => {
      if (!finished) {
        timerCount += 1
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
  function startIdleChecking() {
    idleCheckTimer = setInterval(() => {
      toggleIdleCheck(true)
    }, 30000)
  }

  /* lifecycle */
  onMount(() => {
    let timer = setInterval(() => {
      if (gameReadyTimer > 0) {
        gameReadyTimer -= 1
      } else {
        gameReady = true
        clearInterval(timer)
      }
    }, 1000)
  })
</script>