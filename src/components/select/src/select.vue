<template>
	<div class="moc-select-box">
		<div class="moc-select-content" :class="{ 'open': optionsShow, 'disabled': disabled, 'has-valua': clearableType }">
			<input class="input" :disabled="disabled" @click="optionsToggle" v-model="activeText" readonly :placeholder="placeholder" />
			<span class="arrow"></span>
			<span class="clear-btn" v-if="clearable" @click="clearablefn">X</span>
		</div>
		<transition name="slide-down">
			<ul class="moc-select-options" v-show="optionsShow">
				<li class="moc-select-option"
					v-for="(item, index) in options"
					:key="index"
					@click="sleectItem(item,index)"
					:class="{'active':selectedVal===item.value, 'disabled':item.disabled}"
				>{{ item.label }}</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	export default{
		name: 'mocSelect',
        componentName: 'mocSelect',
		data() {
			return{
				optionsShow: false
			}
		},
		// 获取父组件通过v-model传过来的值
		model: {
	    	prop: 'selectedVal', 	// 绑定到的位置
	    	event: 'input'			// 通过什么事件改变
	  	},
	  	props: {
	    	selectedVal: {
		    	type: [String,Array],
		     	default: ''
		    },
		    options:{
		    	type: Array,
			    // 对象或数组默认值必须从一个工厂函数获取
			    default: function () {
			    	return []
			    }
		    },
		    // 带有默认值的数字
		    disabled: {
		    	type: Boolean,
		     	default: false
		    },
		    clearable: Boolean,
		    placeholder: {
		    	type: String,
		     	default: '请选择'
		    }
		},
		computed: {
			activeText: function () {
				var activeTxt = '';
                for (var i = 0; i < this.options.length; i++) {
                	if(this.selectedVal == this.options[i].value){
                		return this.options[i].label;
                	}
                }
            },
            clearableType: function () {
				if( typeof this.selectedVal === 'string' ){
					if( this.selectedVal.replace(/^\s+|\s+$/g,"") ){
						return true;
					}else{
						return false;
					}
				}else{
					if( this.selectedVal.length>0 ){
						return true;
					}else{
						return false;
					}
				}
            }
		},
		methods:{
			sleectItem(item,index){
				if( item.disabled ){
					return false;
				}
				this.activeIndex = index;
				this.optionsShow = !this.optionsShow;

				var val = item.value;
				/**
				 * 传给父组件绑定的v-model值的变化
				 */
				this.$emit('input', val);
				/**
				 * 给组件定义“change”事件，传递两个参数，分别是index和val
				 */
				this.$emit('change', item, index);
			},
			optionsToggle(){
				if( this.disabled ){
					return false;
				}
				this.optionsShow = !this.optionsShow;
			},
			clearablefn(){
				var val = '';
				this.$emit('input', val);
				this.optionsShow = false;
			}
		}
	}
</script>