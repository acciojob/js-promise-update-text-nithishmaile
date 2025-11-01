//your JS code here. If required.\
const output=document.getElementById("output");

const promise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		output.innerText="Hello, world!"
	},1000)
})
