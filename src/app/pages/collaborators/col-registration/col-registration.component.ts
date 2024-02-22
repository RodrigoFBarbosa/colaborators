import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CollaboratorService } from 'src/app/shared/services/collaborator.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-col-registration',
  templateUrl: './col-registration.component.html',
  styleUrls: ['./col-registration.component.scss']
})
export class ColRegistrationComponent implements OnInit{
  registrationForm!: FormGroup;

  

  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  collaborators$!: Observable<string[]>;
 
  constructor(public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private collaboratorService: CollaboratorService) {}
 
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      maritalStatus: ['', Validators.required],
      birthdate: ['', [Validators.required, this.dateOfBirthValidator]],
      email: ['', [Validators.required, Validators.email, this.validateEmailFormat]],
      streetAddress: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      admissionDate: ['', [Validators.required, this.dateOfAdimissionValidator]],
      workingHours: ['', Validators.required],
      jobFunction: ['', Validators.required],
      typeOfContract: ['', Validators.required],
    });

    this.collaborators$ = this.collaboratorService.getCollaborators();

  }

  dateOfBirthValidator(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const minDate = new Date('1930-01-01');
    const maxDate = new Date('2010-12-31');

    if (birthdate < minDate || birthdate > maxDate) {
      return { invalidDate: true };
    }

    return null;
  }

  dateOfAdimissionValidator(control: AbstractControl): ValidationErrors | null {
    const admissionDate = new Date(control.value);
    const adMinDate = new Date('2023-01-01')
    const adMaxDate = new Date('2024-02-02')

    if (admissionDate < adMinDate || admissionDate > adMaxDate) {
      return {invalidDate: true};
    }

    return null;

  }

  validateEmailFormat(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do e-mail
    if (control.value && !emailRegex.test(control.value)) {
      return { invalidFormat: true }; // Retorna um erro se o formato do e-mail for inválido
    }
    return null; // Retorna null se o formato do e-mail for válido
  }

  get f() {
    return this.registrationForm.controls;
  }


  onSubmit() {
    // Verifica se o formulário é válido
    if (this.registrationForm.valid) {
      const firstName = this.registrationForm.value.firstName;
      const lastName = this.registrationForm.value.lastName;
      const fullName = `${firstName} ${lastName}`;
      this.collaboratorService.addCollaborator(fullName);
      this.bsModalRef.hide(); // Esconda o modal após o registro
    }
  }
}
 
 
/* This is a component which we pass in modal*/
 

