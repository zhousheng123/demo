<template>
<div>
  <!--<clogin >-->
   <!--<p>更多</p>-->
  <!--</clogin>-->

    <div class="login-container">
      <img class="back-img" src="../../assets/img/login/back.png">
      <el-form
        :model="loginForm" ref="loginForm" :rules="loginRules"
        autoComplete="on" label-position="left" class="login-form">
        <h3 class="title">demo</h3>

        <el-form-item prop="admin_name">
        <span class="svg-container svg-container_login">
         <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xingmingyonghumingnicheng"></use>
</svg>
        </span>
          <el-input
            type="text" v-model="loginForm.admin_name" name="admin_name"
            autoComplete="on" placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item prop="password">
        <span class="svg-container">
           <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-mima"></use>
</svg>
        </span>
          <el-input
            :type="pwdType" v-model="loginForm.password" name="password"
            autoComplete="on" placeholder="请输入密码" @keyup.enter.native="handleLogin" />
          <span class="show-pwd" @click="showPwd">        </span>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary" :loading="loading" style="width:100%;"
            @click.native.prevent="handleLogin">登 录
          </el-button>
        </el-form-item>
        <div class="tips">
        </div>
      </el-form>
    </div>
    </div>

</template>

<script>
import clogin from './component/c_login'
export default {
  name: 'login',
  data () {
    return {
      total: 0,
      loginForm: {
        admin_name: '',
        password: ''
      },
      loginRules: {
        admin_name: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      loading: false,
      pwdType: 'password',
      pwdIcon: 'eye-close'

    }
  },
  mounted () {

  },
  components: {
    clogin
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
        this.pwdIcon = 'eye-open'
      } else {
        this.pwdType = 'password'
        this.pwdIcon = 'eye-close'
      }
    },

    handleLogin () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true
          // const res = await this.$store.dispatch('Login', this.loginForm)

          this.loading = false
          this.$router.push('/home')

          this.loading = false
        } else {
          this.$message.error('用户名或密码输入有误')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $light_gray:#eee;

  /* reset element-ui css */
  .login-container {

    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray: #a4223e;
  $light_gray:#eee;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .back-img{
      height: 100%;
      width: 100%;
      position: absolute
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
