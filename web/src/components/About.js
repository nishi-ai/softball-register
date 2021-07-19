import React, { Component } from 'react';
//  react-copy-to-clipboard package
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// typed react
import Typed from 'react-typed';
class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCopied: false,
            onHover: false
        }
    }
    // onCopyText function to toggle this state
    // The onCopy prop is run when the text is copied.
    onCopyText = () => {
        this.setState({ isCopied: true })
        setTimeout(() => {
           this.setState({ isCopied: false })
        }, 1000);
    };

    // onHober function to toggle this state
    // The onCopy prop is run when the text is copied.
    onHoverIcon = () => {
        this.setState({ onHover: true })
        setTimeout(() => {
           this.setState({ onHover: false })
        }, 1000);
    };
    // render function
    render(){
        
        // render only when this props data exist
        if(this.props.data){
            // Unexpected use of 'name' no-restricted-globals if you user let or const
            var email = this.props.data.email;       
        }
        return (   
            <section id="about">
                
                    <div id="icon">
                        <CopyToClipboard text={email} onCopy={ this.onCopyText }>
                        <span>{this.state.isCopied ? <FontAwesomeIcon icon={['fas', 'clipboard-check']} /> : <FontAwesomeIcon icon={['fas', 'copy']} />}</span>
                        </CopyToClipboard>
                    </div>
                    <Typed
                    strings={['aiaimforworld@gmail.com']}
                    typeSpeed={50}
                    />
            </section>
        );
    }
}

export default About;
