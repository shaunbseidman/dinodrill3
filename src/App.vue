<template>
<div id="app">
  <headerStuff></headerStuff>
  <main>
    <jobDetails :jobData="jobDetails"></jobDetails>
    <apply :previewText="previewText"></apply>
    <button id="preview-toggle" @click="togglePreview = !togglePreview">Show Preview</button>
    <preview :text="applyText" :class='{hidden : togglePreview}'></preview>
  </main>
  <footerStuff></footerStuff>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  name: 'app',
  data() {
    return {
      togglePreview: true,
      applyText: '',
      jobDetails: {}
    }
  },
  created() {
    fetch('../../static/listing.json')
      .then(response => response.json())
      .then(response => {
        this.jobDetails = response
      })
  },
  methods: {
    previewText(text) {
      this.applyText = text;
    }
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1B997A;
  margin-top: 60px;
  margin: 0 30px 0 30px;
  padding: 0;
  font-family: sans-serif;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}

main {
  grid-row: 2/3;
  width: 70%;
  margin: 0 auto;
  padding: 10px;
}

small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}

a {
  color: #C261CC;
  text-decoration: none;
}

.hidden {
  display: none;
}
</style>
