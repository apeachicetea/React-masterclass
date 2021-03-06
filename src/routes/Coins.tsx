import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
  `;

  const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const CoinsList = styled.ul``;

  const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    
    margin-bottom: 10px;
    border-radius: 15px;
    a {
      transition: color 0.2s ease-in;
      display: flex;
      align-items: center;
      padding: 20px;
    }
    &:hover {
      a {
        color: ${props => props.theme.accentColor};
      }
    }
  `;

  const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
  `;

  const Loader = styled.span`
    text-align: center;
    display: block;
    font-size: 30px;
    margin-top: 50px;
  `;

  const Img = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 10px;
  `;

  interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
  }

function Coins() {
  
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<CoinInterface[]>([]);

  useEffect(() => {
    (async() => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      // console.log(json);
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, [])

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {
      loading
      ? <Loader>Loading...</Loader>
      : <CoinsList>
        { 
          coins.map((el)=>(
            <Coin key={el.id}>
              <Link 
                to={{
                  pathname: `/${el.id}`,
                  state: { name: el.name }
                }}
              >
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${el.symbol.toLowerCase()}`} />
                {el.name} &rarr;
              </Link>
            </Coin>)
          )
        }
        </CoinsList>
      }
    </Container>
  )
}

export default Coins;