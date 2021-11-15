import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class DeviceDescGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('int')
    count: number

    @Column()
    created: Date

    @Column()
    updated: Date
}
