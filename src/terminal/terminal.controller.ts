import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { Terminal } from './terminal.entity'
import { TerminalService } from './terminal.service'


@Crud({
	model: {
		type: Terminal
	}
})

@Controller('terminal')
export class TerminalController implements CrudController <Terminal> {
	constructor(public service: TerminalService) {}
}
