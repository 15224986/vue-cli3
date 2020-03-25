export default {
	methods:{
		/**
		 * obj对象/、arr数组的深层复制
		 */
		setDeepCopy(obj){
			var newObj = obj.constructor === Array ? []:{};
			// 实现深层复制
			if( obj.constructor === Array ){
				newObj = newObj.concat( obj );
			}else if( obj.constructor === Object ){
				for(var key in obj){
					// 判断如果是对象，且不是null
					if( typeof obj[key] === 'object' ){
						// 因为null没有constructor属性，所以必须将null放在前面。
						if( obj[key] === null || obj[key].constructor === RegExp || obj[key].constructor === Date ){
							newObj[key] = obj[key];
						} else {
							// 递归
							newObj[key] = this.setDeepCopy(obj[key]);
						}
					} else {
						newObj[key] = obj[key];
					}
				}
			}else{
				newObj = obj;
			}
			return newObj;
		}
	}
}
