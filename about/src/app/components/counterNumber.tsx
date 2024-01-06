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
        <div
            className='bg-red-200'
            style={{
                width: '100%',
                textAlign: 'center',
                padding: 30
            }}>
            {`CounterNumber ${tickedTimes}`}
            {/* {`CounterNumberDot ${'.'.repeat(tickedTimes)}`} */}
        </div>
    )
}

