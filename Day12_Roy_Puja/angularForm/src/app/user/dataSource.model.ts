import { User } from "./user.model";

export class dataSoure{
    private users:User[]
    constructor(){
        this.users = new Array<User>(
            new User(1, 'Puja ', "pujaroy280@gmail.com")
        )
        }

        getUser():User[]{
            return this.users
        }
}