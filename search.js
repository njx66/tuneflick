    filterFromQueryString: {
        const href = window.location.href;
        const queryString = href.split("?")[1];
        const searchParams = new URLSearchParams(queryString);
        const query = searchParams.get("query");

        if (!query) break filterFromQueryString;
        get(".posts").forEach(post => {
            const postText = post.textContent;
            const textLowerCase = postText?.toLowerCase();
            const containsQuery = textLowerCase.includes(query.toLowerCase());
            var searchText = document.querySelector(".search-results");

            searchText.innerHTML = '';

            if (containsQuery) {
                post.style.display = "flex";
                searchText.innerHTML = "search results for; " + query;
            } else if (!containsQuery) {
                post.style.display = "none";
                searchText.innerHTML = "search results for; " + query;
            } else {
                post.style.display = "none";
            }
        });
    }