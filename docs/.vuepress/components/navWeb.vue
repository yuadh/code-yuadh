<template>
  <body>
    <!-- yuadh导航 -->
    <link rel="stylesheet" href="/style/index.css">
    <link rel="stylesheet" href="/style/main.css">
    <div class="nav" style="margin-top:-90px;">
      <main class="nav-main">
          <div class="nav-page clearfix">
              <!-- <h2 class="nav-selects ">临时项目</h2>
              <div class="page-desc">暂时需要学习的技术模块</div> -->
              <div class="page-selects" style="margin-top:-20px">
                  <div 
                   v-for="(item,index) in datList" 
                   :key="index"
                   class="page-selects-card">
                      <a :href="item.item_a_href" :title="item.item_a_title" target="_blank">
                          <!-- <img class="card-avatar" src="#" alt="MDN"> -->
                          <svg class="icon" aria-hidden="true">
                              <use :xlink:href="item.item_icon_href"></use>
                          </svg>
                          <div class="card-info">
                              <span class="card-name">{{item.item_title}}</span>
                              <span class="card-desc" title="官方web综合文档">{{item.item_desc}}</span>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </main>
    </div>
    <script src="/resource/font/iconfont.js"></script>
  </body>
</template>

<script>
import dataList from './dataArray.js'
export default {
  data(){
    return{
      datList:dataList.myWebItems
    }
  },
}
</script>

<style>

</style>