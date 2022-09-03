import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BytButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BytButtonComponent
  ],
  exports: [
    BytButtonComponent
  ],
})
export class BytButtonModule {}
