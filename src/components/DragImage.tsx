import * as React from 'react';
import styled from "styled-components"

export interface IAppProps {

}

export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <Container>
                <label>
                    <input type="file"/>
                </label>
            </Container>
        );
    }
}

const Container = styled.div`
    >label {
        > input {
            content: "Organization Logo";
        width: 553px;
        height: 177px;
        border-radius: 8px;
        border: 2px dashed #C7CDD3;
        background-color: #e5e5e5;

}
}
`
