<template>
    <el-page-header :icon="null">
      <template #content>
        <div class="flex items-center">
          <!-- <el-avatar
            :size="32"
            class="mr-3"
            shape="square"
            src="../assets/logo.png"
          /> -->
          <el-image style="width: 100px; height: 50px;align-items: center;" :src="url" fit="fill" />
          <span class="text-large font-600 mr-3"> CFC </span>
          <span class="text-sm mr-2" style="color: var(--el-text-color-regular);">
                Message Distribute Plantform
          </span>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button type="primary" class="ml-2">退出</el-button>
        </div>
      </template>
    </el-page-header>
</template>
  
<script scope setup>
    const url='https://s1.ax1x.com/2023/04/11/ppOptOJ.png'
</script>

<style scoped>

</style>