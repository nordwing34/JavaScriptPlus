/**
 * 
 */
 
const app = new Vue({
	el: '#app',
    data: {
        name1: 'Олег',
        name2: 'Мария'
    },
    methods: {
        test(age){
            alert(`Возраст юзера: ${age}`);
        }
    }
});

