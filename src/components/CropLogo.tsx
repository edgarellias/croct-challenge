import * as React from 'react';
import styled from "styled-components"

import { ReactComponent as Close } from "../assets/icons/Close.svg"

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <Container>
                <label>
                    <WhiteCircle />

                   
                    <div>
                        <Close />
                        <p>Crop</p>
                        <input type="range" />
                        <input type="file" />
                    <button>Save</button>
                    </div>
                </label>
            </Container>
        );
    }
}


const Container = styled.div`

> label {
    border: none;
    flex-direction: row;
    justify-content: start;

    > div {
        display: flex;
        flex-direction: column;
        gap: 13px;
        > svg {
            margin-left: 330px;
        }
        > p {
            font-size: 16px;
        }
        > input[type="range"] {
            width: 276px;
            height: 2px;
            margin-bottom: 20px;
        }
        > button {
            width: 109px;
            height: 32px;
            font-weight: 500;
            font-size: 14px;
            border-radius: 16px;
            border: none;
            color: #ffffff;
            background-color: #3D485F;
            margin-left: 168px;            
        }
    }
}
`

const WhiteCircle = styled.div`
        margin: 32px;    
        width: 113px;
        height: 113px;
        border-radius: 50%;
        background-color: #fff;

`