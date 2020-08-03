import React, {Component} from 'react'
import store from '../stores/Store'

class CompanyChoiceItem extends Component{

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            active : false,
            priority : null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        // if(!this.state.active) {
        //     if (store.addCompany(this.props.name)) {
        //         this.setState({ priority: store.selectedCompanies.length - 1 });
        //         this.setState({ active : true });
        //     } else {
        //         // Tell user to reached the limit
        //     }
        // } else {
        //     store.removeCompany(this.state.priority)
        //     this.setState({ priority: null });
        //     this.setState({ active : false });
        // }
        if (store.toggleCompany(this.props.name)) {
            this.setState({ active : !this.state.active })
        }

    }

    render(){
        return (
            <div className={`company noselect border-pink ${this.state.active ? "back-pink" : ""}`}
                 onClick={event=>this.handleClick(event)}
                 priority={this.state.priority}
            >
                {this.props.name}
            </div>
        );
    }
}

export default CompanyChoiceItem;
