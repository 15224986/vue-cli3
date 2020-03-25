<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading" v-mocTitle="$route.meta.title">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h2 id="jq">测试是否引入了jq</h2>


                <br/>
                <br/>
                <h2>
                    <router-link :to="{path: '/home/requiredType', query:{ title:'我是通过 touter-link 到来的'}}">
                        <span>切换必填状态 测试 tagsView 显示的文字，通过参数获取</span>
                    </router-link>
                </h2>
                <br/>
            </section>

            
        </div>
    </article>
</template>
<script>
    export default {
        name: "jQuery",
        data() {
            return {
                loading: false
            };
        },
        mounted(){
            this.$nextTick( ()=>{
                $("#jq").css('color','#f00');
            });
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
