import { observable, action } from 'mobx';

class VM {

    @observable age = 11;

    @action.bound setAge( age: number ) {
        this.age = age;
    }

}

export default new VM( );
