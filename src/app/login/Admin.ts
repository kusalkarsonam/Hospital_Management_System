export class Admin{
    adminemailId: string;
    userName:String;
    password:String;

    constructor(
        adminemailId: string,
        userName:String,
        password:String,
    ) {
        this.adminemailId = adminemailId;
		this.userName = userName;
		this.password = password;
    }

}