/* 
 * 去除数组相同的方法
*/
Array.prototype.unique = function(){
	let arr = this.sort();
	var newArr = [arr[0]];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== newArr[newArr.length - 1]){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
/**
 * 从数组中删除第一个指定值元素的方法
 */
Array.prototype.remove = function(val) {
	let index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};
/**
 * 从数组中删除所有指定值元素的方法
 */
Array.prototype.delete = function(val) {
	let arr = this;
	arr.forEach(function(value, index){
		if(val===value){
			arr.splice(index, 1);
		}
	});
};





/**
 * 从字符串左边取 n 个字符
 */
String.prototype.leftLength = function(num,fill) {
    if (!/\d+/.test(num)){ // 判断是不是数字
        return ;
    }
    let str = this.substr(0,num);
    if(fill){  // 是否添加 ...
        str = str+"...";
    }
    return str;
}


