<div class="modal bg-teal-600 z-50 shadow-2xl">
  <p class="text-4xl text-right mb-5">Are you still there?</p>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Type "Yes" (exactly, including the case) if you are still there</label>
  <input type="text" placeholder='Type "Yes" if you are still there' class="w-full py-2 px-4 text-black" bind:value={answer} id="idleTextbox">
  {#if answer == 'Yes'}
    <div class="block">
      <button class="btn primary" on:click={() => answer = 'No, I am not NOT OUT here. Sorry!!!!!!!!!!!!'}>Accept reset</button>
      <button class="btn danger" on:click={() => toggleIdleCheck(false)}>Reject insubmission</button>
    </div>
  {/if}
</div>

<script>
import { onMount } from "svelte";


  /* props */
  export let toggleIdleCheck

  /* data */
  let answer = 'No, I am not NOT OUT here. Sorry!!!!!!!!!!!!'

  /* lifecycle */
  onMount(() => {
    let textbox = document.querySelector('#idleTextbox')
    textbox.focus()
  })
</script>