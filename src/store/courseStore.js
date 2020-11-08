import { action, observable, makeObservable, computed } from 'mobx';
import { getCourses } from '../api';

class CourseStore {
    courses;
    currCourse;

    constructor() {
        makeObservable(this, {
            courses: observable,
            currCourse: observable,
            init: action.bound,
            setCourseById: action.bound,
            isLoading: computed,
        });

        this.courses = [];
        this.currCourse = {};

        this.init();
    }

    async init() {
        if (this.courses.length === 0) {
            const courses = await getCourses();
            this.courses = courses.data;
        }
    }

    setCourseById(id) {
        this.currCourse = this.courses.find(c => c._id === id);
    }

    get isLoading() {
        return this.courses.length === 0
    }
}

export default CourseStore;
