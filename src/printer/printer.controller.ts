import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { Printer } from './printer.entity'
import { PrinterService } from './printer.service'


@Crud({
	model: {
		type: Printer
	}
})

@Controller('printer')
export class PrinterController implements CrudController <Printer> {
	constructor(public service: PrinterService) {}
}
