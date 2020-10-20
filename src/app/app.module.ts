import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CsrComponent } from './csr/csr.component';
import { CsrSmallComponent } from './csrSmall/csrSmall.component';
import { CsrBlankComponent } from './csrBlank/csrBlank.component';
import { CsrBlankSmallComponent } from './csrBlankSmall/csrBlankSmall.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
	CsrComponent,
    CsrSmallComponent,
    CsrBlankComponent,
    CsrBlankSmallComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
	MaterialModule,
    RouterModule.forRoot([
    { path: 'csr', component: CsrComponent },
    { path: 'csrSmall', component: CsrSmallComponent },
    { path: 'csrBlank', component: CsrBlankComponent },
    { path: 'csrBlankSmall', component: CsrBlankSmallComponent }
], {
    initialNavigation: 'enabled'
}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
