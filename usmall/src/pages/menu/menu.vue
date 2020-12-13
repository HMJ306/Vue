<template>
  <div>
    <!-- 按钮 -->
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
      //弹框状态
      info: {
        isShow: false,
        isAdd: true,//添加按钮
        title:'菜单添加'
      }
    };
  },
  methods: {
    //点击添加
    willadd() {
      this.info.isShow = !this.info.isShow;
      this.info.isAdd = true;
      this.info.title = '菜单添加';
      this.$refs.one.empty()
    },
    //编辑
    edit(e) {
      this.info = {
        isShow: true,
        isAdd: false,
        title:'菜单修改'
      };
      console.log(this.$refs.one);
      this.$refs.one.look(e);
    }
  },
  components: {
    vAdd,
    vList
  }
};
</script>

<style></style>
