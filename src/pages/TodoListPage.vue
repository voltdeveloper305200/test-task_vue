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
import TodoList from '@/components/TodoList.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
import TodoFilter from '@/components/TodoFilter.vue';
import { options } from '@/constants';

export default {
  name: 'TodoListPage',
  data() {
    return {
      options,
    };
  },
  components: {
    TodoList,
    TodoFilter,
  },
  methods: {
    ...mapMutations(['setFilter', 'setTodos']),
  },
  computed: {
    ...mapState(['filter', 'todos']),
    ...mapGetters(['filteredTodos']),
  },
};
</script>
