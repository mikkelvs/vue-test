<template>

    <label>
        {{ label }}
        <input
            type="checkbox"
            v-on:change="$emit('input', $event.target.checked)"><br />
            
    </label>

</template>

<script>

export default {
    name: 'Checkbox',
    props: {
        label: String
    }
}

</script>