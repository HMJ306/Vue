<template>
  <div>
    <!-- vip -->

    <v-add :info="info"></v-add>
    <v-list></v-list>
  </div>
</template>

<script>
import vAdd from "./components/add";
import vList from "./components/list";
export default {
  components: {
    vList,vAdd
  },
  data() {
    return {
      info:{
        // isShow:false
        isShow:true
      }
    }
  },
};
</script>

<style></style>
