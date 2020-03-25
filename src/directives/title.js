export default {
    install: function (Vue, options) {
        Vue.directive("mocTitle", {
            bind(el, binding, vnode) {
                el.title = binding.value
            }
        })
    }
}
