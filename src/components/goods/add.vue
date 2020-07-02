<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 提示区域 -->
            <el-alert
                    :closable="false"
                    title="添加商品信息"
                    type="info"
                    center
                    show-icon>
            </el-alert>
            <!-- 步骤条区域 -->
            <el-steps :space="200" :active="1" finish-status="success">
                <el-step title="已完成"></el-step>
                <el-step title="进行中"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="less" scoped>

</style>
