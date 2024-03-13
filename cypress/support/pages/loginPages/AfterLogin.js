// POM for After Successful Login Page and fuctions for Successful Login Page

const loginSuccessfulLocator = ".post-title";
const loginSuccessfulText = "Logged In Successfully";
const logoutLocator = ".wp-block-group div div a";
const logoutText = "Log out";

export default class AfterLogin{

    verifySuccessfulLogin(){
        cy.get(loginSuccessfulLocator).invoke('text').then((text)=>{
            expect(text).to.equal(loginSuccessfulText);
        });
    };

    logout(){
        cy.get(logoutLocator).invoke('text').then((text)=>{
            expect(text).to.equal(logoutText);
            cy.get(logoutLocator).click();
        });
    };
};