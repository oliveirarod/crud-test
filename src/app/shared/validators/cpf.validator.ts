import { AbstractControl, ValidatorFn } from '@angular/forms';

export function CpfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpf = control.value;

    if (!cpf) {
      // If the field is empty, it is considered valid
      return null;
    }

    // Remove non-numeric characters from the CPF
    const cleanedCpf = cpf.replace(/\D/g, '');

    // Check if the CPF has 11 digits
    if (cleanedCpf.length !== 11) {
      return { invalidCpf: true };
    }

    // Check if all digits are the same (invalid CPF)
    if (/^(\d)\1+$/.test(cleanedCpf)) {
      return { invalidCpf: true };
    }

    // Calculate the first verification digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCpf.charAt(i)) * (10 - i);
    }
    let firstDigit = 11 - (sum % 11);
    if (firstDigit === 10 || firstDigit === 11) {
      firstDigit = 0;
    }

    // Check the first verification digit
    if (parseInt(cleanedCpf.charAt(9)) !== firstDigit) {
      return { invalidCpf: true };
    }

    // Calculate the second verification digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCpf.charAt(i)) * (11 - i);
    }
    let secondDigit = 11 - (sum % 11);
    if (secondDigit === 10 || secondDigit === 11) {
      secondDigit = 0;
    }

    // Check the second verification digit
    if (parseInt(cleanedCpf.charAt(10)) !== secondDigit) {
      return { invalidCpf: true };
    }

    // Valid CPF
    return null;
  };
}
