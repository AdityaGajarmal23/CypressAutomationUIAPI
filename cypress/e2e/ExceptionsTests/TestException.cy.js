import Exceptions from "../../support/pages/TestExceptions/testExceptions";

const exp = new Exceptions();

describe('Test Suite For Exception Handling',()=>{
    let creds;
    before(()=>{
        cy.fixture('testData.json').then((data) => {
            creds = data;
          });
    })
    beforeEach(()=>{
        exp.navigateToExceptionsPage()
    })
    it('Test case 1: NoSuchElementException Scenario',()=>{

        const api = creds.api;
        exp.addTextAndVerifyNewInputBox(api.name);

    })

    it('Test case 2: ElementNotInteractableException handling',()=>{ 

        const api = creds.api;
        exp.addTextAndVerifyNewInputBox(api.name); 
        exp.addDataInNewRow(api.job);
        exp.saveSucessVerification('Row 2 was saved');

    })
    it('Test case 3 : Verify By default input field is disabled',()=>{
        exp.inputAreaDisabled()
    })


    it('Test case 4: StaleElementReferenceException handling',()=>{
        exp.verifyAddButtonShouldNotvisible('Row 2 was added')
    })
    it('Test case 5: TimeoutException handling',()=>{
       exp.clickAddButtonAndVerifyTwoRows()
    })
})