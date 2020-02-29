

import { Controller, Get, Req , Post,Redirect,Query,Param,Body,HttpException,HttpStatus} from '@nestjs/common';
import { Request } from 'express';
import {CreateCatDto} from '../dto/create-cat.dto'
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
        // return 'This action adds a new cat'
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    @Get(':id')
    findOnde(@Param() params):string{
        console.log(params.id)
        return `This action returns a #${params.id} cat`
    }


    @Get()
    // findAll(@Req() request: Request):Promise<Cat[]> {
    findAll(@Req() request: Request):any {
        return this.catsService.findAll();
        // return 'This action returns all cats';
    }

    @Get('error')
    async findError() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}