import axios from 'axios'

const baseUrl = 'http://localhost:88/'

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios.get(filterUrl(_url), {params: _params}).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            // axios.post(filterUrl(_url), _params).then((res) => {
            //     resolve(res)
            // }).catch((error) => {
            //     reject(error)
            // })
            axios({
                url: filterUrl(_url),
                method: 'post',
                data: _params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }]
            }).then(res => {
                if (!res.data.status && res.data.error == "unauthorized") {
                    router.push('login');
                    return false;
                }
                resolve(res.data)
            }).catch(error => {

                reject(error)
            }) 
        })
    }
}