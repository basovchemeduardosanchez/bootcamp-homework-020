import React, {Component} from 'react';

class Contact extends Component {
    state = {
        senderName: '',
        senderEmail: '',
        message: ''
    };

    handleInputChange = ( pEvent ) => {
        let lInputElement = pEvent.target,
            lInputName = lInputElement.name,
            lInputValue = lInputElement.value,
            // Create a new object to merge the current state with
            lNewState = {};

        // Add a key named the same as the input name to the object and set it
        // to the value of the input
        lNewState[ lInputName ] = lInputValue;

        // Merge the new object with the current state
        this.setState( lNewState );
    }

    render(){
        return (
            <div className="container p-4">
                <div className="Portfolio-card card shadow bg-secondary text-white">
                    <div className="card-header bg-dark">
                        <h5 className="m-0">
                            Contact
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label for="Portfolio-contact-name">Name</label>
                            <input
                                className="form-control"
                                id="Portfolio-contact-name"
                                // The name must be the same as the status
                                // variable for this to work properly
                                name="senderName" type="text"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label for="Portfolio-contact-email">E-mail</label>
                            <input
                                className="form-control"
                                id="Portfolio-contact-email"
                                // The name must be the same as the status
                                // variable for this to work properly
                                name="senderEmail"
                                type="email"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label for="Portfolio-contact-text">Text</label>
                            <textarea
                                className="form-control"
                                // The name must be the same as the status
                                // variable for this to work properly
                                name="message"
                                onChange={this.handleInputChange}
                                rows="4"
                            ></textarea>
                        </div>
                        <a
                            className="btn btn-primary"
                            type="submit"
                            // When inputs are changed, this link is re-created
                            // to include the text in the inputs into a mailto¡
                            // link. mailto links are special links intended for
                            // e-mail. When one of these links is clicked, it
                            // will open a new message in your default e-mail
                            // client pre-filled with some data, depending on
                            // the syntax. See https://developer.yoast.com/blog/guide-mailto-links/
                            // for more information on the mailto link syntax.
                            // In this case we're filling the `to` field, the
                            // `subject` field and the `body` of the message
                            // with te details that the user added in the form
                            // We're using encodeURIComponent because the text
                            // in the link must be URI encoded for it to work
                            // properly with special characters
                            href={`mailto:basov_chem_eduardo_sanchez@hotmail.com?subject=${encodeURIComponent(`Portfolio contact from ${this.state.senderName} (${this.state.senderEmail})`)}&body=${encodeURIComponent(this.state.message)}`}
                        >
                            <span className="fa fa-envelope-o"></span> Send
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
