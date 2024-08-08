    filterFromQueryString: {
        const href = window.location.href;
        const queryString = href.split("?")[1];
        const searchParams = new URLSearchParams(queryString);
        const query = searchParams.get("query");
        if (!query) break filterFromQueryString;
        get(".posts").forEach(post => {
            const postText = post.textContent;
            const textLowercase = postText?.toLowerCase();
            const containsQuery = textLowercase.includes(query);
            if (containsQuery) return;
            post.style.display = "none";
        });
    }