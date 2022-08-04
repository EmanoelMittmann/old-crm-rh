import React from 'react';
import { Main, Container, Title, LastContainer } from './style';
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg';
import { LocalStorageKeys } from '../../../settings/LocalStorageKeys';

const componentes = (data, fnOrder) => {
  return data.map((item, index) =>
    item.endContainer ? (
      <LastContainer key={index}>
        <Title>{item.name}</Title>
      </LastContainer>
    ) : (
      <Container key={index}>
        <Title>{item.name}</Title>
        {item.order ? <Arrows onClick={() => fnOrder(item.field)} /> : <></>}
      </Container>
    )
  );
};

function ListHeader({ data, fnOrder }) {
  const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));

  if (user.user_type_id === 1)
    return (
      <Main template="1.5fr 1fr 1fr 2fr">{componentes(data, fnOrder)}</Main>
    );

  return <Main template=".5fr 1fr 2fr 1fr">{componentes(data, fnOrder)}</Main>;
}

export default ListHeader;
