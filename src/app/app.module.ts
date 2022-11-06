import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengesComponent } from './pages/challenges/challenges.component';
import { ChallengesPageComponent } from './pages/challenges/challenges-page/challenges-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    ChallengesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
