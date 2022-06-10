import { useState } from 'react';

const Score = ({ socket, score }) => {
    const [show, setShow] = useState();
    const getScore = () => {
        socket.emit("get-score", "get score");
        setShow('block')
    }
    let output = ''
    if (score) {

        output = Object.keys(score).forEach(key => {
            <div>aaa {key}</div>
            console.log(key, score[key])
        })
    }
    return (
        <div className="score">
            <div className="background"
                style={{ display: show }}
                onClick={() => setShow('none')}
            >
                <div className="content">
                    {score && output}
                </div>
            </div>
            <button onClick={getScore} >Score!</button>
        </div>
    )
}

export default Score;