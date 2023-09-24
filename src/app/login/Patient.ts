 //the  purpose of this class is to map the specified fields with the fields of Spring Boot class.
 export class Patient {
    fullName: String;
    emailId: String;
    mobileNo: String;
    gender: String;
    age: number;
    password: String;

    constructor(
        fullName: String,
        emailId: String,
        mobileNo: String,
        gender: String,
        age: number,
        password: String) {


        this.fullName = fullName;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.gender = gender;
        this.age = age;
        this.password = password;
    }
}




//https://codeshare.io/K8k8xP

//https://codeshare.io/K8k8xP