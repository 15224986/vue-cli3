<template>
    <div class="moc-transfer" :style="{height:height}">
        <div class="moc-transfer-panel moc-transfer-list">
            <div class="moc-transfer-head">
                <h2>{{ titles[0] }}</h2>
                <h5>共计{{leftTotal}}条</h5>
            </div>
            <div class="moc-transfer-search">
                <input v-model="dataSearch" class="moc-transfer-input" type="text">
                <i class="moc-transfer-icon el-icon-search"></i>
            </div>
            <div class="moc-transfer-group">
                <select multiple="multiple" v-model="activeList">
                    <option
                        v-for="(item,index) in leftList"
                        :key="index"
                        :value="item.value"
                        :disabled="item.disabled"
                        @dblclick="moveDataList(item)"
                    >
                        {{ item.label }}
                    </option>
				</select>
            </div>
        </div>
        <div class="moc-transfer-btns">
            <p class="moc-transfer-btns-tools"></p>
            <div class="moc-transfer-btns-content">
                <a @click="moveDataList()" class="moc-transfer-btn" :class="{'moc-disabled':activeList.length<1}" href="javascript:;"><i class="el-icon-arrow-right"></i></a>
                <a @click="moveSelectedList()" class="moc-transfer-btn" :class="{'moc-disabled':activeSelected.length<1}" href="javascript:;"><i class="el-icon-arrow-left"></i></a>
            </div>
        </div>
        <div class="moc-transfer-panel moc-transfer-selected">
            <div class="moc-transfer-head">
                <h2>{{ titles[1] }}</h2>
                <h5>共计{{rightTotal}}条</h5>
            </div>
            <div class="moc-transfer-search">
                <input v-model="selectedSearch" class="moc-transfer-input" type="text">
                <i class="moc-transfer-icon el-icon-search"></i>
            </div>
            <div class="moc-transfer-group">
                <select multiple="multiple" v-model="activeSelected">
                    <option
                        v-for="(item,index) in rightList"
                        :key="index"
                        :value="item.value"
                        :disabled="item.disabled"
                        @dblclick="moveSelectedList(item)"
                    >
                        {{ item.label }}
                    </option>
				</select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mocTransfer',
    componentName: 'mocTransfer',
    props:{
        data:{
            type: Array,
            default() {
                return []
            }
        },
        value: {
            type: Array,
            default() {
                return []
            }
        },
        titles: {
            type: Array,
            default() {
                return ['备选列表','已选列表']
            }
        },
        height: {
            type: String,
            default: '360px'
        }
    },
    data() {
        return {
            // 搜索的值
            dataSearch:'',
            selectedSearch:'',
            // option 列表
            dataList:[],
            selectedList:[],
            // 选中列表
            activeList:[],
            activeSelected:[],
            // 条数
            leftTotal:0,
            rightTotal:0
        };
    },
    watch:{
        value(){
            this.getTotal();
        },
        data(){
            this.getlist();
            this.getTotal();
        }
    },
    computed:{
        /**
         * 输出字段搜索的方法
         */
        leftList: function(){
            return this.dataList.filter( (item)=> {
                if( item.label.search(this.dataSearch) !== -1 ){
                    return item
                }
            })
        },
        rightList: function(){
            return this.selectedList.filter( (item)=> {
                if( item.label.search(this.selectedSearch) !== -1 ){
                    return item
                }
            })
        }
    },
    mounted(){
        this.getlist();
        this.getTotal();
    },
    methods:{
        /**
         * 获取列表数据
         */
        getlist(){
            this.dataList = [];
            this.selectedList = [];

            this.data.forEach( (item)=> {
                if( this.value.indexOf(item.value) == -1 ){
                    this.dataList.push( item );
                }else{
                    this.selectedList.push( item );
                }
            })
        },
        /**
         * 移动到右边
         */
        moveDataList(){
            /**
             * 字段的循环插入
             */
            let selectedArr = [];
            for(let index=this.dataList.length-1; index>=0; index--){
                let item = this.dataList[index];
                if( this.activeList.indexOf(item.value) !== -1 ){
                    selectedArr.unshift( item );
                    this.dataList.splice(index,1);
                }
            }
            this.selectedList = [ ...this.selectedList, ...selectedArr ];

            this.activeList = [];
            this.valveChange();
        },
        /**
         * 移动到左边
         */
        moveSelectedList(){
            let dataArr = [];
            for(let index=this.selectedList.length-1; index>=0; index--){
                let item = this.selectedList[index];
                if( this.activeSelected.indexOf(item.value) !== -1 ){
                    dataArr.unshift( item );
                    this.selectedList.splice(index,1);
                }
            }
            this.dataList = [ ...this.dataList, ...dataArr ];

            this.activeSelected = [];
            this.valveChange();
        },
        /**
         * 修改选中的值
         */
        valveChange(){
            let selectedValue = [];
            this.selectedList.forEach( (item)=> {
                selectedValue.push( item.value );
            })
            this.$emit('input', selectedValue);
        },
        /**
         * 获取条数
         */
        getTotal(){
            this.leftTotal = this.dataList.length;
            this.rightTotal = this.selectedList.length;
        }

    }
};
</script>
