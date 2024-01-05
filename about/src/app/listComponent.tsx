import { CounterNumber } from "./components/counterNumber";
import { ShowHideAction } from "./components/showHideAction";

export const ListComponent = () => {
    return (
        <div style={{
            width: '100%',
            textAlign: 'center',
            background: 'wheat',
            padding: 30
        }}>
            <CounterNumber />
            <ShowHideAction />
        </div>
    )
}

