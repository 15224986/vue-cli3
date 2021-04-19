<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section m-t-20">
                <h2>同时按下了 Ctrl+Alt+1</h2>
                <p>执行次数：{{ctrlAlt1Num}}</p>
            </section>

            <section class="section">
                <h2>同时按下了 Ctrl+Alt+f1</h2>
                <p>执行次数：{{ctrlAltf1Num}}</p>
            </section>


        </div>
    </article>
</template>
<script>

    import { shortcut, keyCodeForEvent } from '@/utils/shortcut.js'

    export default {

        data() {
            return {
                loading: false,
                ctrlAlt1Num:0,
                ctrlAltf1Num:0
            };
        },
        mounted() {
            keyCodeForEvent( 49, ()=>{
                this.$message('同时按下了 Ctrl+Alt+1')
                 this.ctrlAlt1Num++
            });
            shortcut.add("Ctrl+Alt+f1", ()=>{
                this.$message('同时按下了 Ctrl+Alt+f1');
                 this.ctrlAltf1Num++
            });
        },
        methods:{
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
</style>
