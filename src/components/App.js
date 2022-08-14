import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Tiles from "./Tiles";
import Sort from "./Sort";
import hogs from "../porkers_data"


function App() {

	const [sortedHogs, sortAllHogs] = useState(hogs)

	function selectingGrease (event){
		let selectGrease = event.target.value
		const hogFilter = hogs.filter((hog) =>{
			console.log(selectGrease,hog.greased)
			if (selectGrease === "All"){
				return true
			} else if (hog.greased.toString() === selectGrease){
				return true
			}else{
				return false
			}
		})

		sortAllHogs(hogFilter)
	}
	console.log (sortedHogs)

	function settingSort(event){
		let sort = event.target.value

		if (sort === "sort by"){
			sortAllHogs(sortedHogs)
		}else if(sort === "weight"){
			
			let hogweightCopy = [...sortedHogs]
			const weightSort = hogweightCopy.sort(function (a,b){
				return a.weight - b.weight
			})
			sortAllHogs (weightSort)
		}else if(sort === "Name"){
			
			let hogsNameCopy = [...sortedHogs]
			const nameSort = hogsNameCopy.sort(function (a,b){
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()

			if(nameA > nameB){
				return 1
			}
			return 0
		})
			sortAllHogs (nameSort)
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter selectingGrease={selectingGrease}/>
			<Sort settingSort={settingSort}/>
			<Tiles sortedHogs={sortedHogs}/>
		</div>
	);
}

export default App;