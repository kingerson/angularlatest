import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequerimientoComponent } from './requerimiento.component';


const routes: Routes = [{ path: '', component: RequerimientoComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequerimientoRoutingModule { }
