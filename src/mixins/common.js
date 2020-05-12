export default {
	data() {
		return {
			/**
             * 表格相关
			 */
            tableHeight: 100,           // 表格高度
			tableIndexWidth: 40,        // 表格序号列的宽度
			/**
			 * 分页器相关设置
			 */
			paginationSet: {
				sizes: [10, 20, 30, 40, 50],
				layout: 'total, sizes, prev, pager, next, jumper'
			}
		}
	},
	watch: {
		/**
         * 计算表格序号列的宽度
		 * 监听总条数的变化
		 */
		"pagination.current": function (newVal, oldVal) {
			let num = (this.pagination.current * this.pagination.size + '').toString().length;
			this.tableIndexWidth = (num*9+20) > 40 ? (num*9+20) : 40;
		}
	},
	methods: {
		/**
		 * 自定义索引
		 */
		handleIndex(index){
			return ( this.pagination.current-1 ) * this.pagination.size + index + 1;
		},
        /**
         * 计算表格的高度
         */
        calcTableHeight(Height, dom){
            /**
             * 预定义变量
             */
            let _this = this;
            let minuend = Height || 0;
            let $ = document.querySelector.bind(document);
            let $dom = dom || $('.moc-table');
            /**
             * 初始化设置table的高度
             */
            _this.tableHeight = 100;
            _this.$nextTick( ()=>{
                if( $dom ){
                    _this.tableHeight = $dom.offsetHeight - minuend;
                }
            });




        }



	}
}
