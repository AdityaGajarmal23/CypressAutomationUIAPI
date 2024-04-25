import ApiService from "../../support/pages/ApiServicePage/ApiService"

let lp = new ApiService();
describe("Testing of Reqres Site for API Calling",()=>{

    let creds = null;
    before(()=>{
        cy.fixture('testData.json').then((data)=>{
            creds = data;
        })
    })

    it('1. GET Request: Send API request and get details for all users from Page 2',()=>{

        const api = creds.api;
        const page = api.pageID;
        lp.listUsersByPage(page).then((response)=>{
            expect(response.status).to.eql(200);
        });

    });

    it('2. GET Request: Send API Request and get Single User details',()=>{

        const api = creds.api;
        const userID = api.pageID;
        lp.getSingleUser(userID).then((response)=>{
            expect(response.status).to.eql(200);
            expect(response.body.data.email).to.eql('janet.weaver@reqres.in');
            cy.log('firstname',response.body.data.first_name);
            expect(response.body.data.id).to.eq(userID);
        });

    });

    it('3. GET Request: Sennd API Request for Invalid User Details',()=>{

        const api = creds.api;
        const userID = api.invalidUserID;
        lp.getSingleUser(userID).then((response)=>{
            expect(response.status).to.eql(404);
            cy.log('Status',response.status);
            if(response.status===404){
                cy.log('User not found. Considered as a passing scenario.');
            };
        });

    });

    it('4. GET Request: Get Unknown Data(List Resource)',()=>{

        lp.getUknownUser().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length.greaterThan(0);
        });

    });

    it('5. GET Request: Get Unknown(Single Resource) by ID', () => {

        const api = creds.api;
        const unknownId =api.unknownValidID;
        lp.getUnknownById(unknownId).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data.id).to.eq(unknownId);
        });

      });

      it('6. GET Request: Get Unknown(Single Resource NOT FOUND) by ID', () => {

        const api = creds.api;
        const unknownId =api.invalidUserID;
        lp.getUnknownById(unknownId).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body.data).to.eq(undefined);
        });

      });


    it('7. POST Request: Create User with Name and Job',()=>{

        const api = creds.api;
        const newUser = {
            name:api.name,
            job:api.job
        };
        lp.createUser(newUser).then((response)=>{
            expect(response.status).to.eql(201);
            expect(response.body.name).to.eql(newUser.name);
            expect(response.body.job).to.eql(newUser.job);
            let createdUserId = response.body.id;
            // creating a variable and storing the UserID created in localStorage memory
            window.localStorage.setItem('createdUserId', createdUserId);
            // Logging the created UserID
            cy.log('createdUserId', createdUserId);
            
        });

    });

    it('8. PUT Request: Update the User Data',()=>{

        const api = creds.api;
        // getting the UserID Stored in the LocalStorage Memory
        const userid = localStorage.getItem('createdUserId');
        const updateduserData = {
            name:api.newName,
            job:api.updatedJob
        };
        lp.updateUser(userid,updateduserData).then((response)=>{
            expect(response.status).to.eql(200);
            cy.log('updatedname',response.body.name);
            cy.log('updatedjob',response.body.job);
            expect(response.body.name).to.eql(updateduserData.name);
            expect(response.body.job).to.eql(updateduserData.job);
        });

    });

    it('9. PATCH Request: Update the User Data',()=>{

        const api = creds.api
        // getting the UserID Stored in the LocalStorage Memory
        const userid = localStorage.getItem('createdUserId');
        const updateduserData = {
            job:api.job
        };
        lp.updateUser(userid,updateduserData).then((response)=>{
            expect(response.status).to.eql(200);
            cy.log('updatedname',response.body.name);
            cy.log('updatedjob',response.body.job);
            expect(response.body.name).to.eql(updateduserData.name);
            expect(response.body.job).to.eql(updateduserData.job);
        });

    });

    it('10. Delete Request: Delete User',()=>{

        const userid = localStorage.getItem('createdUserId')
        lp.deleteUser(userid).then((response)=>{
            expect(response.status).to.eql(204);
        });

    });

    it('11. POST Request: Register Successful',()=>{

        const api = creds.api
        const newUser = {
            email:api.email,
            password:api.password
        };
        lp.registerSuccessfulUser(newUser).then((response)=>{
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property("id");
            expect(response.body).to.have.property('token');
        });

    });

    it('12. POST Request: Register Unsuccessful i.e. without Password',()=>{

        const api = creds.api
        const newUser = {
            email:api.email,
        };
        lp.registerSuccessfulUser(newUser).then((response)=>{
            expect(response.status).to.eql(400);
            expect(response.body).to.have.property("error");
            expect(response.body.error).to.eql("Missing password");
        });

    });

    it('13. POST Request: Login Successful',()=>{

        const api = creds.api
        const newUser = {
            email:api.email,
            password: api.password
        };
        lp.userLogin(newUser).then((response)=>{
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property("token");
        });

    });

    it('14. POST Request: Login Unsuccessful i.e. without Password',()=>{
        const api = creds.api
        const newUser = {
            email:api.email,
        };
        lp.userLogin(newUser).then((response)=>{
            expect(response.status).to.eql(400);
            expect(response.body).to.have.property("error");
            expect(response.body.error).to.eql("Missing password");
        });
    })

    it('15. GET Request: Requesting details from the page with some time delay in seconds',()=>{
        
        const delaytime = 4;  // in seconds
        lp.delayedResponse(delaytime).then((response)=>{
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('total_pages');
            expect(response.body).to.have.property('data');
        });

    });

})