<div id="game">
  <!-- <RegistrationForm v-if="step == 1" @submitData="changeStep(2)" ref="registrationForm"/> -->
  {#if step == 2}
    <SetPassword v-if="step == 2" on:pay={() => changeStep(3)}/>
  {/if}
  {#if step == 3}
    <Pay on:pay={() => finish}/>
  {/if}

</div>

<script>
  import SetPassword from './SetPassword.svelte'
  import Pay from './Pay.svelte'
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  /* data */
  let step = 3

  /* methods */
  function changeStep(step) {
    step = step
  }
  function finish() {
    dispatch('finish')
  } 
</script>