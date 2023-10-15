import React from "react";
import {Form, Input} from "antd";

interface InputOptions {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
}

const TextInput: React.FC<InputOptions> = ({name, label, placeholder}) => {
    return (
        <Form.Item
            name={name}
            key={name}
            label={label}
        >
            <Input placeholder={placeholder}/>
        </Form.Item>
    );
};

export default TextInput;
