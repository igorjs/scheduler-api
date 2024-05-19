import { Schedule } from '@prisma/client';

export class ScheduleEntity implements Schedule {
  id: string;
  accountId: number;
  agentId: string;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
}
