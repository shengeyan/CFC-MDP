<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Top></Top>
      </el-header>
      <el-container>
          <!-- 侧栏 -->
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-container>
          <!-- 主体 -->
          <el-main>
          </el-main>
          <!-- 底部 -->
          <el-footer>
            
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./Menu";
import Top from "./Top.vue"

export default {
  name: 'HelloWorld',
  components:{
    Menu,
    Top,
  },
  props: {
    msg: String
  }
}
</script>

