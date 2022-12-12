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
                this.nameFormatted = this.cardName.toUpperCase()
                let letters = /^[a-zA-Z ]+$/
                if(this.nameFormatted.match(letters)){
                    this.errorHolder = false
                }else{
                    this.errorHolder = true
                }
            },
            formatCard() {
                let numbers = /^[0-9  ]+$/;
                if (this.card.match(numbers)){
                    this.errorNumber = false
                }else{
                    this.errorNumber = true
                }
                let nn = this.card;
                (nn.length - (nn.split(" ").length - 1)) % 4 === 0 ? this.card += ' ' : ' '
            },
            addCard(){
                if (( this.errorHolder === false) && ( this.errorNumber === false) && ( this.nameFormatted !== "") && ( this.card !== "") && (this.monthExp !== "") && (this.yearExp !== "") && (this.cvc !== "")){
                    this.cardAdded = true
                }else{
                    this.cardAdded = false
                    this.field = 1
                }      
            },
            refreshPage(){
                location.reload()
            },

        },

        
        mounted(){
         
        }

    }).mount("#webapp")

// 1440px version desktop