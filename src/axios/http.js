import Axios from 'axios';
import Qs from 'qs';


/**
 * 使用自定义配置新建一个 axios 实例
 */
var instance = Axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 15000,  //超时响应
    withCredentials: true,  // Axios 默认不发送cookie，需要全局设置true发送cookie
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
});


/**
 * 封装Axios方法
 * @param url
 * @param data
 * @returns {Promise}
 */
const http = ( params = {} ) => {
    return new Promise((resolve, reject) => {
        instance(params).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err)
            })
    })
};



/**
 * 封装get方法
 * @param url       // 路径
 * @param params    // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.get = (url, params = {}, obj = {} ) => {   
    return new Promise((resolve, reject) => {
        obj.params = params;
        instance.get(url, obj ).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err)
            })
    })
};

/**
 * 封装delete方法
 * @param url       // 路径
 * @param params    // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.delete = (url, params = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        obj.params = params;
        instance.delete(url, obj ).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err)
            })
    })
};


/**
 * 封装head方法
 * @param url       // 路径
 * @param params    // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.head = (url, params = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        obj.params = params;
        instance.head(url, obj).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err)
            })
    })
}



/**
 * 封装post请求
 * @param url       // 路径
 * @param data      // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.post = (url, data = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, obj).then(response => {
                resolve(response);
            }, err => {
                reject(err)
            })
    });
}


/**
 * 封装put请求
 * @param url       // 路径
 * @param data      // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.put = (url, data = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        instance.put(url, data, obj).then(response => {
            resolve(response);
        }, err => {
            reject(err)
        })
    });
}


/**
 * 封装patch请求
 * @param url       // 路径
 * @param data      // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.patch = (url, data = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        instance.patch(url, data, obj).then(response => {
            resolve(response);
        }, err => {
            reject(err)
        })
    });
}

/**
 * 拦截器
 * 在请求或响应被 then 或 catch 处理前拦截它们。
 */

// 引入路由
import router from '@/router';   // vue-router
// 引入store
import store from '@/store/index';


// 请求拦截器
instance.interceptors.request.use((config) => {
        
    // console.log(config);

    // 在发送请求之前转换post传过去时的参数格式
    // 安装插件 querystring 进行转化
    // 通过querystring 将json格式的请求数据转换为form-data格式
    if (config.method === 'post' || config.method === 'put' ) {
        config.data = Qs.stringify(config.data);
    }


    /**
     * 发送请求携带 token
     * 判断本地是否存在accessToken，如果存在的话，则每个http header都加上token
     */
    // const accessToken = window.localStorage.getItem("accessToken");
    // if (accessToken) {
    //     config.headers['token'] = accessToken;
    // }

    
    return config;
}, error =>{
    // 对请求错误做些什么
    Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(response =>{
    // 根据code跳转到响应页面
    if( response.data && response.data.code == 702 ){
        store.dispatch('toFullPath/invokeChangeSrc', router.history.current.fullPath);
        router.push({ path: "/login" });   
    }else if( response.data && response.data.code == 400 ){
        router.push({ path: "/400" });  
    }
    // 对响应数据做点什么
    return response
}, error =>{
    // 对响应错误做点什么
	Promise.reject(error)
});

export {instance, http};
