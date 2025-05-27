import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      passwords: this.fb.group({
        password: ['',[Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', [Validators.required]]
      }, {validators: this.senhaValidator})
    });
  }

  submit() {
    if (this.form.valid) {
      alert('Formulário válido');
    } else {
      alert('Formulário inválido');
    }
  }

  senhaValidator: ValidatorFn = (formGroup: AbstractControl) : ValidationErrors | null => {
    let  senha = formGroup.get('password')?.value;
    let  confirmasenha = formGroup.get('confirmPassword')?.value;

    if (senha !== confirmasenha){
      return {senhasDiferentes: true};
    }
    return null;
  }
}
