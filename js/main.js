const { createApp } = Vue 

createApp({
  data() {
    return{
      cvc : "",
      nameFormatted : "",
      card : "",
      monthExp : "",
      yearExp : "",
      cardAdded : false,
      errorHolder : false,
      errorNumber : false,
      field : 0,
      maskNumber : "0000 0000 0000 0000",
      maskName : "Jane Appleseed"
    }
  },
  methods:{
    cardHolderFormatted(){
      this.nameFormatted = this.cardName.toUpperCase(); // converte il nome del titolare della carta in maiuscolo
      let letters = /^[a-zA-Z ]+$/; // espressione regolare per verificare che il nome sia composto solo da lettere e spazi
      if(this.nameFormatted.match(letters)){
        this.errorHolder = false; // se il nome è corretto, l'errore viene disabilitato
      }else{
        this.errorHolder = true; // se il nome non è corretto, l'errore viene abilitato
      }
    },
    formatCard() {
      let numbers = /^[0-9 ]+$/; // espressione regolare per verificare che il numero della carta sia composto solo da numeri e spazi
      if (this.card.match(numbers)) { // se il numero della carta è corretto
        this.errorNumber = false; // l'errore viene disabilitato
        let nn = this.card.replace(/\s/g, ''); // rimuove gli spazi esistenti nel numero della carta
        let formatted = '';
        for (let i = 0; i < nn.length; i++) {
          if (i % 4 === 0 && i !== 0) {
            formatted += ' '; // aggiunge uno spazio ogni 4 cifre del numero della carta
          }
          formatted += nn[i];
        }
        this.card = formatted; // sostituisce il numero della carta non formattato con quello formattato
      } else {
        this.errorNumber = true; // se il numero della carta non è corretto, l'errore viene abilitato
      }
    },
    refreshPage(){
      location.reload(); // ricarica la pagina
    }
  },   
  mounted() {}
}).mount("#webapp");
