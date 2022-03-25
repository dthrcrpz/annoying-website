<div class="modal bg-teal-900 z-20">
  <p class="text-2xl text-right">This site <b>DOES NOT</b> use cookies.</p>
  <p class="text-2xl text-right">BUT THERE'S THIS BOX ANYWAY!!!</p>
  <p class="text-xl text-left">Is This 0kaY</p>
  <p class="text-3xl text-left">for you?</p>
  <!-- svelte-ignore a11y-distracting-elements -->
  <marquee class="mt-5" scrollamount="5" behavior="alternate">
    <button class="btn primary translate-y-2" on:click={() => choose('no')}>No</button>
    <button class="btn danger translate-y-[-10px] text-sm" on:click={() => choose('yes')}>yes</button>
    <button class="btn warning translate-y-1" on:click={() => choose('nothing')}>Do nothing</button>
  </marquee>
  <div class="mt-3">
    {#if selected == 'no'}
       <p class="text-red-300">You cannot select "No". Try other options</p>
    {/if}
    {#if selected == 'yes'}
      <p class="text-blue-300 text-xl">Thanks. Click "yes" { yesCounter } more time(s) to confirm. You can do it. </p>
    {/if}
    {#if selected == 'nothing'}
      <p class="text-blue-300 text-xl">Okay.</p>
    {/if}
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  let selected = null
  let yesCounter = 10

  function choose(action = null) {
    if (selected == 'yes' && action == 'yes') {
      if (yesCounter > 1) {
        yesCounter -= 1
      } else {
        dispatch('toggleCookies', false)
      }
    } else {
      yesCounter = 10
      selected = action
    }
  }
</script>