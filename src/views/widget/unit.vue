<template>
    <div id="wrapper">
        <div class="widget">

            <section class="section">
                <h3 class="widget-tit">路径导航</h3>
                <moc-breadcrumb></moc-breadcrumb>
            </section>
            
            <section class="section">
                <h3 class="widget-tit">btn组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <moc-btn native-type="button">封装组件，调用插件</moc-btn>
                </div> 
            </section>
            
            <section class="section">
                <h3 class="widget-tit">Checkbox组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <moc-checkbox-group v-model="checkboxValue">
                        <mocCheckbox v-for="(item, index) in checkboxOptions" :label="item.value" :disabled="item.disabled" :key="index" @change="checkboxChange">{{item.label}}</mocCheckbox>
                    </moc-checkbox-group>
                </div>
                <p class="widget-txt">{{checkboxValue}}</p>
                <div class="widget-demo">
                    <moc-checkbox-group v-model="checkboxValue1">
                        <mocCheckbox v-for="(item, index) in checkboxOptions" :label="item.value" :disabled="item.disabled" :key="index" @change="checkboxChange">{{item.label}}</mocCheckbox>
                    </moc-checkbox-group>
                </div>
                <p class="widget-txt">{{checkboxValue1}}</p>
            </section>
            
            <section class="section">
                <h3 class="widget-tit">Radio组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <mocRadioGroup v-model="radioValue" @change="radioChange">
                        <mocRadio v-for="(item, index) in radioOptions" :label="item.value" :disabled="item.disabled" :key="index">{{ item.label }}</mocRadio>
                    </mocRadioGroup>
                </div>
                <p class="widget-txt">{{radioValue}}</p>
                <div class="widget-demo">
                    <mocRadioGroup v-model="radioValue1">
                        <mocRadio v-for="(item, index) in radioOptions" :label="item.value" :disabled="item.disabled" :key="index" @change="radioChange">{{item.label}}</mocRadio>
                    </mocRadioGroup>
                </div>
                <p class="widget-txt">{{radioValue1}}</p>
            </section>

            <section class="section">
                <h3 class="widget-tit">Select组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <mocSelect :options="selectOptions" v-model="selectedValue" @change="selectChange" clearable :placeholder="placeholder"/>
                    <!--
                      options: 传给子组件下拉列表的数据；    格式:  :options="selectOptions"
                      v-model: 绑定选中的值   格式: v-model="selectedValue"
                      change: 自定义选值改变事件 格式：@change="onChangeOption"
                      clearable: 包含清空按钮，可将选择器清空为初始状态        格式：clearable || clearable="true"
                      placeholder:  占位符 类型:string  格式：:placeholder="placeholder"
                      disabled: 是否禁用        类型:boolean  格式：disabled || disabled="true"
                    -->
                </div>
            </section>

            <section class="section">
                <h3 class="widget-tit">Tabs组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <moc-tabs v-model="tabActive" @change="tabsChange">
                        <moc-tabs-pane label="标签一">
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签二">
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签三">
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                        </moc-tabs-pane>
                    </moc-tabs>
                </div>
                <div class="widget-demo">
                    <moc-tabs v-model="tabActive1" @change="tabsChange">
                        <moc-tabs-pane label="标签一" value="one">
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签二" value="two">
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签三" value="three">
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                        </moc-tabs-pane>
                    </moc-tabs>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'echartsLine',
    data() {
        return {
            checkboxValue: ['time', 'like'], //默认选中的是第几个
            checkboxValue1: ['time', 'view', 'like'], //默认选中的是第几个
            checkboxOptions: [ // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
                {
                    value: 'time',
                    label: '时间',
                    disabled: true
                },
                {
                    value: 'view',
                    label: '查看',
                    disabled: false
                },
                {
                    value: 'like',
                    label: '链接',
                    disabled: false
                },
                {
                    value: 'reply',
                    label: '回复',
                    disabled: false
                },
                {
                    value: 'reward',
                    label: '奖励',
                    disabled: false
                }
            ],
            radioValue: 'time', //默认选中的是第几个
            radioValue1: 'like', //默认选中的是第几个
            radioOptions: [ // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
                {
                    value: 'time',
                    label: '时间',
                    disabled: true
                },
                {
                    value: 'view',
                    label: '查看',
                    disabled: false
                },
                {
                    value: 'like',
                    label: '链接',
                    disabled: false
                },
                {
                    value: 'reply',
                    label: '回复',
                    disabled: false
                },
                {
                    value: 'reward',
                    label: '奖励',
                    disabled: false
                }
            ],
            // 下拉组件
            selectedValue: 'view', //默认选中的是第几个
            placeholder: "你叫什么名字",
            selectOptions: [ // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
                {
                    value: 'time',
                    label: 'timetimetime',
                    disabled: true
                },
                {
                    value: 'view',
                    label: 'viewviewview',
                    disabled: false
                },
                {
                    value: 'like',
                    label: 'likelikelike',
                    disabled: false
                },
                {
                    value: 'reply',
                    label: 'replyreplyreply',
                    disabled: false
                },
                {
                    value: 'reward',
                    label: 'rewardrewardreward',
                    disabled: false
                }
            ],
            tabActive: 0,
            tabActive1: 'two'

        };
    },
    methods: {
        btnFn(){
            return '什么';
        },
        checkboxChange(val){
            console.log("您选中了:"+val);
        },
        radioChange(val){
            console.log("您选中了:"+val);
        },
        selectChange(item,index){
            // 子组件通过一个事件来触发onChangeOption方法，从而传递一系列参数，这里的index,val就是传过来的
            console.log("index:"+index+", val:"+item.value);
        },
        tabsChange(val){
            console.log("您选中了:"+val);
        }
    }
};
</script>
