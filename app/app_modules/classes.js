import { listOfTasks as list } from '../../base.js';
import { saveList } from './dataManagement.js';

class Task {
    constructor (name) {
        this.name = name;
    }

    setName (name) {
        this.name = name;
    }
}

export { Task }