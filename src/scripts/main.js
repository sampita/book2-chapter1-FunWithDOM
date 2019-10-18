// Question 1: Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

document.querySelector(".article__header")
const sectionOne = document.querySelector(".article__header")
sectionOne.textContent = "Welcome to the Sam Pita Blog";


// Question 2: Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const elements = document.querySelectorAll(".article__header")

// console.log("These are .article__headers", elements)
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("important");
}

// console.log("Important added", elements);

// Question 3: Obtain a reference the element with a class of dashed and remove it.
const dashedEl = document.querySelector(".dashed")

dashedEl.classList.remove("dashed")

//Question 4: Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const articleFooterEl = document.querySelector(".article__footer")

articleFooterEl.classList.add("goldenrod")



