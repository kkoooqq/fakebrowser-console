import {Injectable} from '@angular/core'
import {DeleteResult, UpdateResult} from 'typeorm'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {JobEntity} from '../interfaces/job'

@Injectable({
    providedIn: 'root',
})
export class JobService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAll(): Observable<JobEntity[]> {
        const url = '/api/job'
        return this.http.get<JobEntity[]>(url)
    }

    getByPage(page: number, per_page: number): Observable<[JobEntity[], number]> {
        const url = `/api/job/page/${page}/${per_page}`
        return this.http.get<[JobEntity[], number]>(url)
    }

    create(job: JobEntity): Observable<JobEntity> {
        const url = '/api/job'
        return this.http.post<JobEntity>(url, job)
    }

    update(job: JobEntity): Observable<UpdateResult> {
        const url = '/api/job'
        return this.http.put<UpdateResult>(url, job)
    }
}
