<template>
    <div class="add-todo-page__form">
        <form @submit.prevent="onSubmit">
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
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            title: "",
            date: "",
            description: "",
            validateDescription: true,
            tags: "",
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
        onSubmit() {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                const newTodo = {
                    id: Date.now(),
                    status: "work",
                    title: this.title,
                    description: this.description,
                    deadline: this.date,
                    tags: this.tags.split(", ")
                };
                this.addTodo(newTodo);
                const parsed = JSON.stringify(this.todos);
                localStorage.setItem("todos", parsed);
                alert("Задача успешно добавлена");
                this.resetForm();
                this.$router.push("/todos");
            }
        },
        resetForm() {
            this.title = "";
            this.description = "";
            this.date = "";
            this.tags = "";
            this.$v.$reset();
        },
        ...mapActions(["addTodo"])
    },
    computed: {
        ...mapState(["todos"])
    }
};
</script>

<style></style>
