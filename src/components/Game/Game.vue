<template>
  <div id="game">
    <RegistrationForm v-if="step == 1" @submitData="changeStep(2)" ref="registrationForm"/>
    <SetPassword v-if="step == 2"/>
  </div>
</template>

<script>
import RegistrationForm from './RegistrationForm.vue'
import SetPassword from './SetPassword.vue'

export default {
  components: {
    RegistrationForm,
    SetPassword
  },
  data: () => ({
    step: 2
  }),
  methods: {
    changeStep (step) {
      this.step = step
    }
  }
}
</script>