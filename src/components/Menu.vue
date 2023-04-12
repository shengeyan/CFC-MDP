<template>
    <br>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>消息模板管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><el-icon><Plus /></el-icon>新增模板</el-menu-item>
          <el-menu-item index="1-2"><el-icon><Operation /></el-icon>模板列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      
      <el-sub-menu index="2">
        <template #title> 
          <el-icon><icon-menu /></el-icon>
          <span>全链路追踪</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="2-1">用户全链路追踪</el-menu-item>
            <el-menu-item index="2-2">消息模板全链路追踪</el-menu-item>
            <el-menu-item index="2-3">离线明细全链路追踪</el-menu-item>
            <el-menu-item index="2-4">短信下发数据查询</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="3" >
        <template #title>
          <el-icon><document /></el-icon>
          <span>渠道物料管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">素材上传</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
        <el-icon><setting /></el-icon>
          <span>渠道账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1"><el-icon><Plus /></el-icon>新增账号</el-menu-item>
          <el-menu-item index="4-2"><el-icon><Operation /></el-icon>渠道账号</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>登录注册</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">用户登录</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script scope setup>
    import { ref } from 'vue'
    import {
      Document,
      Menu as IconMenu,
      Location,
      Setting,
    } from '@element-plus/icons-vue'
    
    const isCollapse = ref(true)


  </script>
  
  <style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }

  </style>