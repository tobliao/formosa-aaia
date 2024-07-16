const scrollingImage = document.getElementById('scrolling-image');
const containerHome = document.querySelector('.container-home');

const containerTop = containerHome.getBoundingClientRect().top;

const startingScrollPosition = offsets.start;
const stoppingPoint = offsets.end;

const amplitudeX = 400;
const frequencyX = 0.009;

let scrollTop = startingScrollPosition;

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY;

    const scrollDifference = scrollTop;

    let horizontalMovement;

    if (scrollTop <= stoppingPoint) {
        horizontalMovement = amplitudeX * Math.sin(frequencyX * scrollTop);
    } else {
        horizontalMovement = amplitudeX * Math.sin(frequencyX * stoppingPoint);
    }
    
    const verticalMovement = scrollDifference <= stoppingPoint ? scrollDifference : stoppingPoint

    scrollingImage.style.transform = `translate(${horizontalMovement}px, ${verticalMovement}px)`;
});

window.addEventListener('load', () => {
    scrollTop = window.scrollY-offsets.start+(window.innerHeight/2);
    const verticalMovement = scrollTop <= stoppingPoint ? scrollTop : stoppingPoint;
    scrollingImage.style.transform = `translate(0px, ${verticalMovement}px)`;
});

      bendsY = [500, 900, 1300, 1700, 2100, 2300];

      var scrollY = 0;

      var path = document.getElementById("path");
      var car = document.getElementById("c");
      let prevAngle = 0;
      let curAngle = 0;
      let bend = -1;
      let boxes = document.querySelectorAll('.box');
      const numBends = boxes.length;
      let prevY = 0;
      let curY = 0;
      let goingDown = true;

  document.addEventListener("scroll", function() {
  scrollY = window.pageYOffset - offsets.start + (window.innerHeight/2);
  console.log(scrollY)
  positionBac();
});

      function hideBoxes() {
        boxes.forEach(box => {
          box.style.opacity = 0;
        });
      }
      hideBoxes();

      function positionBac() {
        var maxScrollY = offsets.end-offsets.start;
        var pathLen = path.getTotalLength();
        var dist = pathLen * scrollY / maxScrollY;
        var pos = path.getPointAtLength(dist);
        var angle = calculateAngle(path, pathLen, dist, pos);


        function findBend() {
          for (let i = 0; i < numBends; i++) {
            if (pos.y <= bendsY[i]) {
              bend = i;
              break;
            }
          }
        }

        function showText() {
          findBend();
          hideBoxes();
          const el = document.querySelector('.box.bend' + bend);
          el.style.opacity = 1;
          el.style.top = (document.querySelector('image').getBoundingClientRect().y + scrollY) + 'px';
        }

        car.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ") rotate(" + (rad2deg(angle) + 90) + ")");

        prevAngle = curAngle;
        curAngle = rad2deg(angle) + 90;
        prevY = curY;
        curY = scrollY;
        if (curY <= .1) {
          bend = -1;
          goingDown = true;
        }
        if (curY > prevY) { //going down
          if (bend < (numBends - 1)) {
            if (atABend()) {
              if (!goingDown) {
                goingDown = true;
              } else if (bend < (numBends - 1)) {
                showText();
              }
            }
          }
        } else { //going up
          if (bend > -1) {
            if (atABend()) {
              if (goingDown) {
                goingDown = false;
              } else if (bend > 0) {
                showText();
              }
            }
          }
        }

      }

      function atABend() {
        return (prevAngle < 180 && curAngle >= 180) || (prevAngle > 180 && curAngle <= 180);
      }

      function calculateAngle(path, pathLen, dist, pos) {
        if (dist + 1 <= pathLen) {
          var posAhead = path.getPointAtLength(dist + 1);
          return Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
        } else {
          var posBehind = path.getPointAtLength(dist - 1);
          return Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
        }
      }

      function rad2deg(rad) {
        return 180 * rad / Math.PI;
      }

      positionBac();
      var acc = document.getElementsByClassName("greydropdown");
 var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");

          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              

          } else {
              panel.style.maxHeight = '100%';
          }
         
      });
  }


/* for button animation*/
const weeks = document.querySelectorAll('.Notebook-week');

weeks.forEach((week) => {
  const weekPlasmid = week.querySelector('.weekplasmidimg');
  const weekText = week.querySelector('.week');
  
  weekText.classList.remove('show');
  
  week.addEventListener('click', () => {
    weekText.classList.toggle('show');
  });

  weekPlasmid.addEventListener('click', () => {
    weekPlasmid.classList.toggle('rotate');

  });
});
