import { TaskType, Task } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsUUID,
} from 'class-validator';

export class CreateTaskDto implements Partial<Task> {
  @IsInt()
  @IsNotEmpty()
  accountId: number;

  @IsUUID()
  @IsNotEmpty()
  scheduleId: string;

  @IsDate()
  @IsNotEmpty()
  startTime: Date;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @IsEnum(TaskType)
  @IsNotEmpty()
  type: TaskType;
}
