import { AbstractControl, ValidatorFn } from '@angular/forms';

export function AgeRangeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const currentDate = new Date();
    const inputDate = new Date(control.value);

    // Calculate the age based on the difference between the current date and input date
    const age = currentDate.getFullYear() - inputDate.getFullYear();

    // Check if the age is within the range of 18 to 60 years
    if (age >= 18 && age <= 60) {
      return null; // Return null if the age is within the range
    } else {
      return { ageRange: true }; // Return a validation error if the age is outside the range
    }
  };
}