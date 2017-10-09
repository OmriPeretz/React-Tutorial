/**
 * Created by tc99585 on 24/09/17.
 */


import {classes as Classes} from '../consts';

import {
    getEnameMembers as GetEnameMembers
} from '../utils.js';


export default class Employee {

    constructor(employee, company) {

        if (!employee.salary) employee.salary = 5000;

        this.company = company;

        Object.assign(this, employee, {
            _name: GetEnameMembers(employee.ename).empName,
            _companyName: GetEnameMembers(employee.ename).compName
        });
    }


    set company(company) {

        if (company.constructor.name !== Classes.comp)
            throw 'cannot set not company object';

        if(this.company)
            this.company.removeEmp(this.ename);



        // Creating new ename
        this.ename = [company.name, this._name].join('.');

        // Change the private props
        this._company = company;
        this._companyName = company.name;

        // Assign relation
        company.addEmployee(this);
    }

    get company() {
        return this._company;
    }

    get companyName() {

        return this._companyName;
    }

    get name() {
        return this._name;
    }

    set name(name) {

        this._name = name;

        const [compName] = this.ename.split('.');

        this.ename = [compName, name].join('.');
    }
}