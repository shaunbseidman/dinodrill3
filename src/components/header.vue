<template lang="html">
  <div id='header'>
    <img src="../assets/g-dino.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.header {
   grid-row: 1 / 2;
   display: grid;
   grid-template-columns: 25% 50% 15%;
   grid-template-rows: 50% 50%;
   padding-top: 10px;
 }
 img {
   grid-row: 1/3;
   grid-column: 1/2;
   height: 100px;
   width: auto;
 }
</style>
