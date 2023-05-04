import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import Messages from './messages';
import Edith from '../assets/edith.png'

import './chat.css'
function Chat() {
    useEffect(() => {
        // change_message()
    }, [])
    const [apiKey, setApikey] = useState('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')
    const [prompt, setPrompt] = useState('') // Prompt of user or like a search 
    const [resul, setResul] = useState('')
    const [len_tokens, setLen_token] = useState('1')
    const [chat_messages, setChatmessages] = useState([['Добро пожаловать в Edith AI ! Я готов ответить на ваши вопросы и помочь вам в любых делах. Напишите мне, что вы хотели бы узнать или сделать, и я постараюсь помочь вам максимально быстро и эффективно', 'chat']]) // All of messages

    const [per_text, setPertext] = useState('Добро пожаловать в Edith AI ! Я готов ответить на ваши вопросы и помочь вам в любых делах. Напишите мне, что вы хотели бы узнать или сделать, и я постараюсь помочь вам максимально быстро и эффективно')
    function get_user_prompt(event) {
        // console.log(event)
        let prompt = event.target.value
        setPrompt(prompt)
    } function send_message() {
        let arr = chat_messages
        if (prompt.length == 0) {
            console.log("Antithiog");
        } else {
            // setChatmessages([])
            let temp_arr = []
            temp_arr.push(prompt)
            temp_arr.push('user')
            arr.push(temp_arr)
            sendGptRequest(prompt, apiKey)
            setChatmessages(arr)
            setPrompt('')
        }

    } function sendGptRequest(prompt, apiKey) {
        let tokens = 0
        if (len_tokens == '1') {
            tokens = 20
        } else if (len_tokens == '2') {
            tokens = 100
        } else if (len_tokens == '3') {
            tokens = 500
        } else if (len_tokens == '4') {
            tokens = 1000
        }
        let res = fetch('https://api.openai.com/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ],
                    "temperature": 1,
                    "max_tokens": tokens,
                    "top_p": 1,
                    "temperature": 0.5,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                })
            }
        )
            .then(response => response.json())
            .then(data => {
                setResul(data.choices[0].message.content)
                add_chat_ansver(data.choices[0].message.content)

            });
    } function add_chat_ansver(resul) {
        let arr = chat_messages
        let temp_arr = []
        temp_arr.push(resul)
        temp_arr.push('chat')
        arr.push(temp_arr)
        // setChatmessages([])
        setChatmessages(arr)
        temp_arr = []
        setResul('')
        // console.log(chat_messages)
    } function get_tokens_value(event) {
        let val = event.target.value
        setLen_token(val)
        // console.log(event);
    } function get_Enter(event) {
        if (event.key == "Enter") {
            send_message()
        }
    }
    return (
        <div>
            <div>
                <div className='fleks'>
                    <h1 className='header'>
                        Edith AI
                    </h1>
                    <img src={Edith} alt="" width='50px' height='50px' />
                </div>

                <hr />
                <div class="form-floating">
                    <select id="floatingSelect" class="form form-control vibor " aria-label="Default select example" onChange={get_tokens_value}>

                        <option value="1" selected>короткий</option>
                        <option value="2">Средний</option>
                        <option value="3">Длинний</option>
                        <option value="4">Supper Длинний</option>
                    </select>
                    <label for="floatingSelect">Длина ответов на запрос</label>
                </div>
                <hr />
            </div>
            <div className="">
                {chat_messages.map((val, i) => {
                    if (val[1] == 'user') {
                        return <Messages is_user={true} text={val[0]} key={i} />
                    } else {
                        return <Messages is_user={false} text={val[0]} key={i} />

                    }
                })}
                {chat_messages.length >= 5 &&
                    <div>
                        <div>.</div>
                        <div>.</div>
                    </div>
                }

            </div>

            <div>
                <div class="input-group mb-3 to_vniz">
                    <input type="text" class="form-control" placeholder="Отправит собщения" onChange={get_user_prompt} onKeyUp={get_Enter} value={prompt} aria-label="Отправит собщения" aria-describedby="button-addon2" />
                    <button onClick={send_message} class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-paper-plane-o" ></i></button>
                </div>
            </div>
        </div>
    );
}

export default Chat;