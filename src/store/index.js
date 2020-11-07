import NavStore from './navStore'
import UserStore from './userStore'

export default {
    navStore: new NavStore({
        view: 'training',
        panel: 'root',
        modal: null
    }),
    userStore: new UserStore()
}