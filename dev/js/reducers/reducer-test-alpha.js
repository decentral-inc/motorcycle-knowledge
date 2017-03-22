/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    var data =  [{
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
    }]
    return data.map((item,i) => ({
      content: item.q,
      id: 100+i,
      answers: item.a.map((ans,j) => ({
        isSolution: (j === item.sol),
        content: ans,
        id: (i+1) * (j+1) * 100*i + j
      }))

      
    }))

}
