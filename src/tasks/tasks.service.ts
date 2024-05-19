import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly db: DataService) {}

  create(createTaskDto: CreateTaskDto) {
    return this.db.task.create({
      data: createTaskDto,
    });
  }

  findAll() {
    return this.db.task.findMany();
  }

  findOne(id: string) {
    return this.db.task.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.db.task.update({
      data: updateTaskDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.db.task.delete({
      where: {
        id,
      },
    });
  }
}
