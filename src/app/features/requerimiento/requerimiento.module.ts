import { NgModule } from '@angular/core';

import { RequerimientoRoutingModule } from './requerimiento-routing.module';
import { RequerimientoComponent } from './requerimiento.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RequerimientoComponent],
  imports: [
    SharedModule,
    RequerimientoRoutingModule
  ]
})
export class RequerimientoModule { }
