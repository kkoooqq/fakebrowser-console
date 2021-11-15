import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class JobGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('boolean')
    activated: boolean

    @Column()
    created: Date

    @Column()
    updated: Date
}
