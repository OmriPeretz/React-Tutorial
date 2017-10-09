/**
 * Created by tc99585 on 26/09/17.
 */

/*jshint esversion: 6 */

import circularJson from 'circular-json';

export default class Companies {

	constructor(){

		this.companiesList = [];
	}


	addCompany(company){

		if(company.constructor.name !== "Company")
			throw "only Companies can be added";

		this.companiesList.push(company);
	}

	toString(){
		return circularJson.stringify(this, null ,4);
	}

	getCompanyByName(compName){

		return this.companiesList.filter(comp => comp.name == compName)[0];
	}

	/**
	 * sorting companies by most earning employees average
	 * @returns {Array.<T>}
	 */
	sortCompsBySalary(){
		return this.companiesList.sort((compA, compB) => {

			const aAverage = compA.getAverageSalary();
			const bAverage = compB.getAverageSalary();

			if (aAverage > bAverage) return 1;
			else if (aAverage < bAverage) return -1;
			return 0;// equals
		});
	}
}