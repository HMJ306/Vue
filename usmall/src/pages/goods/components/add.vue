<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow" @opened="changeEditor">
      <el-form :model="form">
        <!-- 一级分类 -->
        <el-form-item label="一级分类" :label-width="width">
          <el-select
            v-model="form.first_cateid"
            placeholder="--请选择--"
            @change="changeCate"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 二级分类 -->
        <el-form-item label="二级分类" :label-width="width">
          <el-select v-model="form.second_cateid" placeholder="--请选择--">
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in secondCate"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 商品名称 -->
        <el-form-item label="商品名称" :label-width="width">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 价格 -->
        <el-form-item label="价格" :label-width="width">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 市场价格 -->
        <el-form-item label="市场价格" :label-width="width">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 图片 -->
        <el-form-item label="图片" :label-width="width">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <!-- 商品规格编号 -->
        <el-form-item label="商品规格编号" :label-width="width">
          <el-select
            v-model="form.specsid"
            placeholder="--请选择--"
            @change="changeSpec"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in specList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 商品规格属性 -->
        <el-form-item label="商品规格属性" :label-width="width">
          <el-select v-model="form.specsattr" placeholder="--请选择--" multiple>
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in secondSpec"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 是否新品 -->
        <el-form-item label="是否新品" :label-width="width">
          <template>
            <el-radio v-model="form.isnew" :label="1">是</el-radio>
            <el-radio v-model="form.isnew" :label="2">否</el-radio>
          </template>
        </el-form-item>

        <!-- 是否热卖 -->
        <el-form-item label="是否热卖" :label-width="width">
          <template>
            <el-radio v-model="form.ishot" :label="1">是</el-radio>
            <el-radio v-model="form.ishot" :label="2">否</el-radio>
          </template>
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
        <!-- 商品描述 -->
        <el-form-item label="商品描述" :label-width="width">
          <!-- <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="form.description"
          ></textarea> -->
          <div id="div1" v-if="info.isShow"></div>
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
// 引入富文本
import E from "wangeditor";
import { mapGetters, mapActions } from "vuex";
import { goodsAdd, goodsInfo, goodsEdit } from "../../../util/request";
export default {
  props: ["info"],
  data() {
    return {
      width: "160px",
      imageUrl: "",
      secondCate: [], //用来存储二级分类
      secondSpec: [], //用来存储规格属性
      form: {
        first_cateid: 0,
        second_cateid: 0,
        goodsname: "",
        price: 0,
        market_price: 0,
        img: null,
        description: "",
        specsid: 0,
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      cateList: "Classification/list",
      specList: "specs/list"
    })
  },
  methods: {
    changeCate() {
      this.secondCate = this.cateList.find(
        item => item.id == this.form.first_cateid
      ).children;
    },
    changeSpec() {
      this.form.specsattr = [];
      this.secondSpec = this.specList.find(
        item => item.id == this.form.specsid
      ).attrs;
    },
    ...mapActions({
      reqcateList: "Classification/reqcateList",
      reqspecsList: "specs/reqspecsList"
    }),
    //图片
    changeImg(e) {
      console.log(e);
      var file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      console.log(this.imageUrl);
      this.form.img = file;
    },
    // 添加
    add() {
      // console.log(this.form);
      this.form.description = this.editor.txt.html();
      goodsAdd(this.form).then(res => {
        this.hide();
        // this.empty();
      });
    },
    // 取消
    hide() {
      this.info.isShow = false;
    },
    //修改
    updata() {
      this.form.description = this.editor.txt.html();
      goodsEdit(this.form).then(res => {
        this.hide();
        this.reqcateList();
      });
    },
    // 页面加载完成创建富文本编辑器
    changeEditor() {
      this.editor = new E("#div1");
      this.editor.create();
      this.editor.txt.html(this.form.description)
    },
    //重置
    empty() {
      (this.imageUrl = ""),
        // (this.secondCate = []),
        // (this.secondSpec = []),
        (this.form = {
          first_cateid: 0,
          second_cateid: 0,
          goodsname: "",
          price: 0,
          market_price: 0,
          img: null,
          description: "",
          specsid: 0,
          specsattr: [],
          isnew: 1,
          ishot: 1,
          status: 1
        });
    },
    //查看一条数据
    look(id) {
      goodsInfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        this.imageUrl = this.$preImg + res.data.list.img;
        this.form.specsattr = this.form.specsattr.split(",");
      });
    }
  },
  mounted() {
    this.reqcateList();
    this.reqspecsList();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  border: 1px dashed #ccc;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
