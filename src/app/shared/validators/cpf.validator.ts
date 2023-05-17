import { AbstractControl, ValidatorFn } from '@angular/forms';

export function CpfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpf = control.value;

    if (!cpf) {
      // Se o campo estiver vazio, considera-se válido
      return null;
    }

    // Remove caracteres não numéricos do CPF
    const cleanedCpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF possui 11 dígitos
    if (cleanedCpf.length !== 11) {
      return { invalidCpf: true };
    }

    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1+$/.test(cleanedCpf)) {
      return { invalidCpf: true };
    }

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCpf.charAt(i)) * (10 - i);
    }
    let firstDigit = 11 - (sum % 11);
    if (firstDigit === 10 || firstDigit === 11) {
      firstDigit = 0;
    }

    // Verifica o primeiro dígito verificador
    if (parseInt(cleanedCpf.charAt(9)) !== firstDigit) {
      return { invalidCpf: true };
    }

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCpf.charAt(i)) * (11 - i);
    }
    let secondDigit = 11 - (sum % 11);
    if (secondDigit === 10 || secondDigit === 11) {
      secondDigit = 0;
    }

    // Verifica o segundo dígito verificador
    if (parseInt(cleanedCpf.charAt(10)) !== secondDigit) {
      return { invalidCpf: true };
    }

    // CPF válido
    return null;
  };
}
