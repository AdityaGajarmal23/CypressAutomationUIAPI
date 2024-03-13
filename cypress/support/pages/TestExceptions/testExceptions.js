//POM for Exceptions- Selectors and Functions for Exceptions

import HomePage from "../loginPages/HomePage";
import PracticePage from "../loginPages/PracticePage"

const inputAreaField ='.input-field';
const editButton ='[name="Edit"]';
const addButtonLocator ='[name="Add"]';
const loading ='#loading';
const saveLocator ='[name="Save"]';
const SuccessSave='#confirmation';

let pp = new PracticePage();
let hp = new HomePage();

export default class Exceptions{

    homePageOpen(){
        let url = "/"
        cy.visit(url);
    }

    navigateToExceptionsPage(){
        this.homePageOpen();
        hp.verifyPracticeOptionIsAvailable();
        hp.clickOnPracticeLinkOption();
        pp.verifyPracticePageOpened();
        pp.verifyTestExceptionsPresent();
        cy.visit('/practice-test-exceptions/');
    };

    addTextAndVerifyNewInputBox(text){
        cy.get(editButton).click();
        cy.get(inputAreaField).type(text);
        cy.get(addButtonLocator).click();
        cy.wait(2000)
        cy.get(inputAreaField).should('have.length', 2);
    }

    addDataInNewRow(text){
        cy.get(inputAreaField).eq(1).type(text);
        cy.get(saveLocator).eq(1).click();
    }

    saveSucessVerification(PassRequiredText){
        cy.get(SuccessSave).invoke('text').then((text)=>{
            expect(text).to.equal(PassRequiredText)
          })
    }

    inputAreaDisabled(){
        cy.get(inputAreaField).should('be.disabled');
    }

    verifyAddButtonShouldNotvisible(inputText){
        cy.get(addButtonLocator).click();
        cy.get(SuccessSave).invoke('text').then((text)=>{
            expect(text).to.equal(inputText)
        });
        cy.get(addButtonLocator).should('not.be.visible');
    }

    clickAddButtonAndVerifyTwoRows(){
        cy.get(addButtonLocator).click()
        cy.wait(2000)
        cy.get(inputAreaField).should('have.length', 2);

    }
    
}
