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
      sku: ['', Validators.required]
    })
    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('You submitted value: ', form);
  }

}
