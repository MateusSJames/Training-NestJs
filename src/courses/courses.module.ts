import { Module } from '@nestjs/common';
import { CourseService } from 'src/courses/courses.service';
import { CoursesController } from './courses.controller';

//Define que essa classe é um modulo que espera informações para ele
@Module({
    controllers: [CoursesController],
    providers: [CourseService],
})
export class CoursesModule {}
