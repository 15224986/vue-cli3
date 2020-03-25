<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">切换必填状态</h3>
                <ul class="section-subhead">
                    <li>1.通过切换“活动名称状态”对“活动名称”进行“必填”和“非必填”进行修改。</li>
                </ul>
                <el-form
                    :model="ruleForm"
                    ref="ruleForm"
                    label-width="140px"
                    class="form-horizontal"
                >
                    <el-form-item
                        label="活动名称状态"
                        prop="region"
                        :rules="[
                            { required: true, message: '请选择类型', trigger: 'change' }
                        ]"
                    >
                        <el-select v-model="ruleForm.region" placeholder="请选择活动名称状态">
                            <el-option label="必填" value="1"></el-option>
                            <el-option label="非必填" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="活动名称"
                        prop="name"
                        :rules="[
                            { required: isHaveTo, message: '请输入活动名称', trigger: 'blur' }
                        ]"
                    >
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </section>
            
        </div>
    </article>
</template>
<script>
    export default {
        name: "requiredType",
        data() {
            return {
                loading: false,
                /**
                 * 切换必填状态
                 */
                ruleForm: {
                    name: "",
                    region: "1"
                }
            };
        },
        computed:{
            /** 
             * 计算是否为必填
             */
            isHaveTo: function() {
                if(this.$refs.ruleForm){
                    this.$refs.ruleForm.clearValidate('name');
                }
                return this.ruleForm.region === '1';
            }
        },
        methods:{
            onSubmit(formRef){
                // 数据提交
                this.$refs[formRef].validate(valid => {
                    if (valid) {
                        console.log("验证通过");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });   
            },
        }
    };
</script>
<style scoped lang="scss">
    #wrapper{
        background-color: transparent;
    }
    .section-breadcrumb{
        margin-bottom: 20px;
    }
    .section + .section{
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
</style>