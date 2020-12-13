<template>
  <div class="box">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <!-- 角色编号 -->
      <el-table-column prop="id" label="角色编号" sortable width="180">
      </el-table-column>
      <!-- 角色名称 -->
      <el-table-column prop="rolename" label="角色名称" sortable width="180">
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
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { roleDel } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      list: "role/list"
    })
  },
  methods: {
    ...mapActions({
      reqroleList: "role/reqroleList"
      
    }),
    //删除
    del(id) {
      roleDel({ id: id }).then(res => {
          alert('删除成功')
        this.reqroleList();
      });
    },
    //编辑
    edit(id) {
      this.$emit("edit", id);
    }
  },
  mounted() {
    this.reqroleList();
  }
};
</script>

<style></style>
