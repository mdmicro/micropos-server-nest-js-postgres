import { BaseEntity } from '../baseEntity'
import { Column, Entity } from 'typeorm'

@Entity('companies')
export class Company extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  fullName: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string

  @Column({ type: 'varchar', length: 12, nullable: true, unique: true })
  inn: string

  /** Система налогообложения */
  @Column({ type: 'varchar', length: 255, nullable: true })
  vatType: string

  /** Ставка НДС */
  @Column({ type: 'varchar', length: 255, nullable: true })
  vat: string

  /** Имя кассира */
  @Column({ type: 'varchar', length: 255, nullable: true })
  cashier: string

  @Column({ type: 'text', nullable: true, default: null })
  description: string

  @Column({ type: 'integer', nullable: true, default: null })
  cashregister_uuid: number
}
