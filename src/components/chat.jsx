import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import Messages from './messages';
import Edith from '../assets/edith.png'
// import { IconName } from "react-icons/fa";

import './chat.css'
function Chat() {

    useEffect(() => {
        fetch("https://edithai.pythonanywhere.com/chat/edith/v1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: 'сделай привет следующий текст для ChatGPT но заменяет слово ChatGPT или похоже на него на "Edith AI"',
            }),

        })
            .then(response => response.json())
            .then(data => {
                setResul(data[0].Ansver)
                add_chat_ansver(data[0].Ansver)

            });
    }, [])
    const [apiKey, setApikey] = useState('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') //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
    const [prompt, setPrompt] = useState('') // Prompt of user or like a search 
    const [resul, setResul] = useState('')
    const [len_tokens, setLen_token] = useState('1')
    const [chat_messages, setChatmessages] = useState([]) // All of messages

    function get_user_prompt(event) {
        // console.log(event)
        let prompt = event.target.value
        setPrompt(prompt)
    } function send_message() {
        let arr = chat_messages
        if (prompt.length == 0) {
            console.log("Antithiog");
        } else {
            // https://edithai.pythonanywhere.com/
            // setChatmessages([])
            let result = apiKey
            let temp_arr = []
            temp_arr.push(prompt)
            temp_arr.push('user')
            arr.push(temp_arr)
            sendGptRequest(prompt, result)
            setChatmessages(arr)
            setPrompt('')
        }

    } function sendGptRequest(prompt, apicey) {
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
        // let res = fetch('https://api.openai.com/v1/chat/completions',
        //     {
        // сделай привет следующий текст для ChatGPT но заменяет слово ChatGPT на "Edith AI"
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${apicey}`
        //         },
        //         body: JSON.stringify({
        //             "model": "gpt-3.5-turbo",
        //             "messages": [
        //                 {
        //                     "role": "user",
        //                     "content": prompt
        //                 }
        //             ],
        //             "temperature": 1,
        //             "max_tokens": tokens,
        //             "top_p": 1,
        //             "temperature": 0.5,
        //             "frequency_penalty": 0,
        //             "presence_penalty": 0
        //         })
        //     }
        // )
        //     .then(response => response.json())
        //     .then(data => {
        //         setResul(data.choices[0].message.content)
        //         add_chat_ansver(data.choices[0].message.content)

        //     });
        fetch("https://edithai.pythonanywhere.com/chat/edith/v1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: prompt,
            }),

        })
            .then(response => response.json())
            .then(data => {
                setResul(data[0].Ansver)
                add_chat_ansver(data[0].Ansver)

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
                <p className='log_out' onClick={() => {
                    if (window.confirm("выйти из текущего аккаунта ?")) {
                        localStorage.clear()
                        window.location.reload()
                    }
                }}>Выйти</p>
                <div className='fleks'>
                    <h1 className='header'>
                        Edith AI
                    </h1>
                    <img src={Edith} alt="" width='50px' height='50px' />

                </div>

                <hr />
                {/* <div class="form-floating">
                    <select id="floatingSelect" class="form form-control vibor " aria-label="Default select example" onChange={get_tokens_value}>

                        <option value="1" selected>короткий</option>
                        <option value="2">Средний</option>
                        <option value="3">Длинний</option>
                        <option value="4">Supper Длинний</option>
                    </select>
                    <label for="floatingSelect">Длина ответов на запрос</label>
                </div> */}
                <div className="text-center">
                    <button className='btn btn-outline-success'>{localStorage.getItem('user')}</button>
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
                    <button onClick={send_message} class="btn btn-outline-secondary" type="submit" id="button-addon2"><i class="fa fa-paper-plane-o" ></i></button>
                </div>
            </div>
        </div>
    );
}

export default Chat;