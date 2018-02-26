<template lang="html">
<div class="jobDetails">
  <section id="job-details">
    <h2>Job Details</h2>
    <h4>{{jobData.title}}</h4>
    <p>
      {{jobData.description}}
    </p>
  </section>

</div>
</template>

<script>
export default {
  name: 'jobDetails',
  props: ['jobData']
}
</script>

<style lang="css">
</style>
