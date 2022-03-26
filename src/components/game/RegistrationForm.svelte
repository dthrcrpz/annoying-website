<div id="registration-form" class="mb-16">
  <div class="wrapper ml-2">
    <h1 class="text-4xl">Register,, so you will be able to Create <span class="text-red-500">A</span> <span class="text-red-500">A</span>ccount:</h1>
    <hr>

    <form use:form>
      <b>Your Name (no special characters like !@#$%^&*()_+{'{'}{'}'}":>?|~ etc.")</b>
      <div class="form-group">
        <input type="text" placeholder="Your Middle Name" name="middle_name"/>
        {#if $errors.middle_name}
          <span class="validation-errors">{ $errors.middle_name }</span>
        {/if}
      </div>

      <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Email Address <span class="text-blue-700">*</span></label>
        <input type="text" placeholder="johndoe" name="email_prefix"/>@
        {#if $errors.email_prefix}
          <span class="validation-errors">{ $errors.email_prefix }</span>
        {/if}

        <select placeholder="johndoe" name="email_domain">
          <option value="" selected>select one</option>
          <option value="hotmail">hotmail</option>
          <option value="gmail">gmail</option>
          <option value="yahoo">yahoo</option>
        </select>
        .
        {#if $errors.email_domain}
          <span class="validation-errors">{ $errors.email_domain }</span>
        {/if}

        <input type="text" placeholder="com / net / org / etc." name="email_extension"/>
        {#if $errors.email_extension}
          <span class="validation-errors">{ $errors.email_extension }</span>
        {/if}
      </div>

      <div class="form-group">
        <input type="text" placeholder="Your First Name" name="first_name"/>
        {#if $errors.first_name}
          <span class="validation-errors">{ $errors.first_name }</span>
        {/if}
      </div>

      <hr>
      <div class="form-group pl-2">
        <input type="text" placeholder="Your Last Name" name="last_name"/>
        {#if $errors.last_name}
          <span class="validation-errors">{ $errors.last_name }</span>
        {/if}
      </div>

      <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Phone Number: <span class="text-yellow-500">*</span></label>
        <div class="flex flex-row flex-wrap">
          {#each {length: 11} as n,key}
            <div>
              <select class="mr-1" name={`phone_number_${key}`}>
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
                <option value={2}>{2}</option>
                <option value={8}>{8}</option>
                <option value={4}>{4}</option>
                <option value={5}>{5}</option>
                <option value={1}>{1}</option>
                <option value={9}>{9}</option>
                <option value={3}>{3}</option>
                <option value={0}>{0}</option>
                <option value={7}>{7}</option>
                <option value={6}>{6}</option>
              </select>
              {#if $errors[`phone_number_${key}`]}
                <span class="validation-errors">{ $errors[`phone_number_${key}`] }</span>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Verify Phone Number: <span class="text-yellow-500">*</span></label>
        <div class="flex flex-row flex-wrap">
          {#each {length: 11} as n,key}
            <div>
              <select class="mr-1" name={`phone_number_verification_${key}`}>
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
                <option value={2}>2</option>
                <option value={8}>8</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={1}>1</option>
                <option value={9}>9</option>
                <option value={3}>3</option>
                <option value={0}>0</option>
                <option value={7}>7</option>
                <option value={6}>6</option>
              </select>
              {#if $errors[`phone_number_verification_${key}`]}
                <span class="validation-errors">{ $errors[`phone_number_verification_${key}`] }</span>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <hr>

      <div class="form-group">
        <input type="text" placeholder="Your Complete Address" name="full_address" class="w-[200px]"/>
        {#if $errors.full_address}
          <span class="validation-errors">{ $errors.full_address }</span>
        {/if}
      </div>
      <div class="form-group">
        <textarea rows="10" placeholder="Your City Name" class="w-full" name="city_name"></textarea>
        {#if $errors.city_name}
          <span class="validation-errors">{ $errors.city_name }</span>
        {/if}
      </div>
      <div class="form-group">
        <textrea rows="10" placeholder="Your Street Name" class="w-full" name="street_name"></textrea>
        {#if $errors.street_name}
          <span class="validation-errors">{ $errors.street_name }</span>
        {/if}
      </div>
      <div class="form-group">
        <textarea as="textarea" rows="10" placeholder="Your State/Province" class="w-full" name="state"></textarea>
        {#if $errors.state}
          <span class="validation-errors">{ $errors.state }</span>
        {/if}
      </div>

      <hr>

      <div class="mb-5" v-if="showTerms">
        <div class="checkbox px-2 py-2 border border-black w-2 h-2 cursor-pointer relative" on:click={() => toggleTermsModal}>
          {#if acceptedTerms}
            <span class="absolute top-[-10px] font-bold left-0 text-2xl text-green-500">✓</span>
          {/if}
        </div>
        <p>I have <a href={'javascript:void(0)'} class="text-yellow-400 underline">read and</a> accepted the te<u on:click={() => toggleTermsModal}>rms and condi</u>tions </p>
      </div>

      <div class="flex justify-between">
        <button class="btn primary" type="button">Cancel</button>
        <button class="btn danger" type="submit">Submit</button>
      </div>
    </form>
  </div>
  
  <!-- <AcceptPromptModal v-if="showAcceptWarning" @close="toggleAcceptWarning(false)"/> -->
  <!-- <TermsModal @doAction="catchTermsAction" v-if="showTermsModal"/> -->
</div>

<script>
  import { modal } from '../../stores/global'
  import { createEventDispatcher } from 'svelte'
  import { createForm } from 'felte'
  import { validator } from '@felte/validator-yup'
  import { schema, registrationFormValues } from '../../schemas/validation/registrationForm'
  
  /* data */
  const dispatch = createEventDispatcher()
  const { form, errors } = createForm({
    initialValues: registrationFormValues,
    extend: [validator({ schema })],
    onSubmit(values, context) {
      console.log(values)
      console.log(context)
    },
    onSuccess(res, context) {
      console.log('success etoi')
      console.log(res)
      return
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
    },
    onError(err, context) {
      console.log('errors to')
      console.log(err)
      return
      document.querySelector('.validation-errors').scrollIntoView({
        behavior: 'smooth'
      })
    }
  })

  let showTerms = false
  let acceptedTerms = false
  let showAcceptWarning = false
  let showTermsModal = false

  /* methods */
  function catchTermsAction(action) {
    acceptedTerms = (action == 'accept') ? true : false
    toggleTermsModal(false)
  }
  function toggleTermsModal(value = true) {
    showTermsModal = value
    modal.toggleModal(value)
  }
  function toggleAcceptWarning(value = true) {
    showAcceptWarning = value
    modal.toggleModal(value)
    if (value == false) {
      showTerms = true
    }
  }
</script>