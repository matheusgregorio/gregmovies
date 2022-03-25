import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem 0;
  @media (max-width: 800px) {
    padding: 4rem 0;
  }

  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

  img {
    width: 300px;
    border-radius: 1rem;
    /* margin-bottom: 2rem; */
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
    @media (max-width: 800px) {
      align-items: center;
      margin-left: 0;
      align-items: flex-start;
    }
  }

  button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: var(--text-color);
    padding: 0.7rem 1.7rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
    @media (max-width: 800px) {
      align-items: center;
      margin-left: 0;
      align-items: center;
    }
  }

  button:hover {
    background: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
    font-weight: normal;
  }

  .release-date {
    opacity: 0.6;
  }
`
