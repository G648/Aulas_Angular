import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

 @Input() public title:string = "Bem Vindo";

  ngOnInit() : void{

  }

  ngOnChanges() : void{
    console.log("valor alterado com sucesso!");
    
  }
}
