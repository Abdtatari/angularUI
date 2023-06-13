import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponontsTreeComponent } from './compononts-tree/compononts-tree.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ComponentTableComponent } from './component-table/component-table.component';
import { MatSortModule } from '@angular/material/sort';
import { HistoryTableComponent } from './history-table/history-table.component';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { TextFieldComponent } from './uiComponent/text-field/text-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RichTextFieldComponent } from './uiComponent/rich-text-field/rich-text-field.component';
import { DropDownComponent } from './uiComponent/drop-down/drop-down.component';
import {MatSelectModule} from '@angular/material/select';
import { RadioButtonComponent } from './uiComponent/radio-button/radio-button.component';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports:[
  ],
  declarations: [
    AppComponent,
    ComponontsTreeComponent,
    ComponentTableComponent,
    HistoryTableComponent,
    HeaderComponent,
    TextFieldComponent,
    RichTextFieldComponent,
    DropDownComponent,
    RadioButtonComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
