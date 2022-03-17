import { useEffect, useState } from 'react';
import styles from '../styles/globals.css';

function NewApplicantForm() {
     const [applicantName, setApplicantName] = useState('');
     const [applicantNumber, setApplicantNumber] = useState('');
     const [invalidAlert, setInvalidAlert] = useState('');

     const changeName = (event: React.FormEvent<HTMLInputElement>) => {
          setApplicantName(event.currentTarget.value)
     }

     const changeNumber = (event: React.FormEvent<HTMLInputElement>) => {
          setApplicantNumber(event.currentTarget.value);
     }
     const validatePhone = (phoneNumber: string) => {
          if (phoneNumber.length != 10) {
               setInvalidAlert("Invalid Number");
               return false;
          } else {
               setInvalidAlert('');
               return true;
          }
     }
     const handleSubmit = () => {
          if (validatePhone(applicantNumber)) {
               const path : string = '/api/newUser?name=' + applicantName + '&number=' + applicantNumber;
               (async () => {
                    const response = await fetch(path, 
                    {method: 'POST'});
                    console.log(response.status);
                    if (response.status != 200) {
                         alert("Bad Submission");
                    }
               })();
               }
     }

     const path : string = '/api/newUser?name=' + applicantName + '&';

     return (
          <form>
               <div>
                    <label>
                         Name: 
                         <input type="text" value={applicantName} onChange={changeName} required/>
                    </label>
               </div>
               <div>
                    <label>
                         Phone Number: 
                         <input type="text" value={applicantNumber} onChange={changeNumber}required/>
                         <div className="alert">{invalidAlert}</div>
                    </label>
               </div>
               <div>
                    <input type="button" value="submit" onClick={handleSubmit}/>
               </div>
          </form>
     );

}
export default NewApplicantForm;