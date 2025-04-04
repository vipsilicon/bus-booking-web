import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { BusCardComponent, BusCardData } from '../bus-card/bus-card.component';

interface Cities {
  state: string
  city: string
}

interface BusTypes {
  type: string
  icon: string
}

interface BusTime {
  time: string
  icon: string
}

@Component({
  selector: 'app-bus-search',
  standalone: true,
  imports: [ FormsModule, CommonModule, MatSliderModule, BusCardComponent ],
  templateUrl: './bus-search.component.html',
  styleUrl: './bus-search.component.scss'
})
export class BusSearchComponent {

  pickUpPoint: string = "Pick Up Point";
  dropDownPoint: string = "Drop Down Point";
  selectedDate: string = '';
  clearStatus: boolean = true;
  sliderMax = 10000;
  sliderMin = 0;
  min: number = 0;
  max:number = 10000;
  busFare = 0;

  cities: Cities[] = [
    { state: "Maharashtra", city: "Mumbai" },
    { state: "Maharashtra",  city: "Pune" },
    { state: "Delhi", city: "New Delhi" },
    { state: "Karnataka", city: "Bengaluru" },
    { state: "Tamil Nadu", city: "Chennai" },
    { state: "West Bengal", city: "Kolkata" },
    { state: "Telangana", city: "Hyderabad" },
    { state: "Gujarat", city: "Ahmedabad" },
    { state: "Gujarat", city: "Surat" },
    { state: "Rajasthan", city: "Jaipur" },
    { state: "Uttar Pradesh", city: "Lucknow" },
    { state: "Uttar Pradesh", city: "Kanpur" },
    { state: "Uttar Pradesh", city: "Agra" },
    { state: "Uttar Pradesh", city: "Varanasi" },
    { state: "Punjab", city: "Amritsar" },
    { state: "Haryana", city: "Faridabad" },
    { state: "Andhra Pradesh", city: "Visakhapatnam" },
    { state: "Andhra Pradesh", city: "Vijayawada" },
    { state: "Bihar", city: "Patna" },
    { state: "Punjab", city: "Ludhiana" },
    { state: "Punjab", city: "Amritsar" },
    { state: "Haryana", city: "Faridabad" },
    { state: "Haryana", city: "Gurgaon" },
    { state: "Chhattisgarh", city: "Raipur" },
    { state: "Chhattisgarh", city: "Bhilai" },
    { state: "Uttarakhand", city: "Dehradun" },
    { state: "Kerala", city: "Thiruvananthapuram" },
    { state: "Assam", city: "Guwahati" },
    { state: "Assam", city: "Dibrugarh" },
    { state: "Himachal Pradesh", city: "Shimla" },
    { state: "Goa", city: "Panaji" },
    { state: "Goa", city: "Vasco Da Gama" },
    { state: "Goa", city: "Margao" }
  ]

  busTypes: BusTypes[] = [
    { type: "AC", icon: "bi bi-thermometer-snow"},
    { type: "Sleeper", icon: "bi bi-thermometer-snow"},
    { type: "Seater", icon: "bi bi-thermometer-snow"},
    { type: "Non AC", icon: "bi bi-thermometer-snow"},

  ]

  busTimes: BusTime[] = [
    { time: "Before 10 AM", icon: "" },
    { time: "10 AM - 5PM", icon: "" },
    { time: "5 PM - 11 PM", icon: "" },
    { time: "After 11 PM", icon: "" }
  ]

  busCardsData: BusCardData[] = [
    {
      busName: "Smith Travels",
      busType: "Bharat Benz AC Sleeper (2 + 1)",
      pickUpPoint: "Mumbai",
      pickUpPointTime: "19: 30",
      dropDownPoint: "Pune",
      dropDownPointTime: "23: 00",
      duration: "3 hrs 30 mins",
      startAt: "1000",
      availableSeats: 18,
      rating: "4.5",
      ratingCount: 1203,
      priceRates: [],
      coachTypes: [
        { 
          type: 'Upper', 
          style: 'white',
          seatRow: [
            [
              { seatType: 'Sleeper', bookingStatus: 'Vacant', seatNo: 'U3', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Vacant', seatNo: 'U6', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U9', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U12', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U15', col: "2", row: "1", price: 1200 }
            ],
            [
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U2', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U5', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U8', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U11', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U14', col: "2", row: "1", price: 1200 }    
            ],
            [
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 }
            ],
            [
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U1', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U4', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U7', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U10', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U13', col: "2", row: "1", price: 1200 }
            ]
          ] },
        { 
          type: 'Lower', 
          style: 'black', 
          seatRow: [
            [
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L3', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L6', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L9', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L12', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L15', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L18', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L21', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L24', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L27', col: "1", row: "1", price: 1000 }
            ],
            [
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L2', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L5', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L8', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L11', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L14', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L17', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L20', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L23', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L26', col: "1", row: "1", price: 1000 }  
            ],
            [
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 }
            ],
            [
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L1', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L4', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L7', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L10', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L13', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L16', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L19', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L22', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L25', col: "1", row: "1", price: 1000 }
            ]
          ]
         }
      ]
    },
    {
      busName: "VRL Travels",
      busType: "Bharat Benz AC Sleeper (2 + 1)",
      pickUpPoint: "Pune",
      pickUpPointTime: "19: 30",
      dropDownPoint: "Kolhapur",
      dropDownPointTime: "23: 00",
      duration: "3 hrs 30 mins",
      startAt: "700",
      availableSeats: 10,
      rating: "3.8",
      ratingCount: 403,
      priceRates: [],
      coachTypes: [
        { 
          type: 'Upper', 
          style: 'white',
          seatRow: [
            [
              { seatType: 'Sleeper', bookingStatus: 'Vacant', seatNo: 'U3', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Vacant', seatNo: 'U6', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U9', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U12', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U15', col: "2", row: "1", price: 1200 }
            ],
            [
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U2', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U5', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U8', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U11', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U14', col: "2", row: "1", price: 1200 }    
            ],
            [
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 }
            ],
            [
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U1', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U4', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U7', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U10', col: "2", row: "1", price: 1200 },
              { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U13', col: "2", row: "1", price: 1200 }
            ]
          ] },
        { 
          type: 'Lower', 
          style: 'black', 
          seatRow: [
            [
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L3', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L6', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L9', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L12', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L15', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L18', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L21', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L24', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L27', col: "1", row: "1", price: 1000 }
            ],
            [
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L2', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L5', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L8', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L11', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L14', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L17', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L20', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L23', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L26', col: "1", row: "1", price: 1000 }  
            ],
            [
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
              { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 }
            ],
            [
              { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L1', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L4', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L7', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L10', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L13', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L16', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L19', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L22', col: "1", row: "1", price: 1000 },
              { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L25', col: "1", row: "1", price: 1000 }
            ]
          ]
         }
      ]
    }
  ]
  
  filterPickUpPoint(){
    return this.cities.filter((city) => {
      return city.city !== this.dropDownPoint;
    })
  }

  filterDropDownPoint(){
    return this.cities.filter((city) => {
      return city.city!== this.pickUpPoint;
    })
  }

  swapCities():void{
    if(!(this.pickUpPoint == "Pick Up Point" && this.dropDownPoint == "Drop Down Point")){
      const temp = this.pickUpPoint;
      this.pickUpPoint = this.dropDownPoint;
      this.dropDownPoint = temp;
    }
  }

  formatLabel(value: number): string {
    this.busFare = value;
    return `${value}`;
  }
}
