import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [DataModule],
})
export class TasksModule {}
