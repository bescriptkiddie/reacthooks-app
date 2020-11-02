import React, {useState, useEffect} from 'react';

function Effect() {
    const [text, setText] = useState('课程的名字');
    const [edit, setEdit] = useState(false);
    // useEffect(()=>{
    //     console.log('组件更新到了~');
    // },[edit])
    return <div className="effect">
        {edit ?
            <Input text={text} setText={setText} setEdit={setEdit}/>
            :
            <Txt text={text} setEdit={setEdit}/>
        }
        {
            [...('.'.repeat(100))].map((item, index) => {
                return <div key={index}>hello,react!</div>;
            })
        }
    </div>;
}

function Input(props) {
    let {text, setText, setEdit} = props;

    function toScroll() {
        let txt = document.querySelector('#txt');
        let y = window.scrollY;
        txt.style.transform = `translateY(${y}px)`;
        console.log(y);
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll);
        return () => {
            window.removeEventListener('scroll', toScroll);
        };
    },[]); // 如果加 [] 是因为只在组件第一次渲染的时候添加监听
    return (
        <div>
            <input id="txt"
                   type="text"
                   value={text}
                   onChange={(e) => {
                       setText(e.target.value);
                   }}
                   onBlur={() => {
                       setEdit(false);
                   }}
            />
        </div>
    );
}

function Txt(props) {
    let {text, setEdit} = props;

    return (
        <div>{text}
            <span onClick={() => {
                setEdit(true);
            }}>  编辑</span>
        </div>
    );
}

export default Effect;
