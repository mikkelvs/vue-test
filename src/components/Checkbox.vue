<template>

    <label>
        {{ label }}
        <input
            type="checkbox"
            :value="value"
            v-on:change="$emit('input', $event.target.value)"><br />
    </label>

</template>

<script>

export default {
    name: 'Checkbox',
    props: {
        value: String,
        label: String
    }
}

</script>