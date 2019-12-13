<template>

    <section>
        <label v-for="(option, key) in options" :key="key" for="option.id">{{ option.label }}
            <input type="checkbox" :id="option.id" :value="option.value" v-model="selectedCheckboxes"><br />
        </label>
        <!-- <checkbox v-for="(option, key) in options" v-bind:key="key" :value="option.value" v-model="selectedCheckboxes" :label="option.label"></checkbox> -->
    </section>

</template>

<script>    
// import Checkbox from './Checkbox.vue';

export default {
    name: 'Checkboxes',
    // components: { Checkbox },
    props: {
        options: Array
    },
    data() {
        return {
            selectedCheckboxes: []
        }
    },
    watch: {
        selectedCheckboxes() {
            this.$emit('input', this.selectedCheckboxes);
        }
    },
    mounted() {
        this.selectedCheckboxes = this.$attrs.value;
        
    }
}

</script>