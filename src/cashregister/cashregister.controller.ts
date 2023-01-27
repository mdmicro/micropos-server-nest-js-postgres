import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { Cashregister } from './cashregister.entity'
import { CashregisterService } from './cashregister.service'


@Crud({
	model: {
		type: Cashregister
	}
})

@Controller('cashregister')
export class CashregisterController implements CrudController <Cashregister> {
	constructor(public service: CashregisterService) {}
}
