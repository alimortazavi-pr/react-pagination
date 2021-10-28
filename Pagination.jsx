import { useEffect, useState } from "react";

function Pagination({ page, totalPages, changePage }) {
  //States
  const [pages, setPages] = useState([]);

  //Effects
  useEffect(() => {
    let mapPages = [];
    for (let i = 1; i <= totalPages; i++) {
      mapPages.push(i);
    }
    setPages(mapPages);
  }, [totalPages]);

  //Functions
  function previousPage() {
    if (page > 1) {
      changePage(page - 1);
    }
  }

  function nextPage() {
    if (page < totalPages) {
      changePage(page + 1);
    }
  }

  return (
    <div className="flex items-center justify-center my-4">
      <div className="btn-group">
        <button className="btn btn-primary" onClick={previousPage}>
          <i className="fas fa-angle-left" />
        </button>
        {pages.map((p) => {
          if (
            (page - 1 < p && p < page + 1) ||
            (p < page && p > page - 2) ||
            (p > page && p < page + 2) ||
            p === 1 ||
            p === totalPages
          ) {
            if (totalPages > 3 && p === totalPages && page < totalPages - 2) {
              return (
                <>
                  <button className={`btn btn-primary`}>...</button>
                  <button
                    className={`btn ${p === page ? "" : "btn-primary"}`}
                    onClick={() => changePage(p)}
                  >
                    {p}
                  </button>
                </>
              );
            }
            if (totalPages > 3 && p === 1 && page > 3) {
              return (
                <>
                  <button
                    className={`btn ${p === page ? "" : "btn-primary"}`}
                    onClick={() => changePage(p)}
                  >
                    {p}
                  </button>
                  <button className={`btn btn-primary`}>...</button>
                </>
              );
            }
            return (
              <button
                key={p}
                className={`btn ${p === page ? "" : "btn-primary"}`}
                onClick={() => changePage(p)}
              >
                {p}
              </button>
            );
          }
          return "";
        })}
        <button className="btn btn-primary" onClick={nextPage}>
          <i className="fas fa-angle-right" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
