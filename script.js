let div=document.createElement("div");
document.body.append(div);
div.setAttribute("class","container");
let form=document.createElement("form");
div.append(form);
form.setAttribute("id","dataentered");


let firstdata=document.createElement("label");
form.append(firstdata);
firstdata.innerHTML="<b>First Name</b>";
let firstname=document.createElement("input");
form.append(firstname);
firstname.setAttribute("id","firstname");

let Lastdata=document.createElement("label");
form.append(Lastdata);
Lastdata.innerHTML="<b>Last Name</b>";
let Lastname=document.createElement("input");
form.append(Lastname);
Lastname.setAttribute("id","Lastname");

let adddata=document.createElement("label");
form.append(adddata);
adddata.innerHTML="<b>Address</b>";
let permanantaddress=document.createElement("input");
form.append(permanantaddress);
permanantaddress.setAttribute("id","Address");

let pin=document.createElement("label");
form.append(pin);
pin.innerHTML="<b>Pincode</b>";
let Pincode=document.createElement("input");
form.append(Pincode);
Pincode.setAttribute("id","Pincode");



let genderselect=document.createElement("p");
form.append(genderselect);
genderselect.innerHTML="<b>Select Gender</b>";
genderselect.setAttribute("class","genderselect")
var br=document.createElement("br");
genderselect.append(br);

let male=document.createElement("label");
genderselect.append(male);
male.innerText="Male";
let gdrmale=document.createElement("input");
genderselect.append(gdrmale);
gdrmale.setAttribute("type","radio");
gdrmale.setAttribute("name","GENDER");
gdrmale.setAttribute("value","MALE");
gdrmale.setAttribute("class","form-check-input");
gdrmale.setAttribute("class","opted");

let female=document.createElement("label");
genderselect.append(female);
female.innerText="Female";
let gdrfemale=document.createElement("input");
genderselect.append(gdrfemale);
gdrfemale.setAttribute("type","radio");
gdrfemale.setAttribute("name","GENDER");
gdrfemale.setAttribute("value","Female");
gdrfemale.setAttribute("class","form-check-input");
gdrfemale.setAttribute("class","opted");

let other=document.createElement("label");
genderselect.append(other);
other.innerText="others";
let gdrother=document.createElement("input");
genderselect.append(gdrother);
gdrother.setAttribute("type","radio");
gdrother.setAttribute("name","GENDER");
gdrother.setAttribute("value","Others");
gdrother.setAttribute("class","form-check-input");
gdrother.setAttribute("class","opted");
var br=document.createElement("br");
genderselect.append(br);



let food=document.createElement("p");
form.append(food);
food.innerHTML="<b>Choose any 2 Food</b>";
let favfood=document.createElement("p");
form.append(favfood);

function foodselection(labeltext,idname,classname,typevalue){
    var foodlabel=document.createElement("label");
    favfood.append(foodlabel);
    foodlabel.innerText=labeltext;
    var foodlabel=document.createElement("input");
    favfood.append(foodlabel);
    foodlabel.setAttribute("type","checkbox");
    foodlabel.setAttribute("id",idname);
    foodlabel.setAttribute("class",classname);
    foodlabel.setAttribute("value",typevalue);
    return foodlabel;
}
let choice1=foodselection("Sadhya","food","foodfav","Sadhya");
let choice2=foodselection("Chapathi","food","foodfav","Chapathi");
let choice3=foodselection("Masaladosha","food","foodfav","Masaladosha");
let choice4=foodselection("Chicken Biryani","food","foodfav","Chicken Biryani");
let choice5=foodselection("Alfam","food","foodfav","Alfam");




fetch("https://restcountries.com/v2/all").then((data)=> data.json()).then((response)=>{
  countries(response);
}).catch((error)=> console.log(error));

let country=document.getElementById("Countryselect");
form.append(country);
function countries(response){
       for ( let i=0;i<response.length;i++){
        let countries=document.createElement("option");
        country.append(countries);
        countries.innerHTML=`${response[i].name}`;
        countries.setAttribute("value",response[i].name);
       }
                     }


                     

let statename=document.createElement("p");
form.append(statename);
let state=document.createElement("label");
statename.append(state);
let stateselect = document.getElementById("Stateselect");
statename.append(stateselect);

function states(statename){
    var statechoice=document.createElement("option");
    stateselect.append(statechoice);
    statechoice.innerText=statename;
}

let AndhraPradesh = states("AndhraPradesh"); 
let ArunachalPradesh	= states("ArunachalPradesh");
let Assam	= states("Assam");
let Bihar	= states("Bihar");
let Chhattisgarh	= states("Chhattisgarh");
let Goa	= states("Goa");
let Gujarat	= states("Gujarat");
let HimachalPradesh	= states("HimachalPradesh");
let JammuandKashmir	= states("JammuandKashmir");
let Jharkhand	= states("Jharkhand");
let Karnataka	= states("Karnataka");
let Kerala	= states("Kerala");
let MadhyaPradesh	= states("MadhyaPradesh");
let Maharashtra	= states("Maharashtra");
let Manipur	= states("Manipur");
let Meghalaya	= states("Meghalaya");
let Mizoram	= states("Mizoram");
let Nagaland	= states("Nagaland");
let Odisha	= states("Odisha");
let Punjab	= states("Punjab");
let Rajasthan	= states("Rajasthan");
let Sikkim	= states("Sikkim","Sikkim");
let TamilNadu	= states("TamilNadu");
let Telangana	= states("Telangana");
let Tripura	= states("Tripura");	
let UttarPradesh= states("UttarPradesh");
let Uttarakhand	= states("Uttarakhand");
let WestBengal= states("WestBengal");



