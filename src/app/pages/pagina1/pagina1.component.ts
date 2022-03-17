import { AfterContentChecked, AfterContentInit, 
         AfterViewChecked, 
         AfterViewInit, 
         Component, 
         DoCheck, 
         OnChanges, 
         OnDestroy, 
         OnInit,     
         SimpleChanges} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
       implements OnInit, 
                  AfterContentChecked,
                  AfterContentInit,
                  AfterViewInit,
                  AfterViewChecked,
                  DoCheck,
                  OnChanges,
                  OnDestroy
{
  nombre   : string = "Quetzalli"
  segundero: number = 0
  tiemerSuscription! :Subscription

  constructor() {
    console.log('conructor');
    
   }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    this.tiemerSuscription.unsubscribe()
    console.warn('Timer Loimpiado');
    
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    this.tiemerSuscription = interval(1000).subscribe(conter => {
      this.segundero = conter
      console.log(this.segundero);
    })
    
    
  }

  guardar(){
    console.log('lsls');
    
  }
}
