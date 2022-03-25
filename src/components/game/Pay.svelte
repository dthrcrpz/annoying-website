{#if !paid}
<div class="wrapper mt-5">
  <p class="text-4xl">Haha! Great! </p>
  <p class="text-2xl mt-3">We alloted lots of our budget for this <b>Online Payment Form</b>.</p>

  <hr>

  <div class="mt-5">
    <div class="form-group">
      <p class="font-bold text-lg">How much are you willng to pay?</p>
      <div class="radio flex items-center">
        <input bind:group={amount} value="$50" type="radio" name="amount" id="amount_1"><label for="amount_1" class="ml-1 cursor-pointer">$50 (12 months to process)</label>
      </div>
      <div class="radio flex items-center">
        <input bind:group={amount} value="$100" type="radio" name="amount" id="amount_2"><label for="amount_2" class="ml-1 cursor-pointer">$100 (9 months to process)</label>
      </div>
      <div class="radio flex items-center">
        <input bind:group={amount} value="$250" type="radio" name="amount" id="amount_3"><label for="amount_3" class="ml-1 cursor-pointer">$250 (6 months to process)</label>
      </div>
      <div class="radio flex items-center">
        <input bind:group={amount} value="$500" type="radio" name="amount" id="amount_4"><label for="amount_4" class="ml-1 cursor-pointer">$500 (3 months to process)</label>
      </div>
    </div>
  </div>

  <button class="btn primary" on:click={pay}>Pay { amount } Now!</button>
</div>
{/if}

{#if paid}
  <div class="wrapper mt-5 mb-40">
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

    <p>Need assistance? Contact us at <a href={'javascript:void(0)'}>123-456-789</a> and make sure to prepare your payment.</p>
    <hr>
    <p class="text-4xl">This ends the game for now. I hope you enjoyed!</p>
    <hr>

    <p class="text-teal-700 text-4xl mt-5">Site not painful enough?</p>
    <p class="text-lg">I know. I need it be very annoying. Your assistance is highly appreciated. </p>
    <p class="text-lg">
      - <b>For developers:</b> Feel free to create Pull Requests at <a href="https://github.com/dthrcrpz/annoying-site" target="_blank" class="text-teal-700 underline">https://github.com/dthrcrpz/annoying-site</a>. <br>
      - <b>For designers and everyone:</b> Idk, maybe send me a message at <a href="https://dthrcrpz.dev" target="_blank" class="text-teal-700 underline">https://dthrcrpz.dev</a>.
      There's a "Contact" section there. Not sure if that function still works tho. (hehe. I'm lowkey advertising my portfolio)
    </p>
  </div>
{/if}
<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  /* data */
  let amount = '$50'
  let paid = false

  /* methods */
  function pay() {
    paid = true
    dispatch('pay')
  }
</script>