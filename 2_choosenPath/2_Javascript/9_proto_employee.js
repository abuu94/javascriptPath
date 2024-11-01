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

const emp1 = new Employee('Abuu', 30, 'Degree', '0777112233');
const emp2 = new Employee('Asha', 34, 'Master', '0777002233');
const emp3 = new Employee('Ali', 36, 'PHD', '0876112233');
const emp4 = new Employee('Adam', 20, 'Secondary', '0098112233');


emp1.basicInfo();
emp2.basicInfo();
emp3.basicInfo();
emp4.basicInfo();

