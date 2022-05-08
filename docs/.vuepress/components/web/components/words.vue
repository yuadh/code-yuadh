<template>
  <div class="container" :style="{'background-color':color}">
    <!-- 功能选择 -->
    <div class="topSwitch">
      <!-- title -->
      <div @click="mode01" class="title">Page1</div>
      <!-- tip -->
      <div class="tip">概况:<span> {{testRightNum}}/15</span>!</div>
      <!-- buttons -->
      <div class="myBtns" style="display:flex">
        <myBtn @click.native="mode01" title="A"/>
        <myBtn @click.native="mode02" title="B"/>
        <myBtn @click.native="mode03" title="C"/>
      </div>
    </div>
    <!-- main -->
    <div class="main">
      <div v-for="(i,index) in dat" :key="index" class="aword">
        <a v-if="wordsShow" :href="`https://dict.cn/${i}`" target="_blank">{{i}}</a>
        <a v-if="meansShow" :href="`https://dict.cn/${i}`" target="_blank"><em>n.</em>{{meanDat[index]}}</a>
        <input v-if="testShow" type="text" tabindex="1"  @blur="wordCheck($event,i,index)"/>
      </div>
    </div>
  </div>
</template>

<script>
import myBtn from './myBtn.vue'
// import axios from 'axios'
// import {loadDat} from '../utils/loadDat'
export default {
  components:{
    myBtn
  },
  data(){
    return{
      wordsShow:true,
      meansShow:true,
      testShow:false,
      testRightArray:[
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false
      ],
      testRightNum:0
    }
  },
  props:{
    color:{
      type:String,
      default:'rgba(34,32,46,.1)'
    },
    dat:{
      type:Array,
      required:true
    },
    meanDat:{
      type:Array,
      required:true
    }
  },
  created () {
  },
  methods: {
    mode01(){
      this.testRightNum = 0
      console.log('a模式')
      this.wordsShow = true
      this.meansShow = true
      this.testShow = false
    },
    mode02(){
      this.testRightNum = 0
      this.wordsShow = false
      this.meansShow = true
      this.testShow = true
    },
    mode03(){
      this.testRightNum = 0
      this.wordsShow = true
      this.meansShow = false
      this.testShow = true
    },
    wordCheck(value,compWord,index){
      const userInp = value.target.value
      if(userInp===compWord){
        this.testRightArray[index]=true
      }else{
        this.testRightArray[index]=false
      }
      // 更新testNum个数
      this.testRightNum = this.testRightArray.filter(obj=>obj===true).length
    }
  }
}
</script>

<style  lang="less">
  .container{
    .hoverShadow();
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0px 8px 9px rgba(0,0,0,0.2) ;
    border-radius: 14px;
    .topSwitch{
      user-select: none;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      z-index: 4;
      position: absolute;
      top: 0;
      left: 0;
      height: 20%;
      width: 100%;
      background: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-size: 42px;
        color: #ccc;
        font-family: 'PingFang SC';
        margin-left: 24px;
        &:hover{
          cursor: pointer;
        }
      }
      .tip{
        font-size: 22px;
        color: #ccb8b4;
        font-family: 'PingFang SC';
        span{
          margin:0 4px;
          color: #e1464e;
        }
      }
    }
    .main{
      position: absolute;
      top: 20%;
      left: 0px;
      width: 100%;
      height:80%;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      // align-content: flex-start;
      .aword{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        // display: inline-block;
        width: 33.3333%;
        height: 20%;
        // border:1px solid aqua;
        a{
          line-height: 1;
          display: inline-block;
          color: #1AAD19;
          // border:1px solid aqua;
          &:last-of-type{
            color: #6f8f5f;
            margin-top: 14px;
          }
        }
        input{
          width: 140px;
          height: 32px;
          border-bottom: 1px solid #a46767;
          color: #666;
          margin-top: 13px;
          border-radius: 4px;
          text-align: center;
        }
      }
    }
  }
  // 公用样式和效果
  * {
    box-sizing: border-box;
  }
  ul,
  h1,
  h2,
  h3,
  h4,
  p,
  dl,
  dd{
    padding: 0;
    margin: 0;
  }
  .hoverShadow(){//鼠标经过阴影效果
    transition: all .5s;
    &:hover{
      transform: translate3d(0,-3px,0);
      box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  }
  @keyframes fadeEle{
    0%{opacity: 1;}
    50%{opacity: .5;}
    100%{opacity: 0;}
  }
  input[type="text"],
  input[type="search"],
  input[type="password"],
  input[type="checkbox"]{
    padding: 0;
    outline: none;
    border: none;
    -webkit-appearance: none;
    &::placeholder{
      color:#ccc;
    }
  }
  a{
    text-decoration: none;
    color:#333;
    outline: none;
  }
}
</style>