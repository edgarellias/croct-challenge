import * as React from 'react';
import styled from "styled-components"
import { ReactComponent as Vector } from "../assets/icons/Vector.svg"
export interface IAppProps {

}

export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <Container>
                <label>

                    <p><Vector /> Organization Logo</p>
                    <p>Drop the image here or click to browse</p>
                    <input type="file" />
                </label>
            </Container>
        );
    }
}

const Container = styled.div`
        padding-top: 142px;
        >label {
            text-align: center;
            cursor: pointer;
        > p {
            display: flex;
            align-items: center;
            gap: 12.01px;
            font-size: 14px;
            font-weight: 600;
            line-height: 25.2px;
            color: #495567;
            > svg {
                width: 16px;
                height: 16px;
            }
            :nth-child(2) {
                font-weight: 400;
            }
        }
        >input[type="file"] {
            display: none;
        }
    }      
`
