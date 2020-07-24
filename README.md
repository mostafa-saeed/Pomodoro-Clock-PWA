# Pomodoro-Clock-PWA
[Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) is a time-management technique developed by Francesco Cirillo[1] in the late 1980s. This project helps you to apply this technique.

<!-- Live URL -->
### Live version of the application is deployed on Netlify [here](https://pomodoro-clock-pwa.netlify.app/)

<!-- How To Use -->
### How to use:
* Click on the up/down buttons to adjust the Session/Break times (By default they are set to 25 minutes session time and 5 minutes break time).
* Click on the Play button below to start the timer. You can also pause the timer at any time using the Pause button.
* You can reset the timer to its default state using the Reset button. This will stop the timer and reset the Session/Break time to their default value.
* This application was created as a [Progressive Web Application](https://web.dev/progressive-web-apps) (PWA) meaning it can work offline and can be installed on almost all operating systems.

<!-- Techs Used -->
### Technology used in this project:
* The core of the project is in Vue.js.
* The timer uses JavaScript `setInterval()` function to count down.
* Progress is stored in the browser using the `localStorage` API. So even if you reload the page, The timer will just continue from the last point.

