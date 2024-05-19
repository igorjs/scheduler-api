import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataService } from './data/data.service';
import { ScheduleModule } from './schedule/schedule.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ScheduleModule, TaskModule],
  providers: [DataService],
  controllers: [AppController],
})
export class AppModule {}
