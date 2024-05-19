import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [DataModule],
})
export class ScheduleModule {}
