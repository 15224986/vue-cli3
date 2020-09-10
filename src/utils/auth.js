const TokenKey = 'Admin-Token'
const RefreshTokenKey = 'Admin-Token-Refresh'
const TokenExpire = 'Admin-Token-expire'


export function setToken(token) {
    localStorage.setItem(TokenKey, token);
}
export function getToken() {
    return localStorage.getItem(TokenKey)
}
export function removeToken() {
    localStorage.removeItem(TokenKey)
}


export function setRefreshToken(refreshToken) {
    localStorage.setItem(RefreshTokenKey, refreshToken);
}
export function getRefreshToken() {
    return localStorage.getItem(RefreshTokenKey)
}
export function removeRefreshToken() {
    localStorage.removeItem(RefreshTokenKey)
}


export function setTokenExpire(tokenExpire) {
    localStorage.setItem(TokenExpire, tokenExpire);
}
export function getTokenExpire() {
    return localStorage.getItem(TokenExpire)
}
export function removeTokenExpire() {
    localStorage.removeItem(TokenExpire)
}
