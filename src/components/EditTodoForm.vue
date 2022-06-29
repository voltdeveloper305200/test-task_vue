<template>
    <form @submit.prevent="onSubmit" class="mt-5">
        <div class="mb-3">
            <label for="inputTitle" class="form-label">
                Название задачи
            </label>
            <input
                id="inputTitle"
                v-model.trim="$v.title.$model"
                type="text"
                class="form-control"
                :class="{
                    'is-invalid': $v.title.$error
                }"
            />
        </div>
        <div class="mb-3">
            <label for="inputDescription" class="form-label"
                >Описание задачи</label
            >
            <textarea
                id="inputDescription"
                v-model.trim="$v.description.$model"
                type="text"
                class="form-control"
                :class="{
                    'is-invalid': $v.description.$error
                }"
            ></textarea>
        </div>
        <div class="mb-3">
            <label for="inputDate" class="form-label">
                Дата дедлайна
            </label>
            <input
                v-model.trim="$v.date.$model"
                type="date"
                class="form-control"
                id="inputDate"
                :class="{
                    'is-invalid': $v.date.$error
                }"
            />
        </div>
        <div class="mb-3">
            <label for="statusTodo" class="form-label">
                Статус задачи
            </label>
            <select id="statusTodo" class="form-select" v-model="status">
                <option
                    v-for="option in options"
                    :value="option.value"
                    :key="option.value"
                    >{{ option.name }}</option
                >
            </select>
        </div>
        <div class="mb-3">
            <label for="inputTags" class="form-label"
                >Теги (после каждого тега должна быть запятая и пробел)
            </label>
            <input
                v-model="tags"
                type="text"
                class="form-control"
                id="inputTags"
            />
        </div>
        <button
            :disabled="disabledBtn"
            type="submit"
            class="btn btn-dark w-100"
        >
            Создать задачу
        </button>
    </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";
import { options } from "@/constants";

export default {
    name: "EditTodoForm",
    data() {
        return {
            options,
            id: "",
            title: null,
            date: null,
            status: null,
            description: null,
            validateDescription: true,
            tags: null,
            disabledBtn: false
        };
    },
    validations: {
        title: {
            required
        },
        description: {
            required,
            maxLength: maxLength(2048)
        },
        date: {
            required
        }
    },
    methods: {
        ...mapActions(["updateTodo"]),
        onSubmit() {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                const newTodo = {
                    id: this.id,
                    status: this.status,
                    title: this.title,
                    description: this.description,
                    deadline: this.date,
                    tags: this.tags.split(", ")
                };
                this.updateTodo(newTodo);
                const parsed = JSON.stringify(this.todos);
                localStorage.setItem("todos", parsed);
                alert("Задача успешно добавлена");
                this.$router.push("/todos");
            }
        }
    },
    computed: {
        ...mapState(["selectedTodo", "todos"])
    },
    mounted() {
        this.id = this.selectedTodo.id;
        this.title = this.selectedTodo.title;
        this.description = this.selectedTodo.description;
        this.date = this.selectedTodo.deadline;
        this.status = this.selectedTodo.status;
        this.tags = this.selectedTodo.tags.join(", ");
    }
};
</script>

<style></style>
