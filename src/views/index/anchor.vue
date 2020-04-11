<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <div class="demo-anchor">
                <moc-anchor show-ink :offset-top="65" :bounds="65" :scroll-offset="65">
                    <moc-anchor-link href="#basic_a" title="Basic a" />
                    <moc-anchor-link href="#basic_b" title="Basic b" />
                    <moc-anchor-link href="#basic_c" title="Basic c" />
                    <moc-anchor-link href="#basic_d" title="Basic d" />
                    <moc-anchor-link href="#basic_e" title="Basic e" />
                    <moc-anchor-link href="#basic_f" title="Basic f" />
                    <moc-anchor-link href="#basic_g" title="Basic g" />
                </moc-anchor>
            </div>

            <section class="section anchor-list" id="basic_a">
                <h3 class="section-title">Basic a</h3>
                <div class="anchor-box"></div>
            </section>
            <section class="section anchor-list" id="basic_b">
                <h3 class="section-title">Basic b</h3>
                <div class="anchor-box"></div>
            </section>
            <section class="section anchor-list" id="basic_c">
                <h3 class="section-title">Basic c</h3>
                <div class="anchor-box"></div>
            </section>
            <section class="section anchor-list" id="basic_d">
                <h3 class="section-title">Basic d</h3>
                <div class="anchor-box"></div>
            </section>
            <section class="section anchor-list" id="basic_e">
                <h3 class="section-title">Basic e</h3>
                <div class="anchor-box"></div>
            </section>
            <section class="section anchor-list" id="basic_f">
                <h3 class="section-title">Basic f</h3>
                <div class="anchor-box"></div>
            </section>
            <section class="section anchor-list" id="basic_g">
                <h3 class="section-title">Basic g</h3>
                <div class="anchor-box"></div>
            </section>

        </div>
    </article>
</template>
<script>
    export default {
        name: "Tinymce",
        data() {
            return {
                loading: false,
                scaleValue: 1
            };
        },
        mounted(){
            
        },
        methods: {
            
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

    #page-bodier{
        margin-top: 20px;
    }
    .demo-anchor{
        float: right;
        width: 218px;
    }
    .anchor-list{
        margin-right: 238px;
    }
    .anchor-box{
        height: 560px;
    }
</style>
