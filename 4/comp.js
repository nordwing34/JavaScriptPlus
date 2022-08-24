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
            age: 26
        }
    },
    props: ['name', 'title'],
	template: `<div>
                <h1>Привет, {{ name }}</h1>
                <p>Имя компонента {{ title }}</p>
                <p>Это свойство из data: {{ $data.name }}</p>
            </div>`,
});

