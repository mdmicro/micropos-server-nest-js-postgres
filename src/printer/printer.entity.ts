import { BaseEntity } from '../baseEntity'
import { Column, Entity } from 'typeorm'

@Entity('printer')
export class Printer extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  printer_name: string

  @Column({ type: 'varchar', length: 20, nullable: true, unique: false })
  serial_number: string

  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  description: string

  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  config: JSON

}
