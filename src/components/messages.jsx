import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import './messages.css'
function Messages(props) {
    return (
        <div>
            {!props.is_user &&
                <div className="chatgp">
                    <p className='odamoti'>Edith</p>
                    <div className="alert alert-success" role="alert">
                        <Typewriter  text={props.text} delay={50} />
                    </div>
                </div>
            }{props.is_user &&
                <div className='user'>
                    <p className='odamoti_user'>Вы</p>
                    <div class="alert alert-primary" role="alert">
                        {props.text}
                    </div>
                </div>
            }

            <div className='joy'>

            </div>

        </div>
    );
}

export default Messages;