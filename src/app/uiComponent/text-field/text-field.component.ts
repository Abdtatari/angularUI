import { Component, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
  @Input()
  controller = new FormControl('', []);
  @Input()
  placeHolder=''; 
  @Input()
  label='';
  @Input()
  required=false;

  ngOnInit() {
    if (this.required){
      this.controller.addValidators(Validators.required)
    }
  }
}
