<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="规格名称" :label-width="width">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="规格属性"
          :label-width="width"
          v-for="(item, index) in arrAttr"
          :key="index"
        >
          <el-row>
            <el-col :span="16">
              <el-input v-model="item.value" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" v-if="index == 0" @click="addAttr"
                >新增规格属性</el-button
              >
              <el-button type="danger" v-else @click="delAttr(index)"
                >删除</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>

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
          >添 加</el-button
        >
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { specsAdd, specsInfo, specsEdit } from "../../../util/request";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      width: "160px",
      form: {
        specsname: "",
        attrs: "",
        status: 1
      },
      arrAttr: [
        {
          value: ""
        }
      ]
    };
  },

  methods: {
    ...mapActions({
      reqspecsList: "specs/reqspecsList"
    }),
    //删除
    delAttr(index) {
      this.arrAttr.splice(index, 1);
    },
    //新增属性
    addAttr() {
      this.arrAttr.push({
        value: ""
      });
    },
    add() {
      this.form.attrs = JSON.stringify(this.arrAttr.map(item => item.value));
      specsAdd(this.form).then(res => {
        this.hide();
        this.reqspecsList();
      });
    },
    //修改
    update() {
      this.form.attrs = JSON.stringify(
        this.arrAttr.map(item => {
          return item.value;
        })
      );
      specsEdit(this.form).then(res => {
        this.hide();
        this.reqspecsList();
      });
    },
    hide() {
      this.info.isShow = false;
    },
    look(id) {
      specsInfo({ id: id }).then(res => {
        console.log(res);
        this.form = res.data.list[0];
        this.form.id = id;
        this.arrAttr = JSON.parse(this.form.attrs).map(item => {
          return { value: item };
        });
      });
    }
  },
  mounted() {}
};
</script>
<style scoped></style>
