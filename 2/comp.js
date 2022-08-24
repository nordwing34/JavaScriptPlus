/**
 * Компонент Vue
 * 
 * h1 - простой компонент
 * inner-comp - вложенный компонент
 */
Vue.component('mycomp', {
	data(){
		return {
			name: 'Иван',
			age: 25,
			show: true,
		}
	},
	template: `<div>
		<slot></slot>
		<!-- <h1 v-show = "show">Сотрудник {{ name }}, его возраст {{ age }} лет</h1> -->
		<inner-comp></inner-comp>
	</div>`
});


/**
 * С помощью $parent можно обращаться из вложенного компонента 
 *  к свойствам родительского
 */
Vue.component('inner-comp', {
	data(){
		return {
			counter: 0
		}
	},
	methods:{
		increase(step){
			this.counter += step;
		}
	},
	template: 
		`<div>
			<button @click="counter++">Push {{ counter }}</button>
			<button @click="increase($parent.age); 
				$parent.age = counter
				$parent.show = !$parent.show">Demo1 {{ counter }}</button>
		</div>`
});


