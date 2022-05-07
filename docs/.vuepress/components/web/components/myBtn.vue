<template>
  <div class="myBtn">
    {{title}}
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'测试'
    }
  }
}
</script>

<style lang="less">
  .myBtn{
    .hoverShadow();
    margin-right: 10px;
    text-align: center;
    line-height: 40px;
    width: 50px;
    height: 40px;
    background-color: rgb(34, 159, 82);
    border-radius: 10%;
    transform: all .5s;
    color: rgb(211, 201, 201);
    &:hover{
      opacity: .8;
      cursor: pointer;
    }
  }
  .hoverShadow(){//鼠标经过阴影效果
    transition: all .5s;
    &:hover{
      transform: translate3d(0,-3px,0);
      box-shadow: 0 3px 8px rgba(0,0,0,0.2);
    }
  }
</style>