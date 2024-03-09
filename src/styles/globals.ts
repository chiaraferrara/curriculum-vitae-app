import styled from '@emotion/styled'

export const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    `;

    export const FlexColumn = styled.div`
    display: flex;
    flex-flow: column wrap;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    margin:0px;
    `;

    export const Paragraph = styled.div`
    font-size: 16px;
    width: fit-content;
    `;

    export const Description = styled.div`
    font-size: 12px;
    width: fit-content;
    `;

    export const FlexRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start
    text-align: center;
    justify-content: center
    `;

    export const Title = styled.h4`
    font-size: 22px;
    font-weight: bold;
    `;

    export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    justify-content: space-around;
    `;
    export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    justify-content: space-around;
    padding: 10px
    `;

    export const Tr = styled.tr`
    background-color: #D6D2D9;
    `;

    export const Table = styled.table`
    width: 100%;
    font-size: 13px;
    padding: 20px;
    margin:0px;
    background-color: #f5f5f5;
    `;
    

    export const GlobalWrapper = styled.div`
        width: 90%;
        display: flex;
        flex-flow: wrap;
        background-color: #f5f5f5;
        margin:auto;
        background: rgb(255,255,255);
background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(243,253,255,1) 75%, rgba(228,230,230,1) 85%, rgba(224,224,224,1) 85%, rgba(136,122,150,1) 85%, rgba(168,152,185,1) 100%);
        box-shadow: 0 0 10px #a1a1a1;
    `;
