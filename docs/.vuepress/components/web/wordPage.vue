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
import {day01, day02,day03,h200_1,h200_2} from './dat/allWords'
import {mday01,mday02,mday03,mh200_1,mh200_2} from './dat/allMean'
export default {
  props:{
    page:{
      type:Number,
      default:0
    },
  },
  data(){
    return{
      dat:'',
      meanDat:'',
      pageArray:[day01,day02,day03,h200_1,h200_1],
      pageM:[mday01,mday02,mday03,mh200_1,mh200_1]
    }
  },
  components:{
    words
  },
  methods:{
  },
  created(){
    console.log(this.page)
    this.dat = this.pageArray[this.page]
    this.meanDat = this.pageM[this.page]
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