import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { ImageUpload } from './imageUpload.entity'
import { ImageUploadService } from './imageUpload.service'
import { FileInterceptor } from '@nestjs/platform-express'
//
// @Crud({
// 	model: {
// 		type: ImageUpload
// 	}
// })

@Controller('imageUpload')
export class ImageUploadController implements CrudController <ImageUpload> {
	constructor(public service: ImageUploadService) {}

	@Post()
	@UseInterceptors(
		FileInterceptor('file'),
	)
	async uploadedFile(@UploadedFile() file) {
		console.log(file)
		const response = {
			originalname: file.originalname,
			filename: file.filename,
		}
		return response
	}

	@Get(':imgpath')
	seeUploadedFile(@Param('imgpath') image, @Res() res) {
		return res.sendFile(image, { root: './files' })
	}

}
