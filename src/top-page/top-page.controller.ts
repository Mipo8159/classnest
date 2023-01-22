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
import { FindTopPageDto } from './dto/find.top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  create(@Body() dto: Omit<TopPageModel, 'id'>) {
    return 'product';
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return 'product';
  }

  @Patch(':id')
  update(@Param('id') id: string, dto: Omit<TopPageModel, 'id'>) {
    return 'product';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'product';
  }

  @HttpCode(200)
  @Post()
  find(@Body() dto: FindTopPageDto) {
    return 'product';
  }
}
