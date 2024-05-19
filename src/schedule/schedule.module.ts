import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { SchedulesController } from './schedule.controller';
import { SchedulesService } from './schedule.service';

@Module({
  controllers: [SchedulesController],
  providers: [SchedulesService],
  imports: [DataModule],
})
export class SchedulesModule {}
