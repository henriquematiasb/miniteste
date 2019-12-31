## SOLID Principles used

* Single Responsibility - to isolate the styling responsibility added to the components. In addition to the separation of redux responsibilities for better editing and organization in future editions.
* Interface Segregation - to isolate the responsibility of the App, give it a dynamic year, which is the information that concerns the footer and the principle only to him.

## Note: The scores have been separated into specific branchs in the following order:
### 1 - feat / score-one
### 2 - feat / score-two
### 3 - feat / score-three
### 4 - feat / extra-score

## Score 1:

### Solve all problems in the project so that it reaches this state:

### Goals:

* Year to be obtained dynamically
* There should be a check if the props passed to the components are valid.
* There should be no warning related to unused variables.

## Score 2:

Use states (storeState) to store the variables identified in components, set a timer that runs before component assembly (useEffect) and after 5 seconds displays your name in the phrase “Congratulations… you have finished your test”

## Score 3:

Connect the application to Redux and store the candidate's name in a state, use the 20 second timer to display your name in the phrase “Congratulations… you have finished your test”, develop the whole process using actions and selectors.

### Extra Score:

Design the application using concepts from SOLID Principles, comment on the concepts used.