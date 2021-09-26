<template>
    <article id="page-bodier">
        <div id="wrapper" >
            <section class="section m-t-20" >
                <ul class="section-subhead">
                    <li>1.参考网址： <el-link href="https://blog.csdn.net/weixin_41697143/article/details/94554697" type="primary" target="_blank">https://blog.csdn.net/weixin_41697143/article/details/94554697</el-link></li>
                    <li>2.参考网址： <el-link href="https://www.cnblogs.com/victor-leeson/p/10718493.html" type="primary" target="_blank">https://www.cnblogs.com/victor-leeson/p/10718493.html</el-link></li>
                </ul>
                <br />
                <br />
                <h2>UUID <span>{{ uuidText }}</span></h2>
            </section>
        </div>
    </article>
</template>
<script>
    /**
     * 混入对象
     */
    // 页面通用的
    import common from '@/mixins/common.js';

    import uuid from 'uuidjs';

    export default {
        mixins: [common],
        components: {},
        data() {
            return {
                uuidText: uuid.genV1().hexString
            }
        },
        created() {},
        mounted() {
        },
        methods: {

        }
    }
</script>
