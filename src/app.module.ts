import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './config/mongo.config';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypegooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    ProductModule,
    TopPageModule,
    ReviewModule,
    FilesModule,
  ],
})
export class AppModule {}
