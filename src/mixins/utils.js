export default {
	data () {
		return {
			/**
			 * element-ui 时间插件的右侧按钮
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
		}
	},
	methods:{
		/**
             * Select组件实现全选
             * 
             * val:             选中的值
             * options:         下拉选项的数组
             * selectedKey:     储存值的位置
             * oldSelectedKey:  储存上一次的值
             * optionsType:     options第一层的值
             * selectedType:    selectedType第一层的值
             * selectedAllType: selectedAllType第一层的值
             */
            handleSelectAll (val, options, selectedKey, oldSelectedKey, {optionsType='selectOptions', selectedType='form', selectedAllType='selectAll'}) {
                // 保留所有值
                const allValues = this[optionsType][options].map(item => {
                    return item.value;
                });
                allValues.unshift('all-selected-neusoft');
                
                // 用来储存上一次选择的值，可进行对比
                const oldVal = this[selectedAllType][oldSelectedKey].length > 0 ? this[selectedAllType][oldSelectedKey] : [];
                // 若选择全部
                if ( val.includes('all-selected-neusoft') ) {
                    // 判断当前列表中除了全选之外是否还有其他选项
					if( allValues.length>1 ){
						this[selectedType][selectedKey] = allValues;
					}else{
						this[selectedType][selectedKey] = [];
					}
                }
                // 取消全选，上次有，当前没有，表示取消全选
                if (oldVal.includes('all-selected-neusoft') && !val.includes('all-selected-neusoft')) {
                    this[selectedType][selectedKey] = [];
                }
                // 点击非全选，需要排除全选 以及 当前点击的选项
                // 新老数据都有全选,证明之前是全选的，点击了一个选中项并且这个选中项不是全选
                if (oldVal.includes('all-selected-neusoft') && val.includes('all-selected-neusoft')) {
                    const index = val.indexOf('all-selected-neusoft');
                    // 排除全选选项
                    val.splice(index, 1);
                    this[selectedType][selectedKey] = val;
                }
                // 全选未选，但是其他选项都全部选上了，则全选选上
                if (!oldVal.includes('all-selected-neusoft') && !val.includes('all-selected-neusoft')) {
                    if (val.length === allValues.length - 1) {
                        this[selectedType][selectedKey] = ['all-selected-neusoft'].concat(val);
                    }
                }
                // 储存当前选择的最后结果 作为下次的老数据
                this[selectedAllType][oldSelectedKey] = this[selectedType][selectedKey];
            },
		/**
		 * 更新option数据
		 * optionsKey 	是option数组的key
		 * val   		选中的值
		 * optionsObj	下拉框联动数据存放处
		 */
		setNewOptions(optionsKey, val, optionsObj="optionsObj"){
			let newArr = [];
			if( Array.isArray(val) ){
				val.forEach( (key)=>{
					if ( this[optionsObj][optionsKey].hasOwnProperty(key) ) {
						newArr = newArr.concat( this[optionsObj][optionsKey][key] );
					}
				});
			}else{
				if( val === "all-options" ){
					for (const key in this[optionsObj][optionsKey]) {
						if ( this[optionsObj][optionsKey].hasOwnProperty(key) ) {
							newArr = newArr.concat( this[optionsObj][optionsKey][key] );
						}
					}
				}else{
					if ( this[optionsObj][optionsKey].hasOwnProperty(val) ) {
						newArr = newArr.concat( this[optionsObj][optionsKey][val] );
					}
				}
			}
			return newArr;
		},
		/**
		 * 默认时间
		 */
		setDefaultTime(callBack){
			let dateTime = [];
			let nowDate = new Date(),
				year = nowDate.getFullYear(),
				month = nowDate.getMonth() + 1>9 ? nowDate.getMonth() + 1 : "0" + (nowDate.getMonth() + 1),
				date = nowDate.getDate() > 9 ? nowDate.getDate():'0'+nowDate.getDate();
			let start = year + month + date +'000000',
				end = year + month + date +'235959';
			dateTime.push(start);
			dateTime.push(end);
			if (callBack instanceof Function) {
				callBack(dateTime);
			}
		}
	}
}