import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFormBuilderComponent } from './sku-form-builder.component';

describe('SkuFormBuilderComponent', () => {
  let component: SkuFormBuilderComponent;
  let fixture: ComponentFixture<SkuFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
