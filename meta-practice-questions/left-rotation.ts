function rotLeft(a: number[], d: number): number[] {
	for (let i = 0; i < d; i++) {
		const moved = a.shift()
		a.push(moved)
	}

	return a
}

// a=[1,2,3,4,5]
// d=2
// i=2
// a=[3,4,5,1,2]
// ans=[3,4,5,1,2]
//
//
// d=4
// a=[5,1,2,3,4]
// i=3
// shift and save value
// push the saved value to the array
// [] 
//
