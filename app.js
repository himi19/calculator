const Calculator = {
    data() {
        return {
            num: 1,
            minNum: 0,
            ans: 0,
            display: "",
            isPlus: 1,
            isTimes: 1
        }
    },
    methods: {
        getNum: function(num) {
            if (RegExp("[0-9]").test(this.display.slice(-1)[0])) {
                this.minNum = Number(String(this.minNum)+String(num))
            }
            else this.minNum = num
            this.display += String(num)
        },
        plus: function(minus) {
            if (!this.isTimes) this.minNum = 1/this.minNum
            if (this.isPlus) this.ans += this.num*this.minNum
            else this.ans -= this.num*this.minNum
            if (minus) {
                this.display += "-",
                this.isPlus = 0
            }
            else {
                this.display += "+",
                this.isPlus = 1
            }
            this.num = 1
        },
        times: function(div) {
            if (!this.isTimes) this.minNum = 1/this.minNum
            this.num *= this.minNum
            if (div) {
                this.display += "÷"
                this.isTimes = 0
            } else {
                this.display += "×"
                this.isTimes = 1
            }
        },
        showAns: function() {
            this.plus(false),
            this.display = String(this.ans)
            this.minNum = this.ans
            this.ans = 0
            this.isPlus = 1
            this.isTimes = 1
        },
        clear: function() {
            this.num = 1,
            this.minNum = 0,
            this.ans = 0,
            this.display = "",
            this.isPlus = 1,
            this.isTimes = 1
        }
    }
}

calculator = Vue.createApp(Calculator)
calculator.mount(('#calculator'))