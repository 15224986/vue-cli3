const TokenKey = 'Admin-Token'
const RefreshTokenKey = 'Admin-Token-Refresh'
const TokenExpire = 'Admin-Token-expire'


export function setToken(token) {
    sessionStorage.setItem(TokenKey, token);
}
export function getToken() {
    return sessionStorage.getItem(TokenKey)
}
export function removeToken() {
    sessionStorage.removeItem(TokenKey)
}


export function setTokenExpire(tokenExpire) {
    sessionStorage.setItem(TokenExpire, tokenExpire);
}
export function getTokenExpire() {
    return sessionStorage.getItem(TokenExpire)
}
export function removeTokenExpire() {
    sessionStorage.removeItem(TokenExpire)
}


export function setRefreshToken(refreshToken) {
    sessionStorage.setItem(RefreshTokenKey, refreshToken);
}
export function getRefreshToken() {
    return sessionStorage.getItem(RefreshTokenKey)
}
export function removeRefreshToken() {
    sessionStorage.removeItem(RefreshTokenKey)
}
