import { ApiProperty } from '@nestjs/swagger';
import { Schedule } from '@prisma/client';
import { IsDate, IsInt, IsNotEmpty } from 'class-validator';

export class CreateScheduleDto implements Partial<Schedule> {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  accountId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  agentId: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  startTime: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  endTime: Date;
}
