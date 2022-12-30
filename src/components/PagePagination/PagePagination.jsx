import 'rc-pagination/assets/index.css';

import Pagination from 'rc-pagination';

export const PagePagination = ({ totalResults, currentPage, setPage }) => {
  const handlePageClick = e => {
    setPage({ page: e });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Pagination
      onChange={handlePageClick}
      current={currentPage}
      total={totalResults}
      pageSize={20}
      showLessItems
      showTitle={false}
    />
  );
};
