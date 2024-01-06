// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container } from '@mfe-demo-jin/libs';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Container>
      <NxWelcome title="faq" />
    </Container>
  );
}

export default App;
