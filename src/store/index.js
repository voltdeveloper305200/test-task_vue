import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        filter: 'work',
        options: [
            {value: 'work', name: 'В работе'},
            {value: 'complete', name: 'Выполненные'},
            {value: 'failed', name: 'Просроченные'},
        ],
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        selectedTodo: null
    }),
    getters: {
        filteredTodos(state) {
            return state.todos.filter(todo => todo.status === state.filter)
        },
        getTodos(state) {
            return state.todos
        }
    },
    mutations: {
        setFilter: (state, filter) => {
            state.filter = filter;
        },
        setOptions: (state, options) => {
            state.options = options
        },
        setTodos: (state, todos) => {
            state.todos = todos
        },
        setSelectedTodo: (state, todo) => {
            state.selectedTodo = todo
        },
    },
    actions: {
        addTodo({state, commit}, todo) {
            commit('setTodos', [todo, ...state.todos])
        },
        selectTodo({commit, state}, id) {
            commit('setSelectedTodo', state.todos.find((todo) => todo.id === +id) || null)
        },
        updateTodo({state, commit}, todo) {
            const index = state.todos.findIndex(item => item.id === todo.id)
            if (index > -1) {
                const newTodos = [...state.todos];
                newTodos[index] = todo;
                commit('setTodos', newTodos);
                commit('setSelectedTodo', todo);
            }
        }
    },
    modules: {},
});
