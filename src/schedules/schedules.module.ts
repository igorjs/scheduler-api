import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { SchedulesController } from './schedules.controller';
import { SchedulesService } from './schedules.service';

@Module({
  controllers: [SchedulesController],
  providers: [SchedulesService],
  imports: [DataModule],
})
export class SchedulesModule {}
