<template>
  <div class="wrapper">
    <p class="text-lg">
      Your OTP will expire in <b>{{ otpExpiryCount }}</b> minutes <br>
      BUT it will arrive in <b>{{ otpArrivalCount }}</b> hours
    </p>
    <p>- cos that's how we do it</p>

    <p class="text-lg text-center mt-5">Your OTP: <b class="text-red-600">{{ (receivedOtp == null) ? '[will appear here. imagine this is your email inbox]' : receivedOtp}}</b></p>

    <div class="form-group">
      <input type="text" placeholder="Type your received OTP here" class="w-full" v-model="otp">
    </div>
    <button class="btn danger" @click="submitOtp()">Submit</button>
    <button class="btn warning text-2xl" @click="startOTP()">Resend OTP</button>
    <br>

    <p class="text-red-500 font-bold text-3xl">{{ errorMessage }}</p>

    <p class="text-lg text-center" v-if="showPayTheGovt">
      Having problems with OTP? Click <button class="btn primary">HERE</button> to pay someone from the government and have your account processed. <br>
      NOTE: It might take 3 to 12 months for your account to be processed unless you're a politician
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    otpArrivalCount: 0,
    otpExpiryCount: 0,
    otpArrivalTimer: null,
    otpExpiryTimer: null,

    receivedOtp: null,
    otp: '',

    showPayTheGovt: false,

    errorMessage: ''
  }),
  methods: {
    submitOtp () {
      if (this.receivedOtp == null) {
        this.errorMessage = `Invalid OTP`
        return
      }

      if (this.receivedOtp != this.otp) {
        this.errorMessage = `Wrong OTP!`
        this.showPayTheGovt = true
        return
      }

      if (this.otpExpiryCount == 0) {
        this.errorMessage = `Oops! Your OTP has expired!`
        this.showPayTheGovt = true
        return
      }
    },
    startOTP () {
      this.otpArrivalCount = 10
      this.otpExpiryCount = 5
      clearInterval(this.otpExpiryTimer)
      clearInterval(this.otpArrivalTimer)

      this.otpExpiryTimer = setInterval(() => {
        if (this.otpExpiryCount > 0) {
          this.otpExpiryCount -= 1
        } else {
          clearInterval(this.otpExpiryTimer)
        }
      }, 1000)

      this.otpArrivalTimer = setInterval(() => {
        if (this.otpArrivalCount > 0) {
          this.otpArrivalCount -= 1
        } else {
          this.receivedOtp = Math.floor(Math.random() * 99999) + 10000
          clearInterval(this.otpArrivalTimer)
        }
      }, 1000)
    }
  },
  mounted () {
    this.startOTP()
  }
}
</script>