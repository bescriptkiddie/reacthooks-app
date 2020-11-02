import React, {useState, useEffect, useRef} from 'react';

function Ref() {
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
    const {text, setText, setEdit} = props;
    let input = useRef(null);

    function toScroll() {
        let y = window.scrollY;
        input.style.transform = `translateY(${y}px)`;
    }

    useEffect(() => {
        console.log(input);
        input.current.select();
        window.addEventListener('scroll', toScroll);
        return () => {
            window.removeEventListener('scroll', toScroll);
        };
    }, []); // 如果加 [] 是因为只在组件第一次渲染的时候添加监听
    return (
        <div>
            <input id="txt"
                   type="text"
                   value={text}
                   ref={input}
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

function Ref2() {
    const [number, setNumber] = useState(0);
    const prev = useRef(number);
    useEffect(() => {
        prev.current = number;
    })
    return (
        <div>
            <h1>当前值:{number}</h1>
            <h1>上一次的值:{prev.current}</h1>
            <button onClick={() => {
                setNumber(number + 1);
            }}>增加
            </button>
        </div>
    );
}

export default Ref2;
