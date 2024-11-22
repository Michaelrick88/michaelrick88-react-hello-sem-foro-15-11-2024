import React,{useState} from "react";
import Luces from "./Luces";


const Home = () => {

	let semáforoStyle = {
		display:"flex",
		flexDirection:"column",
		alignItems:"center",
		margin:"100px auto",
		backgroundColor:"black",
		width:"150px"
	};
 

	const colors = ["red","yellow","green"]

const [activate,setActivate]=useState(null);

const nextLight=()=>{
	const current=colors.indexOf(activate);
	const netxIndex=(current+1)%colors.length;
	setActivate(colors[netxIndex]);
};
/* const clickLight=(color)=>{setActivate(color)}; */

	return (
		<div className="d-flex flex-column align-items-center">
		<div className="" style={semáforoStyle}>
			<Luces
			color="red"
			isActive={activate === "red"}
			onClick={()=>clickLight("red")}
			/>
			<Luces
			color="yellow"
			isActive={activate === "yellow"}
			onClick={()=>clickLight("yellow")}
			/>
			<Luces
			color="green"
			isActive={activate === "green"}
			onClick={()=>clickLight("green")}
			/>
		</div>

		<button type="button" className="btn btn-info" onClick={nextLight}>Netx Color</button>
		</div>
	);
};

export default Home;