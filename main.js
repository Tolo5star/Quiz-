var container=document.getElementById("fs");
var bcontainer=document.getElementById("bb");

var ques=0;
var ques1=0;
var fbans=0;
var bans=0;
var sans=0;

var arr1=Array.apply(null, Array(10)).map(Number.prototype.valueOf,0);
var arr2=Array.apply(null, Array(10)).map(Number.prototype.valueOf,0);

var btn=document.getElementById("fb");
var bbbtn=document.getElementById("bbb");
var ana=document.getElementById("sss");
console.log(ques);

btn.addEventListener("click",function(){

	var req= new XMLHttpRequest();
	req.open('GET','football.json');
	req.onload=function () {
		var	data=JSON.parse(req.responseText);
		renderHTML(data);	
	};

	req.send();
});

bbbtn.addEventListener("click",function(){

	var req= new XMLHttpRequest();
	req.open('GET','basketball.json');
	req.onload=function () {
		var	data=JSON.parse(req.responseText);
		BrenderHTML(data);	
	};

	req.send();
});

function renderHTML(data){
	var s="";

	while(container.firstChild) {
    	container.removeChild(container.firstChild);
		}		

	if(ques<data.length){
		btn.innerHTML="Next Question";
		s="<span class='hint'>"+data[ques].question+"</span>";
		
		s+='<input type="radio" name="fques" value=" id="1" required>'+data[ques].answers[0]+'<br>';
		s+='<input type="radio" name="fques" value=" id="2">'+data[ques].answers[1]+'<br>';
		s+='<input type="radio" name="fques"  id="3">'+data[ques].answers[2]+'<br>';
		s+='<input type="radio" name="fques"  id="4">'+data[ques].answers[3]+'<br>';
		s+='<button id="fans">Submit Answer</button>';

		container.insertAdjacentHTML('beforeend',s);
		
		var abtn=document.getElementById("fans");
		abtn.addEventListener("click",function(){
			var answers = document.getElementsByName('fques');
			var choice;
			for(var i = 0; i < answers.length; i++){
			    if(answers[i].checked){
			        choice = i;
			        console.log(choice);
			        break;
			    }
			}
			if(data[ques].correctAnswer==data[ques].answers[choice]){
				arr1[ques]=1;
				fbans++;
				console.log(choice+" "+fbans+" "+data[ques].correctAnswer+" "+ques);
			}
		ques+=1;
		});


	}

}

function BrenderHTML(data){
	var s="";

	while(bcontainer.firstChild) {
    	bcontainer.removeChild(bcontainer.firstChild);
		}		
	
	if(ques1<data.length){
		bbbtn.innerHTML="Next Question";
		s="<span class='hint'>"+data[ques1].question+"</span>";
		s+='<input type="radio" name="bques" value="q">'+data[ques1].answers[0]+'<br>';
		s+='<input type="radio" name="bques" value="q">'+data[ques1].answers[1]+'<br>';
		s+='<input type="radio" name="bques" value="q">'+data[ques1].answers[2]+'<br>';
		s+='<input type="radio" name="bques" value="q">'+data[ques1].answers[3]+'<br>';
		s+='<button id="bans">Submit Answer</button>';
		bcontainer.insertAdjacentHTML('beforeend',s);
		var abbtn=document.getElementById("bans");
		abbtn.addEventListener("click",function(){
			var answers = document.getElementsByName('bques');
			var choice;
			for(var i = 0; i < answers.length; i++){
			    if(answers[i].checked){
			        choice = i;
			        console.log(choice);
			        break;
			    }
			}
			if(data[ques1].correctAnswer==data[ques1].answers[choice]){
				arr2[ques1]=1;
				bans++;
				console.log(choice+" "+bans+" "+data[ques1].correctAnswer+" "+ques1);
			}

		ques1+=1;
		});
	}

}

ana.addEventListener("click",function () {

var chart1 = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: arr1[0] },
			{ y: arr1[1] },
			{ y: arr1[2] },
			{ y: arr1[3] },
			{ y: arr1[4] },
			{ y: arr1[5] },
			{ y: arr1[6] },
			{ y: arr1[7] },
			{ y: arr1[8] },
			{ y: arr1[9] }
		]
	}]
});
var chart2 = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: arr2[0] },
			{ y: arr2[1] },
			{ y: arr2[2] },
			{ y: arr2[3] },
			{ y: arr2[4] },
			{ y: arr2[5] },
			{ y: arr2[6] },
			{ y: arr2[7] },
			{ y: arr2[8] },
			{ y: arr2[9] }
		]
	}]
});
chart1.render();
chart2.render();

});