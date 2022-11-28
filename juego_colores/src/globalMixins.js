import Vue from 'vue'

const miMixinGlobal = {
    methods: {
      elegirColor() {      
        let quantity;    
        if (this.$store.state.isHardNav) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity);
      },
      randomInt() {
        return Math.floor(Math.random() * 256);
      },
      crearNuevoColorAleatorio() {      
        var newColor =
          "rgb(" +
          this.randomInt() +
          ", " +
          this.randomInt() +
          ", " +
          this.randomInt() +
          ")";
        return newColor;
      },
      generarNuevoColor(numbers) {      
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.crearNuevoColorAleatorio());
        }
        return arr;
      },      
      reset() {                        
        this.$store.dispatch('setColours', this.generarNuevoColor(this.$store.state.colorCount));
        this.$store.dispatch('setPickedColor', this.$store.state.colors[this.elegirColor()]);            
        this.$store.dispatch('setMensaje', '');
        this.$store.dispatch('setTermino', false);        
      },
    },
    computed: {       
    }    
}

Vue.mixin(miMixinGlobal)