<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <!-- 菜单名称 -->
        <el-form-item label="菜单名称" :label-width="width">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 上级菜单 -->
        <el-form-item label="上级菜单" :label-width="width">
          <el-select
            v-model="form.pid"
            placeholder="--请选择--"
            @change="changePid"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态添加数据 -->
            <el-option
              v-for="item in menuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 菜单类型 -->
        <el-form-item label="菜单类型" :label-width="width">
          <template>
            <el-radio v-model="form.type" :label="1" disabled>目录</el-radio>
            <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
          </template>
        </el-form-item>
        <!-- 菜单图标 -->
        <el-form-item
          label="菜单图标"
          :label-width="width"
          v-if="form.type == 1"
        >
          <el-select v-model="form.icon" placeholder="请选择活动区域">
            <el-option label="星星" value="el-icon-star-on">
              <i class="el-icon-star-on"></i>
            </el-option>
            <el-option label="人物" value="el-icon-user-solid">
              <i class="el-icon-user-solid"></i>
            </el-option>
            <el-option label="铃铛" value="el-icon-message-solid">
              <i class="el-icon-message-solid"></i>
            </el-option>
            <el-option label="书签" value="el-icon-collection-tag">
              <i class="el-icon-collection-tag"></i>
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 菜单地址 -->
        <el-form-item label="菜单地址" :label-width="width" v-else>
          <el-select v-model="form.url" placeholder="--请选择--">
            <el-option
              v-for="item in indexRouter"
              :key="item.path"
              :label="'/' + item.path"
              :value="item.name"
            ></el-option>
          </el-select>
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
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添加</el-button
        >
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { indexRouter } from "../../../router/index";
import { menuAdd, menuListOne, menuEdit } from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      menuList: "menu/list"
    })
  },
  data() {
    return {
      width: "160px",
      form: {
        pid: 0, //上级分类
        title: "", //菜单名称
        icon: "", //图标
        type: 1, //类型
        url: "", //菜单地址
        status: 1 //状态
      },
      //路由
      indexRouter
    };
  },
  methods: {
    ...mapActions({
      reqmenuList: "menu/reqmenuList"
    }),
    //取消
    hide() {
      this.info.isShow = false;
    },
    //添加
    add() {
      menuAdd(this.form).then(res => {
        this.hide();
        this.reqmenuList();
      });
    },
    //重置
    empty() {
      this.form = {
        pid: 0, //上级分类
        title: "", //菜单名称
        icon: "", //图标
        type: 1, //类型
        url: "", //菜单地址
        status: 1 //状态
      };
    },
    //修改type值
    changePid() {
      this.form.type = this.form.pid == 0 ? 1 : 2;
    },
    //查看一条数据
    look(id) {
      menuListOne({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
      });
    },
    //点击修改
    updata() {
      menuEdit(this.form).then(res => {
        this.hide();
        this.reqmenuList();
      });
    }
  }
};
</script>

<style></style>
