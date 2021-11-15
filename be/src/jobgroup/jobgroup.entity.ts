import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class JobGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('boolean', {
        default: false,
    })
    activated: boolean = false

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    created: Date

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    updated: Date
}
