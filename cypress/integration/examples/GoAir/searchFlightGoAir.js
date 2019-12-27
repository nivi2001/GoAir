import BookFlights from '../../../support/pageObjects/BookFlights'
import SearchFlight from '../../../support/pageObjects/SearchFlight'
describe("Validate Go Air Search Page",function(){
    before(function() {
    cy.visit(Cypress.env('url'));
    cy.fixture('searchFlightData').as("SearchFlightTestData");
    const bookFlights = new BookFlights
    const searchFlight = new SearchFlight
    cy.get("@SearchFlightTestData").then((SearchFlightTestData) => {
        bookFlights.selectRoundTrip()
        bookFlights.TypeOrigin(SearchFlightTestData.VS01.fromcity)
        bookFlights.selectOrigin(SearchFlightTestData.VS01.fromcity)
        cy.wait(1000)
        bookFlights.selectDestination(SearchFlightTestData.VS01.tocity)
        bookFlights.pickDepartDate(SearchFlightTestData.VS01.departDay,SearchFlightTestData.VS01.departMonth,SearchFlightTestData.VS01.departYear)
        cy.wait(1000)
        bookFlights.pickreturndate(SearchFlightTestData.VS01.returnDay,SearchFlightTestData.VS01.returnMonth,SearchFlightTestData.VS01.returnYear)
        bookFlights.selectAdultPassengers(SearchFlightTestData.VS01.adultPassengers)
        bookFlights.clickOnBookNow()
        cy.wait(10000)
        searchFlight.selectOutboundFlight(SearchFlightTestData.VS01)
        searchFlight.selectInboundFlight(SearchFlightTestData.VS01)
    })
})
   /* it('VS-01 Validate Outbound flight city details',function(){
        
        cy.fixture('searchFlightData').as("SearchFlightTestData")
        cy.get("@SearchFlightTestData").then((searchFlightTestData) => { 
        const searchFlight = new SearchFlight
        searchFlight.checkOutboundFlightCityDetail(searchFlightTestData.VS01)
        
        
    })
    })
    it('VS-02 Validate Outbound flight date',function(){
        
        cy.fixture('searchFlightData').as("SearchFlightTestData")
        cy.get("@SearchFlightTestData").then((searchFlightTestData) => { 
        const searchFlight = new SearchFlight
        searchFlight.CheckOutboundFlightDate(searchFlightTestData.VS01)
        
    })
    })
    it('VS-03 Validate Outbound flight number',function(){
        
        cy.fixture('searchFlightData').as("SearchFlightTestData")
        cy.get("@SearchFlightTestData").then((searchFlightTestData) => { 
        const searchFlight = new SearchFlight
        searchFlight.checkOutboundFlightNumber(searchFlightTestData.VS01)
        
    })
    })
    it('VS-04 Validate Inbound City details',function(){
        
        cy.fixture('searchFlightData').as("SearchFlightTestData")
        cy.get("@SearchFlightTestData").then((searchFlightTestData) => { 
        const searchFlight = new SearchFlight
        searchFlight.checkOutboundFlightNumber(searchFlightTestData.VS01)
        
    })
    })
    it('VS-05 Validate Inbound flight date',function(){
        
        cy.fixture('searchFlightData').as("SearchFlightTestData")
        cy.get("@SearchFlightTestData").then((searchFlightTestData) => { 
        const searchFlight = new SearchFlight
        searchFlight.CheckInboundFlightDate(searchFlightTestData.VS01)
        
    })
    })
    it('VS-06 Validate Inbound flight number',function(){
        
        cy.fixture('searchFlightData').as("SearchFlightTestData")
        cy.get("@SearchFlightTestData").then((searchFlightTestData) => { 
        const searchFlight = new SearchFlight
        searchFlight.checkInboundFlightNumber(searchFlightTestData.VS01)
        
    })
    })*/
    it('VS-07 Validate flight baggage details',function(){
        
        cy.fixture('searchFlightData').as("SearchFlightTestData")
        cy.get("@SearchFlightTestData").then((searchFlightTestData) => { 
        const searchFlight = new SearchFlight
        searchFlight.validateBaggageDetails()
        searchFlight.checkPriceIsDisplayed()
        
    })
    })
    

        

        
 })  
