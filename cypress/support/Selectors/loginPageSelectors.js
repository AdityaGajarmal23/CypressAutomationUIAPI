// selectors for the Login Page

export default class selectors{

    practiceLink = "li[id='menu-item-20'] a";
    practiceLinkText = "Practice";
    practicePageTitlelocator = ".post-title";
    homePageTitle = "Hello";
    testLoginPageLocator = "a[href='https://practicetestautomation.com/practice-test-login/']";
    testLoginPageText = "Test Login Page";
    testExceptionsLocator = "a[href='https://practicetestautomation.com/practice-test-exceptions/']";
    textExceptionsText = "Test Exceptions";
    loginPageTextLocator = "section[id='login'] h2";
    loginPageText = "Test login";
    loginPageDetailsLocator = "section[id='main-container'] ul li:nth-child(1)";
    loginPageDetailsText = "This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.";
    loginPageCredsLocator = "#login ul li:nth-child(2) b";
    loginPageUsername = "student";
    loginPagePassword = "Password123";
    usernameLocator = "#username";
    passwordLocator = "#password";
    submitButtonLocator = "#submit";
    sumbitButtonText = "Submit";
    loginSuccessfulLocator = ".post-title";
    loginSuccessfulText = "Logged In Successfully";
    logoutLocator = ".wp-block-group div div a";
    logoutText = "Log out";
    invalidMessageLocator = "#error";
    invalidUsernameText = "Your username is invalid!";
    invalidPasswordText = "Your password is invalid!";
    fetchUsernamePassword = " #login ul li b";

}

