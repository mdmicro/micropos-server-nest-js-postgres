import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ImageService } from './image.service'
import { ImageController } from './image.controller'
import { Image } from './image.entity'
import { MulterModule } from '@nestjs/platform-express'

@Module({
	imports: [
		TypeOrmModule.forFeature([Image]),
		MulterModule.register({dest: './files'}),
	],
	controllers: [ImageController],
	providers: [ImageService]
})
export class ImageModule {}
