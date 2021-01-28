"use strict";
class Department {
    // initialize
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT"); //Departmentから引数持ってきている。(idとname)
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID:" + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("plz pass ia a valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            //instanceはstaticだからAcountingDepartmentで呼べる
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log(`Accounting Department - ID:` + this.id);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const accounting = AccountingDepartment.getInstance();
const IT = new ITDepartment("it1", []);
accounting.mostRecentReport = "Year End Report"; //set呼び出し
accounting.addReport("something went wrong...");
accounting.addEmployee("Ito");
console.log(accounting.mostRecentReport);
accounting.describe();
IT.describe();
// accounting.printEmployeeInfo();
// const accountingCopy = { name: "a", describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=class.js.map