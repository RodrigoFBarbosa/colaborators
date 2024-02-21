import { FormControl } from "@angular/forms";

export interface Address {
    id: number;
    streetAddress: string;
    number: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export interface AddressForm {
    id: FormControl<number | null>;
    streetAddress: FormControl<string>;
    number: FormControl<string>;
    city: FormControl<string>;
    state: FormControl<string>;
    zip: FormControl<string>;
    country: FormControl<string>;
}