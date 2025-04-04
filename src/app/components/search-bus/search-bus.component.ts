import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


interface Cities {
  state: string
  city: string
}

@Component({
  selector: 'app-search-bus',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './search-bus.component.html',
  styleUrl: './search-bus.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBusComponent {

  pickUpPoint: string = "Pick Up Point";
  dropDownPoint: string = "Drop Down Point";
  selectedDate: string = '';

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


}
