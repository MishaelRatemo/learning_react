import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import avt1 from './images/avt1.png'
import avt2 from './images/avt2.png'
import avt3 from './images/avt3.jpg'
import avt4 from './images/avt4.jpg'


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Contact
            img={avt1}
            name='Wa Kinani'
            phone='(+254) 721 999 222'
            email='kinaniwa@gmail.com'
        
        />
        <Contact 
            img={avt2}
            name='James Muthoni'
            phone='(+254) 721 732 222'
            email='mnuthonijames@gmail.com'            
        />
        <Contact 
            img={avt3}
            name='Obed Mochache'
            phone='(+254) 720 333 222'
            email='onedmochache@gmail.com'
        />
        <Contact 
            img={avt4}
            name='Nancy Moraa'
            phone='(+254) 721 111 333'
            email='nancymoraa@gmail.com'
        />        

      </div>
    

      
    </div>
  );
}

export default App;
