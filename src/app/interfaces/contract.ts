import { FormControl, Validators } from "@angular/forms";


export interface Contract {
    id: number;
    admissionDate: string;
    workingHours: string;
    jobFunction: string;
    typeOfContract: string;
}

export interface ContractForm {
    id: FormControl<number | null>;
    admissionDate: FormControl<string>;
    workingHours: FormControl<string>;
    jobFunction: FormControl<string>;
    typeOfContract: FormControl<string>;
}

