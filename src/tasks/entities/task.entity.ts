import { Task, TaskType } from '@prisma/client';

export class TaskEntity implements Task {
  id: string;
  accountId: number;
  scheduleId: string;
  startTime: Date;
  duration: number;
  type: TaskType;
  createdAt: Date;
  updatedAt: Date;
}
