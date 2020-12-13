<template>
  <div class="box">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <!-- 商品编号 -->
      <el-table-column prop="id" label="商品编号" sortable width="110">
      </el-table-column>
      <!-- 商品名称 -->
      <el-table-column prop="goodsname" label="商品名称" sortable width="110">
      </el-table-column>
      <!-- 价格 -->
      <el-table-column prop="price" label="价格" sortable width="110">
      </el-table-column>
      <!-- 市场价格 -->
      <el-table-column prop="market_price" label="市场价格" sortable width="110">
      </el-table-column>
      <!-- 图片 -->
      <el-table-column label="图片" sortable width="120">
        <template slot-scope="scope">
          <img :src="$preImg + scope.row.img" alt="" />
        </template>
      </el-table-column>
      <!-- 是否新品 -->
      <el-table-column prop="isnew" label="是否新品">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.isnew == 1" width="80">
            是
          </el-button>
          <el-button type="danger" v-else  width="80">否</el-button>
        </template>
      </el-table-column>
      <!-- 是否热卖 -->
      <el-table-column prop="ishot" label="是否热卖">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.ishot == 1">
            是
          </el-button>
          <el-button type="danger" v-else>否</el-button>
        </template>
      </el-table-column>
      <!-- 状态 -->
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1">
            启用
          </el-button>
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column prop="address" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { goodsDel } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      list: "goods/list"
    })
  },
  methods: {
    ...mapActions({
      reqgoodsList: "goods/reqgoodsList"
    }),
    //编辑
    edit(id) {
      this.$emit("edit", id);
    },
    //删除
    del(id) {
      goodsDel({ id: id }).then(res => {
        alert("删除成功");
        this.reqgoodsList();
      });
    }
  },
  mounted() {
    this.reqgoodsList();
  }
};
</script>

<style>
/* el-table-column{
    text-align: center;
} */
img {
  width: 80px;
  height: 80px;
}
</style>
