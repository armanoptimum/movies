import styled from "styled-components";

const MovieInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: var(--padding-medium);
`

const MovieRatingWrapper = styled.div`
    position: absolute;
    top: -15px;
    left: 5px;
    background-color: #081c22;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    display: none; 
    color: var(--text-color-light);
    text-align: center;
    font-weight: bold;
    justify-content: center; /* Center horizontally */
    align-items: center;
    border: 2px solid #21d07a;

     @media (min-width: 890px) {
        display: flex;
     }
`   

const MovieName = styled.h2`
    font-weight: 700;
    color: var(--text-color-dark);
`

const MovieDate = styled.p`
    color: var(--text-color-muted);  
`

const MovieDescription = styled.h2`
    width: 100%;
    margin-top: 1rem;
    display: none;
    -webkit-line-clamp: 2; /* Number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-color-dark);
    font-size: var(--font-size-small);

    @media (max-width: 890px) {
      display: -webkit-box;
    }
`
    
const PerCentIcon = styled.span`
    position: absolute;
    font-size: 5px;
    top: 4px;
    right: 6px;
`

export {
    MovieInfoWrapper,
    MovieRatingWrapper,
    PerCentIcon,
    MovieName,
    MovieDate,
    MovieDescription
}