import React, {Fragment} from "react";
import {Button, DatePicker, Form, Select} from "antd";

import TextInput from "../components/TextInput";
import continents from "../constants/continents";
import textInputs, {InputOptions} from "../constants/textInputs";

interface FormValues {
    continent?: string;
    firstName: string;
    lastName?: string;
    birthday?: Date;
}

const MainForm = () => {
    const [form] = Form.useForm<FormValues>();

    const selectOptions = continents.map(continent => (
        <Select.Option
            key={continent}
            value={continent}
        >
            {continent}
        </Select.Option>)
    );

    const inputComponents = textInputs.map((input: InputOptions) => (
        <TextInput key={input.name} {...input}/>
    ));

    return (
        <Fragment>
            <Form form={form}>
                <Form.Item
                    name="continent"
                    label="Kontynent"
                >
                    <Select placeholder="Wybierz kontynent">
                        {selectOptions}
                    </Select>
                </Form.Item>
                {inputComponents}
                <Form.Item
                    name="birthday"
                    label="Data urodzenia"
                >
                    <DatePicker
                        style={{width: "100%"}}
                        placeholder="Wybierz datę urodzenia"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Wyślij
                    </Button>
                </Form.Item>
            </Form>
        </Fragment>
    );
};

export default MainForm;
