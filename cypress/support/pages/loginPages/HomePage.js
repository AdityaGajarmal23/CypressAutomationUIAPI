
const practiceLink = "li[id='menu-item-20'] a";
const practiceLinkText = "Practice";

export default class HomePage{

    

    verifyPracticeOptionIsAvailable(){
        cy.get(practiceLink).invoke('text').then((text)=>{
            expect(text).to.equal(practiceLinkText);
        })
    }

    clickOnPracticeLinkOption(){
        cy.get(practiceLink).invoke('text').then((text)=>{
            expect(text).to.equal(practiceLinkText);
            cy.get(practiceLink).click();
        })
    }
}