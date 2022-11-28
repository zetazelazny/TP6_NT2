<template>
  <section class="src-componentes-navigator-vue">
    <div id="navigator">      
      <button id="reset"  @click="reset();">
        {{ !!$store.state.termino?"NEW COLORS!":'PLAY AGAIN!' }} <!-- New colors -->
      </button>        
      <span id="message"> {{ $store.state.mensajeChequeo }}</span>
      <button id="easy" :class="{ selected: !$store.state.isHardNav }" @click="changeEasy()">
        easy
      </button>
      <button id="hard" :class="{ selected: $store.state.isHardNav }" @click="changeHard()">
        hard
      </button>
      <br />
      <br />
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-navigator-vue",
  props: [],

  mounted() {
  },

  data() {
    return {                              
    };
  },
  methods: {    
    changeHard() {
      if (!this.$store.state.isHardNav) {
        this.$store.dispatch('setIsHardNav', true);                
        this.$store.dispatch('setColorCount', 6);        
        this.reset();
      }
    },
    changeEasy() {
      if (this.$store.state.isHardNav) {        
        this.$store.dispatch('setIsHardNav', false);
        this.$store.dispatch('setColorCount', 3);                
        this.reset();
      }
    },    
  },
  computed: {},
};
</script>

<style scoped lang="css" >
.src-componentes-navigator-vue {
}

</style>
