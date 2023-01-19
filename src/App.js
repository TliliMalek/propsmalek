import "./App.css";
import Profile from "./profile/Profile";
import ProfilePic from "./profile/ProfilePic";

const handleName= (name)=>{
  return alert(name);
}

function App() {
  return (
    <div
      style={{
        height: "100px",
        backgroundImage: "url(https://i.pinimg.com/564x/89/a9/a6/89a9a6299e5de46aad8371627c3a0473.jpg)",
        backgroundSize: "cover",
        marginTop: "-300px",
        padding: "500px",
        display: "flex",
      }}
    >
      <Profile
        handleName={handleName}
        fullName="Malek Tlili"
        About="Hello my name is Malek I'm 25 years old. I have application license in computer sciences Network, a professional major in Expert Cyber Security and I'm studying now a major in computer systems engineering. I'm a dedicated woman and I love what I do. I like to develop new skills in my free time and always eager to learn new stuff."
        profession= "Exoert Cyber sécurity"
      >
        <ProfilePic imagePath = {'malek.jpg'}/>
      </Profile>
      
      
    </div>
  );
}

export default App;
