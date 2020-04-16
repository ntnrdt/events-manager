import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser = {
        id: -1,
        authenticated: false,
        firstName: '',
        lastName: '',
        userName: ''
    };

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            authenticated: true,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }

    isAuthenticated(){
        return !!this.currentUser && this.currentUser.authenticated;
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}