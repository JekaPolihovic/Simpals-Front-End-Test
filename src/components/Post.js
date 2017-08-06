import React, {Component} from "react";

import {connect} from "react-redux";class Post extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.dispatch({
            type: "POSTS_DELETE_SAVE",
            post_id: this.props.id
        })
    }

    render() {
        const {title, body, tags} = this.props;
        return (
            <div className="card mb-2">
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{body}</p>
                    {tags && tags.length ? (
                        <p className="card-text">
                            {tags.map(tag => <span key={tag} className="badge badge-pill badge-info">{tag}</span>)}
                        </p>
                    ) : ''}

                </div>
                <div className="card-footer">
                    <button className="btn btn-sm btn-danger" onClick={this.handleClick}>× Удалить</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Post);