let submitbtn = document.createElement("button");
form.append(submitbtn);
submitbtn.innerText="SUBMIT";
submitbtn.setAttribute("class","btn btn-primary");
submitbtn.setAttribute("type","submit")
submitbtn.setAttribute("onclick","validation(event)");




let div1=document.createElement("div");
document.body.append(div1);
div1.setAttribute("class","container");
 let table= document.createElement("table");
 div1.append(table);
table.setAttribute("class","table")
 let head = document.createElement("thead");
 table.append(head);
 let head1 =document.createElement("th");
 head.append(head1);
 head1.innerText="FIRST NAME";
 let head2=document.createElement("th");
 head.append(head2);
 head2.innerText="LAST NAME";
 let head3 =document.createElement("th");
 head.append(head3);
 head3.innerText="ADDRESS";
 let head4 =document.createElement("th");
 head.append(head4);
 head4.innerText="PINCODE";
 let head5 =document.createElement("th");
 head.append(head5);
 head5.innerText="GENDER";
 let head6 =document.createElement("th");
 head.append(head6);
 head6.innerText="FOVOURITE FOOD";
 let head7 =document.createElement("th");
 head.append(head7);
 head7.innerText="COUNTRY";
 let head8 =document.createElement("th");
 head.append(head8);
 head8.innerText="STATE";
 let tablebody=document.createElement("tbody");
 table.append(tablebody);


 function newrow(FirstName,LastName,Address,Pincode,gender,foodchoice,countryname,statename){
    let row = document.createElement("tr");
    tablebody.append(row);
    let data1 = document.createElement("td");
    row.append(data1);
    data1.innerHTML=FirstName;
    let data2 = document.createElement("td");
    row.append(data2);
    data2.innerHTML=LastName;
    let data3 = document.createElement("td");
    row.append(data3);
    data3.innerHTML=Address;
    let data4 = document.createElement("td");
    row.append(data4);
    data4.innerHTML=Pincode;
    let data5 = document.createElement("td");
    row.append(data5);
    data5.innerHTML=gender;
    let data6 = document.createElement("td");
    row.append(data6);
    data6.innerHTML=foodchoice;
    let data7 = document.createElement("td");
    row.append(data7);
    data7.innerHTML=countryname;
    let data8 = document.createElement("td");
    row.append(data8);
    data8.innerHTML=statename;
 }

function validation(event){
    event.preventDefault();
    if((document.getElementById("firstname").value) == "" ) {
        alert("Please Enter FirstName");
        document.getElementById("firstname").value.focus();
        return false;
     }
     if((document.getElementById("Lastname").value) == "" ) {
        alert("Please Enter LastName");
        document.getElementById("Lastname").value.focus();
        return false;
     }
     if((document.getElementById("Address").value) == "" ) {
        alert("Please Enter Address");
        document.getElementById("Address").value.focus();
        return false;
     }
     if((document.getElementById("Pincode").value) == "" ) {
        alert("Please Enter Pincode");
        document.getElementById("Pincode").value.focus();
        return false; 
     }
     if((document.getElementById("Pincode").value) == "" ) {
        alert("Please Enter Pincode");
        document.getElementById("Pincode").value.focus();
        return false; 
     }
     let foodfav = document.querySelectorAll(".foodfav:checked");
     let foodfavoflist = [];
     foodfav.forEach((type) =>{foodfavoflist = [...foodfavoflist,type.value]
        if( foodfavoflist.length !=2){
        alert("Choose 2 Favourite FOOD");
        return false
     }
    
    });
     if ( ( form.GENDER[0].checked == false ) && ( form.GENDER[1].checked == false ) && (form.GENDER[2].checked == false ) ) {
     alert ( "Please choose your Gender" ); 
     document.getElementsByName("GENDER").value.focus();
     return false;
     }
     if(document.getElementById("Countryselect").value==""){
     alert ( "Please select Your Country!");
     document.getElementById("Countryselect").value.focus();
     return false;
     }
     if(document.getElementById("Stateselect").value==""){
    alert ( "Please select Your State!");
    document.getElementById("Stateselect").value.focus();
    return false;
    }
   
    let FirstName=document.getElementById("firstname").value;
    let LastName=(document.getElementById("Lastname").value);
    let Address=(document.getElementById("Address").value);
    let Pincode=(document.getElementById("Pincode").value);
    let gender=document.querySelector(".opted:checked").value;
    let foodchoice = [];
    foodfav.forEach((type) => (foodchoice = [...foodchoice, type.value]));


    let countryname=document.getElementById("Countryselect").value;
    let statename=document.getElementById("Stateselect").value;
    newrow(FirstName,LastName,Address,Pincode,gender,foodchoice,countryname,statename);
    document.getElementById("dataentered").reset();
}