//Importing Login Class functions
import Login from "../../support/pages/loginPages/loginPage"

let lp = new Login();
describe('Visit Practice Automation for Practice',()=>{

    let creds;
    before(()=>{
        // Getting the Test Data in Fixtures
        cy.fixture("testData.json").then((data)=>{
            creds = data;
        })
        // Navigating the Pages and verifying elements the same time
        lp.naviageToHomePage();
        lp.navigationToPracticePage();
        lp.verifyAndNavigateToTestLoginPage();
    })
    beforeEach(()=>{
        // Verifying Login Page appeared Before every test
        lp.verifyLoginPageAppeared();
    })

    it('Verify Successful Login with Valid Credentials',()=>{
        const Credentials = creds.validCredentials;
        lp.verifyLoginPageDetailsPresent();
        lp.inputUsername(Credentials.username);
        lp.inputPassword(Credentials.password);
        lp.clicksubmitButton();
        lp.successfulLoginAfterPage();
        lp.signout();
        lp.verifyLoginPageDetailsPresent();
    })

    it("Verify Error Notification when Login with Inccorect Username and Correct Password",()=>{
        const Credentials = creds.incorrectUsernameCredentials;
        lp.verifyLoginPageDetailsPresent();
        lp.inputUsername(Credentials.username);
        lp.inputPassword(Credentials.password);
        lp.clicksubmitButton();
        lp.verifyInvalidUsernamePopup();
        lp.verifyLoginPageDetailsPresent();
    })

    it("Verify Error Notification when Login with Correct Username and Invalid Password", ()=>{
        const Credentials = creds.incorrectPasswordCredenntials;
        lp.verifyLoginPageDetailsPresent();
        lp.inputUsername(Credentials.username);
        lp.inputPassword(Credentials.password);
        lp.clicksubmitButton();
        lp.verifyInvalidPasswordPopup();
        lp.verifyLoginPageDetailsPresent();
    })

    it('Verify Successful Login when login Credentials are fetched from Page and submitted',()=>{
        lp.verifyLoginPageDetailsPresent();
        lp.verifyLoginPageAppeared();
        lp.fetchLoginCredsfromPage();
        lp.successfulLoginAfterPage();
        lp.signout();
        lp.verifyLoginPageDetailsPresent();
    })

    it("Verify Username Error if Submit is clicked without entering Username and Password",()=>{
        lp.verifyLoginPageDetailsPresent();
        lp.verifyLoginPageAppeared();
        lp.clicksubmitButton();
        lp.verifyInvalidUsernamePopup();
        lp.verifyLoginPageDetailsPresent();
    })

})