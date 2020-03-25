<template>
	<table>
		<tr>
			<td :colspan="datasource.children && datasource.children.length ? datasource.children.length*2 : null">
				<div class="node" v-if="datasource.id ||  datasource.name || datasource.content" :id="datasource.id" :pid="pid" @click.stop="handleClick(datasource,$event)">
					<slot :node-data="datasource">
						<div class="title">
							{{ datasource.name }}
						</div>
						<div v-if="datasource.content" class="content">{{ datasource.content }}</div>
						<a v-if="deletebtn" @click.stop="handleDelete(datasource,$event)" class="delete-btn" href="javascript:;"></a>
					</slot>
				</div>
			</td>
		</tr>
		<template v-if="datasource.children && datasource.children.length">
			<tr class="lines">
				<td :colspan="datasource.children.length*2">
					<div class="downLine"></div>
				</td>
			</tr>
			<tr class="lines">
				<td class="rightLine"></td>
				<template v-for="(n, index) in (datasource.children.length-1)">
					<td class="leftLine topLine" :key="'letf-'+index"></td>
					<td class="rightLine topLine" :key="'right-'+index"></td>
				</template>
				<td class="leftLine"></td>
			</tr>
			<tr class="nodes">
				<td colspan="2" v-for="child in datasource.children" :key="child.id">
					<moc-orgchart-node :datasource="child" :pid="datasource.id" :deletebtn="deletebtn"  :handle-delete="handleDelete" :handle-click="handleClick">
						<template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">
							<slot :name="slot" v-bind="scope"/>
						</template>
					</moc-orgchart-node>
				</td>
			</tr>
		</template>
	</table>
</template>

<script>
	export default {
		name: 'mocOrgchartNode',
		props: {
			pid: [String, Number],
			datasource: Object,
			deletebtn: Boolean,
			handleClick: Function,
			handleDelete: Function
		},
		mounted(){
		},
		methods: {
		}
	};
</script>
