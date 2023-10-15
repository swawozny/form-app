import React, {useState} from "react";
import {Button, ConfigProvider, DatePicker, Form, Select} from "antd";

import TextInput from "../components/TextInput";
import validate from "../validations/validate";
import continents from "../constants/continents";

const DEFAULT_FONT_SIZE = 12;

export interface FormValues {
    continent?: string;
    firstName: string;
    lastName?: string;
    birthday?: Date;
}

const MainForm = () => {
    const [form] = Form.useForm<FormValues>();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [bigFontSize, setBigFontSize] = useState(false);

    const selectOptions = continents.map(continent => (
        <Select.Option
            key={continent}
            value={continent}
        >
            {continent}
        </Select.Option>)
    );

    const setFieldError = (name: string, error: string | undefined) => form.setFields([{
        name,
        errors: error ? [error] : []
    }]);

    const onFinish = (values: FormValues) => {
        setButtonDisabled(false);
        setBigFontSize(false);

        const validationResult = validate(values);

        setFieldError("firstName", validationResult?.firstName);
        setFieldError("continent", validationResult?.continent);

        if (validationResult) {
            if (validationResult.date) {
                setButtonDisabled(true);
            }
            if (validationResult.oldAge) {
                setBigFontSize(true);
            }
        } else {
            alert("Sukces!");
        }
    };

    const getFontSize = () => {
        return {fontSize: bigFontSize ? 2 * DEFAULT_FONT_SIZE : DEFAULT_FONT_SIZE};
    };

    return (
        <ConfigProvider theme={{token: getFontSize()}}>
            <Form
                form={form}
                onFinish={onFinish}
            >
            <Form.Item
                name="continent"
                label="Kontynent"
            >
                <Select placeholder="Wybierz kontynent">
                    {selectOptions}
                </Select>
            </Form.Item>
                <TextInput
                    name="firstName"
                    label="Imie"
                    placeholder="Podaj imię"
                />
                <TextInput
                    name="lastName"
                    label="Nazwisko"
                    placeholder="Podaj nazwisko"
                />
            <Form.Item
                name="birthday"
                label="Data urodzenia"
            >
                <DatePicker
                    style={{width: "100%"}}
                    format="YYYY/MM/DD"
                    placeholder="Wybierz datę urodzenia"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={buttonDisabled}
                >
                    Wyślij
                </Button>
            </Form.Item>
        </Form>
        </ConfigProvider>
    );
};
export default MainForm;
