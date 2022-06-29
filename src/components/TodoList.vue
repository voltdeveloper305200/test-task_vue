<template>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12" v-for="todo in todos" :key="todo.id">
            <div class="todo-card">
                <div class="todo-card__header">
                    <span v-if="todo.status === 'work'" class="badge bg-primary">Задача в работе</span>
                    <span v-else-if="todo.status === 'complete'" class="badge bg-success">Задача выполнена</span>
                    <span v-else-if="todo.status === 'failed'" class="badge bg-danger">Задача просрочена</span>
                    <p>Выполнить до {{todo.deadline}}</p>
                    <h5>{{todo.title}}</h5>
                </div>
                <div class="todo-card__content">
                    <p>{{todo.description}}</p>
                </div>
                <div class="todo-card__tags" v-if="todo.tags.length">
                    <h6>Теги:</h6>
                    <span v-for="tag in todo.tags" :key="tag" class="badge bg-dark">{{tag}}</span>
                </div>
                <div class="todo-card__footer">
                    <button @click="$router.push(`/todos/${todo.id}`)" type="button" class="btn btn-dark">Редактировать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        todos: {
            type: Array,
            required: true
        }
    }
};
</script>

