<template>
  <select class="form-select" :value="filter" @change="updateSelect">
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        filter: {
            type: String,
            required: true
        }
    },
    methods: {
        updateSelect(e) {
            this.$emit('change', e.target.value)
        }
    }
}
</script>

<style>

</style>