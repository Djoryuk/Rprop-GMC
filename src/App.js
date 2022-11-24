
import Profile from './public/profile';
import IMG from "./Asset/photo.jpg";

function App({handleName}) {
  return (
    <>
    <Profile 
      fullName="Abdeldjallil boudekhana " 
      bio="Hey ! i am abdel djallil im learning Full sztack web developpment " 
      profession="FullStack Web Developper" 
      onMouseOver={handleName}
    >
      {IMG}
    </Profile>
  </>
  );
}

export default App;
