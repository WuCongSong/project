<template>
  <!-- 注册账号 -->
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
      <van-field
        v-model="repwd"
        type="password"
        name="repwd"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请再次填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <router-link class="onte" :to="{name:'Login'}">如有账号，需要登录</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      repwd: "",
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    onSubmit(values) {
      console.log("submit", values);
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
  font-size: 0.08rem;
}
</style>