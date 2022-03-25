<div id="game">
  {#if step == 1}
    <RegistrationForm on:submitData={() => changeStep(2)} ref="registrationForm"/>
  {/if}
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
  import RegistrationForm from './RegistrationForm.svelte'
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  /* data */
  let step = 1

  /* methods */
  function changeStep(step) {
    step = step
  }
  function finish() {
    dispatch('finish')
  } 
</script>