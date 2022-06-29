<template>
    <div>
        <div class="container">
            <div class="block-title">
                <h3>Редактирование задачи с ID: {{ this.$route.params.id }}</h3>
            </div>
            <EditTodoForm></EditTodoForm>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EditTodoForm from "@/components/EditTodoForm.vue";

export default {
    name: "EditTodoPage",
    methods: {
        ...mapActions({
            selectTodo: "selectTodo"
        }),
        redirectToBack() {
            this.$router.back();
        }
    },
    computed: {
        ...mapState(["selectedTodo"])
    },
    created() {
        if (this.$route.params.id) {
            this.selectTodo(this.$route.params.id);
            if (!this.selectedTodo) {
                this.redirectToBack();
            }
        }
    },
    components: { EditTodoForm }
};
</script>

<style></style>
