import React from 'react'
import styled from 'styled-components'

const Rodape = styled.div `
border: 1px solid blue;
 `



export default class Footer extends React.Component {



    render() {

        return(
            <Rodape>
                <div>
                    <h2>Footer</h2>
                </div>
            </Rodape>
        )
    }
}