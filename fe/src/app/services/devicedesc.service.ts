import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {DeviceDescEntity} from '../interfaces/devicedesc'

@Injectable({
    providedIn: 'root',
})
export class DeviceDescService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAll(): Observable<DeviceDescEntity[]> {
        const url = '/api/devicedesc'
        return this.http.get<DeviceDescEntity[]>(url)
    }

    getByPage(page: number, per_page: number): Observable<[DeviceDescEntity[], number]> {
        const url = `/api/devicedesc/page/${page}/${per_page}`
        return this.http.get<[DeviceDescEntity[], number]>(url)
    }
}
