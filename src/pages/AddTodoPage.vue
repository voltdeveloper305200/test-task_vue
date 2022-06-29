<template>
    <div class="add-todo-page">
        <div class="container">
            <div class="block-title">
                <h3>Создание задачи</h3>
            </div>
            <AddTodoForm />
        </div>
    </div>
</template>

<script>
import AddTodoForm from "@/components/AddTodoForm.vue";

export default {
    name: "AddTodoPage",
    components: {
        AddTodoForm
    }
};
</script>
