import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {JobEntity} from '../interfaces/job'
import {environment} from '../../environments/environment'
import {JobGroupEntity} from '../interfaces/jobgroup'

@Injectable({
    providedIn: 'root',
})
export class JobService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAll(): Observable<JobEntity[]> {
        const url = `${environment.apiUrl}/api/job`
        return this.http.get<JobEntity[]>(url)
    }

    getByPage(page: number, per_page: number): Observable<[JobEntity[], number]> {
        const url = `${environment.apiUrl}/api/job/page/${page}/${per_page}`
        return this.http.get<[JobEntity[], number]>(url)
    }

    create(job: JobEntity): Observable<JobEntity> {
        const url = `${environment.apiUrl}/api/job`
        return this.http.post<JobEntity>(url, job)
    }

    update(job: JobEntity): Observable<boolean> {
        const url = `${environment.apiUrl}/api/job`
        return this.http.put<boolean>(url, job)
    }

    delete(job: JobEntity): Observable<boolean> {
        const url = `${environment.apiUrl}/api/job/${job.id}`
        return this.http.delete<boolean>(url)
    }
}
