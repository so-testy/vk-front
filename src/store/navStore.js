import { action, observable } from 'mobx';

class NavStore {
  @observable activeStory;
  @observable activePanel;
  @observable activeView;
  @observable activeModal;

  constructor({ story, panel, view, modal }) {
    this.activeStory = story;
    this.activePanel = panel;
    this.activeView = view;
    this.activeModal = modal;
  }

  @action.bound
  setActiveStory(story) {
    console.log(story)
    this.activeStory = story;
  }

  @action.bound
  setActivePanel(panel) {
    this.activePanel = panel;
  }

  @action.bound
  setActiveView(view) {
    this.activeView = view;
  }

  @action.bound
  setActiveModal(modal) {
    this.activeModal = modal;
  }
}

export default NavStore;
