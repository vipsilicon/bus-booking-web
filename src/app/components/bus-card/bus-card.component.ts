import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface BusCardData {
  busName: string
  busType: string
  pickUpPoint: string
  pickUpPointTime: string
  dropDownPoint: string
  dropDownPointTime: string
  duration: string
  startAt: string
  availableSeats: number
  rating: string
  ratingCount: number
  priceRates: number[]
  coachTypes: CoachTypes[]
}

interface SelectedSeats {
  seatNo: string
  price: number;
}

interface CoachTypes {
  type: string
  style: string
  seatRow: SeatRows[][] 
}

interface SeatRows {
  seatType: string
  bookingStatus: string
  seatNo: string
  col: string
  row: string
  price: number
}

@Component({
  selector: 'app-bus-card',
  standalone: true,
  imports: [ CommonModule, MatIconModule ],
  templateUrl: './bus-card.component.html',
  styleUrl: './bus-card.component.scss'
})
export class BusCardComponent implements OnInit{

  @Input() data: BusCardData = {
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
    ratingCount: 1201,
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
  };

  hideSeat: boolean = false;
  selectedSeats: SelectedSeats[] = [];
  totalPrice: number = 0;
  
  // coachTypes: CoachTypes[] = [
  //   { 
  //     type: 'Upper', 
  //     style: 'white',
  //     seatRow: [
  //       [
  //         { seatType: 'Sleeper', bookingStatus: 'Vacant', seatNo: 'U3', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Vacant', seatNo: 'U6', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U9', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U12', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U15', col: "2", row: "1", price: 1200 }
  //       ],
  //       [
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U2', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U5', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U8', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U11', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U14', col: "2", row: "1", price: 1200 }    
  //       ],
  //       [
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "2", row: "1", price: 0 }
  //       ],
  //       [
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U1', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U4', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U7', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U10', col: "2", row: "1", price: 1200 },
  //         { seatType: 'Sleeper', bookingStatus: 'Booked', seatNo: 'U13', col: "2", row: "1", price: 1200 }
  //       ]
  //     ] },
  //   { 
  //     type: 'Lower', 
  //     style: 'black', 
  //     seatRow: [
  //       [
  //         { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L3', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L6', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L9', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L12', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L15', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L18', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L21', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L24', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L27', col: "1", row: "1", price: 1000 }
  //       ],
  //       [
  //         { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L2', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L5', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L8', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L11', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L14', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L17', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L20', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L23', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L26', col: "1", row: "1", price: 1000 }  
  //       ],
  //       [
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 },
  //         { seatType: 'Space', bookingStatus: 'Space', seatNo: '0', col: "1", row: "1", price: 0 }
  //       ],
  //       [
  //         { seatType: 'Seating', bookingStatus: 'Vacant', seatNo: 'L1', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L4', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L7', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L10', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L13', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L16', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L19', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L22', col: "1", row: "1", price: 1000 },
  //         { seatType: 'Seating', bookingStatus: 'Booked', seatNo: 'L25', col: "1", row: "1", price: 1000 }
  //       ]
  //     ]
  //    }
  // ];

  ngOnInit(): void {
      this.priceList();
  }

  hideSeatStatus(status:boolean){
    this.hideSeat = status;
  }

  selectedValue: string | number = 'All';

  selectRadio(value: number | string) {
    this.selectedValue = value;
    console.log('Selected:', value);
  }

  toggleSeatBooking(seatRow: SeatRows){
    this.data.coachTypes = this.data.coachTypes.map((coachType) => {      
      coachType.seatRow.forEach((row) => {
        row.forEach((seat) => {
          if(seat.seatNo == seatRow.seatNo){
            if(seat.bookingStatus == 'Booking'){
              seat.bookingStatus = 'Vacant';
              this.selectedSeats = this.selectedSeats.filter((seat: SelectedSeats) => {
                return seat.seatNo != seatRow.seatNo;
              })
              this.totalPrice -= seatRow.price;
            } else if(seat.bookingStatus == 'Vacant'){
              if(this.selectedSeats.length < 5){
                seat.bookingStatus = 'Booking';
                this.selectedSeats.push({ seatNo: seat.seatNo, price: seat.price});
                this.totalPrice += seatRow.price;
              } else {
                alert(`You can't book more than 5 seats at a time.`)
              }
            }
          }
        })
      });

      return coachType;
    })
  }

  priceList():void{
    this.data.coachTypes.forEach((coachType: CoachTypes) => {
      coachType.seatRow.forEach((row) => {
        row.forEach((rowData) => {
          if(!this.data.priceRates.includes(rowData.price) && rowData.price !== 0){
            this.data.priceRates.push(rowData.price);
          }
        })
      })
    })
  }

}
