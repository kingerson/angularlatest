import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MainRoutingModule } from './main-routing.module'
import { MainLayoutComponent } from './main-layout.component'
import { SharedModule } from '../../../shared/shared.module'

const LAYOUTS = [MainLayoutComponent]

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, MainRoutingModule, SharedModule],
  declarations: [...LAYOUTS],
})
export class MainModule {}
