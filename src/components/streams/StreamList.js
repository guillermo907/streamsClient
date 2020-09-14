import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchStreams } from '../../Actions';


class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    };

    renderAdmin(stream){
        if (stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to ={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link> 
                    <Link to ={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    };

    renderCreateBtn (){
        if (this.props.isSignedIn){
            return( 
                <div style={{textAlign: 'right'}}>
                    <Link to="./streams/new">
                        <button className="ui button black">Create Stream</button>
                    </Link>
                </div>    
                );
            }
    };

    renderList (){
        return (
            this.props.streams.map( (stream)=>{
                return (
                <div className="item" key={stream.id} >
                    {this.renderAdmin(stream)}  
                    <i className="large middle aligned icon camera"/> 
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>    
                </div>         
                )
            }
            )
        );
    };

    render (){
        return(
            <div>
                <h2>Streams</h2>
                 <div className="ui celled list"> {this.renderList()} </div>
                 {this.renderCreateBtn()}
            </div>
        );
    }
};

const mapStateToProps = (state) =>{
    return {
        streams: Object.values(state.streams),  //Object . values convierte el objeto en un array (hace uno nuevo no lo muta)
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect (mapStateToProps, { fetchStreams })(StreamList);