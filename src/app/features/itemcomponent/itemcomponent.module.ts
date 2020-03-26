import { NgModule } from '@angular/core';

import { ItemcomponentRoutingModule } from './itemcomponent-routing.module';
import { ItemcomponentComponent } from './itemcomponent.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ItemcomponentComponent],
  imports: [
    SharedModule,
    ItemcomponentRoutingModule
  ]
})
export class ItemcomponentModule { }
