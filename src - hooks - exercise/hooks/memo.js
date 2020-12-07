import React, {useState, useMemo} from 'react';

function Memo() {
    const [name, setName] = useState('pika');
    const [age, setAge] = useState(10);
    let grow = useMemo(() => {
        return age < 18 ? '未成年' : '成年';
    }, [age < 18]);
    return <div>
        <h1>性名:{name}</h1>
        <h1>年龄:{age}</h1>
        <h1>成长阶段:{grow}</h1>
        <button onClick={() => {
            setAge(age + 1);
        }}>成长
        </button>
    </div>;
}

export default Memo;
