import React, {useState, useEffect} from 'react';

// class Txt extends React.Component {
//     componentWillUnmount() {
//         console.log('组件卸载完毕!');
//     }
//     render() {
//         let {text,setEdit} = this.props
//         return (
//             <div>{text}
//                 <span onClick={() => {
//                     setEdit(true);
//                 }}>  编辑</span>
//             </div>
//         );
//     }
// }
//
// class Effect extends React.Component {
//     state = {
//         text: '课程的名字',
//         edit: false,
//     };
//     setEditState = (edit)=> {
//         this.setState({edit: edit});
//     }
//     componentDidMount(){
//         console.log('组件挂载完毕!');
//     }
//     componentDidUpdate(){
//         console.log('组件更新完毕!');
//     }
//     render() {
//         let {text, edit} = this.state;
//         return <div className="effect">
//             {edit ?
//                 <input type="text"
//                        value={text}
//                        onChange={(e) => {
//                            this.setState({
//                                text: e.target.value,
//                            });
//                        }}
//                        onBlur={() => {
//                            this.setState({edit: false});
//                        }}
//                 />
//                 :
//                 <Txt text={text} setEdit={this.setEditState} />
//             }
//         </div>;
//     }
// }

function Effect() {
    const [text, setText] = useState('课程的名字');
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        console.log('状态有改变~');
    });
    return <div className="effect">
        {edit ?
            <input type="text"
                   value={text}
                   onChange={(e) => {
                       setText(e.target.value);
                   }}
                   onBlur={() => {
                       setEdit(false);
                   }}
            />
            :
            <Txt text={text} setEdit={setEdit}/>
        }
    </div>;
}

function Txt(props) {
    let {text, setEdit} = props;
    useEffect(() => {
        console.log('组件有更新~');
        return () => {
            console.log('组件进行了渲染!');
        };
    });
    return (
        <div>{text}
            <span onClick={() => {
                setEdit(true);
            }}>  编辑</span>
        </div>
    );
}

export default Effect;
