import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { PrismaService } from './contacts/prisma.service';
import { InfoController } from './info/info.controller';
import { InfoService } from './info/info.service';
import { InfoModule } from './info/info.module';

@Module({
  imports: [ContactsModule, InfoModule],
  controllers: [AppController, InfoController],
  providers: [AppService, PrismaService, InfoService],
})
export class AppModule {}
