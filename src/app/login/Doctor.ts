export class Doctor{
    doctorId: number;
    doctName: String;
    password: String;
    email: String;
    specialization: String;
    education: String;
    consultingFees: number;

    constructor(
    doctorId: number,
    doctName: String,
    password: String,
    email: String,
    specialization: String,
    education: String,
    consultingFees: number) {

    this.doctorId = doctorId;
    this.doctName = doctName;
    this.password = password;
    this.email = email;
    this.specialization = specialization;
    this.education = education;
    this.consultingFees = consultingFees;
    }

}