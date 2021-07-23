import React from 'react';

// Components
import Header from '../components/Header/Header'
import MediaCard from '../components/MediaCard/MediaCard'
import MainPhoto from '../components/MainPhoto/MainPhoto'
import CommentForm from "../components/CommentForm/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import MediaList from "../components/MediaList/MediaList";

// api
import { GetVideos, GetVideoById, AddCommentById, DeleteCommentById } from "../api/videoAPI";

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            current: null,
            videoList: [],
            filteredVideos: [],
        };
    }

    componentDidMount() {
        const videoId = this.props.match.params.id;
        let newList = [];
        
        GetVideos().then((res => {
            if(!videoId) {
                this.getVideoById(res[0].id);
                newList = res.filter(item => item.id !== res[0].id)
            } else {
                this.getVideoById(videoId);
                newList = res.filter(item => item.id !== videoId)
            }

            this.setState({ videoList:  newList});
            this.setState({ filteredVideos:  newList});
        }));
    };

    componentDidUpdate(prevProps) {
        const prevVideoId = prevProps.match.params.id;
        const videoId = this.props.match.params.id;

        if (videoId !== prevVideoId){
            this.getVideoById(videoId);

            const newList = this.state.videoList.filter(item => item.id !== videoId);
            this.setState({ filteredVideos: newList });
        }
    };

    getVideoById = (id) => {
        GetVideoById(id).then((res => {
            this.setState({ current: res});
        }));
    };

    addCommentById = (id, data) => {
        AddCommentById(id, data).then((res => {
          const newCurrent = this.state.current;
          newCurrent.comments = [...newCurrent.comments, res];
          this.setState({ current: newCurrent });
      }));
    };

    deleteCommentById = (id) => {
        DeleteCommentById(id).then((res => {
          console.log('delete: ', res)
      }));
    };

    handleOnClick = (value) => {
        const newComment = {
            name: "Nigel",
            comment: value
        };

        this.addCommentById(this.state.current.id, newComment);
    };

    render() {
        return (
            <>
            { this.state.current ? (
                <>
                <Header />
                <MainPhoto video={this.state.current} />
                <div className="container">
                    <div className="currentVideo">
                        <MediaCard video={this.state.current} />
                        <div className="quantityComments">{this.state.current.comments.length} Comments</div>
                        <CommentForm handleOnClick={this.handleOnClick} />
                        <div className="comments">
                            {this.state.current.comments.map(comment => (
                                <CommentList key={comment.id} data={comment} />
                            ))}
                        </div>
                    </div>
                    <div className="suggestions">
                        <div className="suggestions__title">NEXT VIDEO</div>
                        <MediaList data={this.state.filteredVideos} />
                    </div>
                </div>
                </>
            ) : <p>Loading...</p>}
            </>
        );
    }
}

export default HomePage;