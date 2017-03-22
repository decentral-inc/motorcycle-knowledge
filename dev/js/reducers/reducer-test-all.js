/*
	This file will combine all sections of the test. Map the basic json
	into one more tailored for react, i.e. give it ids
*/
import alpha from './reducer-test-alpha'
import beta from './reducer-test-beta'

export default function () {
	var data = alpha.map(item => {
			item.section = 1
			return item;
		})
	return data.map((item,i) => ({
	  content: item.q,
	  section: item.section,
	  id: 100+i,
	  answers: item.a.map((ans,j) => ({
	    isSolution: (j === item.sol),
	    content: ans,
	    id: (i+1) * (j+1) * 100*i + j
	  }))
	}))	
}
