import { HeaderModule } from './../../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ChallengesPageRoutingModule } from './challenges-routing.module';

import { ChallengesComponent } from './challenges.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChallengesPageRoutingModule,

    HeaderModule
  ],
  declarations: [ ChallengesComponent ],

})
export class ChallengesPage{}
