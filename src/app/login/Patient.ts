 //the  purpose of this class is to map the specified fields with the fields of Spring Boot class.
 export class Patient {
    fullName: String;
    emailId: String;
    mobileNo: String;
    gender: String;
    age: number;
    password: String;
    patientType: String;

    constructor(
        fullName: String,
        emailId: String,
        mobileNo: String,
        gender: String,
        age: number,
        password: String,
        patientType: String) {


        this.fullName = fullName;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.gender = gender;
        this.age = age;
        this.password = password;
        this.patientType = patientType;
    }
}



