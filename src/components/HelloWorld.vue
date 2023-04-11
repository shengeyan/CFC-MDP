<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Top></Top>
      </el-header>
      <el-container style="width: 100%;min-height: 800px;">
          <!-- 侧栏 -->
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-container>
          <!-- 主体 -->
          <el-main>
            <el-empty description="description" />
          </el-main>
          <!-- 底部 -->
          <el-footer>
            <Bottom></Bottom>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./Menu";
import Top from "./Top.vue"
import Bottom from "./Bottom.vue"

export default {
  name: 'HelloWorld',
  components:{
    Menu,
    Top,
    Bottom
  },
  props: {
    msg: String
  }
}
</script>

