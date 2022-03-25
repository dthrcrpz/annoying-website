<div class="wrapper">
  <p class="text-lg">
    Your OTP will expire in <b>{ otpExpiryCount }</b> minutes <br>
    BUT it will arrive in <b>{ otpArrivalCount }</b> hours
  </p>
  <p>- cos that's how we do it</p>

  <p class="text-lg text-center mt-5">Your OTP: <b class="text-red-600">{ (receivedOtp == null) ? '[will appear here. imagine this is your email inbox]' : receivedOtp}</b></p>

  <div class="form-group">
    <input type="text" placeholder="Type your received OTP here" class="w-full" bind:value={otp}>
  </div>
  <button class="btn danger" on:click={submitOtp}>Submit</button>
  <button class="btn warning text-2xl" on:click={startOTP}>Resend OTP</button>
  <br>

  <p class="text-red-500 font-bold text-3xl">{ errorMessage }</p>

  {#if showPayTheGovt}
    <p class="text-lg text-center">
      Having problems with OTP? Click <button class="btn primary" on:click={() => dispatch('pay')}>HERE</button> to pay someone from the government and have your account processed. <br>
      NOTE: It might take 3 to 12 months for your account to be processed unless you're a politician or has strong connections with us.
    </p>
  {/if}
</div>

<script>
  import { createEventDispatcher, onMount } from "svelte"
  const dispatch = createEventDispatcher()

  /* data */
  let otpArrivalCount = 0
  let otpExpiryCount = 0
  let otpArrivalTimer = null
  let otpExpiryTimer = null
  let receivedOtp = null
  let otp = ''
  let showPayTheGovt = false
  let errorMessage = ''

  /* methods */
  function submitOtp () {
    showPayTheGovt = false

    if (receivedOtp == null || receivedOtp != otp) {
      errorMessage = `Invalid OTP`
      return
    }

    if (receivedOtp == otp) {
      if (otpExpiryCount == 0) {
        errorMessage = `Oops! Your OTP has expired!`
        showPayTheGovt = true
        return
      }
    }
  }
  function startOTP () {
    otpArrivalCount = 25
    otpExpiryCount = 20
    clearInterval(otpExpiryTimer)
    clearInterval(otpArrivalTimer)
    otpExpiryTimer = setInterval(() => {
      if (otpExpiryCount > 0) {
        otpExpiryCount -= 1
      } else {
        clearInterval(otpExpiryTimer)
      }
    }, 1000)
    otpArrivalTimer = setInterval(() => {
      if (otpArrivalCount > 0) {
        otpArrivalCount -= 1
      } else {
        receivedOtp = Math.floor(Math.random() * 99999) + 10000
        clearInterval(otpArrivalTimer)
      }
    }, 1000)
  }
  
  /* lifecycle */
  onMount(() => {
    startOTP()
  })
</script>