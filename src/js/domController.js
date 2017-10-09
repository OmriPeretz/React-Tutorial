      /*jshint esversion: 6 */


      import {
            uiPath as UiPath,
            classes as Classes
      } from './consts';

      let instance = null;

      class DomController {
            constructor() {

                  // Creates the singleton
                  if (!instance) {

                        instance = this;
                        instance.loaded = false;


                      document.addEventListener("DOMContentLoaded", () => {
                          instance.loaded = true;
                      });

                        while(!instance.loaded) {

                        }
                  }

                  return instance;
            }

            isDomReady() {
                  if (!instance.loaded)
                        throw "dom is not ready";

                  return instance.loaded;
            }

            printEmployee(emp) {

                  instance.isDomReady();

                  if (employee.constructor.name !== Classes.emp)
                        throw "can add only employees";

                  const empRow = instance._generateEmpsTableRow(employee);
                  _insertEmployeeToTable(empRow);
            }

            printEmployees(empsArray) {
                  empsArray.forEach(emp => instance.printEmployee(emp));
            }

            static _insertEmployeeToTable(empRow) {

                  $(UiPath.tbody).append(empRow);
            }

            static _generateEmpsTableRow(emp) {

                  return `<tr><td>${emp.name}</td><td>${emp.salary}</td><td>${emp.company.name}</td><td>${emp.gender}</td></tr>`;
            }

            static clearForm(){

            }

      }