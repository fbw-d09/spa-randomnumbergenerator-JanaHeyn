# Random Numbers
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

* Create a `RandomList` component (`src/RandomList.js`) that shows a button, and a list of random numbers. 
- When you click the button, add another random number to the list. 
- Store the array of numbers with `useState`. 
- The initial state should be an empty array.
 Test it:
 
        numbers.push(Math.random());
        setNumbers(numbers);
        
       
 
`Note` :  This won't work, because pushing onto an array doesn't replace the original array,
and React won't re-render unless the state value looks new.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### RandomList Component

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Component is defined in `src/RandomList.js` as default export |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Component renders without errors |

### Numbers

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Component has a button |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Number is added when button is clicked |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-RandomNumberGenerator)


[//]: # (autograding info end)