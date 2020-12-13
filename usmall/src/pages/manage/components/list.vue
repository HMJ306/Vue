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
      <!-- 用户编号 -->
      <el-table-column prop="roleid" label="用户编号" sortable width="180">
      </el-table-column>
      <!-- 用户名 -->
      <el-table-column prop="username" label="用户名" sortable width="180">
      </el-table-column>
      <!-- 所属角色 -->
      <el-table-column prop="rolename" label="所属角色" sortable width="180">
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
          <el-button type="primary" @click="edit(scope.row.uid)"
            >编辑</el-button
          >
          <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size="size"
      @current-change="changepage"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { userDel } from "../../../util/request";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      list: "manage/list",
      total: "manage/total",
      page: "manage/page",
      size: "manage/size"
    })
  },
  methods: {
    ...mapActions({
      requserList: "manage/requserList",
      requserCount: "manage/requserCount",
      reqPages: "manage/reqPages"
    }),
    //编辑
    edit(id) {
      this.$emit("edit", id);
    },
    //删除
    del(id) {
      userDel({ uid: id }).then(res => {
        alert("删除成功");
        this.requserList();
        this.requserCount();
        this.reqPages(1)
      });
    },
    changepage(p) {
      console.log(p);
      this.reqPages(p);
    }
  },
  mounted() {
    this.requserList();
    this.requserCount();
    console.log(this.total);
  }
};
</script>

<style></style>
