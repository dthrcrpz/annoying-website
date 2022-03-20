<template>
  <div id="game">
    <RegistrationForm v-if="step == 1" @submitData="changeStep(2)" ref="registrationForm"/>
    <SetPassword v-if="step == 2" @pay="changeStep(3)"/>
    <Pay v-if="step == 3" @pay="finish()"/>
  </div>
</template>

<script>
import RegistrationForm from './RegistrationForm.vue'
import SetPassword from './SetPassword.vue'
import Pay from './Pay.vue'

export default {
  components: {
    RegistrationForm,
    SetPassword,
    Pay
  },
  data: () => ({
    step: 1
  }),
  methods: {
    changeStep (step) {
      this.step = step
    },
    finish () {
      this.$emit('finish')
    }
  }
}
</script>