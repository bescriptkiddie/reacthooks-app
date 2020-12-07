import React, {useState} from 'react';
import {connect} from 'react-redux';
import login from '../../store/action/login';
import {withRouter} from 'react-router-dom';
import {useBack} from '../../common/hook/index';

function LoginBox(props) {
    // console.log(props);  --> 通过withRouter可以获取路由信息
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [vcode, setVcode] = useState('');
    const [vcodeShow, setVcodeShow] = useState(false);
    const [vcodeSrc, setVcodeSrc] = useState(
        '/miaov/user/verify?' + Date.now());
    // 自定义hooks 返回上一页
    // 注意hooks只能在最外层使用,所以要想在里面调用,需要拿一个函数装好,在内部再调用
    const back = useBack(props.history);
    // console.log(back);
    const {setDeg} = props;

    function toLogin() {
        props.dispatch(login({
            verify: vcode,
            username: user,
            password,
        })).then(data => {
            alert(data.msg);
            setTimeout(() => {
                if (data.code !== 0) {
                    setVcodeSrc('/miaov/user/verify?' + Date.now());
                } else {
                    back();
                }
            }, 100);
        });
    }

    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={require('../../common/images/user_img.png')} alt=""/>
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input
                        type="text"
                        placeholder="用户名"
                        value={user}
                        onChange={e => {
                            setUser(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                </p>
                <p className="clearfix">
                    <input
                        type="text"
                        placeholder="验证码"
                        value={vcode}
                        onChange={e => {
                            setVcode(e.target.value);
                        }}
                        onFocus={() => {
                            setVcodeShow(true);
                        }}
                        className="verifyCode"
                    />
                    {vcodeShow ?
                        <img src={vcodeSrc}
                             className="verify"
                             onClick={() => {
                                 setVcodeSrc(
                                     // 加时间戳防止缓存
                                     '/miaov/user/verify?' + Date.now());
                             }}
                        alt={''}/> : ''}

                </p>
                <button
                    className="form_btn"
                    onClick={toLogin}
                >登录
                </button>
                <p className="form_tip">没有帐号？<a href=""
                    onClick={() => {
                        setDeg(-180);
                    }}
                >立即注册</a></p>
            </div>
        </div>
    );
}

export default connect(res => res)(withRouter(LoginBox));
