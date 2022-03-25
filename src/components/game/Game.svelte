<div id="game">
  <!-- <RegistrationForm v-if="step == 1" @submitData="changeStep(2)" ref="registrationForm"/> -->
  {#if step == 2}
    <SetPassword v-if="step == 2" on:pay={() => changeStep(3)}/>
  {/if}
  <!-- <Pay v-if="step == 3" @pay="finish()"/> -->

</div>

<script>
  import SetPassword from './SetPassword.svelte'
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  /* data */
  let step = 2

  /* methods */
  function changeStep(step) {
    step = step
  }
  function finish() {
    dispatch('finish')
  } 
</script>