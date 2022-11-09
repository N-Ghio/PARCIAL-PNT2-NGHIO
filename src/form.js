import Vue from 'vue'
import VueForm from 'vue-form';

const regex1 = /\s/g
const regex2 = /\d/
let options = {
    validators: {
        'no-spaces' : function (value){
            return !regex1.test(value)
        },
        'num-only' : function (value){
            return !regex2.test(value)
        }
    }
}

Vue.use(VueForm, options)