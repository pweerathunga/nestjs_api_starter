import { Controller, Get, Post, Put, Delete,Body,Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';


@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string{
   return 'Get all items';
  }
  @Get(':id')
  findone(@Param() param):string  {
   return `item.${param.id}`;
  }





  @Post()
  create(@Body()createItemDto:CreateItemDto): String {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`
  }


}

