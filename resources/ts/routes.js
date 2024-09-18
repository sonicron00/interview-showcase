const Welcome = () => import('./components/Welcome.vue');
const NewBonus = () => import('./components/NewBonus.vue');
const NewWelcome = () => import('./components/NewWelcome.vue');
const NewQuestions = () => import('./components/NewQuestions.vue');

export const routes = [
    {
        name: 'home',
        path: '/landing',
        component: Welcome
    },
    {
        name: 'main',
        path: '/',
        component: Welcome
    },
    {
        name: 'new-bonus',
        path: '/new-bonus',
        component: NewBonus,
        children: [
            { path: '/', component: NewWelcome, name: 'new-bonus' },
            { path: 'questions', component: NewQuestions },
        ]
    }
]