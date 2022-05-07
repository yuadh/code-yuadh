<template>
  <div class="yxCarousel" @mouseenter="stop()" @mouseleave="start()">
    <!-- 轮播图组件封装 -->
    <ul class="carouselBody">
      <li v-for="(obj,i) in 5" :key="i" class="carouselItem" :class="{fade:index===i}">
        <RouterLink to='/'>
          <img :src="require(`./imgs/${obj}.png`)">
        </RouterLink>
      </li>
    </ul>
    <!-- 按键 -->
    <a @click="toggle(-1)" href="javascript:;" class="carousel-btn prev"><i class="iconfont icon-angle-left"></i></a>
    <a @click="toggle(1)" href="javascript:;" class="carousel-btn next"><i class="iconfont icon-angle-right"></i></a>
    <!-- 指示器 -->
    <div class="carousel-indicator">
      <span @click="index=i" v-for="(obj,i) in 5" :key=i :class="{active:index===i}"></span>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      timer:null,
      index:0,
      duration:3000,
      autoPlay:true
    }
  },
  methods: {
    toggle(step){
      const newIndex = this.index+step
      if(newIndex<0){
        this.index = 4
        return 
      }
      if(newIndex>4){
        this.index = 0
        return 
      }
      this.index = newIndex
    },
    autoPlayFn(){
      clearInterval(this.timer)
      this.timer = setInterval(()=>{
        this.index++
        if(this.index>=5){
          this.index = 0
        }
      },3000)
    },
    //开始轮播
    start(){
      if(this.autoPlay){
        this.autoPlayFn()
      }
    },
    //停止轮播
    stop(){
      if(this.timer){
        clearInterval(this.timer)//如果有定时器就停止定时
      }
    }
  }
}
</script>
<style scoped lang="less">

// 公共基础样式
* {
  box-sizing: border-box;
}

html{
  height: 100%;
  font-size: 14px;
}
body{
  height: 100%;
  color:#333;
  min-width: 1240px;
  font:1em/1.4 'Microsoft Yahei', 'PingFang SC', 'Avenir', 'Segoe UI', 'Hiragino Sans GB', 'STHeiti', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif
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

a{
  text-decoration: none;
  color:#333;
  outline: none;
}

i{
  font-style: normal;
}


img{
  max-width: 100%;
  min-width: 100%;
  vertical-align: middle;
}

ul{
  list-style: none;
}
// 轮播图样式
.yxCarousel{
  // 填满父级容器
  // background-color: aqua;
  width: 100%;
  height: 100%;
  // 当父级容器小于这个值时会超出容器的大小
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel{
    &Body{
      width: 100%;
      height: 100%;
    }
    &Item{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity .4s linear;//直线曲线运动
      &.fade{
        opacity: 1;
        z-index: 1;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-indicator{
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span{
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span{//less 剩余元素操作
          margin-left: 12px;
        }
        &.active{
          background: #fff;
        }       
      }
    }
    &-btn{
      width: 44px;
      height: 44px;
      background-color: rgba(0,0,0,0.2);
      border-radius: 50%;
      color: #fff;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all .5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right:20px;
      }
    }
  }
  &:hover{
    .carousel-btn{
      opacity: 1;
    }
  }
}
</style>