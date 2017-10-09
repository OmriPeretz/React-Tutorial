/* Created by tc99585 on 24/09/17.*/

import _ from 'lodash';
import circularJson from 'circular-json';
import {classes as Classes} from '../consts';


export default class Company {

    constructor(company) {

        Object.assign(this, company, {employees: []});
    }


    addEmployee(employee) {

        if (employee.constructor.name !== Classes.emp)
            throw "only employees can be added";

        this.employees.push(employee);
    }

    toString() {
        return circularJson.stringify(this, null, 4);
    }

    removeEmp(ename) {

        this.employees = _.remove(this.employees, function (emp) {
            return emp.ename !== ename;
        });
    }

    getAverageSalary() {

        let salary = 0;

        this.employees.forEach(emp => salary += emp.salary);

        return salary / this.employees.length;
    }

    getMostEarningEmployee() {

        let mostEarningEmployee = {};

        this.employees.forEach(emp => {

            if (mostEarningEmployee.salary < emp.salary || !mostEarningEmployee.salary)
                mostEarningEmployee = emp;
        });

        return mostEarningEmployee;
    }

}