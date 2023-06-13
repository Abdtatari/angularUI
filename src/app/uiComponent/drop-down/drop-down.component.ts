import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {
  @Input()
  controller = new FormControl('',[])
  @Input()
  values:Array<string>=[];
  @Input()
  hint="";
  @Input()
  label='';
  @Input()
  required=false;

  ngOnInit(){
    if (this.required){
      this.controller.addValidators(Validators.required)
    }
  }
}
