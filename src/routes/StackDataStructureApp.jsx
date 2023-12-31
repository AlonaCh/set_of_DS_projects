import './StackDataStructure.css';
import { useState } from "react";

function App() {
    const [stack, setStack] = useState([])
    //.push() and .pop() methods
    function push() {
        let newStack = [...stack];
        let newElement = stack.length;
        newStack.push(newElement);
        setStack(newStack);
    }

    function pop() {
        let newStack = [...stack];
        newStack.pop();
        setStack(newStack);
    }

    return (
        <>
            <div className="container">
                <h1>Stack App</h1>
                <div className='buttons'>
                    <button className='stackBtn' onClick={push}>Add</button>
                    <button className='stackBtn' onClick={pop}>Remove</button>
                </div>
                <div className='inputContainer'>
                    {stack.length < 0 ? <p>Ops!</p> : stack.map((element) => <span className="hearts material-symbols-outlined" > heart_plus</span>)}
                </div>
            </div>
        </>
    )
}

export default App