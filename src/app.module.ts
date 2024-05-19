import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SchedulesModule } from './schedule/schedule.module';
import { TasksModule } from './task/task.module';
import { DataService } from './data/data.service';

@Module({
  imports: [SchedulesModule, TasksModule],
  providers: [DataService],
  controllers: [AppController],
})
export class AppModule {}
