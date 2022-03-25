<div id="registration-form" class="mb-16">
  <div class="wrapper ml-2">
    <h1 class="text-4xl">Register,, so you will be able to Create <span class="text-red-500">A</span> <span class="text-red-500">A</span>ccount:</h1>
    <hr>
    <Form {...formProps}>
      <b>Your Name (no special characters like !@#$%^&*()_+{'{'}{'}'}":>?|~ etc.")</b>
      <div class="form-group">
        <Field type="text" placeholder="Your Middle Name" name="middle_name"/>
        <ErrorMessage name="middle_name"/>
      </div>
      <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Email Address <span class="text-blue-700">*</span></label>
        <input type="text" placeholder="johndoe" v-model="form.email_prefix" name="email_prefix"/>@
        <ErrorMessage name="email_prefix"/>

        <select placeholder="johndoe" name="email_domain">
          <option value="" selected>select one</option>
          <option value="hotmail">hotmail</option>
          <option value="gmail">gmail</option>
          <option value="yahoo">yahoo</option>
        </select>
        .
        <ErrorMessage name="email_domain"/>

        <input type="text" placeholder="com / net / org / etc." name="email_extension"/>
        <ErrorMessage name="email_extension"/>
      </div>
      <div class="form-group">
        <Field type="text" placeholder="Your First Name" name="first_name"/>
        <ErrorMessage name="first_name"/>
      </div>

      <hr>
      <div class="form-group pl-2">
        <Field type="text" placeholder="Your Last Name" name="last_name"/>
        <ErrorMessage name="last_name"/>
      </div>
      
      <!-- <div class="form-group">
        <label>Phone Number: <span class="text-yellow-500">*</span></label>
        <div class="flex flex-row flex-wrap">
          <div v-for="(repeat, key) in 11" :key="key">
            <Select class="mr-1" :name="`phone_number_${key}`">
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
            </Select>
            <ErrorMessage name="`"/>
          </div>
        </div>
      </div> -->

      <hr>

      <div class="form-group">
        <Field type="text" placeholder="Your Complete Address" name="full_address" class="w-[200px]"/>
        <ErrorMessage name="full_address"/>
      </div>
      <div class="form-group">
        <Textarea rows={10} placeholder="Your City Name" class="w-full" name="city_name"></Textarea>
        <ErrorMessage name="city_name"/>
      </div>
      <div class="form-group">
        <Textarea rows={10} placeholder="Your Street Name" class="w-full" name="street_name"></Textarea>
        <ErrorMessage name="street_name"/>
      </div>
      <div class="form-group">
        <Textarea rows={10} placeholder="Your State/Province" class="w-full" name="state"></Textarea>
        <ErrorMessage name="state"/>
      </div>

      <hr>

      <div class="mb-5" v-if="showTerms">
        <div class="checkbox px-2 py-2 border border-black w-2 h-2 cursor-pointer relative" on:click={() => toggleTermsModal}>
          <span class="absolute top-[-10px] font-bold left-0 text-2xl text-green-500" v-if="acceptedTerms">✓</span>
        </div>
        <p>I have <a href={'javascript:void(0)'} class="text-yellow-400 underline">read and</a> accepted the te<u on:click={() => toggleTermsModal}>rms and condi</u>tions </p>
      </div>

      <div class="flex justify-between">
        <button class="btn primary" type="button">Cancel</button>
        <button class="btn danger" type="submit">Submit</button>
      </div>
    </Form>
  </div>
  
  <!-- <AcceptPromptModal v-if="showAcceptWarning" @close="toggleAcceptWarning(false)"/> -->
  <!-- <TermsModal @doAction="catchTermsAction" v-if="showTermsModal"/> -->
</div>

<script>
  import * as yup from 'yup'
  import { modal } from '../../stores/global'
  import { createEventDispatcher } from 'svelte'
  import { Form, Field, Select, Textarea, ErrorMessage } from 'svelte-forms-lib'
  const dispatch = createEventDispatcher()

  const formProps = {
    initialValues: {
      middle_name: '* Type your middle name *',
      last_name: '* Type your last name *',
      first_name: '* Type your first name *',
      email_prefix: 'super_thief',
      email_domain: '',
      email_extension: '',
      phone_number: null,
      full_address: '',
      city_name: '',
      street_name: '',
      state: '',
    },
    validationSchema: yup.object().shape({
      middle_name: yup.string().required(),
      last_name: yup.string().required(),
      first_name: yup.string().required(),
      email_prefix: yup.string().required(),
      email_domain: yup.string().required(),
      email_extension: yup.string().required(),
      phone_number: yup.string().required(),
      full_address: yup.string().required(),
      city_name: yup.string().required(),
      street_name: yup.string().required(),
      state: yup.string().required()
    }),
    onSubmit: values => {
      console.log(values)
    }
  }

  /* data */
  let showTerms = false
  let acceptedTerms = false
  let showAcceptWarning = false
  let showTermsModal = false

  /* methods */
  function catchTermsAction (action) {
    acceptedTerms = (action == 'accept') ? true : false
    toggleTermsModal(false)
  }
  function toggleTermsModal (value = true) {
    showTermsModal = value
    modal.toggleModal(value)
  }
  function toggleAcceptWarning (value = true) {
    showAcceptWarning = value
    modal.toggleModal(value)
    if (value == false) {
      showTerms = true
    }
  }
  function onSubmit (values) {
    if (!acceptedTerms) {
      toggleAcceptWarning(true)
      return
    }

    dispatch('submitData')

    // User.add(form).then(res => {
    //   //
    // }).catch(err => {
    //   //
    // }).then(() => {
    //   $emit('submitData')
    // })
  }
  function onInvalidSubmit (values) {
    document.querySelector('.validation-errors').scrollIntoView({
      behavior: 'smooth'
    })
  }

</script>