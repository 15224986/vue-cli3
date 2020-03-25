<template>
    <el-form label-position="left" :model="ruleForm2" ref="loginName" @keyup.enter.native="handleSubmit('loginName')" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="username" :rules="[
                { required: true, message: '账号不能为空', trigger: 'blur'}
            ]">
            <el-input type="text" v-model="ruleForm2.username" autofocus placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]">
            <el-input type="password" v-model="ruleForm2.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" class="remember" @change="checkboxChange">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="handleSubmit('loginName')" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>

import {mapState,mapGetters,mapActions} from 'vuex';
import toBoolean from '@/utils/toBoolean.js'

export default {
    name: "login",
    data() {
        return {
            logining: false,
            ruleForm2: {
                username: '',
                password: ''
            },
            checked: false
        };
    },
    created() {
        // 获取密码状态
        this.checked = toBoolean( localStorage.getItem('rememberPassword') );
        if ( this.checked ) { 
            this.ruleForm2.username = localStorage.getItem('username');
            this.ruleForm2.password = localStorage.getItem('password');
        } else {
            this.ruleForm2.username = '';
            this.ruleForm2.password = '';
        }
    },
    computed:{
        ...mapGetters({ 
            fullPath: 'toFullPath/renderSrc',       // toFullPath 模块下，getters里面的renderSrc方法
            userInfo: 'userInfo/renderUser'         // userInfo 模块下，getters里面的renderUser方法
        })
    },
    methods: {
        ...mapActions({
            changeUser: 'userInfo/invokeChangeUser',
            changeSrc: 'toFullPath/invokeChangeSrc'
        }),
        checkboxChange(){
            localStorage.setItem('rememberPassword', this.checked);
        },
        handleSubmit(loginName) {
            this.$refs[loginName].validate((valid) => {
                if (valid) {
                    this.logining = true;
                    this.$http.get('sys/user/login', this.ruleForm2 ).then((response) => {
                        if (response.data.msg === '登入成功') {
                            // 本地永久存储账号密码
                            if (this.checked) {
                                localStorage.setItem('username', this.ruleForm2.username);
                                localStorage.setItem('password', this.ruleForm2.password);
                            }
                            // 绑定个人信息
                            this.changeUser(this.ruleForm2);
                            // 跳转到目标页面
                            this.$router.push({ path: this.fullPath || '/' });
                            // 还原存储的跳转路径
                            this.changeSrc(false);
                        } else {
                            // 关闭加载中
                            this.logining = false;
                            // 提示错误
                            const { msg, code } = response.data;
                            this.$message({
                                message: msg,
                                type: 'error',
                            });
                        }
                    }).catch((error) => {
                        this.logining = false;
                        console.log(error);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>