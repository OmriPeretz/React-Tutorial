/**
 * Created by tc99585 on 24/09/17.
 */
/*jshint esversion: 6 */

import {
	getEnameMembers as GetEnameMembers
} from '../utils.js';

const assignEmpToComp = (emp, comp) => {

	if (comp.constructor.name != 'Company' || emp.constructor.name != 'Employee')
		throw "can't assign emp to comp";

	comp.addEmployee(emp);
};

export default class Employee {

	constructor(employee) {

		if (!employee.salary) employee.salary = 5000;

		Object.assign(this, employee, {
			_name: GetEnameMembers(employee.ename).empName,
			_companyName: GetEnameMembers(employee.ename).compName
		});

	}

	set company(company) {

		if (company.constructor.name != 'Company')
			throw 'cannot set not company object';


		// Creating new ename
		this.ename = [company.name, this._name].join('.');

		//etting the new comp
		this._company = company;

		// Assign relation
		assignEmpToComp(this, company);
	}

	get company() {
		return this._company || null;
	}

	get companyName() {

		return this._companyName;
	}

	get name() {
		return this._name;
	}

	set name(name) {

		const [compname] = this.ename.split('.');

		this.ename = [compname, name].join('.');
	}
}