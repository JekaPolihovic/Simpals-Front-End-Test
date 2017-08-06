import React, {Component} from "react";
import {connect} from "react-redux";
class AddPostForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.initialState = {
            title: '',
            body: '',
            tags: '',
            errorFields: {}
        };
        this.state = this.initialState;
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            errorFields: {
                [e.target.name]: this.validateField(e.target.value) ? 'has-success' : 'has-warning',
            }
        })
    }

    validateField(text) {
        return text.length >= 5;
    }

    handleSubmit(e) {
        e.preventDefault();
        // validate fields
        let fields = ['title', 'body', 'tags'],
            errorFields = {};
        fields.map((field) => {
            if (!this.validateField(this.state[field])) {
                errorFields[field] = 'has-warning'
            }
        });

        if(Object.keys(errorFields).length) {
            this.setState({errorFields});
        } else {
            // dispatch save post action
            this.props.dispatch({
                type: "POSTS_ADD_SAVE",
                post: {
                    title: this.state.title,
                    body: this.state.body,
                    tags: this.state.tags,
                }
            });

            this.setState(this.initialState);
            this.form.reset();
        }

    }

    render() {
        return (
            <div>
                <h4 className="mt-5">Добавить запись</h4>
                <div className="card">
                    <div className="card-block">
                        <form className="form" onSubmit={this.handleSubmit} ref={(el) => this.form = el}>
                            <fieldset className={"form-group " + this.state.errorFields.title }>
                                <label htmlFor="title">Заголовок</label>
                                <input id="title" onChange={this.handleInputChange}
                                       type="text" className="form-control" name="title"
                                       placeholder="Заголовок"
                                />
                            </fieldset>
                            <fieldset className={"form-group " + this.state.errorFields.body }>
                                <label htmlFor="body">Текст</label>
                                <textarea id="body" className="form-control"
                                          onChange={this.handleInputChange}
                                          name="body" placeholder="Текст" rows="3">
                                </textarea>
                            </fieldset>
                            <fieldset className={"form-group " + this.state.errorFields.tags }>
                                <label htmlFor="tags">Теги</label>
                                <input id="tags" type="text" className="form-control" name="tags"
                                       placeholder="тег, еще тег" onChange={this.handleInputChange}
                                />
                            </fieldset>

                            <button type="submit" className="btn btn-primary">Добавить</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AddPostForm);
