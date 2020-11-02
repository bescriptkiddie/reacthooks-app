import React, {useState}from 'react';

// class State extends React.Component {
//     state = {
//         name: 'leo',
//         age: 10
//     }
//     setAge=()=> {
//         let {age} = this.state;
//         this.setState({
//             age: ++age
//         })
//     }
//     render() {
//         let {name,age} = this.state;
//         return<div className="wrap">
//             <h1>姓名:{name}</h1>
//             <h2>年龄:{age}</h2>
//             <button onClick={this.setAge}>成长</button>
//         </div>
//     }
// }

function State() {
    const [name,setName] = useState('pika');
    const [age,setAge] = useState(18)
    return<div className="wrap">
        <h1>姓名:{name}</h1>
        <h2>年龄:{age}</h2>
        <button onClick={()=>{
            setAge(age+1)
        }}>成长</button>
    </div>
}
export default State
