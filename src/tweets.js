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
            token: '',
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        this.tweetsFetch();
    }

    tweetsFetch() {
        //fetch("../auth/tweets")
        let sampleResponse = {
            "created_at": "Thu Apr 06 15:24:15 +0000 2017",
            "id_str": "850006245121695744",
            "text": "1\/ Today we\u2019re sharing our vision for the future of the Twitter API platform!\nhttps:\/\/t.co\/XweGngmxlP",
            "user": {
                "id": 2244994945,
                "name": "Twitter Dev",
                "screen_name": "TwitterDev",
                "location": "Internet",
                "url": "https:\/\/dev.twitter.com\/",
                "description": "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https:\/\/twittercommunity.com\/ \u2328\ufe0f #TapIntoTwitter"
            },
            "place": {
            },
            "entities": {
                "hashtags": [
                ],
                "urls": [
                    {
                        "url": "https:\/\/t.co\/XweGngmxlP",
                        "unwound": {
                            "url": "https:\/\/cards.twitter.com\/cards\/18ce53wgo4h\/3xo1c",
                            "title": "Building the Future of the Twitter API Platform"
                        }
                    }
                ],
                "user_mentions": [
                ]
            }
        }

        this.setState({
            isLoaded: true,
            userCollection: sampleResponse.user.name,
            dateCollection: sampleResponse.created_at,
            textCollection: sampleResponse.text,
        })

    }

    handleLikeShare() {
        console.log("USER LIKED OR RETWEETED!")
    }

    render() {
        const { error, isLoaded, userCollection, dateCollection, textCollection } = this.state;
        if (error) {
            return <span>{error.message}<br>Could not load results. Please try again.</br></span>
        } else if (!isLoaded) {
            return <span>Fetching Tweets...</span>
        } else {
            return (
                <div id="jstwitter">
                    <div className="item">
                        <div class="tweet-wrapper">
                            <span class="text">{textCollection}</span>
                            <span class="user">{userCollection}</span>
                            <span class="date">{dateCollection}</span>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default Tweet;