export default {
	data() {
		return {
            /**
             * loading
             */
            mainLoading: true,              // 页面的加载状态
            tableLoading: false,            // 表格的加载状态
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
			},
            /**
             * 时间插件的右侧按钮
             */
            datePickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近一个月',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近三个月',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        picker.$emit('pick', [start, end])
                    }
                }]
            },
            /**
             * 选择月份范围 带快捷选项
             *
             * 做项目的时候，这个不需要放到公共文件里（保持公共的mixins要小）
             */
            datePickerMonth: {
                shortcuts: [{
                    text: '本月',
                    onClick(picker) {
                        picker.$emit('pick', [new Date(), new Date()]);
                    }
                }, {
                    text: '今年至今',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date(new Date().getFullYear(), 0);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近六个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setMonth(start.getMonth() - 6);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
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
         * 多层obj的值的获取和修改
         * @param {Object} 最外层的obj
         * @param {Object} 相对最外层的路径
         * @param {Object} 是否开启严格模式
         * @return {o} 最终字段所在的obj
         * @return {k} 最终字段所在的obj的key
         * @return {v} 获取值
         *
         *
         *
         * 做项目的时候，这个不需要放到公共文件里（保持公共的mixins要小）
         */
        getPropByPath(obj, path, strict) {
            let tempObj = obj;
            path = path.replace(/\[(\w+)\]/g, '.$1');
            path = path.replace(/^\./, '');

            let keyArr = path.split('.');
            let i = 0;
            for (let len = keyArr.length; i < len - 1; ++i) {
                if (!tempObj && !strict) break;

                let key = keyArr[i];
                if (key in tempObj) {
                    tempObj = tempObj[key];
                } else {
                    if (strict) {
                        throw new Error('please transfer a valid prop path to form item!');
                    }
                    break;
                }
            }
            return {
                o: tempObj,
                k: keyArr[i],
                v: tempObj ? tempObj[keyArr[i]] : null
            };
        },
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
