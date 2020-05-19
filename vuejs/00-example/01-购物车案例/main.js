const app = new Vue({
    el: '#app',
    data: {
        books:[
            {id:"1",name:"武丹丹",date:"2020-10-20",price:"60.00",count:"1"},
            {id:"2",name:"丹老大",date:"2020-10-20",price:"130.00",count:"1"},
            {id:"3",name:"丹小弟",date:"2020-10-20",price:"200.00",count:"1"},
            {id:"4",name:"丹王",date:"2020-10-20",price:"131.00",count:"1"}
        ]
    },
    methods: {
        increment(index){
            this.books[index].count++
            
        },
        subtraction(index){
            this.books[index].count--
        },
        removeHander(index){
            this.books.splice(index,1)
        }

    },
    filters: {
        showPrice(price){
            return "￥"+ price
        }
    },
    computed: {
        finalPrice(){
            let totalprice = 0
            for (i in this.books){
                totalprice +=this.books[i].price * this.books[i].count
                console.log(totalprice)
            }
            return totalprice

        }
    }
 });