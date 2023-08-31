import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './comments'
import avatarWoman from './images/avatar_female_mic.png'
import avatarMale from './images/avatar_user_male.png'
import avatarOrangeHair from './images/avatar_user_woman.png'
import User__Feedback from './UserFeedBack'
import roger from './images/roger.jpg'
import francine  from'./images/francine.jpg'
import steve from './images/steve.png'
import stan from './images/stan.png'
import Card from './card'
const App = function(){
  return (
    <div className='ui comments'>
      <User__Feedback>
      <User name = 'Ms.Amber'
      date = '8:30AM'
      msg = 'Hey I just woke up to go to work'
      picture = {avatarWoman }
      />
      </User__Feedback>
      
      <User__Feedback>
      <User name = 'Mr.Roy'
      date = '9:30AM'
      msg = 'Good Morning!'
      picture = {avatarMale }
      />
      </User__Feedback>

      <User__Feedback>
      <User name = 'Ms.Fannie'
      date = '4PM'
      msg = 'When is the homework due?'
      picture = {avatarOrangeHair}
      />
    </User__Feedback>

  
    <Card picture = {roger}
     title = 'Roger Smith is a fictional character in the adult animated sitcom American Dad!' 
     info = 'Attributes include'
     msg = 'usually insensitive and careless; he often takes advantage of, cheats, and ridicules people. '   
    >
      
    </Card>
     
     
   <Card picture = {francine}
    title = 'Francine is a fictional character on the American animated sitcom American Dad! '
    info = 'Personality includes'
    msg = '"Sailor Moon," "Fruits Basket," and "Ouran High School Host Club"'
   >
    
    </Card>
     
     <Card picture = {steve}
       title = 'Steve is a fictional character in the animated television series American Dad!'
       info = 'Notable attributes include'
       msg = '"geek & nerd," "wild," and "adventurous"'
    >
      </Card>
     
      <Card picture = {stan}
          title = 'Stan is a fictional character in the animated television series American Dad!'
          info = 'Attributes include '
          msg = '"breadwinner," "inconsiderate," and "masculine".'
      >
      </Card> 
    </div>
  )
}

//rooting
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(App())

// create a zip folder of Public and src folders 





// const App = function(props){
//   return(
//     <div><h1>Welcome to React function Components {props.name}</h1></div>
//   )
// }

//create a prop in a constant
// const myElement = <App name ='Martha' />
//rotting
// ReactDOM.render(
//   myElement,document.querySelector('#root')
// )
