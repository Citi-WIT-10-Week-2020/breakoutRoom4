import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-links',
  templateUrl: './video-links.component.html',
  styleUrls: ['./video-links.component.scss']
})
export class VideoLinksComponent implements OnInit {

  @Input() videoName: string;
  @Input() videosrc: string;

  constructor() { }

  ngOnInit(): void {

    this.buttonFunction();

  }

  buttonFunction () {
    //var startHandler = (<HTMLInputElement>document.getElementById('m')).value;
    var colors = [];
    var counter1 = 0;
    var counter2 = 0;

    colors.push("#E1D8F1");
    colors.push("#CCB8F1");
    colors.push("#F0F0F0");

    var startHandler = function (state) { console.log(state); }
   
 
    var stopHandler = function (state) { console.log(state); }
    var resetHandler = function (state) { console.log(state); }
    
    let StopWatch = function (selector) {
      var states = ['Not Started', 'In progress', 'Finished']
      
      var handlers = [startHandler, stopHandler, resetHandler]
      var currentState = 0;
      var element = document.querySelector(selector);
      
      var clickHandler = function () {
        // Execute 'currentState', pass anything you want to handlers
        handlers[currentState](states[currentState])
          
          
        // Update currentState after, means 'move to next state'
        if (currentState < (states.length - 1)) {
          currentState++;
        } else {
         currentState = 0;
        }
            
        element.innerHTML = states[currentState];
      }
      return {
        init: function () {
          // Initial work
          element.addEventListener('click', clickHandler);
        },
        remove: function () {
          // Cleanup
          element.removeEventListener('click', clickHandler)
        }
      }
    }
    function switchColors() {
      //var changes = document.getElementsByClassName("change");
      
      Array.prototype.entries.call(this.states, function (state) {
          state.style.backgroundColor = colors[counter1];
      });
  
      counter1 += 1;
      if (counter1 > colors.length - 1) {
          counter1 = 0;
      }
      
    
  }
  window.addEventListener("load", function () {
    document.getElementById("stopwatch").addEventListener("click", switchColors, false);
}, false);

    StopWatch('#stopwatch').init();
  }




}
