import React from 'react';
import CompaniesComp from './Companies.jsx';
import Companies from '../js/classes/companies';
import Company from '../js/classes/company';
import jsonCompanies from '../json/companies.json';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let companies = new Companies();

        jsonCompanies.companies.map(comp =>
            companies.addCompany(new Company(comp)));


        return(
            <div>
                <CompaniesComp companies={companies.companiesList}/>
            </div>
        )
    }
}

export default App;