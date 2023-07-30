import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ImageUploadService } from './imageUpload.service'
import { ImageUploadController } from './imageUpload.controller'
import { ImageUpload } from './imageUpload.entity'
import { MulterModule } from '@nestjs/platform-express'

@Module({
	imports: [
		TypeOrmModule.forFeature([ImageUpload]),
		MulterModule.register({dest: './files'}),
	],
	controllers: [ImageUploadController],
	providers: [ImageUploadService]
})
export class ImageUploadModule {}
