<template>
    <moc-container>
        <moc-section class="moc-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/user">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </moc-section>
        <moc-section class="moc-search">
            <el-form :model="search" label-width="120px" :inline="true" size="small" label-suffix="：" class="moc-search-form">
                <el-form-item label="审批人">
                    <el-input v-model="search.user" clearable placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select
                        v-model="search.region"
                        placeholder="活动区域"
                        filterable
                        clearable
                    >
                        <el-option
                            v-for="(item, index) in selectOptions.region"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动区域">
                    <moc-all-select
                        v-model="search.region2"
                        :selectOptions="selectOptions.region"
                        filterable
                        clearable
                    >
                    </moc-all-select>
                </el-form-item>
                <el-form-item label="日期选择">
                    <el-date-picker
                        v-model="search.date"
                        placeholder="任意日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="日期时间选择">
                    <el-date-picker
                        v-model="search.datetime"
                        type="datetime"
                        placeholder="任意时间">
                    </el-date-picker>
                    <span class="moc-form-label-static">至</span>
                    <el-date-picker
                        v-model="search.datetime"
                        type="datetime"
                        placeholder="任意时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="时间段选择">
                    <el-date-picker
                        v-model="search.checkTime"
                        type="datetimerange"
                        :clearable="false"
                        value-format="yyyyMMddHHmmss"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        :default-time="['00:00:00', '23:59:59']"
                        :picker-options="$global.datePickerOptions"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item class="moc-search-btns">
                    <el-button type="primary" @click="onSearch()">查询</el-button>
                    <el-button type="primary" @click="testAssignCloneDeep()">测试扩展运算符和复杂数据深层复制</el-button>
                </el-form-item>
            </el-form>
        </moc-section>
        <moc-section class="moc-table" bodier>
            <el-table
                :data="tableData"
                :height="tableHeight"
                v-loading="tableLoading"
                border
                stripe
            >
                <el-table-column label="" type="index" :index="handleIndex" :width="tableIndexWidth" align="center" class-name="neu-table-index"></el-table-column>
                <el-table-column prop="date" label="日期" width="218"></el-table-column>
                <el-table-column prop="name" label="姓名" width="186"></el-table-column>
                <el-table-column prop="address" label="地址" min-width="256"></el-table-column>
            </el-table>
        </moc-section>
        <moc-section class="moc-pagination">
            <el-pagination
                :current-page.sync="pagination.current"
                :page-size.sync="pagination.size"
                :total="pagination.total"
                :layout="$global.paginationLayout"
                :page-sizes="$global.paginationSizes"
                hide-on-single-page
                background
                @current-change="initTableData()"
                @size-change="initTableData()"
            >
            </el-pagination>
        </moc-section>
    </moc-container>
</template>
<script>
    /**
     * 混入对象
     */
    import common from '@/mixins/common.js';            // 通用  每个页面都需要引入


    /**
     * 公共数据、方法的几种使用方式
     * 1.公共数据、方法写在mixins文件夹里，以mixin的形式使用
     * 2.公共数据写config文件夹中,用到的次数较多的，写在global.js里，全局引入
     * 3.公共方法写在常用的写在'assets/scripts/common.js'里
     * 4.不常用的写在utils里面，按需引入
     */


    export default {
        mixins:[ common ],
        components: {},
        data () {
            const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
                tableLoading: false,

                /**
                 * 搜索条件
                 */
                search: {
                    user: '',
                    region: '',
                    region2: '',
                    date: '',
                    datetime: '',
                    checkTime: '',
                    arr:[1,2,3],
                    obj:{
                        a:1,
                        b:22222
                    },
                },
                /**
                 * 表格
                 */
				tableData: Array(5).fill(item),
                /**
                 * 分页器
                 */
                pagination: {
                    current: 1,         // 当前页
                    size: 20,           // 每页显示条数
                    total: 1200,        // 总条数
                    oages: undefined,
                    obj:{
                        b:2,
                        c:3
                    }
                },

                selectOptions:{
                    region:[
                        {
                            label: '黄金糕',
                            value: '选项1'
                        },
                        {
                            label: '双皮奶',
                            value: '选项2',
                            disabled: true
                        },
                        {
                            label: '蚵仔煎',
                            value: '选项3'
                        },
                        {
                            label: '蚵仔煎',
                            value: '选项4'
                        },
                        {
                            label: '蚵仔煎',
                            value: '选项5'
                        },
                        {
                            label: '蚵仔煎',
                            value: '选项6'
                        },
                        {
                            label: '蚵仔煎',
                            value: '选项7'
                        },
                        {
                            label: '蚵仔煎',
                            value: '选项8'
                        },
                        {
                            label: '蚵仔煎',
                            value: '选项9'
                        }
                    ]
                }
			}
        },
        created(){
            this.initSelectOptions();
        },
        mounted(){
            this.calcTableHeight();
        },
        methods:{
            testAssignCloneDeep(){
                /**
                 * 合并参数的时候，如果被合并的对象里面存在arr、obj等，需要使用深层复制，才可以对参数进行修改
                 *
                 * 如果项目中引用了 lodash 插件库，则不需要自己写的 深层复制等，合并等方法
                 */
                // let params = this.$merge( this.$deepCopy(this.search), this.pagination);
                // let params = {...this.$deepCopy(this.search), ...this.pagination};
                // let params = {...this.$lodash.cloneDeep(this.search), ...this.pagination};
                // let params = this.$lodash.assign(this.$lodash.cloneDeep(this.search), this.pagination);
                let params = this.$lodash.merge(this.$lodash.cloneDeep(this.search), this.pagination);
                delete params.total;
                params.arr.push('a','b','c');
                console.log( params, this.search );
                let diei = null
                console.log( this.$lodash.isArray(diei) );
                let diei2 = Object.create(null);
                console.log( diei2 );
            },
            /**
             * 搜索事件
             */
            onSearch(){

                console.log( this.search.region2 );

                this.pagination.current = 1;
                this.initTableData();
            },
            /**
             * 下拉框 options 的数据
             */
            initSelectOptions(){

                // 正在加载中
                this.tableLoading = true;

                /**
                 * 模拟请求数据
                 */
                setTimeout(()=>{
                    this.initTableData();
                }, 500);

                // this.$http.get(`/mock/tableData`, {}, {baseURL:''}).then( res => {
                //     console.log( res );
                //     if( res.result == 1 ){
                //         this.$message.success(res.msg);
                //         this.searchOptions = { ...this.selectOptions, ...res.options};
                //     }else{
                //         this.$alert( res.msg, '系统提示', {
                //             type: 'error',
                //             callback: action => {}
                //         });
                //     }
                // })
                // .catch( error => {
                //     this.$message(error);
                // });
            },
            /**
             * 初始化表格数据
             */
            initTableData() {
                /**
                 * 模拟请求数据
                 */
                setTimeout(()=>{
                    this.tableLoading = false;
                }, 1000);

                // let params = { ...this.$lodash.cloneDeep(this.search), ...this.pagination };
                // this.$http.get(`sys/user/list`, params).then( res => {
                //     if( res.result == 1 ){
                //         // console.log( res );
                //         this.tableLoading = false;
                //         this.tableData = res.table;
                //         this.pagination = res.pagination;
                //     }else{
                //         this.$alert( res.msg, '系统提示', {
                //             type: 'error',
                //             callback: action => {}
                //         });
                //     }
                // })
                // .catch( error => {
                //     this.$message(error);
                // });
            },

        }
    }
</script>
<style lang="scss">
    
</style>
