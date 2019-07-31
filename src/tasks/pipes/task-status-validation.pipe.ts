import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.IN_PROGRESS,
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!this.isStausValid(value)) {
      throw new BadRequestException(`"${value} is an invalid status`);
    }
    return value;
  }

  private isStausValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
