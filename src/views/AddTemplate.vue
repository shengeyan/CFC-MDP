
<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="模板名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="模板业务方">
        <el-input v-model="form.region" />
    </el-form-item>
    <!-- <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item> -->
    <el-form-item label="接受者id类型" >
      <el-radio-group v-model="form.IDType">
        <el-radio label="用户ID" />
        <el-radio label="设备号" />
        <el-radio label="手机号" />
        <el-radio label="openID" />
        <el-radio label="邮箱地址" />
        <el-radio label="企业微信userID" />
        <el-radio label="钉钉userID" />
        <el-radio label="推送通知栏CID" />
        <el-radio label="飞书userID" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="消息类型" >
        <el-radio-group v-model="form.MessageType">
        <el-radio label="通知类" />
        <el-radio label="销售类" />
        <el-radio label="验证码" />
        </el-radio-group>
    </el-form-item>
    <el-form-item label="屏蔽类型" >
        <el-radio-group v-model="form.MaskType">
        <el-radio label="夜间不屏蔽" />
        <el-radio label="夜间屏蔽" />
        <el-radio label="夜间屏蔽(次日早上9点发送)" />
        </el-radio-group>
    </el-form-item>
    <el-form-item label="消息模板类型" >
        <el-radio-group v-model="form.MessageTemplateTyoe">
        <el-radio label="定时" />
        <el-radio label="实时" />
        </el-radio-group>
    </el-form-item>
    <el-form-item label="发送渠道" >
      <el-radio-group v-model="form.SendWay">
        <el-radio label="PUSH通知栏" />
        <el-radio label="短信" />
        <el-radio label="邮箱" />
        <el-radio label="微信服务号(模板信息)" />
        <el-radio label="微信小程序(订阅消息)" />
        <el-radio label="企业微信(应用消息)" />
        <el-radio label="企业微信(机器人)" />
        <el-radio label="钉钉群机器人" />
        <el-radio label="钉钉工作消息" />
        <el-radio label="飞书机器人" />
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  IDType:'',
  MessageType:'',
  MaskType:'',
  MessageTemplateTyoe:'',
  SendWay:'',
})

const a=()=>{
    alert(form.IDType);
}

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
    template {
        width: 100%;
        height: 100%;
    }
</style>

