import {data, IUser} from './data'

class Service {
    private users: IUser[]

   // readonly users: IUser[]

    constructor(users:IUser[]) {
        this.users = [...users]
    }
    //Exapmple
    get getUsers() {
        return [...this.users] //берем не данные, а их копию [...]
    }

    addUser(user:IUser): IUser[] {
        this.users.push(user)
        return [...this.users] //берем копию, чтобы не могли получить ссылку на данные
    }

    removeUser(id : number): IUser[] {
        this.users.splice(id, 1)
        return [...this.users]
    }
    changeUser(user: IUser, id:number):IUser[] {
        this.users[id] = user
        return [...this.users]
    }




    


}

export default new Service(data)