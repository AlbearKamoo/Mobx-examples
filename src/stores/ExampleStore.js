import { observable, action, computed } from 'mobx';

//// Example mobx store ////////////////////////////
// Contains one observable, one computed
// and two actions, one bound and one unbound
class ExampleStore {
  @observable colors = {};

  @computed
  get paletteId() {
    return this.colors.id;
  }

  @action
  setColors(obj) {
    this.colors = obj;
  }

  @action.bound // Bound actions are used when store actions need to passed down and called in different contexts
  resetColors() {
    this.colors = {};
  }
}

const store = new ExampleStore();
export default store;
