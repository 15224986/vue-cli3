<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h2>javaScript如何跳出多重循环</h2>
                <ul class="section-subhead">
                    <li>1.参考网址： <el-link href="https://www.jb51.net/article/91721.htm" type="primary" target="_blank">https://www.jb51.net/article/91721.htm</el-link></li>
                    <li><el-button @click="startBreakFor()">开始执行</el-button></li>
                    <li>{{breakFor}}</li>
                    <li>{{breakFor1}}</li>
                </ul>
            </section>

            <section class="section">
                <h2>vue中style scope深度访问新方式(::v-deep)</h2>
                <br />
                <ul class="section-subhead">
                    <li>1.参考网址： <el-link href="https://segmentfault.com/a/1190000021576348" type="primary" target="_blank">https://segmentfault.com/a/1190000021576348</el-link></li>
                    <li>2.>>>   如果vue的style使用的是css，那么则使用 >>>, 但是像scss等预处理器却无法解析>>>，所以我们使用下面的方式.</li>
                    <pre class="hljs xml">
                        <code>
                            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"css"</span> <span class="hljs-attr">scoped</span>&gt;</span>
                            .a &gt;&gt;&gt; .b {
                               /* ... */
                            }
                            <span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                        </code>
                    </pre>
                    <li>3./deep/  但是有些开发者反应，在vue-cli3编译时，deep的方式会报错或者警告。此时我们可以使用第三种方式</li>
                    <pre class="hljs xml">
                        <code>
                            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span> <span class="hljs-attr">scoped</span>&gt;</span>
                                .a{
                                   /deep/ .b {
                                      /* ... */
                                   }
                                }
                            <span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                        </code>
                    </pre>
                    <li>4.::v-deep  切记必须是双冒号</li>
                    <pre class="hljs xml">
                        <code>
                            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span> <span class="hljs-attr">scoped</span>&gt;</span>
                            .a{
                               /deep/ .b {
                                  /* ... */
                               }
                            }
                            <span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                        </code>
                    </pre>
                </ul>

            </section>

            <section class="section" v-mocTitle="$route.meta.title">
                <h2 id="jq">测试是否引入了jq</h2>
                <br />
                <br />
                <h2>
                    <router-link :to="{path: '/home/requiredType', query:{ title:'我是通过 touter-link 到来的'}}">
                        <span>切换必填状态 测试 tagsView 显示的文字，通过参数获取</span>
                    </router-link>
                </h2>
                <br />
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

            <section class="section" v-mocTitle="'数组de方法'">
                <h2 id="array">Lodash</h2>
                <ul class="section-subhead">
                    <li>1.Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。</li>
                    <li>2.参考网址： <el-link href="https://www.lodashjs.com" type="primary" target="_blank">https://www.lodashjs.com</el-link></li>
                    <li>3.安装相关依赖： npm i --save lodash</li>
                </ul>

                <el-row :gutter="15" class="lodash-container">
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>去除数组array中的最后一个元素</span>
                            </div>
                            <div class="lodash-content">
                                this.$lodash.initial([1, 2, 3])
                                <br />
                                // => [1, 2]
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>返回数组 array的第一个元素</span>
                            </div>
                            <div class="lodash-content">
                                this.$lodash.head([1, 2, 3])
                                <br />
                                // => 1
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>返回数组 array的最后一个元素</span></div>
                            <div class="lodash-content">
                                this.$lodash.last(['a', 'b', 'c']);
                                <br />
                                // => 'c'
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>合并数组</span></div>
                            <div class="lodash-content">
                                this.$lodash.concat([1],[2])
                                <br />
                                // => [1,2]
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>左切片</span></div>
                            <div class="lodash-content">
                                this.$lodash.drop([1, 2, 3],2切除的数量)
                                <br />
                                // => [3]
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>右切片</span></div>
                            <div class="lodash-content">
                                this.$lodash.dropRight([1, 2, 3],2切除的数量)
                                <br />
                                // => [1]
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>修改拼接</span></div>
                            <div class="lodash-content">
                                this.$lodash.join(['a', 'b', 'c'], '~');
                                <br />
                                // => 'a~b~c'
                            </div>
                        </el-card>
                    </el-col>



                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>数组去重</span></div>
                            <div class="lodash-content">
                                this.$lodash.uniq(['a', 'b', 'a']);
                                <br />
                                // => ['a','b']
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>获取数组的最大值</span></div>
                            <div class="lodash-content">
                                this.$lodash.max([4, 2, 8, 6])
                                <br />
                                // => 8
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>获取数组的最小值</span></div>
                            <div class="lodash-content">
                                this.$lodash.min([4, 2, 8, 6])
                                <br />
                                // => 2
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>四舍五入(保留任意位小数)</span>
                            </div>
                            <div class="lodash-content">
                                this.$lodash.round(4.006,2保持几位小数)
                                <br />
                                // => 4.01
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>数组内数据相加</span></div>
                            <div class="lodash-content">
                                this.$lodash.sum([4, 2, 8, 6])
                                <br />
                                // => 20
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>返回随机数</span></div>
                            <div class="lodash-content">
                                this.$lodash.random(0, 5)
                                <br />
                                // => 0到5任意数
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>返回数组内的随机数</span></div>
                            <div class="lodash-content">
                                this.$lodash.sample([1, 2, 3, 4])
                                <br />
                                // => 数组1到4任意数
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-card shadow="hover">
                            <div slot="header"><span>事件防抖动</span></div>
                            <div class="lodash-content">
                                this.$lodash.debounce(@click的事件,延迟的毫秒数)
                                <br />
                                // => 点击后多久不可以点击
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
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
                /**
                 * javaScript如何跳出多重循环
                 */
                breakFor:[],
                breakFor1:[],

                /**
                 * 数组字符串相关的
                 */
                arr: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],
                arr1: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],
                arr2: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],
                arr3: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],
                string: '  1 2 3 4 5 6 7 8 9 0   ',
                string1: '  1 2 3 4 5 6 7 8 9 0   ',
                string2: '  1 2 3 4 5 6 7 8 9 0   ',
                string3: '  1 2 3 4 5 6 7 8 9 0   ',
                string4: '123456789012345678901234567890',
                string5: '123456789012345678901234567890',
            };
        },
        mounted() {
            /**
             * jQuery 相关的方法
             */
            this.$nextTick(() => {
                $("#jq").css('color', '#f00');
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
        },
        methods:{
            startBreakFor(){
                /**
                 * 跳出循环
                 */
                outer:
                for(var i=0;i<10;i++){
                    inter:
                    for(var j=0;j<10;j++){
                        if(i>5){
                            this.breakFor1.push(i);
                            break outer;
                        }
                    }
                }

                /**
                 * 跳出本次循环，继续执行下一次
                 */
                outer:
                for(var i=0;i<10;i++){
                    inter:
                    for(var j=0;j<10;j++){
                        if(i>5){
                            this.breakFor.push(i);
                            break inter;
                        }
                    }
                }
            }
        }
    };
</script>
<style scoped lang="scss">
    #wrapper {
        background-color: transparent;
    }

    .section-breadcrumb {
        margin-bottom: 20px;
    }

    .section+.section {
        margin-top: 20px;
    }

    .section-title {
        padding: 0 0 10px;
    }

    .section-subhead {
        padding-bottom: 16px;
    }

    .section-title+.section-subhead {
        margin-top: -6px;
    }

    .bgc {
        background-color: #f2f2f2;
    }
    .lodash-container {
        text-align: left;
        margin-top: 6px;
        ::v-deep {
            .lodash-content {
                min-height: 150px;
            }
        }
        .is-hover-shadow {
            margin-bottom: 15px;
        }
    }
</style>
<style>
    .body-bg-default{
        background-color: #F0F0F0;
    }
    pre{
        padding: 0;
        line-height: 1.5;
        background-color: #e9ecef;
        overflow: auto
    }
    pre code{
        overflow-wrap: normal;
        white-space: inherit
    }

</style>
