import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [ HeaderComponent ],
  exports: [HeaderComponent]
})
export class HeaderModule{}
