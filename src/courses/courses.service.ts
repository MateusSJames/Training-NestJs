import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';
import { Course } from './entities/course.entity';

//Esse decorator é usado para que ocorra Injeção de dependência
@Injectable()
export class CourseService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos NestJs',
            description: 'Fundamentos do FrameWork NestJs',
            tags: ['nodejs', 'typescript', 'nestjs']
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find((course: Course) => course.id === Number(id));
        if(!course) {
            //Import para tratamento de erros mais semantico
            throw new HttpException(
                `Cannot find course with id ${id}`, HttpStatus.NOT_FOUND
            );
        }
        return course;
    }

    create(createCursoDto: CreateCourseDto) {
        this.courses.push(createCursoDto);
    }

    update(id: string, updateCursoDto: UpdateCourseDto) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));
        this.courses[indexCourse] = updateCursoDto;
    }

    delete(id: string) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));
        if(indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        }
    }
}
