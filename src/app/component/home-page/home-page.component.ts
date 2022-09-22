import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  public personDetails: Person[] = [];
  constructor(private httpService: HttpService, private router: Router,private dataService: DataService) { }

  ngOnInit(): void {
  }
  

  remove(personId: number): void {
    console.log(personId);
    alert('Delete contact with id:' + personId + '?')
    this.httpService.deleteContact(personId).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }

  update(person: Person): void {
    alert('Update contact with id:' + person.personId + '?')
    this.dataService.changePerson(person);
    this.router.navigateByUrl('/add-person/' + person.personId);
    this.httpService.updateContact(person.personId, person).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }
}
