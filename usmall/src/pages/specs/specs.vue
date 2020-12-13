<template>
  <div>
    <!-- specs 商品规格 -->
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
        isAdd: true,
        title: "规格添加"
      }
    };
  },
  methods: {
    willadd() {
      this.info.isShow = !this.info.isShow;
      this.info.isAdd = true;
      this.info.title = "规格添加";
    },
    edit(id) {
      this.info = {
        isShow: true,
        isAdd: false,
        title: "规格修改"
      };
      this.$refs.one.look(id)
    }
  },
  mounted() {}
};
</script>
<style scoped></style>
