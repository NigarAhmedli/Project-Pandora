import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../../../components/common/layout/Layout';
import Detail from './container/Detail';
import CharmsDetail from './charmsDetail/CharmsDetail';
import BraceletDetail from './braceletDetail/BraceletDetail';
import NecklacesDetail from './necklacesDetail/NecklacesDetail';
import RingsDetail from './ringsDetail/RingsDetail';
import CollectionDetail from './collectionDetail/CollectionDetail';

const DetailPage = () => {
  const location = useLocation();
  const isCharm = location.pathname.includes('/charms/');
  const isBracelet = location.pathname.includes('/bracelet/');
  const isNecklace = location.pathname.includes('/necklaces/');
  const isRing = location.pathname.includes('/rings/');
  const isCollection = location.pathname.includes('/collection/');




  return (
    <Layout>
 {isCharm ? (
      <CharmsDetail />
    ) : isBracelet ? (
      <BraceletDetail />
    ) : isNecklace ? (
      <NecklacesDetail />
    ) : isRing ? (
      <RingsDetail />
    ) : isCollection ? (
      <CollectionDetail />
    ) : (
      <Detail />
    )}
    </Layout>
  );
};

export default DetailPage;
