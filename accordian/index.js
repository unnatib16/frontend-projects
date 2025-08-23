const accordionContainer = document.getElementById("accordion-list");
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", ()=>{
    const clickedItem = header.parentElement
    const isActive = clickedItem.classList.contains("active")

    const allItems = document.querySelectorAll(".accordion-item")
    allItems.forEach(item => {
      item.classList.remove("active")
      const accordionContent = item.lastElementChild
      accordionContent.classList.remove("active")
    })

    if(!isActive) {
      clickedItem.classList.add("active")
      const accordionContent = clickedItem.lastElementChild
      accordionContent.classList.add("active")
    }
  })
})

// Function to create a single accordion item
function createAccordionItem(item) {

  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item";
  accordionItem.setAttribute("data-id", item.id);

  const accordionHeader = document.createElement("div");
  accordionHeader.className = "accordion-header";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const icon = document.createElement("span");
  icon.className = "accordion-icon";
  icon.textContent = "+";

  // Add title and icon to header
  accordionHeader.appendChild(title);
  accordionHeader.appendChild(icon);

  const accordionContent = document.createElement("div");
  accordionContent.className = "accordion-content";

  const accordionText = document.createElement("div");
  accordionText.className = "accordion-text";
  accordionText.textContent = item.description;

  // Add text to content
  accordionContent.appendChild(accordionText);

  // Add click event to header
  accordionHeader.addEventListener("click", () => {
    toggleAccordion(accordionItem);
  });

  // Put everything together
  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionContent);

  return accordionItem;
}

// Function to toggle accordion open/closed
function toggleAccordion(clickedItem) {
  const isActive = clickedItem.classList.contains("active");
  
  // Close all accordion items first
  const allItems = document.querySelectorAll(".accordion-item");
  allItems.forEach(item => {
    item.classList.remove("active");
    const content = item.querySelector(".accordion-content");
    content.classList.remove("active");
  });

  // If the clicked item wasn't active, open it
  if (!isActive) {
    clickedItem.classList.add("active");
    const content = clickedItem.querySelector(".accordion-content");
    content.classList.add("active");
  }
}

// Function to render all accordion items
function renderAccordion() {
  accordionContainer.innerHTML = "";
  
  accordionData.forEach(item => {
    const accordionItem = createAccordionItem(item);
    accordionContainer.appendChild(accordionItem);
  });
}