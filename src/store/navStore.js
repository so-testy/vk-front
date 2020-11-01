import { action, observable, makeObservable } from 'mobx';

class NavStore {
  activeStory;
  activePanel;
  activeView;
  activeModal;

  constructor({ story, panel, view, modal }) {
    makeObservable(this, {
      activeStory: observable,
      activePanel: observable,
      activeView: observable,
      activeModal: observable,
      setActiveStory: action,
      setActivePanel: action,
      setActiveView: action,
      setActiveModal: action
    });

    this.activeStory = story;
    this.activePanel = panel;
    this.activeView = view;
    this.activeModal = modal;
  }

  setActiveStory(story) {
    console.log(this)
    this.activeStory = story;
  }

  setActivePanel(panel) {
    this.activePanel = panel;
  }

  setActiveView(view) {
    this.activeView = view;
  }

  setActiveModal(modal) {
    this.activeModal = modal;
  }
}

export default NavStore;
