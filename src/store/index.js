import NavStore from './navStore'
import UserStore from './userStore'

export default {
    navStore: new NavStore({
        view: 'courses',
        panel: 'courses',
        modal: null
    }),
    userStore: new UserStore()
}