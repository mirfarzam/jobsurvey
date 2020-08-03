import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import store from "./stores/Store";
import CompanyChoiceItem from "./components/CompanyChoiceItem";


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

                            <label>
                                لطفا اسم‌ شرکت‌هایی که دوست داری توشون کار کنی رو انتخاب کن!
                                <input type={"text"}/>
                            </label>
                            <div className={"text-center"}>
                                <CompanyChoiceItem name={"دیجیکالا"}/>
                                <CompanyChoiceItem name={"اسنپ"}/>
                                <CompanyChoiceItem name={"اسنپ‌فود"}/>
                                <CompanyChoiceItem name={"ورزش‌۳"}/>
                            </div>

                        </form>
                    </div>
                </div>


            </div>
        );
    }
}


export default App;
