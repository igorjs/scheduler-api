import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class SchedulesService {
  constructor(private readonly db: DataService) {}

  create(createScheduleDto: CreateScheduleDto) {
    return this.db.schedule.create({
      data: createScheduleDto,
    });
  }

  findAll() {
    return this.db.schedule.findMany();
  }

  findOne(id: string) {
    return this.db.schedule.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.db.schedule.update({
      data: updateScheduleDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.db.schedule.delete({
      where: {
        id,
      },
    });
  }
}
