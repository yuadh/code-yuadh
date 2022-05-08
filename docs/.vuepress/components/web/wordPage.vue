<template>
  <div>
    <h1>A4单词便利贴</h1>
    <div class="word-page">
      <div class="page1" v-for="i in 6" :key="i">
        <words 
         :dat="dat[i-1]"
         :meanDat="meanDat[i-1]"/>
      </div>
    </div>
  </div>
</template>

<script>
import words from './components/words.vue'
import {day01} from './dat/allWords'
import {day01 as meanDat} from './dat/allMean'
export default {
  data(){
    return{
      dat:day01,
      meanDat:meanDat
    }
  },
  components:{
    words
  },
  methods:{
  }
}
</script>
<style  lang="less" > 
  .word-page{
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding-right: 40px;
    padding-bottom: 40px;
    // border: 1px solid red;
    .page1{
      z-index: 4;
      margin-left: 40px;
      margin-top:40px;
      height:500px;
      width: 500px;
      opacity: .7;
    }
    &::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background:  url('../../public/img/mb-bk2.jpg') no-repeat center;
      opacity: .1;
    }
  }
</style>