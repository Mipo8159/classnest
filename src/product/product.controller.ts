import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find.product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
  @Post('create')
  create(@Body() dto: Omit<ProductModel, 'id'>) {
    return 'product';
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return 'product';
  }

  @Patch(':id')
  update(@Param('id') id: string, dto: Omit<ProductModel, 'id'>) {
    return 'product';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'product';
  }

  @HttpCode(200)
  @Post()
  find(@Body() dto: FindProductDto) {
    return 'product';
  }
}
