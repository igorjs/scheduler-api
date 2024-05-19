import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SchedulesModule } from './schedules/schedules.module';
import { TasksModule } from './tasks/tasks.module';
import { DataService } from './data/data.service';

@Module({
  imports: [SchedulesModule, TasksModule],
  providers: [DataService],
  controllers: [AppController],
})
export class AppModule {}
