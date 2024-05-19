import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SchedulesModule } from './schedules/schedules.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [SchedulesModule, TasksModule],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
