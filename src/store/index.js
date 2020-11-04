import NavStore from './navStore'
import UserStore from './userStore'

export default {
    navStore: new NavStore({
        view: 'profile',
        panel: 'root',
        modal: null
    }),
    userStore: new UserStore()
}