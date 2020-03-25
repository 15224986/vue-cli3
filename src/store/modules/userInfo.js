// 数据源
const state = {
    user: false            // 初始化一个登录账户的信息 user
};
// 相当于 store 的计算属性
const getters = {
    renderUser(state) { //承载变化的user
        return state.user;
    }
};
// mutation 非常类似于事件
const mutations = {
    changeUser(state, items) {
        state.user = items; // 修改user
    }
};
/**
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */
const actions = {
    invokeChangeUser(context, item) { // 触发mutations里面的changeUser ,传入数据形参item 对应到items
        context.commit('changeUser', item);
    }
};
export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
