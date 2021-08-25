import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/contacts/prisma.service';
import { Info } from '.prisma/client'
import { Prisma } from '@prisma/client';
@Injectable()
export class InfoService {
    
    constructor(private prisma : PrismaService) {}
    
    async get(id:number):Promise<Info>{
        return await this.prisma.info.findUnique({where:{id}})
    }

    async getAll():Promise<Info[]>{
        return await this.prisma.info.findMany();
    }

    async create(infoCreateInput: Prisma.InfoCreateInput):Promise<Info>{
        return await this.prisma.info.create({ 
            data : infoCreateInput 
        });
    }

    async delete(id:number):Promise<Info>{
        return await this.prisma.info.delete({ where: {id} });
    }

    async update(id:number, infoUpdateInput: Prisma.InfoUpdateInput) {
        return await this.prisma.info.update({
            where:{id},
            data: infoUpdateInput
        })
    }


}

