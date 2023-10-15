import {calculateYearsDiff, isDateAfterToday} from "../helpers/date";

export interface FormValues {
    continent?: string;
    firstName: string;
    lastName?: string;
    birthday?: Date;
}

const validateContinentAndLastName = (values: FormValues) => {
    const {continent, lastName} = values;

    if (continent === "Europa" && (!lastName || lastName.length < 2)) {
        return {
            continent: "Nie spełnione kryteria"
        }
    }
};

const validateFirstName = (values: FormValues) => {
    const {firstName} = values;

    if (!firstName) {
        return {
            firstName: "To pole jest wymagane"
        }
    }
};

const validateBirthdayCorrectness = (values: FormValues) => {
    const {birthday} = values;

    if (birthday && isDateAfterToday(birthday)) {
        return {
            date: "Data urodzenia jest większa niż dzisiejsza data"
        }
    }
};

const validateAge = (values: FormValues) => {
    const {birthday} = values;

    if (birthday && calculateYearsDiff(birthday) >= 60) {
        return {
            oldAge: "Użytkownik jest starszy niż 60 lat"
        }
    }
};

const validators = {
    validateContinentAndLastName,
    validateFirstName,
    validateBirthdayCorrectness,
    validateAge
};

export default validators;
