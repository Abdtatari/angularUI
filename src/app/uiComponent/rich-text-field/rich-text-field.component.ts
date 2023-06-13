import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rich-text-field',
  templateUrl: './rich-text-field.component.html',
  styleUrls: ['./rich-text-field.component.css']
})
export class RichTextFieldComponent {
  @Input()
  controller = new FormControl('', []);
  @Input()
  label=''
  @Input()
  required=false;
  ngOnInit(){
    if (this.required){
      this.controller.addValidators(Validators.required)
    }
  }
}
