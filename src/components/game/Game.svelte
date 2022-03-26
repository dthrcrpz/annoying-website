<div id="game">
  {#if step == 1}
    <RegistrationForm on:submitData={() => changeStep(2)}/>
  {:else if  step == 2}
    <SetPassword on:pay={() => changeStep(3)}/>
  {:else if step == 3}
    <Pay on:pay={() => dispatch('finish')}/>
  {/if}

  {#if showHelp}
    <Help/>
  {/if}
</div>

<script>
  import SetPassword from './SetPassword.svelte'
  import Pay from './Pay.svelte'
  import RegistrationForm from './RegistrationForm.svelte'
  import { createEventDispatcher } from "svelte"
  import Help from './Help.svelte'
  const dispatch = createEventDispatcher()

  /* data */
  let step = 1
  let showHelp = true

  /* methods */
  function changeStep(newStep) {
    step = newStep
  }
</script>