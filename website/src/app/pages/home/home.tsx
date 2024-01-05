import { sum } from "@mfe-demo-jin/libs";
import Layout from "../../layouts/layout";
import App, { CounterNumber, ShowHideAction } from "about/Module"

function HomePage() {
    return (
        <Layout>
            Home Page
            <p>Testing function <strong>sum</strong></p>
            <p>{sum(10, 10)}</p>

            {/* <hr style={{ margin: '20px 0' }} /> */}
            {/* <App /> */}

            <hr style={{ margin: '20px 0' }} />
            <p className="mb-2">Getting the component from about</p>
            <CounterNumber />

            <hr style={{ margin: '20px 0' }} />

            <p className="mb-2">Trigger action from host site to remote</p>
            <ShowHideAction />
        </Layout>
    );
}

export default HomePage;