<template>
  <!-- 用户登录 -->
  <div class="login">
    <div class="loginImg">
      <img
        src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.3c33210.png.webp"
        alt
      />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="userName"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <router-link class="onte" :to="{name:'Register'}">没有账号，需要注册</router-link>
  </div>
</template>

<script>
import { setToken } from "../../utils/auth";
import { Toast } from "vant";
import { login } from "../../serivces/authp";

export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    // onSubmit(values) {
    //   console.log("submit", values);
    //   setToken("123");
    //   this.$router.push({
    //     name: "Home",
    //   });
    // },
    async onSubmit(values) {
      const result = await login(values);
      console.log(result);
      if (result.data.code === "success") {
        Toast.success("登录成功");
        setToken(result.data.token);
        this.$router.push({
          name: "Home",
        });
      } else {
        Toast.fail(result.data.message);
      }
    },
  },
};
</script>

<style>
.loginImg {
  text-align: center;
  width: 50%;
  margin: auto;
  padding: 100px 0;
}
.loginImg img {
  width: 100%;
  height: 100%;
}
.onte {
  float: right;
  font-size: 0.09rem;
}
</style>