
import { Address, AddressForm } from './address';
import { FormControl, FormGroup } from '@angular/forms';

export interface Collaborator {
    id: number;
    firstName: string;
    lastName: string;
    maritalStatus: string;
    birthdate: string;
    email: string;
    address: Address;
}

export interface CollaboratorForm {
    id: FormControl<number | null>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    maritalStatus: FormControl<string>;
    birthdate: FormControl<string>;
    email: FormControl<number>;
    address: FormGroup<AddressForm>;
}