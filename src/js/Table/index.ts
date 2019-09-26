import C from '../constants' //C - constants
import {IUser} from '../service/data'
import constants from '../constants'


export default class AdminTable {
    private userRow(user : IUser) : string {
        return `
        <div class="user__row">
            <span>${user.name}</span>
            <span>${user.surname}</span>
            <span>${user.age}</span>
            <span>${user.email}</span>
            <span>${user.phone ? user.phone : "пусто"}</span>
            <span>${user.work ? user.work  : "пусто"}</span>
            <span>${user.hobby ? user.hobby  : "пусто"}</span>    
        </div>        
        `
    } 

    renderUsers(users:IUser[]) {
        users.map((user:IUser) => {
            C.table.innerHTML += this.userRow(user)
        })
    }
}