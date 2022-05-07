<template>
  <div class="container" :style="{'background-color':color}">
    <!-- 功能选择 -->
    <div class="topSwitch">
      <!-- title -->
      <div class="title">Page1</div>
      <!-- tip -->
      <div class="tip">概况:<span> 0/15</span>!</div>
      <!-- buttons -->
      <div class="myBtns" style="display:flex">
        <myBtn title="A"/>
        <myBtn title="B"/>
        <myBtn title="C"/>
      </div>
    </div>
    <!-- main -->
    <div class="main">
      <div v-for="i in 15" :key="i" class="aword">
        <a href="javascript:;">word</a>
        <!-- <a href="javascript:;"><em>n.</em>单词</a> -->
        <input type="text" tabindex="1"/>
      </div>
    </div>
  </div>
</template>

<script>
import myBtn from './myBtn.vue'
export default {
  components:{
    myBtn
  },
  props:{
    color:{
      type:String,
      default:'rgba(34,32,46,.1)'
    }
  }
}
</script>

<style lang="less">
  .container{
    .hoverShadow();
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0px 8px 9px rgba(0,0,0,0.2) ;
    border-radius: 14px;
    .topSwitch{
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