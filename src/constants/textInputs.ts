export interface InputOptions {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
}

const textInputs: InputOptions[] = [
    {
        name: "firstName",
        label: "Imie",
        placeholder: "Podaj imię",
        required: true
    },
    {
        name: "lastName",
        label: "Nazwisko",
        placeholder: "Podaj nazwisko"
    }
];

export default textInputs;
