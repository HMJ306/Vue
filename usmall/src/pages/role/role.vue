<template>
  <div>
    <!-- role 角色管理 -->
    <el-button type="primary" @click="willadd">添加</el-button>

    <!-- 添加 -->
    <v-add :info="info" ref="one"></v-add>
    <!-- 列表 -->
    <v-list @edit="edit($event)"></v-list>
  </div>
</template>

<script>
import vList from "./components/list";
import vAdd from "./components/add";
export default {
  components: {
    vList,
    vAdd
  },
  data() {
    return {
      info: {
        isShow: false,
        isAdd: true, //添加按钮
        title: "角色添加"
      }
    };
  },
  methods: {
    //点击添加
    willadd() {
      this.info.isShow = !this.info.isShow;
      this.info.isAdd = true;
      this.info.title = "角色添加";
      this.$refs.one.empty();
    },
    //修改
    edit(id) {
      this.info = {
        isShow: true,
        isAdd: false, //添加按钮
        title: "角色修改"
      };
      this.$refs.one.look(id)
    }
  }
};
</script>

<style></style>
