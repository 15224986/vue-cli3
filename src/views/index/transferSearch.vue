<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">Transfer 穿梭框自定义搜索</h3>
                <ul class="section-subhead">
                    <li>1.Transfer 穿梭框自定义搜索</li>
                </ul>
                <el-transfer
                    filterable
                    :filter-method="handleTransferMethod"
                    filter-placeholder="请输入城市拼音"
                    v-model="transferValue"
                    :data="transferData">
                </el-transfer>
            </section>            
        </div>
    </article>
</template>
<script>
    export default {
        name: "transferSearch",
        data() {
            return {
                loading: false,
                /**
                 * Transfer 穿梭框自定义搜索
                 */
                transferValue: [],
                transferData:[
                    {
                        label: '上海',
                        key: 1,
                        pinyin: 'shanghai'
                    },
                    {
                        label: '北京',
                        key: 2,
                        pinyin: 'beijing',
                    },
                    {
                        label: '广州',
                        key: 3,
                        pinyin: 'guangzhou',
                    },
                    {
                        label: '深圳',
                        key: 4,
                        pinyin: 'shenzhen',
                    },
                    {
                        label: '南京',
                        key: 5,
                        pinyin: 'nanjing',
                    },
                    {
                        label: '西安',
                        key: 6,
                        pinyin: 'xian',
                    },
                    {
                        label: '成都',
                        key: 7,
                        pinyin: 'chengdu'
                    }
                ]
            };
        },
        methods: {
            /**
             * Transfer 穿梭框自定义搜索
             */
            handleTransferMethod(query, item){
                return item.pinyin.search(query) > -1 || item.label.search(query) > -1;
            }
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