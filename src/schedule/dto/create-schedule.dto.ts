import { Schedule } from '@prisma/client';
import { IsDate, IsInt, IsNotEmpty } from 'class-validator';

export class CreateScheduleDto implements Partial<Schedule> {
  @IsInt()
  @IsNotEmpty()
  accountId: number;

  @IsInt()
  @IsNotEmpty()
  agentId: string;

  @IsDate()
  @IsNotEmpty()
  startTime: Date;

  @IsDate()
  @IsNotEmpty()
  endTime: Date;
}
