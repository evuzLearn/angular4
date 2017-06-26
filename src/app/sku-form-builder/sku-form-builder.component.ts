import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-sku-form-builder',
  templateUrl: './sku-form-builder.component.html',
  styleUrls: ['./sku-form-builder.component.css']
})
export class SkuFormBuilderComponent implements OnInit {
  public myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['ABC123']
    })
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('You submitted value: ', form);
  }

}
