<template>
    <div class="todo-page">
        <div class="container">
            <div class="block-title">
                <h3>Лист задач</h3>
            </div>
            <div class="todo-filter">
                <TodoFilter :filter="filter" @change="setFilter" :options="options"></TodoFilter>
            </div>
            <div class="todo-list">
                <TodoList :todos="filteredTodos" v-if="filteredTodos.length"></TodoList>
                <div v-else class="text-center">
                    <h4>Задач в списке нет</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TodoList from "@/components/TodoList.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import TodoFilter from "@/components/TodoFilter.vue";

export default {
    name: "TodoListPage",
    components: {
    TodoList,
    TodoFilter
},
    methods: {
        ...mapMutations({
            setFilter: 'setFilter',
            setTodos: 'setTodos',
        }),
    },
    computed: {
        ...mapState([
            'filter',
            'options',
            'todos'
        ]),
        ...mapGetters([
            'filteredTodos'
        ]),
    }
};
</script>

<style scoped lang="scss">
    
</style>