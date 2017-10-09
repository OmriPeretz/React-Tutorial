/* Created by tc99585 on 24/09/17.*/

/*jshint esversion: 6 */

import circularJson from 'circular-json';


export default class Company {

	constructor(company){

		Object.assign(this, company, {employees: []});
	}


	addEmployee(employee){

		if(employee.constructor.name !== "Employee")
			throw "only employees can be added";

		this.employees.push(employee);
	}

	toString(){
		return circularJson.stringify(this, null ,4);
	}


	getAverageSalary(){

		let salary = 0;

		this.employees.forEach(emp => salary += emp.salary);

		return salary / this.employees.length;
	}

}