/*jshint esversion: 6 */

import _ from 'lodash';

/**
 * 
 * @param {string} ename 
 */
export const getEnameMembers = (ename) => {

    const [compName, empName] = ename.split('.');

    return {
        compName,
        empName
    };
};


export const getNameByEname = (ename) => {

    return getEnameMembers(ename).empName;
};

export const getcompNameByEname = (ename) => {

    return getEnameMembers(ename).compName;
};

export const enameGenerator = (name, compName) => {

    return [compName, name].join('.');
};