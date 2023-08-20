import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Printer } from './printer.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class PrinterService extends TypeOrmCrudService<Printer> {
	constructor(@InjectRepository(Printer) repo) {
		super(repo)
	}
}
