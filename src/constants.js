const HOME = '';
const PROJECTS = 'projects';
const CLEANING_SCHEDULE = 'clean';
const MOVIES = 'movies';
const QUIZ = 'quiz';
const ESTIMATE = 'estimate';
const NOTEPAD = 'notepad';

export const NAV_CONTENT = [
    {
        text: 'Home',
        route: HOME,
    },
    {
        text: 'Projects',
        route: PROJECTS,
    },
    {
        text: 'Cleaning schedule',
        route: CLEANING_SCHEDULE,
    },
    {
        text: 'Movie picker',
        route: MOVIES,
    },
    {
        text: 'Quiz app',
        route: QUIZ,
    },
    {
        text: 'Estimate app',
        route: ESTIMATE,
    },
    {
        text: 'Notepad',
        route: NOTEPAD,
    }
];

export const BODY_URL_MAP = {
    [HOME]: 'www',
    [PROJECTS]: 'home',
    [CLEANING_SCHEDULE]: CLEANING_SCHEDULE,
    [MOVIES]: MOVIES,
    [QUIZ]: QUIZ,
    [ESTIMATE]: ESTIMATE,
    [NOTEPAD]: NOTEPAD,
};