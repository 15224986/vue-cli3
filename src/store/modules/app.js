import {
    setSidebarOpened,
    getSidebarOpened
} from '@/utils/auth'
import toBoolean from '@/utils/toBoolean'

const state = {
    sidebar: {
        opened: toBoolean(getSidebarOpened()) ? toBoolean(getSidebarOpened()) : false
    }
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened
        if (state.sidebar.opened) {
           setSidebarOpened(true)
        } else {
           setSidebarOpened(false)
        }
    }
}

const actions = {
    toggleSideBar({commit}) {
        commit('TOGGLE_SIDEBAR')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
