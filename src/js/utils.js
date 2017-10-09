
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

export const enameGenerator = (name, compName) => {

    return [compName, name].join('.');
};