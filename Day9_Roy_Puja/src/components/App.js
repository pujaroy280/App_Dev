import React from "react";
import Search_Input from "./Searchinput";
import axios from "axios";
import Images_List from "./imageList";


class App extends React.Component{
    state= {images:[]}
   onSearchSubmit=async   (entry) =>{
        const response = await axios.get(`https://pixabay.com/api/?key=38740922-8e17a10d46592304a386ec6d0&q=${entry}&image_type=photo`)
      
        this.setState({images:response.data.hits})
    }
    render(){
        return(
        <div className="ui container" style={{marginTop:'2em'}}>
                     <h1 className="ui title" style={{textAlign:'center', color:'magenta'}}>Welcome to image search App</h1>
                     <Search_Input onSearchSubmit={this.onSearchSubmit} />
                     <p>There are {this.state.images.length}</p>
                     <Images_List images={this.state.images} />
               </div>
               )
        
    }

}



// const App = ()=>{
//     return(
//         <div className="ui container" style={{marginTop:'2em'}}>
//             <h1 className="ui title" style={{textAlign:'center', color:'magenta'}}>Welcome to image search App</h1>
//             <Search_Input />
//         </div>
//     )
// }

export default App;