import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class Store {
    @observable selectedCompanies = []
    @action
    addCompany(companyName) {
        if(this.selectedCompanies.length <= 2) {
            this.selectedCompanies.push(companyName)
            console.log(this.selectedCompanies)
            return true
        }
        return false
    }

    @action
    toggleCompany(companyName) {
        let index = this.selectedCompanies.indexOf(companyName)
        if (index === -1 && this.selectedCompanies.length <= 2) {
            this.selectedCompanies.push(companyName)
            return true
        } else if(index > -1) {
            this.selectedCompanies.splice(index, 1);
            return true
        }
        return false
        console.log(this.selectedCompanies)
    }
}

const store = new Store()
export default store
