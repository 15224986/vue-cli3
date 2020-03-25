const state = {
    src: false       // 登陆后跳转到的路径
};
const getters = {
    renderSrc(state) {
        return state.src;
    }
};
const mutations = {
    changeSrc(state, items) {
        state.src = items;
    }
};
const actions = {
    invokeChangeSrc(context, item) {
        context.commit('changeSrc', item);
    }
};
export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
