import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'meu-primeiro-projeto';

  ngOnInit(): void {
      setTimeout(() => {
        console.log(1);
      }, 5000);
  }
}
