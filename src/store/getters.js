const getters = {
    toFullPath: state => state.toFullPath,
    renderSrc: state => state.toFullPath.src,

    userInfo: state => state.userInfo,
    user: state => state.userInfo.user,
    token: state => state.userInfo.token,
    refreshToken: state => state.userInfo.refreshToken,
    tokenExpire: state => state.userInfo.tokenExpire,
    menus: state => state.userInfo.menus,
    elements: state => state.userInfo.elements,
    maxNumber: state => {
        return state.userInfo.number.filter(function(item, index) {
            return item >= 5;
        });
    }
}
export default getters
