import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { Image } from './image.entity'
import { ImageService } from './image.service'


@Crud({
	model: {
		type: Image
	}
})

@Controller('image')
export class ImageController implements CrudController <Image> {
	constructor(public service: ImageService) {}
}
