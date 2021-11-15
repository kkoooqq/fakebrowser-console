import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {JobGroupEntity} from '../interfaces/jobgroup'

@Injectable({
    providedIn: 'root',
})
export class JobGroupService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAll(): Observable<JobGroupEntity[]> {
        const url = '/api/jobgroup'
        return this.http.get<JobGroupEntity[]>(url)
    }

    create(jobGroup: JobGroupEntity): Observable<JobGroupEntity> {
        const url = '/api/jobgroup'
        return this.http.post<JobGroupEntity>(url, jobGroup)
    }

    update(jobGroup: JobGroupEntity): Observable<boolean> {
        const url = '/api/jobgroup'
        return this.http.put<boolean>(url, jobGroup)
    }

    delete(jobGroup: JobGroupEntity): Observable<boolean> {
        const url = `/api/jobgroup/${jobGroup.id}`
        return this.http.delete<boolean>(url)
    }
}
