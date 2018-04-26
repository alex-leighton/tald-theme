console.log('Testing');


Vue.component('first-comp', {
    data: function () {
        return {
            message: 'YO YO YO',
            firstNumber: 0,
            secondNumber: 0,
            result: 0
        }
    },
    template: `
      <div>
        <input type="number" v-model="firstNumber">
        <p>*</p>
        <input type="number" v-model="secondNumber">
        <p v-text="result"></p>
        </div>
    `,
    computed: {
        results: function () {
            let fn = parseFloat(this.firstNumber);
            let sn = parseFloat(this.secondNumber);
            this.result = fn * sn;
            return this.result;
        }
    }
});

Vue.component('second-comp', {
    data: function () {
        return {
            message: 'YO YO YO YO'
        }
    },
    template: '<p>{{message}}</p>'
});

new Vue({
    el: '#root',

    data: {
        list: [
            {text: 'Word'},
            {text: 'Excel'},
            {text: 'Powerpoint'},
            {text: 'Notes'}
        ],
        message: '',
        firstChecked: false,
        secondChecked: false
    },

    methods: {
        addToList() {

        }
    },

});