// POM for Login Page with fuctions

import AfterLogin from "./AfterLogin";
import HomePage from "./HomePage";
import PracticePage from "./PracticePage";

let hp = new HomePage()
let pp = new PracticePage()
let al = new AfterLogin() 

const homePageTitle = "Hello";
const loginPageTextLocator = "section[id='login'] h2";
const loginPageText = "Test login";
const loginPageDetailsLocator = "section[id='main-container'] ul li:nth-child(1)";
const loginPageDetailsText = "This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.";
const loginPageCredsLocator = "#login ul li:nth-child(2) b";
const loginPageUsername = "student";
const loginPagePassword = "Password123";
const usernameLocator = "#username";
const passwordLocator = "#password";
const submitButtonLocator = "#submit";
const sumbitButtonText = "Submit";
const invalidMessageLocator = "#error";
const invalidUsernameText = "Your username is invalid!";
const invalidPasswordText = "Your password is invalid!";
const fetchUsernamePassword = " #login ul li b";

export default class Login{
    constructor(){
        this.username = ''
        this.password = ''
    };

    naviageToHomePage(){
        this.navigateToBaseURL();
    };

    navigateToBaseURL(){
        let url = "/"
        cy.visit(url);
    };

    navigatetoPracticePage(){
        cy.visit(`/practice/`);
    };

    navigatetoLoginPage(){
        cy.visit('/practice-test-login/');
    };


    verifyHomePageOpened(){
        this.navigateToBaseURL();
        cy.get(practicePageTitlelocator).invoke('text').then((text)=>{
            expect(text).to.equal(homePageTitle);
        });
    };

    navigationToPracticePage(){
        hp.verifyPracticeOptionIsAvailable();
        hp.clickOnPracticeLinkOption();
        pp.verifyPracticePageOpened();
        pp.verifyTestLoginPagePresent();
        pp.verifyTestExceptionsPresent();
    };

    verifyLoginPageAppeared(){
        cy.get(loginPageTextLocator).invoke('text').then((text)=>{
            expect(text).to.equal(loginPageText);
        });
    };

    verifyLoginPageDetailsPresent(){
        this.verifyLoginPageAppeared();
        cy.get(loginPageDetailsLocator).invoke('text').then((text)=>{
            expect(text).to.equal(loginPageDetailsText);
        });
    };

    verifyLoginPageContainsUsername(){
        cy.get(loginPageCredsLocator).invoke('text').then((text)=>{
            expect(text).to.contain(loginPageUsername);
        });
    };

    verifyLoginPageContainsPassword(){
        cy.get(loginPageCredsLocator).invoke('text').then((text)=>{
            expect(text).to.contain(loginPagePassword);
        });
    };
    verifyAndNavigateToTestLoginPage(){
        pp.verifyLoginPageAndClick();
        this.verifyLoginPageAppeared();
        this.verifyLoginPageDetailsPresent();
        this.verifyLoginPageContainsUsername();
        this.verifyLoginPageContainsPassword();
    };

    inputUsername(username){
        cy.get(usernameLocator).clear().type(username);
    };

    inputPassword(password){
        cy.get(passwordLocator).clear().type(password);
    };

    verifySubmitButtonPresent(){
        cy.get(submitButtonLocator).invoke('text').then((text)=>{
            expect(text).to.equal(sumbitButtonText);
        });
    };

    clicksubmitButton(){
        this.verifySubmitButtonPresent();
        cy.get(submitButtonLocator).click();
    };

    verifyInvalidUsernamePopup(){
        cy.get(invalidMessageLocator).invoke('text').then((text)=>{
            expect(text).to.contain(invalidUsernameText);
        });
    };

    verifyInvalidPasswordPopup(){
        cy.get(invalidMessageLocator).invoke('text').then((text)=>{
            expect(text).to.contain(invalidPasswordText);
        });
    };

    getUserameFromPage(){
        return cy.get(fetchUsernamePassword).eq(0).invoke('text');
    };

    getPasswordFromPage(){
        return cy.get(fetchUsernamePassword).eq(1).invoke('text');
    };

    fetchLoginCredsfromPage(){
        this.getUserameFromPage().then((text)=>{
            this.inputUsername(text);
        });
        this.getPasswordFromPage().then((text)=>{
            this.inputPassword(text);
        });
        this.clicksubmitButton();
    };

    successfulLoginAfterPage(){
        al.verifySuccessfulLogin()
    }

    signout(){
        al.logout()
    }
};


