import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Image } from './image.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ImageService extends TypeOrmCrudService<Image> {
	constructor(@InjectRepository(Image) repo) {
		super(repo)
	}
}
