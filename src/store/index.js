import NavStore from './navStore'
import UserStore from './userStore'

export default {
    navStore: new NavStore({
        story: 'courses',
        panel: 'courses',
        view: 'courses',
        modal: null
    }),
    userStore: new UserStore()
}