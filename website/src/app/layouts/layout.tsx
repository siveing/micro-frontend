import { ReactNode } from 'react';
import { Container } from '@mfe-demo-jin/libs';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    );
}
