import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  RxwebValidators,
  NumericValueType,
} from '@rxweb/reactive-form-validators';
import { MessageErrorsService } from '../../services/message-errors.service';
import { CountryService } from '../../services/country.service';
import { UserDatabaseService } from 'src/app/services/user-database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup;
  public countriesName: Array<string> = [];

  constructor(
    private msgError: MessageErrorsService,
    private countryService: CountryService,
    private UserDB: UserDatabaseService
  ) {
    this.countryService
      .GetCountry()
      .subscribe((country) => this.countriesName.push(country));
  }

  ngOnInit(): void {
    this.CreateForm();
  }

  public CreateForm() {
    this.formulario = new FormGroup({
      name: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/ },
        }),
        RxwebValidators.minLength({ value: 8 }),
      ]),
      email: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.email(),
      ]),
      password: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.password({
          validation: { minLength: 8, digit: true, specialCharacter: true },
        }),
      ]),
      repeatPsw: new FormControl(null, [
        RxwebValidators.compare({ fieldName: 'password' }),
      ]),
      nameComplete: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.pattern({
          expression: { fullName: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/ },
        }),
      ]),
      rfc: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { rfc: /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}/ },
        }),
      ]),
      telefono: new FormControl(null, [
        RxwebValidators.pattern({
          expression: {
            telefono: /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/,
          },
        }),
      ]),
      direccion: new FormControl(null, [
        RxwebValidators.maxLength({ value: 75 }),
      ]),
      numeroCasa: new FormControl(null, [
        RxwebValidators.maxNumber({ value: 99999 }),
        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
      ]),
      piso: new FormControl(null, [
        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
        RxwebValidators.maxNumber({ value: 99 }),
      ]),
      letra: new FormControl(null, [
        RxwebValidators.pattern({ expression: { letra: /^[A-Za-z]{1,2}$/ } }),
      ]),
      cp: new FormControl(null, [
        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
        RxwebValidators.maxNumber({ value: 99999 }),
      ]),
      country: new FormControl(null, RxwebValidators.required()),
    });
  }

  public ValidarForm(control: string) {
    if (!this.formulario.controls[control].touched) {
      return { error: undefined };
    }

    return this.msgError.messageError(this.formulario.controls[control].errors);
  }

  public GuardarUsuario() {
    this.UserDB.GuardarUsuario();
  }
}
