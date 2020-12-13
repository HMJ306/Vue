<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <!-- 角色名称 -->
        <el-form-item label="角色名称" :label-width="width">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 角色权限 -->
        <el-form-item label="角色权限" :label-width="width">
          <el-tree
            :data="menulist"
            show-checkbox
            node-key="id"
            ref="tree"
            :props="{ children: 'children', label: 'title' }"
          >
            <!-- :node-key="menulist.id" -->
          </el-tree>
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
import { mapActions, mapGetters } from "vuex";
import { roleAdd, roleListOne, roleEdit } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      menulist: "menu/list"
    })
  },
  props: ["info"],
  data() {
    return {
      width: "160px",
      form: {
        rolename: "",
        menus: [],
        status: 1
      },
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    //添加
    add() {
      console.log(this.$refs.tree.getCheckedKeys());
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      roleAdd(this.form).then(res => {});
      this.hide();
      this.reqroleList();
      this.empty();
    },
    //修改
    updata() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      roleEdit(this.form).then(res => {
        this.hide();
        this.reqroleList();
      });
    },
    //取消
    hide() {
      this.info.isShow = false;
    },
    //重置
    empty() {
      this.form = {
        rolename: "",
        menus: [],
        status: 1
      };
      // this.form.menus = this.$refs.tree.setCheckedKeys([]);
      this.$nextTick(() => {
        this.form.menus = this.$refs.tree.setCheckedKeys([]);
      });
    },
    look(id) {
      roleListOne({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.menus = this.$refs.tree.setCheckedKeys(
          JSON.parse(res.data.list.menus)
        );
        this.form.id = id;
      });
    },
    ...mapActions({
      reqmenuList: "menu/reqmenuList",
      reqroleList: "role/reqroleList"
    })
  },
  mounted() {
    if (this.menulist <= 0) {
      this.reqmenuList();
    }
  }
};
</script>

<style></style>
