import React, { Component } from "react";
import Container from "../Container";
import ClickPanel from "../ClickPanel";
import data from "../../data.json";

class ClickGame extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({data: this.shuffleData(this.state.data)});
    }

    guessCorrect = newData => {
        const { topScore, score } = this.state;
        const scoreNew = score + 1;
        const topScoreNew = scoreNew > topScore ? scoreNew : topScore;
        this.setState({
            data: this.shuffleData(newData),
            score: scoreNew,
            topScore: topScoreNew
        });
    };

    guessIncorrect = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        });
    };

    resetData = data => {
        const resetData = data.map(item => ({...item, clicked: false}));
        return this.shuffleData(resetData);
    };

    shuffleData = data => {

        for (let i = data.length - 1; i > 0; i-- ) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j]
            data[j] = temp;
        }

        return data
    };

    handleItemClick = id => {
        let correct = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    correct = true
                }
            }

            return newItem;
        });
        correct
            ?   this.guessCorrect(newData)
            : this.guessIncorrect(newData);
    };
    
    render() {
        return (
            <Container> 
                {this.state.data.map(item => (
                    <ClickPanel
                        key = {item.id}
                        id = {item.id}
                        shake={!this.state.score && this.state.topScore}
                        handleClick = {this.handleItemClick}
                        image={item.image}
                        />
                ))}
                </Container>
        );
    }
}

export default ClickGame;