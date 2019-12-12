<template>

    <section>
        <checkbox v-for="(option, key) in options" v-bind:key="key" v-model="option.value" :label="option.label"></checkbox>
    </section>

</template>

<script>
import Checkbox from './Checkbox.vue';

export default {
    name: 'Checkboxes',
    components: { Checkbox },
    props: {
        options: Array
    },
    data() {
        return {
            selectedCheckboxes: null
        }
    }
}

</script>