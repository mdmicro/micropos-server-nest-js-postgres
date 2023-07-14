import { BaseEntity } from '../baseEntity'
import { Column, Entity } from 'typeorm'

@Entity('product')
export class Product extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string

  @Column({ type: 'varchar', length: 20, nullable: true, unique: false })
  price: string

  @Column({ type: 'varchar', length: 20, nullable: true, unique: false })
  measurement_unit: string

  @Column({ type: 'varchar', length: 40, nullable: true, unique: false })
  code_nomenclature: string

  @Column({ type: 'varchar', length: 40, nullable: true, unique: false })
  code_marking: string

  @Column({ type: 'varchar', length: 20, nullable: true, unique: false })
  vat: string

  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  description: string

  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  image_uuid: string

  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  category_uuid: string

  /** договор поставки */
  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  contract_uuid: string

  /** тип предмета расчета: товар, услуга, билет, подакцизный товар */
  @Column({ type: 'varchar', length: 255, nullable: true, unique: false })
  type_product: string
}
