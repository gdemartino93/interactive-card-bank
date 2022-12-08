const { createApp } = Vue 

    createApp({
        data() {
            return{
                cvc : "",
                nameFormatted : "",
                card : "",
                cardNumberFormatted : ""
               

            }
        },
        computed: {
            // formatCardNumber(){
            //   return this.cardNumber ? this.cardNumber.match(/.{1,4}/g).join(' ') : '';
            // } 
          },
        
        methods:{
            cardHolderFormatted(){
                this.nameFormatted = this.cardName.toUpperCase()
            },
            formatCard() {
                let nn = this.card;
                (nn.length - (nn.split(" ").length - 1)) % 4 === 0 ? this.card += ' ' : ''
              }
        },
        
        mounted(){
         
        }

    }).mount("#webapp")

    // ccformat() {
    //   var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    //   var matches = v.match(/\d{4,16}/g);
    //   var match = matches && matches[0] || ''
    //   var parts = []
    //   for (i=0, len=match.length; i<len; i+=4) {
    //     parts.push(match.substring(i, i+4))
    //   }
    //   if (parts.length) {
    //     return parts.join(' ')
    //   } else {
    //     return value
    //   }
    // }