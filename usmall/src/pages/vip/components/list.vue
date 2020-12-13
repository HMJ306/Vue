<template>
  <div>
    <!-- list -->
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <!-- 用户编号 -->
      <el-table-column prop="roleid" label="用户编号" sortable width="180">
      </el-table-column>
      <!-- 昵称 -->
      <el-table-column prop="username" label="昵称" sortable width="180">
      </el-table-column>
      <!-- 手机号 -->
      <el-table-column prop="rolename" label="手机号" sortable width="180">
      </el-table-column>
      <!-- 状态 -->
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <!-- 操作 按钮 -->
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)">
            编辑
          </el-button>
          <!-- <el-button type="danger" @click="del(scope.row.uid)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import{mapGetters,mapActions}from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
      ...mapGetters({
          list:'vip/list'
      })
  },
  methods: {
      ...mapActions({
          reqvipList:'vip/reqvipList'
      })
  }
};
</script>

<style></style>
