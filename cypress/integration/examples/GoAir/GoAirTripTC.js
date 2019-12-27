import BookFlights from '../../../support/pageObjects/BookFlights'

describe("Validate Go Air Search Page",function(){

    this.beforeEach(function() {
    cy.visit(Cypress.env('url'));
    cy.fixture('DataGoAir').as("bookFlightTestData");
   
     
    })
    
    it("SF-TC-01 Search flight without entering Origin",function(){
     const bookFlights = new BookFlights
     bookFlights.selectRoundTrip()
     bookFlights.clickOnBookNow()
     cy.on('window:alert', (str) => {
      expect(str).to.equal('Origin is required')
    })
  })

    it("SF-TC-02 Search flight without entering Destination",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData) => {
      const bookFlights = new BookFlights
      bookFlights.selectRoundTrip()
      bookFlights.TypeOrigin(bookFlightTestData.TC02.fromcity)
      bookFlights.selectOrigin(bookFlightTestData.TC02.fromcity)
      bookFlights.clickOnBookNow()
      cy.on('window:alert', (str) => {
       expect(str).to.equal('Destination is required')
     })
    })
     //cy.get('[class="command-message-text"]').should('have.text','Origin is required')
    })
    
    it("SF-TC-03 Search flight without entering depart date", function(){
   //   cy.fixture('DataGoAir').as("bookFlightTestData");
      cy.get("@bookFlightTestData").then((bookFlightTestData) => {
      const bookFlights = new BookFlights
      bookFlights.selectRoundTrip()
      bookFlights.TypeOrigin(bookFlightTestData.TC03.fromcity)
      bookFlights.selectOrigin(bookFlightTestData.TC03.fromcity)
      cy.wait(10000)
      bookFlights.selectDestination(bookFlightTestData.TC03.tocity)
      cy.focused().blur()
      bookFlights.clickOnBookNow()
      cy.on('window:alert', (str) => {
       expect(str).to.equal('select a departure date')
      })
     })
     
    })
    it("SF-TC-04 Search flight without entering Return date",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
      const bookFlights = new BookFlights
      bookFlights.selectRoundTrip()
      bookFlights.TypeOrigin(bookFlightTestData.TC04.fromcity)
      bookFlights.selectOrigin(bookFlightTestData.TC04.fromcity)
      cy.wait(4000)
      bookFlights.selectDestination(bookFlightTestData.TC04.tocity)
      bookFlights.pickDepartDate(bookFlightTestData.TC04.departDay,bookFlightTestData.TC04.departMonth,bookFlightTestData.TC04.departYear)
      cy.focused().blur()
      bookFlights.clickOnBookNow()
      cy.on('window:alert', (str) => {
       expect(str).to.equal('Return date is required')
      })
    })
    })
    it("SF-TC-05 Search flight with one Adult,one child and one infant",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
      const bookFlights = new BookFlights
      bookFlights.selectRoundTrip()
      bookFlights.TypeOrigin(bookFlightTestData.TC05.fromcity)
      bookFlights.selectOrigin(bookFlightTestData.TC05.fromcity)
      cy.wait(4000)
      bookFlights.selectDestination(bookFlightTestData.TC05.tocity)
      bookFlights.pickDepartDate(bookFlightTestData.TC05.departDay,bookFlightTestData.TC05.departMonth,bookFlightTestData.TC05.departYear)
      cy.wait(1000)
      bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
      bookFlights.selectAdultPassengers(bookFlightTestData.TC05.adultPassengers)
      bookFlights.selectChildPassengers(bookFlightTestData.TC05.childPassenger) 
      bookFlights.selectInfantPassenger(bookFlightTestData.TC05.infantPassenger)
      bookFlights.clickOnBookNow()



    
      })
    })
    it("SF-TC-06 Check the label 'Student'",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC06.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC06.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC06.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC06.departDay,bookFlightTestData.TC06.departMonth,bookFlightTestData.TC06.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC06.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC06.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC06.infantPassenger)
        bookFlights.checkLabelStudent()
        cy.get('[class="closee"]')
        //cy.wait(4000)
       
  
      })
    })
    it("SF-TC-07 Check the label 'Student if the Origin and destination is in India'",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC07.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC07.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC04.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC07.departDay,bookFlightTestData.TC07.departMonth,bookFlightTestData.TC07.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC07.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC07.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC07.infantPassenger)
        bookFlights.checkLabelStudent()
        cy.get('[class="closee"]')
        bookFlights.clickOnBookNow()
      })
    })
    it("SF-TC-08 Check the label 'Student if the destination is outside India'",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC08.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC08.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC08.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC08.departDay,bookFlightTestData.TC08.departMonth,bookFlightTestData.TC08.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC08.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC08.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC08.infantPassenger)
       // bookFlights.checkLabelStudent()
        //cy.get('[class="closee"]')
        //bookFlights.checkDisabledLabelStudent()
        bookFlights.checkLabelStudentsIsNotVisible(bookFlightTestData.TC08)
        cy.wait(4000)
        
      })
    })
    it("SF-TC-09 Check the label 'Armed Forces'",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC09.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC09.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC09.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC09.departDay,bookFlightTestData.TC09.departMonth,bookFlightTestData.TC09.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC09.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC09.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC09.infantPassenger)
        bookFlights.clickOnLabelArmedForces(bookFlightTestData.TC09)
        

        
      })
    })
    it("SF-TC-010 Check the label 'Armed Forces' if Origin and destination is within India",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC010.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC010.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC010.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC010.departDay,bookFlightTestData.TC010.departMonth,bookFlightTestData.TC010.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC010.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC010.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC010.infantPassenger)
        bookFlights.clickOnLabelArmedForces(bookFlightTestData.TC010)
        bookFlights.clickOnBookNow()  
   
        
      })
    })
    it("SF-TC-011 Check the label 'Armed Forces' if the destination is outside India",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC011.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC011.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC011.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC011.departDay,bookFlightTestData.TC011.departMonth,bookFlightTestData.TC011.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC011.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC011.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC011.infantPassenger)
        bookFlights.checkLabelArmedForcesIsNotVisible(bookFlightTestData.TC011)
        cy.wait(4000)
      })
    })
    it("SF-TC-012 Check the label 'Senior Citizen'",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC012.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC012.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC012.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC012.departDay,bookFlightTestData.TC012.departMonth,bookFlightTestData.TC012.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC012.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC012.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC012.infantPassenger)
        bookFlights.clickOnLabelSeniorCitizen(bookFlightTestData.TC012)
        cy.wait(1000)
      })
    })
    it("SF-TC-013 Check the label 'Senior Citizen' if the destination is outside India.",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC013.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC013.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC013.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC013.departDay,bookFlightTestData.TC013.departMonth,bookFlightTestData.TC013.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC013.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC013.childPassenger) 
        bookFlights.selectInfantPassenger(bookFlightTestData.TC013.infantPassenger)
        bookFlights.clickOnLabelSeniorCitizen(bookFlightTestData.TC013)
        cy.wait(1000)
        bookFlights.clickOnBookNow()
      })
    })
    it("SF-TC-014 Check the id PromoCode",function(){
      cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC013.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC013.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC013.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC013.departDay,bookFlightTestData.TC013.departMonth,bookFlightTestData.TC013.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC013.adultPassengers)
        bookFlights.checkIdPromoCode(bookFlightTestData.TC013)
        bookFlights.clickOnBookNow(bookFlightTestData.TC013)
        bookFlights.checkAlertMessageOfPromoCode(bookFlightTestData.TC013)
         cy.log()
       
      })
    })/*
       it("SF-TC-014 Check the Currency",function(){
       cy.get("@bookFlightTestData").then((bookFlightTestData)=> {
        const bookFlights = new BookFlights
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(bookFlightTestData.TC014.fromcity)
        bookFlights.selectOrigin(bookFlightTestData.TC014.fromcity)
        cy.wait(4000)
        bookFlights.selectDestination(bookFlightTestData.TC014.tocity)
        bookFlights.pickDepartDate(bookFlightTestData.TC014.departDay,bookFlightTestData.TC014.departMonth,bookFlightTestData.TC014.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(bookFlightTestData.TC05.returnDay,bookFlightTestData.TC05.returnMonth,bookFlightTestData.TC05.returnYear,bookFlightTestData.TC05.departMonth)
        bookFlights.selectAdultPassengers(bookFlightTestData.TC014.adultPassengers)
        bookFlights.selectChildPassengers(bookFlightTestData.TC014.childPassenger) 
        bookFlights.selectCurrency(bookFlightTestData.TC013)
         cy.log()
       
      })
    })*/
    it("SF-TC-015 Validate all hyperlinks on the page", function() {
         const bookFlights = new BookFlights
      bookFlights.validateHyperlinks()
      
    })
  })