<template>
  <div id="registration-form" class="mb-16">
    <div class="wrapper ml-2">
      <h1 class="text-4xl">Create Account:</h1>
      <hr>
      <Form @submit="onSubmit" v-slot="{ errors }" @invalid-submit="onInvalidSubmit">
        <div class="form-group">
          <Field type="text" placeholder="Your Middle Name" rules="required" v-model="form.middleName" name="middle_name"/>
          <span class="validation-errors" v-if="errors.middle_name">{{ errors.middle_name }}</span>
        </div>
        <div class="form-group pl-2">
          <Field type="text" placeholder="Your Last Name" rules="required" v-model="form.lastName" name="last_name"/>
          <span class="validation-errors" v-if="errors.last_name">{{ errors.last_name }}</span>
        </div>
        <div class="form-group">
          <Field type="text" placeholder="Your First Name" rules="required" v-model="form.firstName" name="first_name"/>
          <span class="validation-errors" v-if="errors.first_name">{{ errors.first_name }}</span>
        </div>

        <hr>

        <div class="form-group">
          <label>Email Address</label>
          <Field type="text" placeholder="johndoe" rules="required" v-model="form.email_prefix" name="email_prefix"/>@
          <span class="validation-errors" v-if="errors.email_prefix">{{ errors.email_prefix }}</span>

          <Field as="select" placeholder="johndoe" rules="required" v-model="form.email_domain" name="email_domain">
            <option value="" selected>select one</option>
            <option value="gmail">gmail</option>
            <option value="yahoo">yahoo</option>
            <option value="hotmail">hotmail</option>
          </Field>
          .
          <span class="validation-errors" v-if="errors.email_domain">{{ errors.email_domain }}</span>

          <Field type="text" placeholder="com / net / org / etc." rules="required|alpha" v-model="form.email_extension" name="email_extension"/>
          <span class="validation-errors" v-if="errors.email_extension">{{ errors.email_extension }}</span>
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <div class="flex">
            <div v-for="(repeat, key) in 11" :key="key">
              <Field as="select" class="mr-1" :name="`phone_number_index_${key}`" rules="required|numeric">
                <option value="" selected>-</option>
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="tri">tri</option>
                <option value="for">for</option>
                <option value="fyv">fyv</option>
                <option value="six">six</option>
                <option value="svn">svn</option>
                <option value="ate">ate</option>
                <option value="nyn">nyn</option>
                <option value="ten">ten</option>
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="1">1</option>
                <option value="9">9</option>
                <option value="3">3</option>
                <option value="0">0</option>
                <option value="7">7</option>
                <option value="6">6</option>
              </Field>
              <span class="validation-errors" v-if="errors[`phone_number_index_${key}`]">Invalid phone number. Must be numbers.</span>
            </div>
          </div>
        </div>

        <hr>

        <div class="form-group">
          <Field type="text" placeholder="Your Full Address" rules="required|min:15" v-model="form.full_address" name="full_address" class="w-[150px]"/>
          <span class="validation-errors" v-if="errors.full_address">your address is invalid <br> or NOT LONG ENOUGH</span>
        </div>
        <div class="form-group">
          <Field as="textarea" rows="10" placeholder="Your City Name" class="w-full" rules="required" v-model="form.city_name" name="city_name"/>
          <span class="validation-errors" v-if="errors.city_name">{{ errors.city_name }}</span>
        </div>
        <div class="form-group">
          <Field as="textarea" rows="10" placeholder="Your Street Name" class="w-full" rules="required" v-model="form.street_name" name="street_name"/>
          <span class="validation-errors" v-if="errors.street_name">{{ errors.street_name }}</span>
        </div>
        <div class="form-group">
          <Field as="textarea" rows="10" placeholder="Your State/Province" class="w-full" rules="required" v-model="form.state" name="state"/>
          <span class="validation-errors" v-if="errors.state">{{ errors.state }}</span>
        </div>

        <hr>

        <div class="mb-5" v-if="showTerms">
          <div class="checkbox px-2 py-2 border border-black w-2 h-2 cursor-pointer relative" @click="toggleTermsModal()">
            <span class="absolute top-[-10px] font-bold left-0 text-2xl text-green-500" v-if="acceptedTerms">✓</span>
          </div>
          <p>I have <a href="javascript:void(0)" class="text-yellow-400 underline">read and</a> accepted the te<u @click="toggleTermsModal()">rms and condi</u>tions </p>
        </div>

        <div class="flex justify-between">
          <button class="btn primary" type="button">Cancel</button>
          <button class="btn danger" type="submit">Submit</button>
        </div>
      </Form>
    </div>
    
    <AcceptPromptModal v-if="showAcceptWarning" @close="toggleAcceptWarning(false)"/>
    <TermsModal @doAction="catchTermsAction" v-if="showTermsModal"/>
  </div>
</template>

<script>
import AcceptPromptModal from './AcceptPromptModal.vue'
import TermsModal from './TermsModal.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import User from '../../services/User'

export default {
  components: {
    AcceptPromptModal,
    TermsModal,
    Form,
    Field
  },
  inject: ['toggleModal'],
  data: () => ({
    showTerms: false,
    acceptedTerms: false,
    showAcceptWarning: false,
    showTermsModal: false,
    form: {
      middleName: 'Type your middle name',
      lastName: 'Type your last name',
      firstName: 'Type your first name',
      email_prefix: '',
      email_domain: '',
      email_extension: '',
      full_address: '',
      city_name: '',
      street_name: '',
      state: '',
    }
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
    onSubmit (values) {
      if (!this.acceptedTerms) {
        this.toggleAcceptWarning(true)
        return
      }
  
      User.add(this.form).then(res => {
        //
      }).catch(err => {
        //
      }).then(() => {
        this.$emit('submitData')
      })
    },
    onInvalidSubmit (values) {
      document.querySelector('.validation-errors').scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>