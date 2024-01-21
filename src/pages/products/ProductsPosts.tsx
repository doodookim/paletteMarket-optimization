import { useNavigate } from 'react-router';
import ProductsWriteForm from '../../components/prducts/ProductsPosts/ProductsWriteForm'
import * as St from '../../styles/products/ProductsPosts'
import { ProfileObject } from '../community/model';
import { useEffect, useState } from 'react';
import { supabase } from '../../api/supabase/supabaseClient';

const ProductsPosts = () => {

  return (
    <St.EntireContainer>
      <St.ContentsContainer>
        <St.TitleContainer>
          <St.Title>판매하기</St.Title>
          <St.TetleRequired>*필수항목</St.TetleRequired>
        </St.TitleContainer>
        <St.Hr/>
          <ProductsWriteForm />
      </St.ContentsContainer>
    </St.EntireContainer>
  )
}

export default ProductsPosts