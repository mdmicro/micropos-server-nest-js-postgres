import { BaseEntity } from '../baseEntity'
import { Column, Entity } from 'typeorm'

@Entity('СategoryProduct')
export class СategoryProduct extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string

  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  description: string
}
