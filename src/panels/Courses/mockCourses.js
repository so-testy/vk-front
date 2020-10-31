const PROGRESS_NONE = 'PROGRESS_NONE';
const PROGRESS_ENDING = 'PROGRESS_ENDING';

const mockCourses = [{
    id: 1,
    title: 'Гимнастика для глаз',
    description: 'После длительной и напряженной зрительной работы',
    imageUrl: '15.svg',
    startDate: new Date(),
    progress: {
        type: PROGRESS_NONE,
    },
    duration: 8,
    isDisabled: false,
},
{
    id: 2,
    title: 'Профилактика близорукости',
    description:
        'Интеративная гимнастика для глаз по методу Аветисова',
    imageUrl: '8.svg',
    startDate: null,
    progress: {
        type: PROGRESS_ENDING,
        daysDone: 11,
    },
    duration: 30,
    isDisabled: true,
},
{
    id: 3,
    title: 'Профилактика косоглазия',
    description:
        'Интерактивная гимнастика для глаз по методу Аветисова',
    imageUrl: '18.svg',
    startDate: null,
    progress: {
        type: PROGRESS_ENDING,
        daysDone: 0,
    },
    duration: 15,
    isDisabled: true,
}]

export default mockCourses;