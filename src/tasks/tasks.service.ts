import { Injectable } from '@nestjs/common';
import { Task } from './entities/task';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 1,
            name: 'Buy groceries: Milk, eggs, bread, and fruits.',
            description: 'Ensure you have essential food items by purchasing milk, eggs, bread, and a variety of fruits for the week.',
            completed: false
        },
        {
            id: 2,
            name: 'Finish report for the meeting with the client.',
            description: 'Compile and complete the report that needs to be presented during the upcoming meeting with the client.',
            completed: false
        },
        {
            id: 3,
            name: 'Call the doctor\'s office to schedule an appointment.',
            description: 'Contact the doctor\'s office to book an appointment for a medical check- up or consultation.',
            completed: false
        }
    ];

    findAll(): Task[] {
        return this.tasks;
    }

    findOne(id: number): Task {
        return this.tasks.find(task => task.id === id);
    }

    create(createTaskDto) {
        this.tasks.push(createTaskDto);
        return createTaskDto;
    }

    update(id: number, updateTaskDto) {
        const curTask = this.findOne(id);

        if (curTask) {
            this.tasks = this.tasks.map(task => {
                if (task.id === id)
                    return { ...task, ...updateTaskDto };
                return task;
            });
        }

        return curTask;
    }
}
