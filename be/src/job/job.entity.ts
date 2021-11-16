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

    @Column({
        default: false,
    })
    doNotHook: boolean

    @Column({
        default: 'Windows',
    })
    platform: string

    @Column({
        default: 15 * 60 * 1000,
    })
    maxSurvivalTime: number

    @Column({
        default: false,
    })
    displayUserActionLayer: boolean

    @Column()
    userDataDir: string

    @Column({
        default: false,
    })
    headless: boolean

    @Column({
        default: true,
    })
    shutdownWhenDone: boolean

    @Column({
        default: '',
    })
    browserPath?: string = ''

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    created: Date

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    updated: Date
}
