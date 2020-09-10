import {
    instance,
    http
} from '@/axios/http'
import {
    getToken,
    setToken,
    removeToken,

    getTokenExpire,
    setTokenExpire,
    removeTokenExpire,

    getRefreshToken,
    setRefreshToken,
    removeRefreshToken
} from '@/utils/auth'


// 数据源
const state = {
    user: 'anextUntil', // 初始化一个登录账户的信息 user
    token: getToken(),
    refreshToken: getRefreshToken(),
    tokenExpire: getTokenExpire(),
    menus: undefined,               // 菜单权限
    elements: undefined,            // 非菜单权限
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};
// 相当于 store 的计算属性
const getters = {
    renderUser(state) { //承载变化的user
        return state.user;
    },
    maxNumber(state) { //承载变化的user
        return state.number.filter(function(item, index) {
            return item >= 5;
        });
    }
};
// mutation 非常类似于事件
const mutations = {
    CHANGE_USER(state, items) {
        state.user = items; // 修改user
    },
    CHANGE_TOKEN(state, token) {
        state.token = token; // 修改user
    },
    CHANGE_REFRESHTOKEN(state, refreshToken) {
        state.refreshToken = refreshToken; // 修改user
    },
    CHANGE_TOKENEXPIRE(state, tokenExpire) {
        state.tokenExpire = tokenExpire; // 修改user
    },
    CHANGE_MENUS(state, menus) {
        state.menus = menus; // 修改user
    },
    CHANGE_ELEMENTS(state, elements) {
        state.elements = elements; // 修改user
    },
};
/**
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */
const actions = {
    invokeCHANGE_User(context, item) { // 触发mutations里面的CHANGE_User ,传入数据形参item 对应到items
        context.commit('CHANGE_USER', item);
    },
    /**
     * 用户名登录
     */
    LoginByUsername({commit}, userInfo) {
        commit('CHANGE_TOKEN', '')
        commit('CHANGE_REFRESHTOKEN', '')
        commit('CHANGE_TOKENEXPIRE', '')
        commit('CHANGE_MENUS', undefined)
        removeToken()
        removeTokenExpire()
        removeRefreshToken()
        return new Promise((resolve, reject) => {
            // http.post('sys/user/login', userInfo ).then((response) => {
            //     /**
            //      * 给vuex赋值
            //      */
            //     commit('CHANGE_TOKEN', response.token)
            //     commit('CHANGE_TOKENEXPIRE', response.refreshToken)
            //     commit('CHANGE_REFRESHTOKEN', response.tokenExpire)

            //     /**
            //      * 给本地赋值
            //      */
            //     setToken(response.token)
            //     setRefreshToken(response.refreshToken)
            //     const expire = response.expire * 1000 + new Date().getTime()
            //     setTokenExpire(expire)
            //     /**
            //      * 其他操作
            //      */
            //     resolve()
            // }).catch((error) => {
            //     console.log(error);
            //     reject()
            // });


            const response = {
                token:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6IjEiLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwiZXhwIjoxNTk5NjU0MjIwfQ.IFBkCid1dSIfI6PKFWHRqhrCzDrayupxETuo02CRVdkh6MWDlzqbkq9Un2HeEw2I1Cow0xMnyMCXFjJHh1ArFFHbLjM9C8pc04702tIJcg3WcB07MIFQJY7-hr0V_xwXSt20oueXzS3jhh5OxYeTczeAW7P29b867j8cjr3gYEs',
                refreshToken:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6IjEiLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwianRpIjoiYTA5MDg5ZTUtMmUyZi00ZWUzLTlhNjUtOTE5NTlmMjQzNjU4IiwiZXhwIjoxNTk5NjU0NTIwfQ.ChhwFhvLjMxaC0-M0rOTHDocv4i2cLWQedCwAiqX4BuuWWjjQHOH0Pwnn7q-btAGy-7G_zwmYQUJwbgabELe3a0zejodX6NiA4skmhMIyU9GekMHj4i1JPVWoI1Nka5TmidgbDLeXsRgB4Fj97CsRwkruSOiomvqCiKFXtTwLjU',
                tokenExpire: 300
            }
            setTimeout(()=>{
                /**
                 * 给vuex赋值
                 */
                commit('CHANGE_TOKEN', response.token)
                commit('CHANGE_TOKENEXPIRE', response.refreshToken)
                commit('CHANGE_REFRESHTOKEN', response.tokenExpire)

                /**
                 * 给本地赋值
                 */
                setToken(response.token)
                setRefreshToken(response.refreshToken)
                const expire = response.expire * 1000 + new Date().getTime()
                setTokenExpire(expire)
                /**
                 * 其他操作
                 */
                resolve()
            }, 2000);
        })
    },
    /**
     * 获取用户信息
     */
    GetUserInfo({commit, state}) {
        commit('CHANGE_MENUS', '')
        commit('CHANGE_ELEMENTS', '')
        return new Promise((resolve, reject) => {
            // http.get('sys/user/userInfo', state.token ).then((response) => {
            //     /**
            //      * 给vuex赋值
            //      */
            //     commit('CHANGE_MENUS', response.menus)
            //     commit('CHANGE_ELEMENTS', response.elements)
            //     /**
            //      * 其他操作
            //      */
            //     resolve(response)
            // }).catch((error) => {
            //     console.log(error);
            //     reject()
            // });

            const response = {
                menus: {
                    'add': true,
                    'delete': true,
                },
                elements: {
                    'name': true,
                    'age': true,
                },
                name:'小茗同学'
            }
            setTimeout(()=>{
                /**
                 * 给vuex赋值
                 */
                commit('CHANGE_USER', response.name)
                commit('CHANGE_MENUS', response.menus)
                commit('CHANGE_ELEMENTS', response.elements)
                /**
                 * 其他操作
                 */
                resolve()
            }, 2000);
        })
    },
    /**
     * 退出登录
     */
    LogOut({commit, state}) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                commit('CHANGE_USER', '')
                commit('CHANGE_TOKEN', '')
                commit('CHANGE_REFRESHTOKEN', '')
                commit('CHANGE_TOKENEXPIRE', '')
                commit('CHANGE_MENUS', '')
                commit('CHANGE_ELEMENTS', '')
                removeToken()
                removeTokenExpire()
                removeRefreshToken()
                resolve()
            }, 2000);

            // http.get('sys/user/logout', state.token ).then((response) => {
            //     commit('CHANGE_TOKEN', '')
            //     commit('CHANGE_REFRESHTOKEN', '')
            //     commit('CHANGE_TOKENEXPIRE', '')
            //     commit('CHANGE_MENUS', '')
            //     commit('CHANGE_ELEMENTS', '')
            //     removeToken()
            //     removeTokenExpire()
            //     removeRefreshToken()
            //     resolve()
            // }).catch((error) => {
            //     console.log(error);
            //     reject()
            // });
        })
    },
    // 前端 登出
    FedLogOut({ commit }) {
        return new Promise(resolve => {
            commit('CHANGE_USER', '')
            commit('CHANGE_TOKEN', '')
            commit('CHANGE_REFRESHTOKEN', '')
            commit('CHANGE_TOKENEXPIRE', '')
            commit('CHANGE_MENUS', '')
            commit('CHANGE_ELEMENTS', '')
            removeToken()
            removeTokenExpire()
            removeRefreshToken()
            resolve()
        })
    },
    /**
     * 前端刷新Token
     */
    RefreshToken({commit,state}) {
        commit('CHANGE_TOKEN', '')
        removeToken()
        return new Promise((resolve, reject) => {
            http.get('sys/user/refreshToken', state.refreshToken ).then((response) => {
                /**
                 * 给vuex赋值
                 */
                commit('CHANGE_TOKEN', response.token)
                commit('CHANGE_TOKENEXPIRE', response.refreshToken)
                commit('CHANGE_REFRESHTOKEN', response.tokenExpire)

                /**
                 * 给本地赋值
                 */
                setToken(response.token)
                setRefreshToken(response.refreshToken)
                const expire = response.expire * 1000 + new Date().getTime()
                setTokenExpire(expire)
                /**
                 * 其他操作
                 */
                resolve()
            }).catch((error) => {
                console.log(error);
                reject()
            });
        })
    }
};
export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
