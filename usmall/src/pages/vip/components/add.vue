<template>
  <div>
    <!-- add -->
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <!-- 手机号 -->
        <el-form-item label="手机号" :label-width="width">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 昵称 -->
        <el-form-item label="昵称" :label-width="width">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" :label-width="width">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 状态 -->
        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
       <div slot="footer" class="dialog-footer">
          <el-button @click="hide">取 消</el-button>
          <el-button type="primary" @click="update">修 改</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      width: "180px",
      form: {
        specsname: ""
      }
    };
  },
  methods: {
    hide() {},
    update() {}
  }
};
</script>

<style></style>
