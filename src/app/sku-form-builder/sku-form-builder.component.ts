import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-sku-form-builder',
  templateUrl: './sku-form-builder.component.html',
  styleUrls: ['./sku-form-builder.component.css']
})
export class SkuFormBuilderComponent implements OnInit {
  public myForm: FormGroup;
  public sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose([
        Validators.required,
        skuValidator
      ])]
    })
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('You submitted value: ', form);
  }

}

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true };
  }
}
