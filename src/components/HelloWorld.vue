<template>
  <div>
    <checkboxes :options="options" v-model="selectedCheckboxes"></checkboxes>
  </div>
</template>

<script>
import Checkboxes from './Checkboxes.vue';

export default {
  name: 'HelloWorld',
  components: { Checkboxes },
  data() {
    return {
      options: [
        {
          value: 1,
          name: 'title-1',
          label: 'Checkbox 1 Title'
        },
        {
          value: 2,
          name: 'title-2',
          label: 'Checkbox 2 Title'
        }
      ],
      selectedCheckboxes: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
