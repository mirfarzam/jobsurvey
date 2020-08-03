import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import store from "./stores/Store";
import CompanyChoiceItem from "./components/CompanyChoiceItem";
import DATA from './data'
import CompanySearchInput from "./components/CompanySearchInput";


@observer
class App extends Component {

    render() {
        return (
            <div className={"container"}>
                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-md-8 col-sm-12 text-center"}>
                        <h1>سلام خوبی ؟</h1>
                        <p>ما به این داده ها نیاز داریم پس جون مادرت این دیتا رو درست پر کن برامون مسلمون</p>
                        <ol>
                            {
                                store.selectedCompanies.map((name)=>{
                                    return(
                                        <li>{name}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>

                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-md-8 col-sm-12 text-center"}>
                        <form>
                            <CompanySearchInput />
                            <div className={"text-center"}>
                                {
                                    store.companies.map((name)=>{
                                        return(
                                            <CompanyChoiceItem name={name}/>
                                        )
                                    })
                                }
                            </div>

                        </form>
                    </div>
                </div>


            </div>
        );
    }
}


export default App;
