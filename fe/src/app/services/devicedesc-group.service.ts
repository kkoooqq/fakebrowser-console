import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {DeviceDescGroupEntity} from '../interfaces/devicedesc-group'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DeviceDescGroupService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAll(): Observable<DeviceDescGroupEntity[]> {
        const url = `${environment.apiUrl}/api/devicedesc-group`
        return this.http.get<DeviceDescGroupEntity[]>(url)
    }

}
