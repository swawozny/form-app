import React from "react";
import {Form, Input} from "antd";

import {InputOptions} from "../constants/textInputs";

const TextInput: React.FC<InputOptions> = ({name, label, placeholder, required}) => {
    return (
        <Form.Item
            name={name}
            key={name}
            label={label}
            rules={[{required}]}
        >
            <Input placeholder={placeholder}/>
        </Form.Item>
    );
};

export default TextInput;
