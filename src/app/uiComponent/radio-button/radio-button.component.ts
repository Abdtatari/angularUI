import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  @Input()
  controller = new FormControl('')
  @Input()
  required=false
  @Input()
  seasons: string[] = [];
  favoriteSeason: string="";
  ngOnInit(){
    if (this.seasons.length>0){
      this.favoriteSeason=this.seasons[0]
    }
    if (this.required){
      this.controller.addValidators(Validators.required)
    }
  }
}
