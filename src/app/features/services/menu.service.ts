import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { data } from '../mocks/menu.mock'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  // TODO: change to api
  getLeftMenu(): Observable<any[]> {
    return of(data)
  }
}
