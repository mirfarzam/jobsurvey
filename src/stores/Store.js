import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";
import DATA from '../data'

class Store {
    @observable selectedCompanies = []
    @observable input = ""
    @observable companies = DATA.companies

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
    }

    @action
    searchCompany(value) {
        if(value.length > 1) {
            this.companies = DATA.companies.filter(name => name.indexOf(value) > -1)
        } else {
            this.companies = DATA.companies.slice(0,10)
        }
    }
}

const store = new Store()
export default store
