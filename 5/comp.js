/**
 * Компонент Vue
 * 
 * Свойство props служит для передачи данных из вёрстки в компонент
 * Оно имеет более высокий приоритет, чем data
 */

Vue.component('mycomp', {
    data(){
        return {
            name: 'Иван',
            age: 26,
        }
    },
	template: `<div>
                    <h1>Привет, {{ name }}</h1>
                    <p>Это свойство из data: {{ $data.name }}</p>
                    <p>Это свойство из main.js: {{ $parent.name1 }}</p>
                    <inner-comp></inner-comp>
                    <button @click="$parent.test(age)">OK</button>
                </div>`,
});

Vue.component('inner-comp', {
    template: `<div>
                    <h3>Свойство из родительского компонента: {{ $parent.name }}</h3>
                    <h3>Свойство из корневого компонента: {{ $root.name2 }}</h3>
               </div>`
});

