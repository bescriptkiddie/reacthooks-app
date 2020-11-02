import React, {useState} from 'react';

function useCount(init) {
    let [count, setCount] = useState(init);

    function add() {
        setCount(++count);
    }

    function minus() {
        setCount(--count);
    }

    return [count, add, minus, setCount];
}

function Hook() {
    const [count, add, minus, setCount] = useCount(0);
    return <div>
        <button
            onClick={() => {
              add();
            }}
        >增加
        </button>
        <span> {count} </span>
        <button
            onClick={() => {
                minus();
            }}
        >减少
        </button>
        <button
            onClick={() => {
                setCount(5);
            }}
        >自定义
        </button>
    </div>;
}

export default Hook;
