import { ApiProperty } from '@nestjs/swagger';
import { Task, TaskType } from '@prisma/client';
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
  @ApiProperty()
  accountId: number;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  scheduleId: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  startTime: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  duration: number;

  @IsEnum(TaskType)
  @IsNotEmpty()
  @ApiProperty({ enum: Object.values(TaskType) })
  type: TaskType;
}
