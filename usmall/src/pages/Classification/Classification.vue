<template>
  <div>
    <!-- Classification 商城分类 -->
    <!-- 添加按钮 -->
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
  components: {
    vAdd,
    vList
  },
  data() {
    return {
      info: {
        isShow: false,
        title: "商品分类添加",
        isAdd: true
      }
    };
  },
  methods: {
    willadd() {
      this.info.isShow = !this.info.isShow;
      this.info.isAdd = true;
      this.info.title = "商品分类添加";
      this.$refs.one.empty()
    },
    edit(id) {
      this.info.isShow = true;
      this.info.isAdd = false;
      this.info.title = "商品分类修改";
      this.$refs.one.look(id)
    }
  }
};
</script>

<style></style>
