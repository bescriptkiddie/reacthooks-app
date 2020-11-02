import React, {useState, createContext, useContext} from 'react';

// let {Provider, Consumer} = createContext('hello');
// class Children extends React.Component {
//     render() {
//         return (
//             <Consumer>
//                 {(context) => {
//                     return <h3>这是父组件传下来的信息:{context.info}</h3>;
//                 }}
//             </Consumer>
//         );
//     }
// }

let myContext = createContext('hello');

class Children extends React.Component {
    static contextType = myContext
    render() {
        console.log(this.context);
        return <h3>这是祖先传下来的信息: {this.context.info}</h3>;
    }
}

function Children2 (){
    console.log(useContext(myContext));
    let {info} = useContext(myContext);
    return <div>
        <h3>这是祖先传下来的信息: {info}</h3>
    </div>
}

class Parent extends React.Component {
    render() {
        return <div>
            <Children info={this.props.info}/>
            <Children2 />
        </div>;
    }
}

class Context extends React.Component {
    render() {
        return (
            <div>
                {/*<Provider value={{info: '今年是2020年'}}>*/}
                {/*    <Parent/>*/}
                {/*</Provider>*/}
                <myContext.Provider value={{info: '今年是2020年'}}>
                    <Parent/>
                </myContext.Provider>
            </div>
        );
    }
}

// function Context() {
//     const [text, setText] = useState('课程的名字');
//     const [edit, setEdit] = useState(false);
//     // useEffect(()=>{
//     //     console.log('组件更新到了~');
//     // },[edit])
//     return <div className="effect">
//         {edit ?
//             <Input text={text} setText={setText} setEdit={setEdit}/>
//             :
//             <Txt text={text} setEdit={setEdit}/>
//         }
//         {
//             [...('.'.repeat(100))].map((item, index) => {
//                 return <div key={index}>hello,react!</div>;
//             })
//         }
//     </div>;
// }

export default Context;
