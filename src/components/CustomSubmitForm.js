import React, {useState} from 'react';
import CustomButton from "./CustomButton";


function CustomSubmitForm(props) {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            {props.content}
        </form>
    )
}

export default CustomSubmitForm;
