import React, {
  ChangeEvent,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { IoIosClose } from '@react-icons/all-files/io/IoIosClose';
import { GrPrevious } from '@react-icons/all-files/gr/GrPrevious';
import {
  ClearInputButton,
  SearchBtn,
  SearchIcon,
  SearchInputBar,
  SearchInputContainer,
  SIoMdSearch
} from './SearchBarStyle';
import {
  setSearchQuery,
  setSearchResults
} from '../../../redux/modules/searchSlice';
import {
  ResearchResults,
  researchItems
} from '../../../pages/searchResults/researchItem';

type SearchBarProps = {
  showSearchComp: boolean;
  setShowSearchComp: React.Dispatch<SetStateAction<boolean>>;
};

const SearchBar: React.FC<SearchBarProps> = ({
  showSearchComp,
  setShowSearchComp
}) => {
  const { searchQuery } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);

  // 인풋창 최대 입력 글자 제한
  const maxInputLength = 15;

  const handleHideSearchComp = () => {
    setShowSearchComp(false);
  };

  // 인풋창에 작성되는 내용을 인식해서 스토어로 보내주고, 입력 내용 지울 수 있는 state 삽입
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(setSearchQuery(e.target.value));
    setIsInputEmpty(!inputValue.trim());
    if (inputValue.length > maxInputLength) {
      alert(`최대 ${maxInputLength}자까지 입력이 가능합니다.`);
    }
  };

  const handleClearInput = () => {
    dispatch(setSearchQuery(''));
    setIsInputEmpty(true);
  };

  const handleSearch = async () => {
    // 공란 일 때 실행 안함.
    if (!searchQuery.trim()) {
      return;
    }

    const rresults: ResearchResults | undefined = await researchItems(
      searchQuery
    );
    if (!rresults) {
      console.error('수파베이스에 요청 중 실패:');
      return;
    }

    const { usedItemsWithImages, communityItemsWithImages } = rresults;

    dispatch(
      setSearchResults({
        usedItemResults: usedItemsWithImages || [],
        communityResults: communityItemsWithImages || []
      })
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/search-results?q=${encodeURIComponent(searchQuery)}`);
      handleSearch();
      setShowSearchComp(false);
    }
  };

  const checkWindowSize = () => {
    if (window.matchMedia('(max-width:768px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  });

  return (
    <SearchInputContainer $position={showSearchComp}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {isMobile && (
          <GrPrevious
            style={{
              color: 'var(--opc-100)',
              fontSize: '1.6rem',
              cursor: 'pointer'
            }}
            onClick={handleHideSearchComp}
          />
        )}
        <SearchInputBar
          type="text"
          placeholder={
            isMobile
              ? '검색어 입력 후 Enter키를 누르세요.'
              : '검색어를 입력하세요.'
          }
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          maxLength={maxInputLength}
        />
        {isMobile && !isInputEmpty && (
          <ClearInputButton onClick={handleClearInput}>
            <IoIosClose />
          </ClearInputButton>
        )}
        <SearchBtn onClick={handleSearch}>
          <SIoMdSearch />

          <SearchIcon />
        </SearchBtn>
      </div>
      {isMobile ? (
        <div>
          <div></div>
        </div>
      ) : (
        ''
      )}
    </SearchInputContainer>
  );
};

export default SearchBar;
