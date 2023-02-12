let limitPerUserRega1 = 0; 
let limitPerUserRegy = 0; 
let limitPerUserRega2 = 0; 

let firstName ="Hassan";
let lastName ="Ahmad";
let age = 33;
let RegDateAndTime  = new Date();
let registration_Nb = 1;
const dateOfRace = "16-02-2023";
let timeOfRace = ["9:30 AM", "11:00 AM", "12:30 PM"];

for (let i = 0 ; i < 30; i++ ){
  (age >= 18 && registration_Nb <= 30 && registration_Nb <= 20 ) ? 
   (() => {
    limitPerUserRega1++;
    console.log(`Hey ${firstName} ${lastName}  you are the participant Nb: ${registration_Nb} in the adult Category group "1", your race time will start at the Date of ${dateOfRace} and ${timeOfRace[0]}`);
  })() :
  (age < 18 && registration_Nb <= 30 && registration_Nb <= 10) ?
   (() => {
    limitPerUserRegy++;
    console.log(`Hey ${firstName} ${lastName}  you are the participant Nb: ${registration_Nb} in the youth Category group "Y", your race time will start at the Date of ${dateOfRace} and ${timeOfRace[2]}`);
  })() :
  (age >= 18  && registration_Nb <= 30 && registration_Nb <= 20 ) ?
   (() => {
    limitPerUserRega2++;
    console.log(`Hey ${firstName} ${lastName}  you are the participant Nb: ${registration_Nb} in the adult Category group "2", your race time will start at the Date of ${dateOfRace} and ${timeOfRace[1]}`);
  })() :
  console.log('We got the full number of registration for the race participants, dont be late next time');
  registration_Nb++;
}
