<template>
    <section class="moc-container-section" :class="{ 'moc-container-bodier':bodier }">
        <slot></slot>
    </section>
</template>

<script>
	export default{
		name: 'mocContainerSection',
		componentName: 'mocContainerSection',
		data() {
			return{
			}
		},
	  	props: {
            bodier: {
                type: Boolean,
                default: false
            },
		}
	}
</script>
