import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { LoadingComponent } from './components/loading/loading.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

const MODULES = [CommonModule, RouterModule, NgZorroAntdModule,ReactiveFormsModule,FormsModule]

@NgModule({
  declarations: [LoadingComponent],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
