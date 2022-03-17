import { useEffect, useState } from 'react';

function NewApplicantForm() {
     const [applicantName, setApplicantName] = useState('');
     const [applicantNumber, setApplicantNumber] = useState('');

     const changeName = (event: React.FormEvent<HTMLInputElement>) => {
          setApplicantName(event.currentTarget.value)
     }

     const changeNumber = (event: React.FormEvent<HTMLInputElement>) => {
          setApplicantNumber(event.currentTarget.value);
     }
     const validatePhone = (phoneNumber: string) => {
          if (phoneNumber.length != 10) {
               alert("Client number invalid");
          } else {
               alert("Client: " + applicantName + " Number: " + applicantNumber)
          }
     }
     const handleSubmit = () => {
          validatePhone(applicantNumber);
          const path : string = '/api/newUser?name=' + applicantName + '&number=' + applicantNumber;
          (async () => {
               await fetch(path);
          })();
         
     }

     const path : string = '/api/newUser?name=' + applicantName + '&';
    /* useEffect(() => {
          (async () => {
            await fetch('/api/newUser?name=johndoe&number=12345');
          })();
        }, [])
*/

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
                    </label>
               </div>
               <div>
                    <input type="button" value="submit" onClick={handleSubmit}/>
               </div>
          </form>
     );

}
export default NewApplicantForm;