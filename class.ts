abstract class Department {
	// name: string;
	protected employees: string[] = [];
	static fiscalYear = 2020;

	// initialize
	constructor(protected readonly id: string, public name: string) {}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfo() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	admins: string[];

	constructor(id: string, admins: string[]) {
		super(id, "IT"); //Departmentから引数持ってきている。(idとname)
		this.admins = admins;
	}

	describe() {
		console.log("IT Department - ID:" + this.id);
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment; //privateだけどAccountingDepartmentを外でも呼びたいとき。staticでクラスにアクセスできるようになる

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error("No Report Found");
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error("plz pass ia a valid value");
		}
		this.addReport(value);
	}

	private constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
		this.lastReport = reports[0];
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

	addEmployee(name: string) {
		if (name === "Max") {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReport() {
		console.log(this.reports);
	}
}

const accounting = AccountingDepartment.getInstance()
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
