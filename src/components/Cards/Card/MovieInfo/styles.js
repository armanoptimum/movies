import styled from 'styled-components';

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--padding-medium);
`;

export const MovieRatingWrapper = styled.div`
  position: absolute;
  top: -1rem;
  left: 0.3rem;
  background-color: #081c22;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: none;
  color: var(--text-color-light);
  text-align: center;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #21d07a;

  @media (min-width: 55rem) {
    display: flex;
  }
`;

export const MovieName = styled.h2`
  font-weight: 700;
  color: var(--text-color-dark);
`;

export const MovieDate = styled.p`
  color: var(--text-color-muted);
`;

export const MovieDescription = styled.h2`
  width: 100%;
  margin-top: 1rem;
  display: none;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-color-dark);
  font-size: var(--font-size-small);

  @media (max-width: 55rem) {
    display: -webkit-box;
  }
`;

export const PerCentIcon = styled.span`
  position: absolute;
  font-size: 0.3rem;
  top: 0.2rem;
  right: 0.4rem;
`;
