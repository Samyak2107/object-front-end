import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Probability from './components/Probability/Probability';
import Signin from './components/Signin/Signin';
import RegisterUser from './components/RegisterUser/RegisterUser';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particlesOptions = {
  polygon: {
      enable: true,
      radius: 100,
      border: 50,
      number: {
        value: 1000,
        density: {
          enable: true,
          value_area: 100
        }
      }
  }
}

const app = new Clarifai.App({
 apiKey: 'b1f8c3151c20417ca2ab904991b4e3e4'
});

const initialState = {
    input: '',
    imageUrl: '',
    route: 'signin',
    userSignedIn: false,
    userClickedDetect: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
}

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  componentDidMount() {
    fetch('https://radiant-dawn-33653.herokuapp.com/').then(response => response.json()).then(console.log)
  }
  

 getOutputData = (data) => {
      document.getElementById('p1').innerHTML = data.outputs[0].data.concepts.[0].name;
      document.getElementById('p2').innerHTML = data.outputs[0].data.concepts.[0].value*100;
      document.getElementById('p3').innerHTML = data.outputs[0].data.concepts.[1].name;
      document.getElementById('p4').innerHTML = data.outputs[0].data.concepts.[1].value*100;
      document.getElementById('p5').innerHTML = data.outputs[0].data.concepts.[2].name;
      document.getElementById('p6').innerHTML = data.outputs[0].data.concepts.[2].value*100;
      document.getElementById('p7').innerHTML = data.outputs[0].data.concepts.[3].name;
      document.getElementById('p8').innerHTML = data.outputs[0].data.concepts.[3].value*100;
      document.getElementById('p9').innerHTML = data.outputs[0].data.concepts.[4].name;
      document.getElementById('p10').innerHTML = data.outputs[0].data.concepts.[4].value*100;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
   this.setState({imageUrl: this.state.input});
   this.setState({userClickedDetect: true});
   app.models
   .predict(
     'aaa03c23b3724a16a56b629203edc62c', 
     this.state.input)
   .then(response => {
     if (response) {
       fetch('https://radiant-dawn-33653.herokuapp.com/image', {
         method: 'put',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
           id: this.state.user.id
         })
       })
       .then(response => response.json())
       .then(count => {
         this.setState(Object.assign(this.state.user, {entries: count}))
       })
       .catch(console.log)
     }
     this.getOutputData(response)})
   .catch(_err => alert("Our API server is not responding. Please check your internet connection or try again later."));
}

onChangeRoute = (route) => {
  if(route === 'signout') {
    this.setState(initialState)
  } else if(route === 'home') {
    this.setState({userSignedIn: true})
  }
  this.setState({route: route});
}

  render() {
  return (
    <div className="App">
       <Particles className='particles' params={particlesOptions} />
       <Navigation userSignedIn={this.state.userSignedIn} onChangeRoute={this.onChangeRoute} />
       { this.state.route === 'home'
       ? <div>
       <Logo />
       <Rank name={this.state.user.name} entries={this.state.user.entries}/>
       <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
       <FaceRecognition imageUrl={this.state.imageUrl} />
       <Probability userClickedDetect={this.state.userClickedDetect}/>
       </div>
       :
       (
         this.state.route === 'signin'
         ? <Signin loadUser={this.loadUser} onChangeRoute={this.onChangeRoute} />
         : <RegisterUser onChangeRoute={this.onChangeRoute} loadUser={this.loadUser} />
       ) }
    </div>
  )};
}

export default App;
