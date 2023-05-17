import { Validators } from "@angular/forms";

export interface FormControlConfig {
  name: string;
  label: string;
  type: string;
  value?: any;
	mask?: string;
  placeholder?: string;
  validationRules?: Validators[];
}
