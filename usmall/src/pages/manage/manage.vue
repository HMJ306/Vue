<template>
  <div>
    <!-- manage 管理员管理 -->
    <el-button type="primary" @click="willadd">添加</el-button>
    <!-- 添加 -->
    <v-add :info="info" ref="one"></v-add>
    <!-- 列表 -->
    <v-list @edit="edit($event)"></v-list>
  </div>
</template>

<script>
import vAdd from "./components/add";
import vList from "./components/list";
export default {
  data() {
    return {
      info: {
        isShow: false,
        title: "管理员添加",
        isAdd: true
      }
    };
  },
  methods: {
    //添加
    willadd() {
      this.info.isShow = !this.info.isShow;
      this.info.title = "管理员添加";
      this.info.isAdd = true;
      this.$refs.one.empty()
    },
    //编辑
    edit(id) {
      this.info.isShow = true;
      this.info.title = "管理员修改";
      this.info.isAdd = false;
      this.$refs.one.look(id);
    }
  },
  components: {
    vAdd,
    vList
  }
};
</script>

<style></style>
