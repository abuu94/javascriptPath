//Employee

function Employee(name, age, education, phonenumber) {
    this.name = name;
    this.age = age;
    this.education = education;
    this.phonenumber = phonenumber;
    this.basicInfo = function () {
        // console.log
        console.log(
            ` Emplyee Information:
            Name : ${this.name}
            Age  : ${this.age}
            Education: ${this.education}
            Phonenumber: ${this.phonenumber}
            `
        );

    };



};
Employee.prototype.designation;
Employee.prototype.maritalStatus;
Employee.prototype.address;
Employee.prototype.email;

Employee.prototype.otherInfo = function (designation, maritalStatus, address, email) {
    this.designation = designation;
    this.maritalStatus = maritalStatus;
    this.address = address;
    this.email = email;
    // console.log
    console.log(
        `  
            Designation: ${this.designation}
            Marital Status: ${this.maritalStatus}
            Address : ${this.address}
            Email: ${this.email}
            `
    );


};

const emp1 = new Employee('Abuu', 30, 'Degree', '0777112233');
const emp2 = new Employee('Asha', 34, 'Master', '0777002233');
const emp3 = new Employee('Ali', 36, 'PHD', '0876112233');
const emp4 = new Employee('Adam', 20, 'Secondary', '0098112233');


emp1.basicInfo();
emp1.otherInfo('System Engineer', 'Married', 'TZ', 'emp1@example.com');
emp2.basicInfo();
emp2.otherInfo('Data Engineer', 'Single', 'USA', 'emp2@example.com');
emp3.basicInfo();
emp3.otherInfo('Sytem Analyst', 'Single', 'UK', 'emp3@example.com');
emp4.basicInfo();
emp4.otherInfo('Designer', 'Married', 'FR', 'emp4@example.com');

//check
console.log(Object.getPrototypeOf(emp1) === Employee.prototype); // returns true
console.log(Object.getPrototypeOf(emp2) === Employee.prototype); // returns true
console.log(Object.getPrototypeOf(emp3) === Employee.prototype); // returns true
console.log(Object.getPrototypeOf(emp4) === Employee.prototype); // returns true
