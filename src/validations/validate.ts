import validators from "./validators";
import {FormValues} from "../containers/MainForm";

export interface Errors {
    continent?: string;
    firstName?: string;
    date?: string;
    oldAge?: string;
}

export const validate = (values: FormValues) => {
    let errors: Errors = {};

    Object.values(validators).forEach(validator => {
        const validatorResult = validator(values);

        if (validatorResult) {
            errors = {
                ...errors,
                ...validatorResult
            }
        }
    });

    return Object.keys(errors).length ? errors : null;
};

export default validate;
