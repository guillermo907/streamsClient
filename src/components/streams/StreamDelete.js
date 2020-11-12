import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../Actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);  
    }

    renderActions () {
        const {id} = this.props.match.params;
        return (
            <React.Fragment>  
                <button onClick={() => {this.props.deleteStream(id)}} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent(){
        if (!this.props.stream){
            return 'Are you sure you wanna delete this stream?'
        }
        
        return `Are you sure you want to delete "${this.props.stream.title}" ?`
    }

    render(){
        return (
                <Modal 
                    title="Delete Stream B."
                    content={ this.renderContent() }
                    actions={ this.renderActions() }           //con parentesis se llama, sin parentesis se hace referencia
                    onDismiss={ () => history.push('/') }
                />
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect (mapStateToProps, {fetchStream, deleteStream})(StreamDelete);