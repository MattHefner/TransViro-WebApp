import React from "react";
import MenuList from './Menu/MenuList';
import { HeaderImg, PadObject } from "./Menu/styled";



class App extends React.Component {

    
    
    constructor(props){
        super(props)
        this.state = {menuItems:["Profile", "Points", "Leaderboard", "Maps", "Rewards", "Settings"]}
    }
    
   
    render(){
        return(
            <div>
                <HeaderImg>
                <img src = {require("./img/transviro_logo.png")} alt="TransViro" style={{width:"100%"}}/>
                </HeaderImg>
                <PadObject>
                <MenuList menuItems = {this.state.menuItems}> </MenuList>
                </PadObject>
            </div>
        );
    }
}


export default App;