import React, {useReducer, createContext, useContext} from 'react';

let myContext = createContext('hello');

function reducer(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            state += 1;
            break;
        case 'MINUS':
            state -= 1;
            break;
    }
    return state;
}

function Children() {
    let {state, dispatch} = useContext(myContext);
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({
                        type: 'ADD',
                    });
                }}
            >增加
            </button>
            <span> {state} </span>
            <button
                onClick={() => {
                    dispatch({
                        type: 'MINUS',
                    });
                }}
            >减少
            </button>
        </div>
    );
}

function Reduce() {
    const [state, dispatch] = useReducer(reducer, 0);
    return <div>
        <myContext.Provider value={{state, dispatch}}>
            <Children/>
        </myContext.Provider>
    </div>;
}

export default Reduce;
