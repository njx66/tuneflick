const pNumbers = document.querySelector("#p-numbers");
const pList = document.querySelector("#latest-container");
const wrapper = document.querySelector(".latest-wrapper");
const loader = document.querySelector("#loader");
const listItems = pList.querySelectorAll(".latest-post");

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

const paginationLimit = 4;
const pageCount = Math.ceil(listItems.length / paginationLimit);

let currentPage = 1;

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
  };
  
  const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
  };

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll('.p-numbers').forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    })
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "p-numbers";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    pageNumber.classList.add("pagenumber");
    
    pNumbers.appendChild(pageNumber);
  };
  
  const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
      appendPageNumber(i);
    }
  };
  
  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    
    handleActivePageNumber();
    handlePageButtonsStatus();
    
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    
    listItems.forEach((item, index) => {
      item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden");
      }
    });
  };
  
  window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);
  
    prevButton.addEventListener("click", () => {
      setCurrentPage(currentPage - 1);
      loader.classList.add('spin');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

      setTimeout(function() {
        loader.classList.remove('spin');
      }, 750);
    });
  
    nextButton.addEventListener("click", () => {
      setCurrentPage(currentPage + 1);
      loader.classList.add('spin');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

      setTimeout(function() {
        loader.classList.remove('spin');
      }, 750);
    });
  
    document.querySelectorAll(".p-numbers").forEach((button) => {
      const pageIndex = Number(button.getAttribute("page-index"));
  
      if (pageIndex) {
        button.addEventListener("click", () => {
          setCurrentPage(pageIndex);
          loader.classList.add('spin');
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })

          setTimeout(function() {
            loader.classList.remove('spin');
          }, 750);
        });
      }
    });
  });