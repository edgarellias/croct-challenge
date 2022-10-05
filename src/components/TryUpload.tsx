import * as React from 'react';
import styled from "styled-components"

import { ReactComponent as Close } from "../assets/icons/Close.svg"
import { ReactComponent as Circle } from "../assets/icons/Circle.svg"
import { ReactComponent as Exclamation } from "../assets/icons/Exclamation.svg";

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
    public render() {

        const saveImage = false;

        return (
            <Container>
                <label>
                    {saveImage ?
                        ""
                        : <>
                            <div>
                                <Circle />
                                <p><Exclamation /> </p>
                            </div>

                            <Close />
                            
                            <section>
                                <p>Sorry, the upload failed</p>
                                <p>Try again</p>
                                <input type="file" />
                            </section>
                        </>}

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
            > p {
                position: absolute;
                top: 400px;
                right: 1245px;
                color: #333;
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
