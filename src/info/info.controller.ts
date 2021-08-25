import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoDto } from './info.dto';
import { Prisma } from '@prisma/client';

@Controller('info')
export class InfoController {
    constructor(private readonly infoService: InfoService){}

    @Get()
    getAll(){
        return this.infoService.getAll();
    }

    @Get('/:id')
    get(@Param('id') id){
        return this.infoService.get(Number(id));
    }

    @Delete('/:id')
    delete(@Param('id') id){
        return this.infoService.delete(Number(id));
    }

    @Post()
    create(@Body() infoCreateInput: Prisma.InfoCreateInput ){
        return this.infoService.create(infoCreateInput);
    }

    @Put('/:id')
    update(
        @Param('id') id,
        @Body() infoUpdateInput: Prisma.InfoUpdateInput
        ){
        return this.infoService.update(Number(id), infoUpdateInput);
    }

}
