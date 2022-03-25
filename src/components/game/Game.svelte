<div id="game">
  <!-- <RegistrationForm v-if="step == 1" @submitData="changeStep(2)" ref="registrationForm"/> -->
  <!-- <SetPassword v-if="step == 2" @pay="changeStep(3)"/> -->
  <!-- <Pay v-if="step == 3" @pay="finish()"/> -->

</div>

<script>
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