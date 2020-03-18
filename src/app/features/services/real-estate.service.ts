import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { RealEstate } from '../../shared/models/realEstate'

@Injectable({
  providedIn: 'root',
})
export class RealEstateService {
  private _realEstateSelected: RealEstate = null
  private _realEstateList: RealEstate[] = null

  constructor(private http: HttpClient) {}

  get realEstateSelected() {
    return this._realEstateSelected
  }

  set realEstateSelected(realEstate: RealEstate) {
    this._realEstateSelected = realEstate
  }

  get realEstateList() {
    return this._realEstateList
  }

  set realEstateList(realEstates: RealEstate[]) {
    this._realEstateList = realEstates
  }

  private convertData = (response: any) =>
    response.map((item: any) => {
      return {
        id: item.CodInmueble,
        name: item.Inmueble,
        nameShort: item.NameAbrev,
      }
    })

  private filterData = (response: any) =>
    response.filter((realEstate: RealEstate) => {
      return realEstate.name.includes('REAL PLAZA')
    })

  private removeTitleData = (response: RealEstate[]) =>
    response.map((realEstate: RealEstate) => {
      return { ...realEstate, name: realEstate.name.replace('REAL PLAZA', '').trim() }
    })

  private sortData = (response: any) => response.sort((a, b) => a.name.localeCompare(b.name))

  // TODO: replace mock
  search(): Observable<RealEstate[]> {
    const headers = new HttpHeaders({
      'x-api-key': 'vMRpo55E5o7GMzorj5RGs12iSw3sIXSU3dspWqjH',
    })
    return this.http
      .get<RealEstate[]>('https://msdev.advancerealestate.com.pe/v1/inmuebles', { headers })
      .pipe(map(this.convertData))
      .pipe(map(this.filterData))
      .pipe(map(this.sortData))
  }

  // TODO: replace mock
  searchByFilter(): Observable<RealEstate[]> {
    const headers = new HttpHeaders({
      'x-api-key': 'vMRpo55E5o7GMzorj5RGs12iSw3sIXSU3dspWqjH',
    })
    return this.http
      .get<RealEstate[]>('https://msdev.advancerealestate.com.pe/v1/inmuebles', { headers })
      .pipe(map(this.convertData))
      .pipe(map(this.filterData))
      .pipe(map(this.removeTitleData))
      .pipe(map(this.sortData))
  }
}
