import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title.js';
// class RegularClass{}
// class ComponentClass extends Component{}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log(regularClassInstance);
// console.log(componentClassInstance);

class App extends Component {
    state = { displayBio: false };
    // constructor(){
    //     super();
    //     this.state={ displayBio: false };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }



    render() {

        return (
            <div>
                <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/globalTime">Global time</Link> |{" "}
      </nav>
                <img className="profile" src={profile} alt="profile" />
                <h1>Hello, my name is Bryan</h1>
                {
                this.state.displayBio ? <Title />:null
                }
                <p>I'm looking into working on meaningful projects</p>
                {
                this.state.displayBio ? (
                    <div>
                    <p>I want to be a professional on React</p>
                    <p>besides coding, I also love to wander through the forest</p>
                    <div><button onClick={this.toggleDisplayBio} >Show less</button></div>
                    </div>
                        ) : 
                        (
                            <div><button className="btn btn-primary" onClick={this.toggleDisplayBio} >Read more</button></div>
                        )
                }
                <hr />
                <Projects />

                <hr />
                <SocialProfiles />

            </div>
        )
    }
}

export default App;