// 声明函数
function WidgetFun(){
    // 利用instanceof运算符，还可以巧妙地解决，调用构造函数时，忘了加new命令的问题。
    if (! this instanceof WidgetFun) {
        return new WidgetFun();
    }
};


/**
 * 计算出 #content 的最低高度
 */
WidgetFun.prototype.pageMinHeight = function () {
	setTimeout(function(){
		let $ = document.querySelector.bind(document);
        let winHeight = document.documentElement.clientHeight;
        if( $("#page-container") ){
            $("#page-container").style.minHeight = winHeight + 'px';
        }
	}, 10);
};


/**
 * 左道航的显示和隐藏
 */
WidgetFun.prototype.sidebarToggle = function () {
    let $ = document.querySelector.bind(document);
    if( $("#page-container").classList.contains('sidebar-hide') ){
        $("#page-container").classList.remove('sidebar-hide');
    }else{
        $("#page-container").classList.add('sidebar-hide');
    }

};

/**
 * 左道航的显示和隐藏
 */
WidgetFun.prototype.headerToggle = function () {
    let $ = document.querySelector.bind(document);
    if( $("#page-container").classList.contains('header-hide') ){
        $("#page-container").classList.remove('header-hide');
    }else{
        $("#page-container").classList.add('header-hide');
    }
};


// 去除所有空格
WidgetFun.prototype.trimAll = function (val) {
    if(!val) {
        return "";
    };
    return val.replace(/\s/ig,'');
};
// 去除左侧空格
WidgetFun.prototype.trimLeft = function (val) {
    if(!val) {
        return "";
    };
    return val.replace(/(^\s*)/g, "");
};
// 去除右侧空格
WidgetFun.prototype.trimRight = function (val) {
    if(!val) {
        return "";
    };
    return val.replace(/(\s*$)/g, "");
};
// 保留 n 小数
WidgetFun.prototype.toDecimal = function (val,length) {
    var denominator=1;
    if (!length) {
        denominator = 100;
    }else{
        for (var i = 0; i < length; i++) {
            denominator = denominator*10;
        };
    }
    return Math.floor(val * denominator ) / denominator ;
};
// 获取字符串中的数字
WidgetFun.prototype.getNum = function (val) {
    if(val == null) {
        return "";
    };
    return val.replace(/[^0-9]/ig, "");
};
// 清除字符串前面的所有0
WidgetFun.prototype.parseIt = function (val) {
    if(val == null) {
        return "";
    };
    return val.replace(/\b(0+)/gi,"");
};
// 判断是否含有 n 位及 n 位数以上的小数
WidgetFun.prototype.isMeet = function (val,length) {
    var y = String(val).indexOf(".") + 1;
    var count = String(val).length - y;
    if (!length) {
        length = 2;
    };
    if( y>0 && count>=length ) {
        return true;
    } else {
        return false;
    }
};
// 验证是否为正整数
WidgetFun.prototype.isInteger = function (value) {
    var patrn = /^\+?[1-9][0-9]*$/;
    if (patrn.exec(value-0) == null || value == "") {
        return false;
    } else {
        return true;
    }
};
// Obj的深度拷贝
WidgetFun.prototype.deepCopyObj = function (obj) {
    /**
     * 判断
     */
    if(obj === null) return null;
    if(typeof obj !== 'object') return obj;
    if(obj.constructor===Date) return new Date(obj);
    /**
     * 开始深度拷贝Obj
     */
    var newObj = new obj.constructor ();  //保持继承链
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
            var val = obj[key];
            newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
        }
    }
    return newObj;
};

export default new WidgetFun();
