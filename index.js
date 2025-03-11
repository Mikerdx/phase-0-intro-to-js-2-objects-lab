// Write your solution in this file!
const employee = {
    name: "Mike B",
    streetAddress: "1234 Grove st"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
}
module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
};
