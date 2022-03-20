<template>
  <div class="modal bg-teal-600 z-20">
    <p class="text-lg text-right">Scroll to the bottom-most part to accept</p>

    <div class="flex justify-between mb-5" v-if="hasScrolledToBottom">
      <button class="btn primary" @click="doAction('cancel')">Accept <span class="text-sm">cancellation</span></button>
      <button class="btn danger" @click="doAction('accept')">Cancel <span class="text-sm">rejection</span></button>
    </div>

    <div class="terms h-48 overflow-hidden mt-3 bg-white text-black relative">
      <div class="w-full h-full absolute overflow-y-scroll top-0 bottom-0 left-0 right-0 to-read block" @scroll="handleScroll($event)">
        <p v-for="(n, key) in 100" :key="key" class="text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta alias? Ipsum architecto ratione delectus reiciendis labore. Soluta magni enim deleniti inventore alias eaque praesentium, odio aliquid eum doloribus fuga, unde ducimus nihil quia quasi, sint voluptas nesciunt ea porro placeat. Beatae, nesciunt ut qui est magni numquam fugit labore rerum saepe ullam earum debitis modi error facilis recusandae quam iusto sed iure, autem ipsum quo quibusdam. Asperiores vitae dolor, aperiam eaque exercitationem nemo necessitatibus ex nisi. Facilis in nostrum pariatur voluptatum aliquid rerum nemo, corrupti qui? Qui, consequuntur. Similique explicabo at mollitia nulla corrupti hic deserunt cum voluptatibus architecto. Ad exercitationem ipsam unde eius facere quisquam omnis nesciunt iure molestiae? Dolor possimus ratione tempora aliquid facere, harum magnam labore libero dolorem, ipsum esse, magni accusamus amet quod impedit qui repellendus repellat maxime exercitationem molestiae sed illum dolore molestias eaque? Obcaecati reprehenderit vel quisquam amet, deserunt officia nisi at iusto cumque aliquid harum vitae non excepturi, similique quaerat! Nobis in ipsa aliquid laboriosam eius necessitatibus quidem recusandae, animi voluptatum laborum id, suscipit deserunt, ipsam inventore magnam repudiandae neque perferendis dolore doloribus. Alias omnis sapiente illum quia ipsum delectus consequuntur cumque esse inventore, blanditiis earum! Ratione odit, eum dolore, corporis, nulla commodi harum officia ducimus nihil facere ex voluptatem quo cumque aperiam animi tenetur molestias blanditiis beatae rem recusandae possimus sequi. Placeat eos dolores corrupti aliquid magni ea aperiam modi consectetur non nam iure vitae nostrum deserunt culpa, tempora eum et quo recusandae quam! Expedita voluptatum possimus ratione harum. Voluptas et reprehenderit in quibusdam commodi atque tempora optio nemo dicta facere libero modi quos eum saepe aperiam, eius, quidem corporis. Nesciunt blanditiis ducimus recusandae accusantium beatae rem reiciendis aliquam nobis doloremque. Dolorem quibusdam ipsam deserunt quos iusto eligendi, recusandae illum tempora. Vitae, corrupti. Possimus debitis rerum animi esse aliquam nam dolor officiis nisi, dolore cumque velit pariatur a quaerat ad sapiente. Placeat, magnam. Cumque repellendus aliquam magni ab quos esse dignissimos nulla! Voluptates deserunt, reiciendis sint facere eius suscipit quidem facilis debitis beatae minus quae similique iste id vel ullam ab expedita assumenda non libero labore possimus? Ab, rem earum quod unde autem, neque explicabo sint deleniti, commodi voluptatem animi libero iusto corporis alias possimus ipsum doloribus. Ex tempora incidunt non asperiores nemo ab corrupti beatae earum sit quod reiciendis, laborum aliquid adipisci sunt expedita excepturi ipsa nam doloremque nisi magni placeat? Atque accusamus, quasi sed neque repellat expedita eos ea quibusdam placeat est voluptates earum. Voluptatem ducimus animi, incidunt magnam eius magni alias aut sit ullam! Odio similique a architecto excepturi vel accusantium quo nesciunt, numquam cumque voluptatibus quasi non commodi et voluptatem molestiae impedit ipsam, dolor asperiores. Quas aspernatur totam eaque impedit delectus consequatur dolor alias qui ipsam quos incidunt repellat quasi magnam unde asperiores quis earum, aliquid in praesentium enim ipsa? Quo, ducimus accusamus possimus, velit quaerat sequi maxime dignissimos commodi necessitatibus amet recusandae! Deserunt suscipit aliquam officia accusamus tenetur ipsam obcaecati laboriosam excepturi omnis ad, animi minus inventore hic et quasi ipsa perspiciatis fugit cum, dignissimos deleniti.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    hasScrolledToBottom: false
  }),
  methods: {
    doAction (action) {
      this.$emit('doAction', action)
    },
    handleScroll (e) {
      if((e.target.offsetHeight + e.target.scrollTop) >= e.target.scrollHeight) {
        this.hasScrolledToBottom = true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.to-read
  &::-webkit-scrollbar
    width: 2px
  &::-webkit-scrollbar-track
    background: #f1f1f1
  &::-webkit-scrollbar-thumb
    background: #888
</style>