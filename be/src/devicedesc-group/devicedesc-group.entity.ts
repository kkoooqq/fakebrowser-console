import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class DeviceDescGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('int')
    count: number

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    created: Date

    @Column('datetime', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    updated: Date
}
