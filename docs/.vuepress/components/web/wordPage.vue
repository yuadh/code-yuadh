<template>
  <div>
    <h1>A4单词便利贴</h1>
    <div class="word-page">
      <div class="page1">
        <words/>
      </div>
      <div class="page1">
        <words/>
      </div>
      <div class="page1">
        <words/>
      </div>
      <div class="page1">
        <words/>
      </div>
    </div>
  </div>
</template>

<script>
import words from './components/words.vue'
import {day01} from './components/words'
export default {
  components:{
    words
  }
}
</script>


<style lang="less">
  .word-page{
    display: flex;
    flex-wrap: wrap;
    .page1{
      margin-left: 50px;
      margin-top:50px;
      height:500px;
      width: 500px;
      opacity: .7;
    }
  }
</style>