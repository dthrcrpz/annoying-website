<template>
  <div class="wrapper" v-if="!paid">
    <p class="text-4xl">Haha! Great! </p>
    <p class="text-2xl mt-3">We alloted lots of our budget for this <b>Online Payment Form</b>.</p>

    <hr>

    <div class="mt-5">
      <div class="form-group">
        <p class="font-bold text-lg">How much are you willng to pay?</p>
        <div class="radio flex items-center">
          <input v-model="amount" value="$50" type="radio" name="amount" id="amount_1"><label for="amount_1" class="ml-1 cursor-pointer">$50 (12 months to process)</label>
        </div>
        <div class="radio flex items-center">
          <input v-model="amount" value="$100" type="radio" name="amount" id="amount_2"><label for="amount_2" class="ml-1 cursor-pointer">$100 (9 months to process)</label>
        </div>
        <div class="radio flex items-center">
          <input v-model="amount" value="$250" type="radio" name="amount" id="amount_3"><label for="amount_3" class="ml-1 cursor-pointer">$250 (6 months to process)</label>
        </div>
        <div class="radio flex items-center">
          <input v-model="amount" value="$500" type="radio" name="amount" id="amount_4"><label for="amount_4" class="ml-1 cursor-pointer">$500 (3 months to process)</label>
        </div>
      </div>
    </div>

    <button class="btn primary" @click="pay()">Pay {{ amount }} Now!</button>
  </div>

  <div class="wrapper" v-if="paid">
    <h2 class="text-5xl">THANK YOU FOR PAYING.</h2> 
    <div class="text-red-500 mb-5">
      <p class="text-3xl">Oops, something went wrong with our server.</p>
      <p>--</p>
      <p>Error Code: <b>[404] Your Payment went missing!</b></p>
      <p>Another Error Code: <b>[500] Internal Server Error</b></p>
      <p>Another Error Code: <b>[502] Bad Gateway</b></p>
      <p>Another Error Code: <b>[503] Service Unavailable</b></p>
      <p>Another Error Code: <b>[504] Gateway Timeout</b></p>
    </div>

    <p>Need assistance? Contact us at <a href="tel:123-456-789">123-456-789</a> and make sure to prepare your payment.</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    amount: '$50',
    paid: false
  }),
  methods: {
    pay () {
      this.paid = true
      this.$emit('pay')
    }
  }
}
</script>