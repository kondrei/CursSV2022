import { useState } from 'react';

const Score = ({ socket, score }) => {
    const [show, setShow] = useState();
    const getScore = () => {
        socket.emit("get-score", "get score");
        setShow('block')
    }
    return (
        <div className="score">
            <div className="background"
                style={{ display: show }}
                onClick={() => setShow('none')}
            >
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Wins</th>
                            </tr>
                        </thead>
                        <tbody>
                            {score && Object.keys(score).map((key, index) =>
                                <tr key={index}>
                                    <td> {key}</td>
                                    <td>{score[key]}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <p className='close'>Click to close</p>
                </div>
            </div>
            <button onClick={getScore}>Hall of Fame</button>
        </div>
    )
}

export default Score;