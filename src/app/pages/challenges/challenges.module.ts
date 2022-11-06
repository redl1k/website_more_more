import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengesRoutingModule } from './challenges-routing.module';

import { ChallengesPage } from './challenges.page';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengesPageRoutingModule,

    HeaderModule
  ],
  declarations: [ChallengesPage]
})
export class ChallengesPageModule{}
