import * as React from 'react';
import styled from "styled-components"
import { ReactComponent as Close } from "../assets/icons/Close.svg"
import { ReactComponent as Circle } from "../assets/icons/Circle.svg"

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <Container>
                <label>
                    <div>
                        <Circle />
                    </div>
                    <Close />
                    <section>
                        <p>Sorry, the upload failed</p>
                        <p>Try again</p>
                        <input type="file" />
                    </section>
                </label>
            </Container>
        );
    }
}

const Container = styled.div`
    > label {
        justify-content: start;
        flex-direction: row;
        border: none;
        > div {
            > svg {
                margin: 32px;
            }
        }
        > section {
            > p {
                line-height: 180%;
                font-size: 16px;
                :nth-child(1){
                    color: #C64D32;
                    font-weight: 400;
                }
                :nth-child(2){
                    text-decoration: underline;
                    font-weight: 600;
                }
            }
        }
        > svg {
            position: absolute;
            top: 350px;
            right: 710px
        }
    }
`
