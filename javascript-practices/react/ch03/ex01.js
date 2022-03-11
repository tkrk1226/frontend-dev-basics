let schools = [
	{ name : "Yorktown"},
	{ name : "Stratford"},
	{ name : "Washington & Lee"},
	{ name : "Wakefiled"},
];

const editName = (oldName, name, arr) => 
	arr.map(item => {
		if(item.name === oldName){
            console.log(item.name);
            console.log(oldName);
            console.log(name);
            return {
                
				...item,
				name
			};
		} else {
			return item;
		}
});

let updatedSchools = editName("Stratford", "HB Woodlawn", schools);
console.log(updatedSchools);