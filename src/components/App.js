import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../components/api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './style/VideoItem.css';

const KEY ='AIzaSyC7jxRvhhyAlT4tjYUn0TRQdJxgRG09mIE';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('London City');
    }

    onTermSubmit = async textInput => {
        const response = await youtube.get('/search', {
            params: {
                q: textInput,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                  <div className="ui row">
                    <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                < VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default App;