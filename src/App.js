import React, {Component} from 'react';
import './App.css';


	const testData = [
	    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
        {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];

class CardList extends Component {
    render(){
        return(
            <div>
                {this.props.profile.map(profile => <Card {...profile} />)}
            </div>
        );
    }
}

class Card extends Component {
    render(){
        const profile = this.props;
        return(
            <div className="github-profile">
                <img src={profile.avatar_url} style={{width: 80, height: 80}}/>
                <div className="info">
                    <div className="name">
                        {profile.name}
                    </div>
                    <div className="company">
                        {profile.company}
                    </div>
                </div>
            </div>
        );
    }
}

class Form extends Component {

    state = {
        userName: '',
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
    }

    handleChange = (event) => {
        this.setState({userName: event.target.value});
        
    }

    render(){
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.value}
                    onChange={this.handleChange}
                    type="text" 
                    placeholder="github user name: "/>
                <button>
                    Add card
                </button>
            </form>
        );
    }
}

class App extends Component {

    state = {
        profile: testData,
    };

    render(){
    return(
        <div class="container">
            <div className="header">{this.props.title}</div>
            <Form />
            <CardList profile={this.state.profile}/>
        </div>
    );
  }
}

export default App;