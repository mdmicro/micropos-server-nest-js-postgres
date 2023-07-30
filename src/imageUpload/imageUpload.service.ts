import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { ImageUpload } from './imageUpload.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ImageUploadService extends TypeOrmCrudService<ImageUpload> {
	constructor(@InjectRepository(ImageUpload) repo) {
		super(repo)
	}
}
