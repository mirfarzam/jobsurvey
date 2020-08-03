import React, {Component} from 'react'
import store from '../stores/Store'

class CompanySearchInput extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <label>
                لطفا اسم‌ شرکت‌هایی که دوست داری توشون کار کنی رو انتخاب کن!
                <input type={"text"} onChange={event=>store.searchCompany(event.target.value)}/>
            </label>
        );
    }
}

export default CompanySearchInput;
