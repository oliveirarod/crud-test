import { Validators } from '@angular/forms';

export interface FormControlConfig {
  name: string;
  label: string;
  type: string;
  disabled: boolean;
  value?: any;
  mask?: string;
  placeholder?: string;
  validationRules?: Validators[];
}

export interface FormControlEditValue {
  name: string;
  value: any;
  disabled?: boolean;
}
