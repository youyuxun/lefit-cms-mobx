import { observable, action, runInAction } from 'mobx'
import {GET_OPEN_CITY_LIST} from '../service/common'


export default class AppStore {
  constructor() {

  }

  @observable list = []

  @action getData = async () => {
    try {
      GET_OPEN_CITY_LIST().then(res => {
        // await 之后，再次修改状态需要动作：
        if (res.status.code === '00000') {
          runInAction(() => {
            this.list = res.result.list;
          });
        }
      });


    } catch (e) {
      console.error(e);
    }
  }
}
