import { useEffect, useState } from 'react';

export const CounterNumber = () => {
    const [tickedTimes, setTickedTimes] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(
            () => setTickedTimes(tickedTimes => tickedTimes + 1),
            1000
        )
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{
            width: '100%',
            textAlign: 'center',
            background: 'wheat',
            padding: 30
        }}>
            {`CounterNumber ${tickedTimes}`}
            {/* {`CounterNumberDot ${'.'.repeat(tickedTimes)}`} */}
        </div>
    )
}

