import './BubbleSortApp.css';
import { useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState("")

    function bubbleSortHandler(event) {
        setInputValue(event.target.value);
    }

    function bubble() {
        const numbers = inputValue.split(',').map(Number);// Convert string to array of numbers
        const numbersLength = numbers.length;
        if (inputValue) {
            for (let i = numbersLength; i > 0; i--) {
                for (let j = 0; j < i - 1; j++) {
                    if (numbers[j] > numbers[j + 1]) {
                        // swap numbers
                        let temp = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = temp;
                    }
                }
            }
            return numbers.toString();
        } else {
            return "Put numbers please"
        }

    }

    return (
        <>
            <div className="containerBubble">
                <div className="inputValue">
                    <h1>Bubble Sort App</h1>
                    <textarea id="search"
                        type="text"
                        placeholder="Enter numbers separated by comma" onChange={bubbleSortHandler} ></textarea>
                    <p className='bublP'>{bubble()}</p>
                </div>
            </div>
        </>
    )
}

export default App
