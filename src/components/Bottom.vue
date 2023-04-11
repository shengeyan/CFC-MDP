<template>
    <div style="margin-bottom: 100px;" size="30">
      <!-- <el-button mb-2 @click="toggle">Switch Language</el-button> -->
      <br />
  
      <el-config-provider :locale="locale" style="align-items: center;">
        <el-table mb-1 :data="[]" />
        <el-pagination :total="100" />
      </el-config-provider>
    </div>
  </template>
  
  <script scope setup>
  import { computed, ref } from 'vue'
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import en from 'element-plus/dist/locale/en.mjs'
  
  const language = ref('zh-cn')
  const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
  
  const toggle = () => {
    language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  }
  </script>