import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {JobGroupEntity} from '../interfaces/jobgroup'
import {environment} from '../../environments/environment'
import {JobEntity} from '../interfaces/job'

@Injectable({
    providedIn: 'root',
})
export class JobGroupService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAll(): Observable<JobGroupEntity[]> {
        const url = `${environment.apiUrl}/api/jobgroup`
        return this.http.get<JobGroupEntity[]>(url)
    }

    create(jobGroup: JobGroupEntity): Observable<JobGroupEntity> {
        const url = `${environment.apiUrl}/api/jobgroup`
        return this.http.post<JobGroupEntity>(url, jobGroup)
    }

    update(jobGroup: JobGroupEntity): Observable<boolean> {
        const url = `${environment.apiUrl}/api/jobgroup`
        return this.http.put<boolean>(url, jobGroup)
    }

    delete(jobGroup: JobGroupEntity): Observable<boolean> {
        const url = `${environment.apiUrl}/api/jobgroup/${jobGroup.id}`
        return this.http.delete<boolean>(url)
    }

    active(jobGroup: JobGroupEntity): Observable<boolean> {
        const url = `${environment.apiUrl}/api/jobgroup/active`
        return this.http.put<boolean>(url, {id: jobGroup.id})
    }

    getJobs(jobGroup: JobGroupEntity): Observable<JobEntity[]> {
        const url = `${environment.apiUrl}/api/jobgroup/jobs/${jobGroup.id}`
        return this.http.get<JobEntity[]>(url)
    }

}
