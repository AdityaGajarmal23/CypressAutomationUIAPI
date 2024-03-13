// POM for Practice Page with selectors and Functions

const practicePageTitlelocator = ".post-title";
const practiceLinkText = "Practice"
const testLoginPageLocator = "a[href='https://practicetestautomation.com/practice-test-login/']";
const testLoginPageText = "Test Login Page";
const testExceptionsLocator = "a[href='https://practicetestautomation.com/practice-test-exceptions/']";
const textExceptionsText = "Test Exceptions";

export default class PracticePage{

    verifyPracticePageOpened(){
        cy.get(practicePageTitlelocator).invoke('text').then((text)=>{
            expect(text).to.equal(practiceLinkText);
        });
    };

    verifyTestLoginPagePresent(){
        cy.get(testLoginPageLocator).invoke('text').then((text)=>{
            expect(text).to.equal(testLoginPageText);
        });
    };

    verifyTestExceptionsPresent(){
        cy.get(testExceptionsLocator).invoke('text').then((text)=>{
            expect(text).to.equal(textExceptionsText);
        });
    };

    verifyLoginPageAndClick(){
        cy.get(testLoginPageLocator).invoke('text').then((text)=>{
            expect(text).to.equal(testLoginPageText);
            cy.get(testLoginPageLocator).click();
        })
    }
}