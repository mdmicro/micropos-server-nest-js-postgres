import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
	type: 'postgres',
	host: '127.0.0.1',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'restfulapiDB',
	entities: ['dist/**/*.entity{.ts,.js}'],
	synchronize: true
}
