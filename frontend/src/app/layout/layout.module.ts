import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    HeaderComponent, FooterComponent
  ],

  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule { }
