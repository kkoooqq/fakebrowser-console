import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class DeviceDesc {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('int')
    group_id: number

    @Column({length: 300})
    userAgent: string

    @Column({length: 100})
    platform: string

    @Column({length: 100})
    browser: string

    @Column('int')
    screen_width: number

    @Column('int')
    screen_height: number

    @Column({length: 300})
    languages: string

    @Column('longtext')
    deviceDesc: string

    @Column()
    md5: string

    @Column()
    created: Date

    @Column()
    updated: Date
}
