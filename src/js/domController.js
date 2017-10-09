/*jshint esversion: 6 */

import {default as $} from "jquery";
import _ from 'lodash';
import {enameGenerator as EnameGenerator} from './utils.js';
import {
    uiPath as UiPath,
    classes as Classes,
    enameProps as EnameProps,
    uiIds as UiIds
} from './consts';

import {createEmployee as CreateEmployee} from './main';

// Singleton class
export default class DomController {
    static staticConstructor() {

        document.addEventListener("DOMContentLoaded", () => {

            // Assign onclick func
            $(UiPath.addEmpBtn).click(() => this.onAddEmployee());
        });
    }

    static _domReady(){
        return Promise.resolve($.when($.ready));
    }

    static printEmployee(emp) {

        this._domReady().then(()=>{
            if (emp.constructor.name !== Classes.emp)
                throw "can add only employees";

            const empRow = this._generateEmpsTableRow(emp);
            this._insertEmployeeToTable(empRow);
        });
    }

    static printEmployees(empsArray) {
        empsArray.forEach(emp => this.printEmployee(emp));
    }

    static _insertEmployeeToTable(empRow) {

        $(UiPath.tbody).append(empRow);
    }

    static _generateEmpsTableRow(emp) {

        return `<tr><td>${emp.name}</td><td>${emp.salary}</td><td>${emp.company.name}</td><td>${emp.gender}</td></tr>`;
    }

    static _clearForm() {

        // iterate threw the fields and clear them
        UiIds.forEach(fName => $(`#${fName}`).val(''));
    }

    static _getFormFields() {

        // Takes fields values
        let fields = {};

        // Assign each form val to the employee obj
        UiIds.forEach(fName => fields[fName] = $(`#${fName}`).val());

        return fields;
    }

    static onAddEmployee() {

        // Gets emp props and clear the form
        let employee = this._getFormFields();
        this._clearForm();

        // Generate ename and omit unneeded props
        employee.ename = EnameGenerator(employee.name, employee.companyName);
        employee = _.omit(employee, EnameProps);

        //Creating the emp as model and printing into the dom
        employee = CreateEmployee(employee);
        this.printEmployee(employee);
    }
}

DomController.staticConstructor();