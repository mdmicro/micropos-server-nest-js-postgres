import { BaseEntity } from '../baseEntity'
import { Column, Entity } from 'typeorm'

@Entity('image')
export class Image extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  fileName: string

  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  description: string
}
