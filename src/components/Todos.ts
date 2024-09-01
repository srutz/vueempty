import { defineComponent, defineProps, PropType, reactive } from "vue";

/* the type of a single todo */
type TodoType = {
    id: number
    text: string
    completed: boolean
}


/* a single todo as a component */
export const Todo = defineComponent({
    name: "Todo",
    props: {
        todo: {
            type: Object as PropType<TodoType>,
            required: true,
        }
    },
    setup() {
    },
    template: `
    <div class="flex items-center gap-2">
        <input type="checkbox" v-model="todo.completed" />
        <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
    </div>
    `
})


/* a list of todos as a component */
export const Todos = defineComponent({
    name: "Todos",
    components: {
        Todo
    },
    setup() {
        const todos: TodoType[] = reactive([
            { id: 1, text: "Learn Vue 3", completed: false },
            { id: 2, text: "Learn Vuex 4", completed: false },
            { id: 3, text: "Learn Vue Router 4", completed: false }
        ])
        return {
            todos
        }
    },
    template: `
    <div class="flex flex-col gap-2">
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    `
})


