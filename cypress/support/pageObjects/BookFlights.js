class BookFlights{
    selectRoundTrip()
    {
      return  cy.get('#rdt').click()
    }
    
    clickOnBookNow()
    {
        return cy.get('#bookflights > .booking-control-container > .tab-content > .in > .umb-home-flight-info-div-check > .col-sm-7 > .row > .col-md-3 > .umb-flo-rigt > .submit').click({force: true})
    }

    TypeOrigin(origin)
    {
    return cy.get('.in > .ng-pristine > .umb-table-one-way > tbody > .umb-home-table-tr-1 > .umb-home-table-tr-td-first > .datalist-arrow > .umb-home-flight-input-1').type(origin)
    }

    selectOrigin(origin)
     {
        return  cy.get('.ui-menu-item').each(($departcity, index, $list) => {
           const city = $departcity.text()
           if(city.includes(origin))
           {
            $departcity.click()
           }
       }) 
       }

      selectDestination(Destination)
      {
       return cy.get('#ui-id-1').find('.ui-menu-item').each(($arrivalcity, index, $list) => {
          const city=$arrivalcity.text()
         if(city.includes(Destination)) 
           {
             $arrivalcity.click()
          }
        })
      }
            
      pickDepartDate(dDay,dMonth,dYear)
      {
        let monthdiff =0;  // Variable to store month difference

        var today = new Date(); // Variable to store today's date
        let cmonth = parseInt(today.getMonth()); // Variable to store current month
        if(cmonth > dMonth){   // if departure date is in next year than add 11 to the departure month
          monthdiff=parseInt(dMonth)+11-cmonth
        }
        else {
          monthdiff=dMonth-cMonth 
        }
        //cy.log(today)
        //cy.log("Current Month is"+cmonth)
        //cy.log("Request month is"+dMonth)
        //cy.log("Difference is"+monthdiff)
        while(monthdiff >0){
          cy.get('[class="ui-datepicker-next ui-corner-all"]').click()
          monthdiff=monthdiff-1;
        } 

        let DepartDate = 'td[data-month="'+dMonth+'"][data-year="'+dYear+'"][data-handler="selectDay"]'
        return cy.get(DepartDate).each(($dayData,index,$list) => {
          const departdate=$dayData.text()
          if (departdate ==dDay)
          {
            $dayData.click();
          }
        })
      }
   pickreturndate(rDay,rMonth,rYear,dMonth)
   {
    let monthdiff = 0;
    //var today = new Date();
    //let cmonth = parseInt(today.getMonth()); 
    
    if(rMonth > dMonth){   
      monthdiff=rMonth-dMonth
    }

    else {
      monthdiff=rMonth+11-dMonth 
    }
    while(monthdiff >0){
      cy.get('[class="ui-datepicker-next ui-corner-all"]').click()
      monthdiff=monthdiff-1;
    } 

    //cy.log(monthdiff)
    //cy.log(cmonth)
    //cy.log(today)

    let ReturnDate = 'td[data-month="'+rMonth+'"][data-year="'+rYear+'"][data-handler="selectDay"]'
    return cy.get(ReturnDate).each(($returnDate,index,$list) => {
      const returndate=$returnDate.text()
      if (returndate ==rDay)
      {
        $returnDate.click();

      }
      //cy.log(ReturnDate)
    })
   }
   selectAdultPassengers(Adults)
   {
    return cy.get('.ng-pristine > .umb-table-one-way > tbody > .umb-home-table-tr-1 > .passengers > .datalist-arrow > #websites').select(Adults).should('have.value','2')
   }
   selectChildPassengers(Children)
   {
     return cy.get('.in > .ng-pristine > .umb-table-one-way > tbody > .umb-home-table-tr-1 > .children > .datalist-arrow > .umb-home-flight-input-3').select(Children).should('have.value','1')
   }
   selectInfantPassenger(Infant)
   {
    return cy.get('.in > .ng-pristine > .umb-table-one-way > tbody > .umb-home-table-tr-1 > .children > .datalist-arrow > .umb-home-flight-input-3').select(Infant).should('have.value','1')
   }
   checkLabelStudent()
   {
     return cy.get('#bookflights > .booking-control-container > .tab-content > .in > .umb-home-flight-info-div-check > .col-sm-5 > .row > :nth-child(1) > .checkboxFive > .umb-check-student').click()
      
    }
    checkLabelStudentsIsNotVisible()
    {
      return cy.get("[class='students student-block-checkbox']").should('have.attr','disabled', 'disabled')
     }
    
    clickOnLabelArmedForces()
    {
     return cy.get('#bookflights > .booking-control-container > .tab-content > .in > .umb-home-flight-info-div-check > .col-sm-5 > .row > .armedforceblock > .checkboxFive > .umb-check-armed').click().should('be.not.disabled')
    }
    checkLabelArmedForcesIsNotVisible()
    {
     return cy.get("[class='tab-pane in active umb-tab-con-back-2 round-trip1']:visible").find("input[id='Armed']:visible").should('not.be.visible')
    }
   clickOnLabelSeniorCitizen()
   {
    return cy.get("#bookflights > .booking-control-container > .tab-content > .in > .umb-home-flight-info-div-check > .col-sm-5 > .row > :nth-child(3) > .checkboxFive > .umb-check-citizen").click().should('be.not.disabled')
   }
   checkIdPromoCode()
   {
    return cy.get("#bookflights > .booking-control-container > .tab-content > .in > .umb-home-flight-info-div-check > .col-sm-7 > .row > .col-sm-2 > #PromoCode").type(1234567)
   }
   checkAlertMessageOfPromoCode()
   {
   cy.get("[class='alert-heading']").should('have.text','Error(s)')
   cy.get("[class='error-msg alert alert-error']").should('contain','promotion')
   
   }
   /*selectCurrency()
   {
    //cy.get("[class='form-control currencytext currency']:visible").select("USD")
   cy.get("[class='form-control currencytext currency']:visible").each(($currency, index, $list) => {
      const currency = $currency.text()
     cy.log(currency)
     if (currency == "USD" )
      {
        $currency.select();

      }
     
     
    })
   }*/
   validateHyperlinks()
   {
    //cy.visit('https://www.goair.in/');
          const allLinks = {
          "hyperlink" : "$link.text()",
          "linkhref" : "$link.attr('href')",
          }
          cy.get('a').each(($link,index,$list) =>{
              allLinks.hyperlink = $link.text()
              allLinks.linkhref = $link.attr('href')
              cy.log(allLinks.hyperlink)
              cy.log(allLinks.linkhref)
              if ( allLinks.linkhref== 'https://goair.matrix.in/' || 
                  allLinks.linkhref== 'undefined' || 
                  allLinks.linkhref == null || 
                  allLinks.linkhref == 'https://in.linkedin.com/company/goair' || 
                  allLinks.linkhref == 'https://www.goair.in/.round-trip1' ){
                  cy.log('Invalid link') 
                  }
                  else {
                  cy.request({
                  url: allLinks.linkhref,
                   followRedirect: false // turn off following redirects
                  })
                  .then((resp) => {
                  // redirect status code is 302
                   expect(resp.status).to.be.within(200,400)
                   
                     
                  })
                 
                  }
             
           })
      }
        
      
      
      
      
      
      
      
      
      
      
   
  }
export default BookFlights