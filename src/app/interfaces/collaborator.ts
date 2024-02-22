import { Contract, ContractForm } from './contract';
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
    contract: Contract;
}

export interface CollaboratorForm {
    id: FormControl<number | null>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    maritalStatus: FormControl<string>;
    birthdate: FormControl<string>;
    email: FormControl<number>;
    address: FormGroup<AddressForm>;
    contract: FormGroup<ContractForm>;
}