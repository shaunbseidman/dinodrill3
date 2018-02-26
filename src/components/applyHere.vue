<template lang="html">
  <div id='applyForm'>
  <form>
    <label>Apply Here: </label>
    <textarea id="application-text" rows="8" cols="100" v-model="applyText"></textarea><br />
    <input id="submit" type="submit" value="Submit" @click.prevent.reset="submitApplication" />
  </form>
  <p id="message">{{ message }}</p>
</div>

</template>

<script>
export default {
  name: 'applyForm',
  props: {
    previewText: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      applyText: '',
      message: ''
    }
  },
  watch: {
    applyText(newText) {
      this.previewText(newText)
    }
  },
  methods: {
    submitApplication() {
      this.message = 'Your application was submitted!'
    }
  }
}
</script>

<style lang="css">
form {
  display: block;
}
</style>
