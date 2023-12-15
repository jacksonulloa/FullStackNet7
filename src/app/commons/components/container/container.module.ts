import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ContainerComponent, FooterComponent, HeaderComponent],
  imports: [RouterOutlet, RouterLink, MatButtonModule, NgIf],
  exports: [ContainerComponent]
})
export class ContainerModule { }



