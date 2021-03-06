export default {
	data() {
		return {
            /**
             * loading
             */
            mainLoading: false,              // 页面的加载状态
            tableLoading: false,            // 表格的加载状态
			/**
             * 表格相关
			 */
            tableHeight: 100,           // 表格高度
			tableIndexWidth: 40,        // 表格序号列的宽度
		}
	},
	watch: {
		/**
         * 计算表格序号列的宽度
		 * 监听总条数的变化
		 */
		"pagination.current": function (newVal, oldVal) {
			let num = (this.pagination.current * this.pagination.size + '').toString().length;
			this.tableIndexWidth = num*10+20;
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
            let minuend = Height || 0;
            let $ = document.querySelector.bind(document);
            let $dom = dom || $('.moc-table');
            /**
             * 初始化设置table的高度
             */
            this.tableHeight = 100;
            this.$nextTick( ()=>{
                if( $dom ){
                    this.tableHeight = $dom.offsetHeight - minuend;
                    /**
                     * 循环检测高度，每隔200毫秒从新获取 $dom 的高度
                     * 判断这个div的高度是否和table的高度相等，如果相等执行计数，如果连续runNumber次(每次1s钟)相等，则停止循环
                     * 如果不相等，则将div的高度 赋值给table，并从新开始计数
                     */
                    let timesRun = 0,
                        runNumber= 20;  // 多少秒之后停止算
                    let interval = setInterval( ()=>{
                        let containerH = $dom.clientHeight - minuend;
                        if( this.tableHeight === containerH ){
                            timesRun++;
                            if( timesRun > runNumber*5 ){
                                clearInterval(interval);
                            }
                        }else{
                            timesRun = 0;
                            this.tableHeight = containerH;
                        }
                    }, 200);
                }
            });

        }
	}
}
