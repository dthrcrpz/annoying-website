<div class={`fixed bg-red-600 text-white right-4 z-40 px-5 py-5 rounded-t-lg opacity-80 helper ${bottom ? 'at-bottom' : ''}`}>
  <div class="flex justify-between w-full">
    <p>How can we help?</p>
    <button class="btn warning" on:click={() => close()}>x</button>
  </div>
  <textarea name="" id="" cols="30" rows="10" class="text-black w-full" bind:value={message}></textarea>
  <div class="flex justify-between w-full">
    <a href={'javascript:void(0)'} class="block" on:click={() => getHelp()}><u>help</u></a>
    <button class="btn primary block" on:click={() => sendToBottom()}>Send to bottom</button>
  </div>
</div>

<script>
  /* data */
  let message = `Type your issues here. We will do our very very very very very very very very best to help you`
  let bottom = false

  /* methods */
  function close() {
    bottom = false
    message = `DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. DON'T CLOSE THIS BOX. YOU NEED HELP, BRO. `
  }
  function getHelp() {
    message = `Sorry. We are helping other people. Your current number in queue is 561. Please wait for your turn`
  }
  function sendToBottom() {
    bottom = !bottom
  }
</script>

<style>
  .helper {
    bottom: 0;
    transition: 1s;
    transform: translateY(0);
  }
  .helper.at-bottom {
    transform: translateY(84%);
    transition: 30s;
  }
</style>