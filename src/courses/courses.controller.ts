import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CourseService } from 'src/courses/courses.service';

@Controller('courses')
export class CoursesController {

    //Criando um construtor para receber o meu serviço, utilizando o principio D de SOLID
    constructor(private readonly courseService: CourseService) {}

    //Dentro do () colocamos o caminho que queremos na rota
    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    //Parametros de rota
    //Decorator @Param() como parametro e depois desestruturar
    //Posso também dentro do @Param() especificar qual a propriedade que eu quero
    @Get(':id')
    findOne(@Param() param) {
        return this.courseService.findOne(param.id);
    }

    //Payloads para POST ou PUT
    //Decorator @Body() como parametro
    //Especificar o status code @Res()
    @Post()
    create(@Body() body) {
        return this.courseService.create(body);
    }

    //Recebemos um body e o parametro
    @Patch(':id')
    update(@Param() param, @Body() body) {
        return this.courseService.update(param.id, body);
    }

    //Outra forma de pegar um parametro
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.delete(id);
    }

}
