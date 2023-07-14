import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Terminal } from './terminal.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TerminalService extends TypeOrmCrudService<Terminal> {
	constructor(@InjectRepository(Terminal) repo) {
		super(repo)
	}
}
