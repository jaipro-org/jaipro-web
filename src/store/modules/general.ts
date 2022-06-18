import { VuexModule, Module, Mutation, Action , getModule} from 'vuex-module-decorators'
import store from '@/store'

export interface IGeneralState {
  scrollY: number
}

@Module({ dynamic: true,store, namespaced: true, name: 'general' })
class General extends VuexModule {
  public scrollY: number = 0

  @Mutation
  setScroll(scroll: number) {
    this.scrollY = scroll
  }
  

  @Action({rawError: true})
  updateScroll(scroll: number) {
    this.context.commit("setScroll", scroll);
  }

  
  get getScroll(){
    return this.scrollY;
  };

}

const GeneralModule = getModule(General)
export default GeneralModule
