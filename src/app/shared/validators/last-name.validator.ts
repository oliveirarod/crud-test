import { AbstractControl, ValidatorFn } from '@angular/forms';

export function LastNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const names: string[] = value ? value.trim().split(' ') : [];

    // Check if there is at least one last name
    const hasLastName: boolean = names.length > 1;

    return hasLastName ? null : { noLastName: true };
  };
}