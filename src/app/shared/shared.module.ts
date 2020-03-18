import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { LoadingComponent } from './components/loading/loading.component'

const MODULES = [CommonModule, RouterModule, NgZorroAntdModule]

@NgModule({
  declarations: [LoadingComponent],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
