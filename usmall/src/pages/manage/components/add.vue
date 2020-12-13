<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <!-- 所属角色 -->
        <el-form-item label="所属角色" :label-width="width">
          <el-select v-model="form.roleid" placeholder="--请选择--">
            <el-option label="--请选择--" :value="0"></el-option>
            <!-- 动态添加数据 -->
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 管理员名称 -->
        <el-form-item label="管理员名称" :label-width="width">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" :label-width="width">
          <el-input v-model="form.password" autocomplete="off"></el-input>
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
      <!-- 按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添加</el-button
        >
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { userAdd, userInfo, useredit } from "../../../util/request";
export default {
  props: ["info"],
  data() {
    return {
      width: "140px",
      form: {
        roleid: 0, //角色编号
        username: "", //管理员名称
        password: "", //密码
        status: 1
      }
    };
  },
  methods: {
    // 添加
    add() {
      userAdd(this.form).then(res => {
        this.hide();
        this.requserList();
        this.requserCount();
      });
    },
    //修改
    updata() {
      useredit(this.form).then(res => {
        this.requserList();
        this.hide();
      });
    },
    // 取消
    hide() {
      this.info.isShow = false;
    },
    ...mapActions({
      reqroleList: "role/reqroleList",
      requserList: "manage/requserList",
      requserCount: "manage/requserCount"
    }),
    //重置
    empty() {
      this.form = {
        roleid: 0, //角色编号
        username: "", //管理员名称
        password: "", //密码
        status: 1
      };
    },
    //查看一条数据
    look(id) {
      userInfo({ uid: id }).then(res => {
        this.form = res.data.list;
        (this.form.password = ""), (this.form.uid = id);
      });
    }
  },
  computed: {
    ...mapGetters({
      roleList: "role/list"
    })
  },
  mounted() {
    if (this.roleList.length <= 0) {
      this.reqroleList();
    }
  }
};
</script>

<style spoced>
el-form-item el-input {
  width: 100px;
}
</style>
