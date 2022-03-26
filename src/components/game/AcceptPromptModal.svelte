<div class="modal bg-red-500 z-20">
  <p>
    Please read <br>
    and <br>
    accept terms and conditions first!
  </p>

  {#if clickedOkay}
    <div class="closer text-sm bg-black table px-2 py-2 rounded-full absolute right-0 top-5" on:click={() => dispatch('close')}>x (close)</div>
  {/if}
  
  <button class="btn warning" on:click={() => clickedOkay = true}>Okay</button>
  {#if clickedOkay}
    <h1 class="text-5xl">thanks!</h1>
  {/if}
</div>

<script>
  import { createEventDispatcher } from "svelte"

  /* data */
  const dispatch = createEventDispatcher()
  let clickedOkay = false
</script>