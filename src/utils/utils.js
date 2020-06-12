/**
 * 多层obj的值的获取和修改
 * @param {Object} 最外层的obj
 * @param {Object} 相对最外层的路径
 * @param {Object} 是否开启严格模式
 * @return {o} 最终字段所在的obj
 * @return {k} 最终字段所在的obj的key
 * @return {v} 获取值
 *
 * 做项目的时候，这个不需要放到公共文件里（保持公共的mixins要小）
 */
export function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');

    let keyArr = path.split('.');
    let i = 0;
    for (let len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict) break;

        let key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        } else {
            if (strict) {
                throw new Error('please transfer a valid prop path to form item!');
            }
            break;
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null
    };
};

/**
 * 将字符串true 和 false 转化成 boolean 的 true 和 false
 */
export function toBoolean(value) {
    let bool = {
        'true': true,
        'false': false
    };
    return bool[value] !== undefined ? bool[value] : false;
};
