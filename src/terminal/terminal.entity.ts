import { BaseEntity } from '../baseEntity'
import { Column, Entity } from 'typeorm'

@Entity('Terminal')
export class Terminal extends BaseEntity {

	@Column({ type: 'varchar', length: 100, nullable: false, unique: true })
	terminal_name: string

	@Column({ type: 'varchar', length: 20, nullable: true, unique: true })
	serial_number: string

	@Column({ type: 'integer', nullable: true, default: null })
	companie_id: number

	@Column({ type: 'varchar', length: 255, nullable: true, unique: false })
	description: string

	@Column({ type: 'varchar', length: 255, nullable: true, unique: false })
	config: JSON
}
