import { useState } from "react";
import Sample from "./Sample";

function TodoInput({ onSubmit }) {

    const [inputValue, setInputValue] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        onSubmit?.(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text"
                    placeholder="Add your todos here"
                    onChange={(e) => {setInputValue(e.target.value)}}
                    value={inputValue}
                />

                <button>Add todo</button>
                <Sample key={Math.floor(Math.random()*99)} />
            </form>
        </>
    )
}

export default TodoInput;0