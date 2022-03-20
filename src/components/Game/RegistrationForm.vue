<template>
  <div id="registration-form">
    <div class="wrapper ml-2">
      <h1 class="text-4xl">Create Account:</h1>
      <hr>
      <div @submit.prevent="submit()">
        <div class="form-group">
          <input type="text" placeholder="Your Middle Name">
        </div>
        <div class="form-group pl-2">
          <input type="text" placeholder="Your Last Name">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Your First Name">
        </div>

        <hr>

        <div class="form-group">
          <label>Email Address</label>
          <input type="text" placeholder="johndoe">@
          <select>
            <option value="" selected>select one</option>
            <option value="gmail">gmail</option>
            <option value="yahoo">yahoo</option>
            <option value="hotmail">hotmail</option>
          </select>
          <input type="text" placeholder=".com / .net / .org">
        </div>
        <div class="form-group">
          <label>Phone Number (numbers only):</label>
          <select v-for="(repeat, key) in 11" :key="key" class="mr-1">
            <option>1</option>
            <option>2</option>
            <option>8</option>
            <option>4</option>
            <option>5</option>
            <option>9</option>
            <option>3</option>
            <option>0</option>
            <option>7</option>
            <option>6</option>
          </select>
        </div>

        <hr>

        <div class="form-group">
          <input type="text" placeholder="Your Full Address">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Your City Name" class="w-full">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Your Street Name" class="w-full">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Your State/Province" class="w-full">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Your City Name" class="w-full">
        </div>

        <hr>

        <div class="mb-5" v-if="showTerms">
          <div class="checkbox px-2 py-2 border border-black w-2 h-2 cursor-pointer relative">
            <span class="absolute top-[-10px] font-bold left-0 text-2xl text-green-500" v-if="acceptedTerms">✓</span>
          </div>
          <p>I have <a href="javascript:void(0)" class="text-yellow-400 underline">read and</a> accepted the te<u @click="toggleTermsModal()">rms and condi</u>tions </p>
        </div>

        <div class="flex justify-between">
          <button class="btn primary" type="button">Cancel</button>
          <button class="btn danger" type="submit" @click="submit()">Submit</button>
        </div>
      </div>
    </div>
    
    <AcceptPromptModal v-if="showAcceptWarning" @close="toggleAcceptWarning(false)"/>
    <TermsModal @doAction="catchTermsAction" v-if="showTermsModal"/>
  </div>
</template>

<script>
import AcceptPromptModal from './AcceptPromptModal.vue'
import TermsModal from './TermsModal.vue'

export default {
  components: {
    AcceptPromptModal,
    TermsModal
  },
  inject: ['toggleModal'],
  data: () => ({
    showTerms: false,
    acceptedTerms: false,
    showAcceptWarning: false,
    showTermsModal: false,
    form: {}
  }),
  methods: {
    catchTermsAction (action) {
      this.acceptedTerms = (action == 'accept') ? true : false

      this.toggleTermsModal(false)
    },
    toggleTermsModal (value = true) {
      this.showTermsModal = value
      this.toggleModal(value)
    },
    toggleAcceptWarning (value = true) {
      this.showAcceptWarning = value
      this.toggleModal(value)

      if (value == false) {
        this.showTerms = true
      }
    },
    submit () {
      this.$emit('submitData')
      return

      if (!this.acceptedTerms) {
        this.toggleAcceptWarning(true)
        return
      }
    },
  }
}
</script>