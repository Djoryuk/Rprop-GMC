
import Profile from './public/profile';
import IMG from "./Asset/photo.jpg";

function App({handleName}) {
  return (
    <>
    {/* The profile component gets data (fullName, bio, profession) as props */}
    <Profile 
      fullName="Abdeldjallil boudekhana " 
      bio="Hey ! i am abdel djallil im learning Full sztack web developpment " 
      profession="FullStack Web Developper" 

      /*gets the function handleName functions as a prop that sends an alert message with the name of the profile user. */
      onMouseOver={handleName}
    >
      {/*gets image as children props*/}
      {IMG}
    </Profile>
  </>
  );
}

export default App;
