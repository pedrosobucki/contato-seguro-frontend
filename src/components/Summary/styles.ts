import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    div{
        display: block;
        background: var(--main-shape);
        border-radius: 0.25rem;
        padding: 1.5rem 2rem;
        color: var(--title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 600;
            line-height: 3rem;
        }

        &.total{
            background: var(--green);
            color: #FFF;
        }
    }

`