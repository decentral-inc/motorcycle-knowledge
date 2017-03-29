/*
	This file will combine all sections of the test. Map the basic json
	into one more tailored for react, i.e. give it ids
*/
import {shuffle} from 'underscore';

export default function (state = null,action) {
	var part_one = alpha().map(a => { a.section = 1;return a})
	var part_two = beta().map(b => {b.section = 2; return b})
	var all = part_one.concat(part_two);
	switch (action.type){
		case 'SHUFFLE_QUESTIONS':
			return   shuffle(action.payload);
      break;
		default:
      return all.map((item,i) => ({
        content: item.q,
        id: 100+i,
        answers: item.a.map((ans,j) => ({
          isSolution: (j === item.sol),
          content: ans,
          id: (i+1) * (j+1) * 100*i + j
        }))
      }))
	}
	
	
}
function alpha(){
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
function beta(){
	return [{
	  "q": "Rider in most dangerous position is? (picture shows 3 riders, same picture as passing picture. Rider A is in front of a car. B is behind A and between 2 girls on left and ride flanks. C is behind right car and is in back.)",
	  "a": [
	    "Rider A",
	    "Rider B",
	    "Rider C"
	  ],
	  "sol": 0
	}, {
	  "q": "Wearing a helmet can reduce chance of fatal head injury in:",
	  "a": [
	    "Low speed crashes only",
	    "High speed crashes only",
	    "Any crash, regardless of speed"
	  ],
	  "sol": 2
	}, {
	  "q": "When you are being followed too closely, it is usually better to:",
	  "a": [
	    "Move closer to the vehicle ahead",
	    "Drop back from the vehicle ahead",
	    "Pass the vehicle ahead"
	  ],
	  "sol": 1
	}, {
	  "q": "To discourage other people to ride in your lane, it is usually best to ride:",
	  "a": [
	    "In the left portion of your lane",
	    "In the center portion of your lane",
	    "Next to another vehicle"
	  ],
	  "sol": 1
	},{
	  "q": "In this picture you are passing parked cars. The greatest danger to you would be: ",
	  "a": [
	    "A car door opening",
	    "A car pulling out",
	    "A person walking in between parked cars"
	  ],
	  "sol": 1
	},{
	  "q": "When riding where sand and gravel have collected on paved roads, you should: ",
	  "a" : [
	    "Avoid sudden changes in speed or direction",
	    "Only use the rear brake to slow down",
	    "Pull the clutch"
	  ],
	  "sol": 0
	},{
	  "q": "Riders in a staggered formation will be passing a car. After the lead rider passes, he/she should return to the ___ of the lane",
	  "a": [
	    "Left Portion",
	    "Center Portion",
	    "Right portion"
	  ],
	  "sol": 0
	},{
	  "q": "When you carry a passenger",
	  "a": [
	    "It will take you longer to accelerate and brake",
	    "You will have more balance",
	    "You will have less change of skidding"
	  ],
	  "sol": 0
	},{
	  "q": "When you ride over a pothole it's usually best to: ",
	  "a": [
	    "Keep a normal seating position",
	    "Lean forward as much as possible",
	    "Look straight ahead and rise slightly off the seat"
	  ],
	  "sol": 2
	},{
	  "q": "Before changing lanes to the left as pictured below (You are in right lane of 2 lane northbound road, car to your left slightly behind you)",
	  "a": [
	    "Check your left mirror and turn your head to the left",
	    "Check your right imrror and turn your head to the left",
	    "Use your horn and speed up"
	  ],
	  "sol": 0
	},{
	  "q": "When the front tire goes flat: ",
	  "a": [
	    "The steering wheel will feel heavy",
	    "The back of the motorcycle will jerk from side to side",
	    "You will lose power on the brakes"
	  ],
	  "sol": 0
	},{
	  "q": "Alcohol first affects your ",
	  "a": [
	    "Balance",
	    "Vision",
	    "Judgment"
	  ],
	  "sol": 2
	},{
	  "q": "At intersections, the most common cause of motorcycle/vehicle collisions is: ",
	  "a": [
	    "Drivers entering a riders right of way",
	    "Drivers not yielding to oncoming traffic",
	    "Drivers tailgating others"
	  ],
	  "sol": 0
	},{
	  "q": "To make a normal stop, use: ",
	  "a": [
	    "The rear brake only",
	    "The rear brake first",
	    "Both brakes and downshift"
	  ],
	  "sol": 2
	},{
	  "q": "In the picture below (4 way intersection, motorcycle from north stop facing southbound, car stationed at south stop facing northbound. Each vehicle is on their respective right hand side of the road) the driver is signaling for a left turn. You should: ",
	  "a": [
	    "Hold your speed and center lane position",
	    "Slow down and move away from the vehicle",
	    "Increase your speed and stay in the center"
	  ],
	  "sol": 1
	},{
    "q": "When you ride at night: ",
    "a": [
      "Wear reflective clothing",
      "Always ride in the center lane position",
      "Follow the vehicle ahead more closely for safety"
    ],
    "sol": 0
  },{
    "q": "While riding an unfamiliar motorcycle",
    "a": [
      "Stay in the right portion of the lane",
      "Allow extra room for stopping",
      "Do not shift above third gear"
    ],
    "sol": 1
  },{
    "q": "To make good judgments in traffic, you need to be able to:",
    "a": [
      "Be able to swerve",
      "Know how to stop quickly",
      "Search ahead"
    ],
    "sol": 2
  },{
    "q": "For higher speed turns you should: ",
    "a": [
      "Lean more than you would at low speeds",
      "Lean less than you would at low speeds",
      "Lean the same ammount as you would at low speeds"
    ],
    "sol": 0
  },{
    "q": "In the picture below (you are merging onto a freeway with a car to your right in the merge lane) the light to make yourself more noticeable is the: ",
    "a": [
      "Brake light",
      "Tail light",
      "Turn signal"
    ],
    "sol": 2    
  },{
    "q": "The driver pictured (at 4 way traffic light stop, car in north left turn lane is making a U-turn. You are in the middle lane in the south intersection going northbound and you are about to go straight) turning left is not stopping, your best chance to avoid a collision is to: ",
    "a": [
      "Maintain your position and brake hard",
      "Slow and swerve to the left",
      "Reduce your speed and move away from the vehicle"
    ],
    "sol": 2
  },{
    "q": "When adjusting the mirrors to carry a passenger, the passenger should: ",
    "a": [
      "Sit on the seat with you",
      "Stand behind the motorcycle",
      "Adjust the mirror while you sit on the motorcycle"
    ],
    "sol": 0
  },{
    "q": "If you lock the front tire while stopping",
    "a": [
      "Release the rear brake",
      "Keep the front brake lock until stopped",
      "Release and re-apply the fronts brake"
    ],
    "sol": 2
  },{
    "q": "To avoid causing a rear end collision when following another vehicle",
    "a": [
      "Ride in the right wheel track",
      "Stay at least 2 seconds behind",
      "Tap your breaks lightly"
    ],
    "sol": 1
  },{
    "q": "When you turn, you should",
    "a": [
      "Look through the turn",
      "Watch the center line",
      "Look straight ahead"
    ],
    "sol": 0
  }]
}