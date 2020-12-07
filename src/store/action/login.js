import HTTP from "./http";
export default function login(data){
    return function(dispatch){
        // 通过post请求接口
       return HTTP.post("/user/login",data).then(res=>{
            if(res.data.code === 0){
                dispatch({
                    type: "LOGIN",
                    user: data.username
                });
            }
            return res.data;
        })
    }
}
