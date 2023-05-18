import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormControlConfig } from 'src/app/shared/models/FormControlConfig';
import { Customer } from 'src/app/shared/models/Customer';
import { AgeRangeValidator } from 'src/app/shared/validators/age-range.validator';
import { CpfValidator } from 'src/app/shared/validators/cpf.validator';
import { LastNameValidator } from 'src/app/shared/validators/last-name.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Output() submitFormEvent = new EventEmitter<Customer>();
  @Output() formValidityEvent = new EventEmitter<boolean>();

  newCustomerForm: FormGroup;
  formControls: FormControlConfig[] = [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      placeholder: 'Insira seu nome completo',
      validationRules: [Validators.required, LastNameValidator()],
    },
    {
      name: 'document',
      label: 'CPF',
      type: 'text',
      mask: '000.000.000-00',
      placeholder: 'Insira seu CPF',
      validationRules: [Validators.required, CpfValidator()],
    },
    {
      name: 'dateOfBirth',
      label: 'Data de Nascimento',
      type: 'date',
      validationRules: [Validators.required, AgeRangeValidator()],
    },
    {
      name: 'monthlyIncome',
      label: 'Renda Mensal',
      type: 'text',
      mask: 'separator.2',
      placeholder: 'Insira sua renda mensal',
      validationRules: [Validators.required],
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'Insira seu e-mail',
      validationRules: [Validators.required, Validators.email],
    },
    {
      name: 'createDate',
      label: 'Data de Cadastro',
      type: 'date',
      value: new Date().toISOString().split('T')[0],
      validationRules: [Validators.required],
    },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
    this.handleFormValidity();
  }

  buildForm(): void {
    const formControlsConfig = this.formControls.reduce(
      (config: Record<string, any>, control) => {
        const validators = control.validationRules || [];
        config[control.name] = [control.value || '', validators];
        return config;
      },
      {}
    );

    this.newCustomerForm = this.formBuilder.group(formControlsConfig);
  }

  getControl(name: string) {
    return this.newCustomerForm.get(name);
  }

  onSubmitForm(): void {
    this.submitFormEvent.emit(this.newCustomerForm.value);
  }

  currentDate() {
    return new Date().toISOString().split('T')[0];
  }

  resetAndGoToCustomers(): void {
    this.newCustomerForm.reset();
    this.router.navigate(['customers']);
  }

  handleFormValidity() {
    this.newCustomerForm.valueChanges.subscribe(() => {
      this.formValidityEvent.emit(this.newCustomerForm.invalid);
    });
  }
}
