import React from 'react';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responseTweets: {},
            userCollection: [],
            dateCollection: [],
            textCollection: [],
            imgCollection: [],
            tweetLikedCollection: [],
            isAuthenticated: false,
            user: null,
            token: ''
        }
    }

    componentDidMount() {
        this.tweetsFetch();
    }

    tweetsFetch() {
        fetch("../auth/tweets")
        let sampleResponse = {}

    }

    handleLikeShare() {
        console.log("USER LIKED OR RETWEETED!")
    }


    render() {

        const { error, isLoaded, userCollection, imgCollection, dateCollection, textCollection } = this.state;
        if (error) {
            return <Alert variant="success">{error.message}<br>Could not load results. Please try again.</br></Alert>
        } else if (!isLoaded) {
            return <Alert variant="success">Fetching Tweets...</Alert>
        } else {
            return (
                <div id="jstwitter">
                    <div className="item">
                        <img src={img}></img>
                        <div class="tweet-wrapper">
                            <span class="text">{text}</span>
                            <span class="user">{user}</span>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default Tweet;