import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/86d37e95fbce2dea6eec6ef836f93ca3/api/',
    timeout: 5000,
    withCredentials:true
});


instance.interceptors.request.use(req=>{
    return req;
},err=>{
    return Promise.reject(err);
});

instance.interceptors.response.use(res=>{
    const {status, data} = res;
    if(status===200){
        if(data.code === 200){
            return data.data
        }
        return Promise.reject(data.msg);
    }
    return Promise.reject(data.msg);
},err=>{
    return Promise.reject(err);
});

export default instance;