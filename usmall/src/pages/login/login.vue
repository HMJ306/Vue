<template>
  <div class="login">
    <div class="wrap">
      <h1>登录</h1>
      <div class="oIn"><input type="text" v-model="user.username"/></div>
      <div class="oIn"><input type="text" v-model="user.password"/></div>
      <div class="oIn btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import {userlogin} from '../../util/request'
import {mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      user:{
        username:'',
        password:''
      }
    }
  },
  methods: {
    ...mapActions({
      requserlogin:'user/requserlogin'
    }),
    login(){
      userlogin(this.user).then(res=>{
        if(res.data.code==200){
          this.requserlogin(res.data.list)
          this.$router.push("/index/home")
        }else{
          alert(res.data.msg)
        }
        
      })
      // this.$router.push("/index/home")
    }
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to right, #563443, #2f3d60);
}
.wrap {
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  margin: 100px auto;
  text-align: center;
  padding-top: 30px;
  font-size: 18px;
}

.oIn {
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 20px auto;
  border-radius: 5px;
}
.oIn input {
  width: 100%;
  height: 100%;
  border: #dcdfe6 solid 1px;
  border-radius: 5px;
}
.btn{
  color: #fff;
  background-color: #409eff;
}
</style>
