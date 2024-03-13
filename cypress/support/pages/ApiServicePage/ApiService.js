// const { method } = require("cypress/types/bluebird");


export default class ApiService{
    listUsersByPage(page){
        return cy.request({
            method:'GET',
            url:`https://reqres.in/api/users?page=${page}`,
            failOnStatusCode:false
        })
    }

    getSingleUser(userid){
        return cy.request({
            method:'GET',
            url:`https://reqres.in/api/users/${userid}`,
            failOnStatusCode:false
        })

    }

    getUknownUser(){
        return cy.request('https://reqres.in/api/unknown')
    }

    createUser(user){
        return cy.request({
            method:'POST',
            url:"https://reqres.in/api/users",
            body:user
        });
    }

    updateUser(userid,updatedUserData){
        return cy.request({
            method:'PUT',
            url:`https://reqres.in/api/users/${userid}`,
            failOnStatusCode:false,
            body:updatedUserData
        })
    }

    deleteUser(userid){
        return cy.request({
            method:"DELETE",
            url:`https://reqres.in/api/users/${userid}`,
            failOnStatusCode:false
        })
    }

    getUnknownById(unknownId) {
        return cy.request({
          method:'GET',
          url:`https://reqres.in/api/unknown/${unknownId}`,
          failOnStatusCode: false,
        })
    }
    
    registerSuccessfulUser(responseBody){
        return cy.request({
            method:"POST",
            url:'https://reqres.in/api/register',
            body:responseBody,
            failOnStatusCode:false
        })
    }

    userLogin(responseBody){
        return cy.request({
            method:"POST",
            url:'https://reqres.in/api/login',
            body:responseBody,
            failOnStatusCode:false
        })
    }

    delayedResponse(timeDelay){
        return cy.request(`https://reqres.in/api/users?delay=${timeDelay}`);
    }
}