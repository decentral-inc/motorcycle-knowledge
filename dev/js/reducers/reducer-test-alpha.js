/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
import {shuffle} from 'underscore';

export default function (state=null,action) {
    switch (action.type) {
      case 'SHUFFLE_QUESTIONS':
        var res =  shuffle(action.payload);
        return res
        break; 
      default:
        var data = getData()
        return data.map((item,i) => ({
          content: item.q,
          id: 100+i,
          section: 1,
          answers: item.a.map((ans,j) => ({
            isSolution: (j === item.sol),
            content: ans,
            id: (i+1) * (j+1) * 100*i + j
          }))

          
        }))
    }
    
    

}
function getData(){
  return [{
      "q": "Vehicle/motorcycle collisions are most common: ",
      "a": [
        "At intersections",
        "On freeways",
        "At night"
      ],
      "sol": 0
    },{
      "q": "Before changing lanes to the left",
      "a": [
        "Check your left mirror and look to the left",
        "Check your right mirror and turn your head to the left",
        "Use your horn and speed up"
      ],
      "sol": 0
    },{
      "q": "Which of the following statements is correct?",
      "a": [
        "Press left, lean right, go right",
        "Press left, lean left, go right",
        "Press left, lean left, go left"
      ],
      "sol": 2
    },{
      "q":"To create more space in the situation pictured below (merging incoming car from right blocking your lane, car in other lane to your left and ahead a few feet), you should: ",
      "a": [
        "Pass the car on your left",
        "Ride in the right portion of the lane",
        "Adjust your speed and stay in the center of the lane"
      ],
      "sol": 2
    },{
      "q": "In slow, tight turns: ",
      "a": [
        "Lean the motorcycle only and keep your body straight",
        "Lean your body more than the motorcycle",
        "Do not lean"
      ],
      "sol": 0
    },{
      "q": "While in a turn, it is best to",
      "a": [
        "Maintain a steady speed or gradually accelerate",
        "Slow down",
        "Accelerate and look straight ahead"
      ],
      "sol": 0
    },{
      "q": "To make good judgments in traffic, you need to first: ",
      "a": [
        "Know how to stop quickly",
        "Be able to swerve",
        "Search ahead"
      ],
      "sol": 2
    },{
      "q": "Your motorcycle has two brakes. Use both brakes",
      "a": [
        "Only for normal stops",
        "Only for emergency stops",
        "Every time you slow or stop"
      ]
    },{
      "q": "When riding with a passenger, you should: ",
      "a": [
        "Start slowing sooner",
        "Use only your front brake to slow",
        "Start in the center portion of the lane"
      ],
      "sol": 0
    },{
      "q": "When swerving, it is important to: ",
      "a": [
        "Always brake before swerving",
        "Swerve in the direction of the hazard",
        "Separate braking from swerving"
      ]
    },{
      "q": "In the picture below, (4 way intersection top down view, you are in south stop right lane, other driver is at north stop left lane) the car driver is preparing to enter the intersection. To be seen and maintain a space cushion, you should:",
      "a": [
        "Slow down and move away from the vehicle after entering the intersection",
        "Slow down and move closer to the curb so the driver can see you better",
        "Speed up and get through the intersection quickly and then move left"
      ],
      "sol": 0
    },{
      "q": "In the picture below, riders A (top right rider, car on your right, car behind, car behind A) B (you) and C are riding as a group, To pass rider B should:",
      "a": [
        "Complete the pass in front of rider A",
        "Return to the lane and ride next to rider A",
        "Return to the right portion of the lane behind rider A"
      ],
      "sol": 2
    },{
      "q": "Following closely to a vehicle in front of you: ",
      "a": [
        "Protects you in heavy traffic",
        "Helps you see hazards in the road",
        "Is a factor in collisions caused by motorcyclists"
      ],
      "sol": 2
    },{
      "q": "Alcohol enters the bloodstream and quickly reaches the brain. Which of the following is affected first",
      "a": [
        "Speech",
        "Balance",
        "Judgment"
      ],
      "sol": 2
    },{
      "q": "Most collisions involve riders who",
      "a": [
        "Overbrake the rear tire",
        "Underbrake the rear tire",
        "Were expereienced riders"
      ],
      "sol": 0
    },{
      "q": "Make a special point to use mirrors when: ",
      "a": [
        "Riding through an intersection",
        "Following a vehicle",
        "Slowing or stopping"
      ],
      "sol": 2
    },{
      "q": "You plan to make a right turn after stopping at an intersection. Usually, it is best to turn from which position of the lane?",
      "a": [
        "The left portion",
        "The center portion",
        "The right portion"
      ],
      "sol": 1
    },{
      "q": "Not turning off a turn signal",
      "a": [
        "Encourages other drivers to pull into your path",
        "Keeps other drivers from seeing your brake light",
        "Reduces your chances of a collision because other drivers stay clear"
      ],
      "sol": 0
    },{
      "q": "When the front tire goes flat while riding: ",
      "a": [
        "Apply the rear brake and steer to the edge of the road",
        "Steer to the right and apply both brakes",
        "You will not be able to control the motorcycle"
      ],
      "sol": 0
    },{
      "q": "When you turn: ",
      "a": [
        "Keep your head and your eyes straight to maintain balance",
        "Look through the turn to where you want to go",
        "Always lean as the same angel as the motorcycle"
      ],
      "sol": 1
    },{
      "q": "Riding in the center portion of the lane",
      "a": [
        "Should be avoided if possible",
        "Keeps other drivers from seeing you",
        "Keeps others from sharing your lane"
      ],
      "sol": 2
    },{
      "q": "Wearing a helmet will",
      "a": [
        "Increase your chances of a head injury",
        "Reduce your chances of a head injury",
        "Neither reduce nor increase your chances of a head injury"
      ],
      "sol": 1
    },{
      "q": "To reduce speed before turning: ",
      "a": [
        "Close the throttle and apply the brakes",
        "Pull in the clutch and use both brakes",
        "Apply the rear brake only"
      ],
      "sol": 0
    },{
      "q": "To operate the throttle",
      "a": [
        "Start with your wrist flat",
        "Sit forward with your arms straight",
        "Twist it forward and down for more power"
      ],
      "sol": 0
    },{
      "q": "When carrying loads",
      "a": [
        "Keep the load low and as far forward as possible",
        "Keep the load to the rear of the motorcycle",
        "Fasten the load against the frame on the back of the seat"
      ],
      "sol": 0
    }]
}