<template>
	<el-tooltip
		effect="dark"
		:disabled="isShowTooltip"
		:content="content"
		:effect="effect"
		:placement="placement"
		:popper-class="popperClass"
	>
		<div class="moc-tooltip" @mouseenter="onMouseOver($event)">
			<span>
                <slot></slot>
            </span>
		</div>
	</el-tooltip>
</template>

<script>
	export default {
		name: 'mocTooltip',
		componentName: 'mocTooltip',
		props: {
			// 显示的文字内容
			content: {
				type: String,
				default: () => {
					return ''
				}
			},
			// 外层框的样式，在传入的这个类名中设置文字显示的宽度
			popperClass: {
				type: String,
				default: () => {
					return ''
				}
			},
			// 为页面文字标识（如在同一页面中调用多次组件，此参数不可重复）
			refName: {
				type: String,
				default: () => {
					return ''
				}
			},
			effect: {
				type: String,
				default: () => {
					return 'dark'
				}
			},
			placement: {
				type: String,
				default: () => {
					return 'bottom'
				}
			}
		},
		data() {
			return {
				isShowTooltip: true
			}
		},
		methods: {
			onMouseOver($event) {
				let parentWidth = $event.target.offsetWidth;
				let contentWidth = $event.target.children[0].offsetWidth;
				// 判断是否开启tooltip功能
				if (contentWidth > parentWidth) {
					this.isShowTooltip = false;
				} else {
					this.isShowTooltip = true;
				}
			}
		}
	}
</script>
