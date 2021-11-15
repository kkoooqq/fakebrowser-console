import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('int')
    group_id: number

    @Column('longtext')
    script: string

    @Column()
    doNotHook: boolean

    @Column()
    platform: string

    @Column()
    maxSurvivalTime: number

    @Column()
    displayUserActionLayer: boolean

    @Column()
    userDataDir: string

    @Column()
    headless: boolean

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    created: Date

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    updated: Date
}
