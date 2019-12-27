class SearchFlight{
    selectOutboundFlight(testData)
    {
     cy.get('[id="js-avail-table0"]').find('tr td:nth-child(1)').each(($outbound,index,$list) => {
        const outflight=$outbound.text()
        //cy.log(outflight)
        if (outflight.includes(testData.outboundFlight))
        {
          //cy.log(outflight)
          if(testData.outboundTicketGroup == "GoSmart") {
          cy.get('[id="js-avail-table0"]').find('tr td:nth-child(1)').eq(index).next().next().next().click()
          }
          else if(testData.outboundTicketGroup == "GoFlexi"){
            cy.get('[id="js-avail-table0"]').find('tr td:nth-child(1)').eq(index).next().next().next().next().click()
          }
          else {
            cy.get('[id="js-avail-table0"]').find('tr td:nth-child(1)').eq(index).next().next().next().next().next().click()
          }
        }
     })
    }
    selectInboundFlight(testData)
    {
      return cy.get('[id="js-avail-table1"]').find('tr td:nth-child(1)').each(($inbound,index,$list) =>  {
        const inflight=$inbound.text()
        if(inflight.includes(testData.inboundFlight))
        {
          if(testData.inboundTicketGroup == "GoSmart") {
          cy.get('[id="js-avail-table1"]').find('tr td:nth-child(1)').eq(index).next().next().next().click()
          }
          else if(testData.inboundTicketGroup == "GoFlexi"){
            cy.get('[id="js-avail-table1"]').find('tr td:nth-child(1)').eq(index).next().next().next().next().click()
          }
          else {
            cy.get('[id="js-avail-table1"]').find('tr td:nth-child(1)').eq(index).next().next().next().next().next().click()
          }
  
        }
  
       })
    }

    checkOutboundFlightCityDetail(testData){
      cy.get('[class="price-display-body"]').find('.price-display-segment-details').as('flightSummaryLocator')
      cy.get('@flightSummaryLocator').then(($flightDetailsText) =>{
      const outboundFlightSummary=$flightDetailsText.first().text().trim()
      cy.log(outboundFlightSummary)
      expect(testData.fromCityCode).to.include(outboundFlightSummary.substr(0,3))
      expect(testData.toCityCode).to.include(outboundFlightSummary.substr(6,3))
      })
    }

    checkIntboundFlightCityDetail(testData){
      cy.get('[class="price-display-body"]').find('.price-display-segment-details').as('flightSummaryLocator')
      cy.get('@flightSummaryLocator').then(($flightDetailsText) =>{
      const inboundFlightSummary=$flightDetailsText.last().text().trim()
      cy.log(inboundFlightSummary)
      expect(testData.toCityCode).to.include(inboundFlightSummary.substr(0,3))
      expect(testData.fromCityCode).to.include(inboundFlightSummary.substr(6,3))
      })
    }

    CheckOutboundFlightDate(testData){
      cy.get('[class="price-display-body"]').find('.price-display-segment-details').as('flightSummaryLocator')
      cy.get('@flightSummaryLocator').find('.pull-right').then(($summaryDepartDate) => {
      const departDate = $summaryDepartDate.first().text().trim()
      var month;
          switch(parseInt(testData.departMonth)){
            case 0:
              month = "Jan";
              break;
              case 1:
              month = "Feb";
              break;
              case 2:
              month = "Mar";
              break;
              case 3:
              month = "Apr";
              break;
              case 4:
              month = "May";
              break;
              case 5:
              month = "Jun";
              break;
              case 6:
              month = "Jul";
              break;
              case 7:
              month = "Aug";
              break;
              case 8:
              month = "Sep";
              break;
              case 9:
              month = "Oct";
              break;
              case 10:
              month = "Nov";
              break;
              case 11:
              month = "Dec";
              break;
          }
          expect(month).to.eq(departDate.substr(3,3))
          expect(testData.departYear.substr(2,2)).to.eq(departDate.substr(7,2))
          cy.log(departDate)
        })
        
    }
    CheckInboundFlightDate(testData){
      cy.get('[class="price-display-body"]').find('.price-display-segment-details').as('flightSummaryLocator')
      cy.get('@flightSummaryLocator').find('.pull-right').then(($summaryReturnDate) => {
      const returnDate = $summaryReturnDate.last().text().trim()
      var month;
          switch(parseInt(testData.returnMonth)){
            case 0:
              month = "Jan";
              break;
              case 1:
              month = "Feb";
              break;
              case 2:
              month = "Mar";
              break;
              case 3:
              month = "Apr";
              break;
              case 4:
              month = "May";
              break;
              case 5:
              month = "Jun";
              break;
              case 6:
              month = "Jul";
              break;
              case 7:
              month = "Aug";
              break;
              case 8:
              month = "Sep";
              break;
              case 9:
              month = "Oct";
              break;
              case 10:
              month = "Nov";
              break;
              case 11:
              month = "Dec";
              break;
          }
          expect(month).to.eq(returnDate.substr(3,3))
          expect(testData.returnYear.substr(2,2)).to.eq(returnDate.substr(7,2))
          cy.log(returnDate)
        })
        
    }
      


    checkOutboundFlightNumber(testData)
        {
          cy.get('[class="price-display-body"]').as('flightSummaryLocator')
          cy.get('@flightSummaryLocator').find('.price-display-segment-details').find('[class="pull-left strong"]').then(($flightNumber)=>{
            const flightNumber = $flightNumber.first().text().trim()
            expect(testData.outboundFlight).to.eq(flightNumber.substr(0,7))
            expect(testData.outboundTicketGroup).to.eq(flightNumber.substr(26,7))
            //flightNumber.replace(/\s/,'')
            cy.log(flightNumber)

          })
        }
        checkInboundFlightNumber(testData)
        {
          cy.get('[class="price-display-body"]').as('flightSummaryLocator')
          cy.get('@flightSummaryLocator').find('.price-display-segment-details').find('[class="pull-left strong"]').then(($flightNumber)=>{
            const flightNumber = $flightNumber.last().text().trim()
            expect(testData.inboundFlight).to.eq(flightNumber.substr(0,7))
            expect(testData.inboundTicketGroup).to.eq(flightNumber.substr(26,7))
            //flightNumber.replace(/\s/,'')
            cy.log(flightNumber)           
          })
        }
        validateBaggageDetails()
        {
             cy.get('[class="pull-left baggage-details-summary-text"]').then(($baggageInfoDetails) =>{
              var outCheckInbaggage = $baggageInfoDetails.eq(0).text()
              var outHandLuggage = $baggageInfoDetails.eq(1).text()
              var inCheckInbaggage = $baggageInfoDetails.eq(2).text()
              var inHandLuggage = $baggageInfoDetails.eq(3).text()
              expect(outCheckInbaggage).to.include('Check-in Baggage: 15 kgs per seat')
              expect(outHandLuggage).to.include('Hand Baggage: 7 kgs per person')
              expect(inCheckInbaggage).to.include('Check-in Baggage: 15 kgs per seat')
              expect(inHandLuggage).to.include('Hand Baggage: 7 kgs per person')
              cy.log(inHandLuggage)
            })
        }
       checkPriceIsDisplayed()
       {
        cy.get('[id="price_itinerary_expand_body"]').find('h5').find('strong').then(($priceSummary)=>{
        var priceSummaryDetails = $priceSummary
        expect($priceSummary).to.have.css('color','rgb(50, 51, 126)')
        cy.log(priceSummaryDetails)
        })
       }
}
export default SearchFlight