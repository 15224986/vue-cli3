<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section" v-mocTitle="$route.meta.title">
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

            <section class="section" v-mocTitle="'数组de方法'">
                <h2 id="array">数组的去同，删除指定值</h2>
                <br>
                <h4>原数组： {{ arr }}</h4>
                <br>
                <h4>数组去同： {{ arr1 }}</h4>
                <br>
                <h4>从数组中删除第一个指定值元素的方法 2： {{ arr2 }}</h4>
                <br>
                <h4>从数组中删除所有指定值元素的方法： {{ arr3 }}</h4>
            </section>

            <section class="section" v-mocTitle="'字符串de方法'">
                <h2 id="array">字符串去掉空格和截取字符串</h2>
                <br>
                <h4>原字符串： <span class="bgc">&ensp;&ensp;&ensp;&ensp;{{string}}&ensp;&ensp;&ensp;&ensp;</span></h4>
                <br>
                <h4>去掉左侧空格： <span class="bgc">{{string1}}&ensp;&ensp;&ensp;&ensp;</span></h4>
                <br>
                <h4>去掉右侧空格： <span class="bgc">&ensp;&ensp;&ensp;&ensp;{{string2}}</span></h4>
                <br>
                <h4>去掉所有空格： <span class="bgc">{{string3}}</span></h4>
                <br>
                <h4>截取字符串： <span class="bgc">{{string4}}</span></h4>
                <br>
                <h4>截取字符串： <span class="bgc">{{string5}}</span></h4>
            </section>

        </div>
    </article>
</template>
<script>
    export default {
        name: "jQuery",
        data() {
            return {
                loading: false,
                arr : [5,6,7,8,1,2,3,4,9,2,3,4,2,3,2],
                arr1: [5,6,7,8,1,2,3,4,9,2,3,4,2,3,2],
                arr2: [5,6,7,8,1,2,3,4,9,2,3,4,2,3,2],
                arr3: [5,6,7,8,1,2,3,4,9,2,3,4,2,3,2],
                string:'  1 2 3 4 5 6 7 8 9 0   ',
                string1:'  1 2 3 4 5 6 7 8 9 0   ',
                string2:'  1 2 3 4 5 6 7 8 9 0   ',
                string3:'  1 2 3 4 5 6 7 8 9 0   ',
                string4:'123456789012345678901234567890',
                string5:'123456789012345678901234567890',
            };
        },
        mounted(){
            /**
             * jQuery 相关的方法
             */
            this.$nextTick( ()=>{
                $("#jq").css('color','#f00');
            });

            /**
             * 数组相关的方法
             */
            this.arr1 = this.arr1.unique();
            this.arr2 = this.arr2.remove(2);
            this.arr3 = this.arr3.delete(2);

            /**
             * 字符串相关的方法
             */
            this.string1 = this.string1.triml();
            this.string2 = this.string2.trimr();
            this.string3 = this.string3.trimall();
            this.string4 = this.string4.leftLength(5);
            this.string5 = this.string4.leftLength(5, true);
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

    .bgc{
        background-color: #f2f2f2;
    }
</style>
