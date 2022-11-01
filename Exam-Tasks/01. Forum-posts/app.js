window.addEventListener("load", main);

function main() {
    document.getElementById("publish-btn").addEventListener("click", createPost);
    document.getElementById("clear-btn").addEventListener("click", clearPost);
    let title = document.getElementById("post-title");
    let category = document.getElementById("post-category");
    let content = document.getElementById("post-content");
    let reviewConteiner = document.getElementById("review-list");
    let approveSection = document.getElementById("published-list");

    function createPost(e) {
        let titleValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;

        if (!titleValue || !categoryValue || !contentValue) {
            return;
        }
        createDOMsElements(titleValue, categoryValue, contentValue);
        clearForm();
    }
    function clearForm() {
        title.value = "";
        category.value = "";
        content.value = "";
    }
    function createDOMsElements(titleValue, categoryValue, contentValue) {
        let li = document.createElement("li");
        li.classList.add("rpost");

        let article = createArticle(titleValue, categoryValue, contentValue);

        let actionBtn = document.createElement("button");
        actionBtn.classList.add("action-btn");
        actionBtn.classList.add("edit");
        actionBtn.textContent = "Edit";
        actionBtn.addEventListener("click", editPost);

        let approveBtn = document.createElement("button");
        approveBtn.classList.add("action-btn");
        approveBtn.classList.add("approve");
        approveBtn.textContent = "Approve";
        approveBtn.addEventListener("click", approvePost);

        li.appendChild(article);
        li.appendChild(actionBtn);
        li.appendChild(approveBtn);

        reviewConteiner.appendChild(li)
    }

    function createArticle(titleValue, categoryValue, contentValue) {
        let article = document.createElement("article");

        let h = document.createElement("h4");
        h.textContent = titleValue;

        let categoryP = document.createElement("p");
        categoryP.textContent = `Category: ${categoryValue}`;

        let contentP = document.createElement("p");
        contentP.textContent = `Content: ${contentValue}`;

        article.appendChild(h);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        return article
    }

    function editPost(e) {
        let currentPost = e.target.parentElement;
        let articleContent = currentPost.getElementsByTagName("article")[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        title.value = titleValue;
        category.value = categoryValue.split(": ")[1];
        content.value = contentValue.split(": ")[1];
        currentPost.remove();
    }

    function approvePost(e) {
        let currentPost = e.target.parentElement;
        approveSection.appendChild(currentPost);
        Array.from(currentPost.querySelectorAll("button")).forEach(btn => btn.remove());
    }

    function clearPost(e) {
        Array.from(approveSection.children).forEach(li => li.remove());
    }
}

