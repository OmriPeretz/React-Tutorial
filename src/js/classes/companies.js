/**
 * Created by tc99585 on 26/09/17.
 */
import {classes as Classes} from '../consts';
import circularJson from 'circular-json';

export default class Companies extends Array{

    constructor(...args) {
        super(...args);
    }

    /**
     * Override push method
     * @param company
     * @returns {*}
     */
    push(company) {

        if (company.constructor.name !== Classes.comp)
            throw "only Companies can be added";

        console.log(company);
        super.push(company);
    }

    toJson() {
        return circularJson.stringify(this, null, 4);
    }

    getCompanyByName(compName) {

        return this.filter(comp => comp.name === compName)[0];
    }

    /**
     * sorting companies by most earning employees average
     * @returns {Array.<T>}
     */
    sortCompsBySalary() {
        return this.sort((compA, compB) => {

            const aAverage = compA.getAverageSalary();
            const bAverage = compB.getAverageSalary();

            if (aAverage > bAverage) return 1;
            else if (aAverage < bAverage) return -1;
            return 0;// equals
        });
    }


    getAllEmployees() {

        let employees = [];

        this.forEach(comp =>
            comp.employees.forEach(emp => employees.push(emp)));

        return employees;

    }
}
