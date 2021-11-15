import {Inject, Injectable} from '@nestjs/common'
import {DeleteResult, InsertResult, Repository, UpdateResult} from 'typeorm'
import {JOB_REPOSITORY} from '../constants'
import {Job} from './job.entity'

@Injectable()
export class JobService {
    constructor(
        @Inject(JOB_REPOSITORY)
        private readonly jobRepository: Repository<Job>,
    ) {
    }

    async create(dd: Job): Promise<Job> {
        const insertResult: InsertResult = await this.jobRepository.insert(dd)
        return insertResult.generatedMaps[0] as Job
    }

    async update(dd: Job): Promise<UpdateResult> {
        return await this.jobRepository.update(dd.id, dd)
    }

    async getAll(): Promise<Job[]> {
        return await this.jobRepository.find()
    }

    async get(id: number): Promise<Job> {
        return await this.jobRepository.findOne(id)
    }

    async getPage(page: number, per_page: number): Promise<[Job[], number]> {
        return await this.jobRepository.findAndCount({
            skip: page * per_page,
            take: per_page,
        })
    }

    async delete(id): Promise<DeleteResult> {
        return await this.jobRepository.delete(id)
    }

}
