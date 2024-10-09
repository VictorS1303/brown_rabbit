const mobileMenuToggleBtn = document.querySelector('#menu_toggle_btn')
const mobileMenuContentContainer = document.querySelector('.mobile-menu-content-container')
const mobileMenuSocialsContainer = document.querySelector('.socials-container')
const searchResultsToggleBtn = document.querySelector('#search_results_toggle_button') 
const searchResultsContainer = document.querySelector('.search-results-container')
const currentPageNumber = document.querySelector('.current-page-number')
const totalPageNumber = document.querySelector('.total-page-number')


const slides = document.querySelectorAll('.slide')
const prevSlideButton = document.querySelector('#prev_slide_btn')
const nextSlideButton = document.querySelector('#next_slide_btn')
const slideDescContainerArticles = document.querySelectorAll('.container.slide-desc-container article')
const articlesContainer = document.querySelector('.articles-container')

const paginationSection = document.querySelector('.pagination-section')


// EVENTLISTENERS //
mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu)
prevSlideButton.addEventListener('click', prevSlide)
nextSlideButton.addEventListener('click', nextSlide)
paginationSection.addEventListener('click', (e) => updatePageNumber(e))
searchResultsToggleBtn.addEventListener('click', toggleSearchResultsContainer)



// Mobile Menu //

// Toggle Mobile Menu
function toggleMobileMenu()
{
    mobileMenuToggleBtn.classList.toggle('active')
    mobileMenuContentContainer.classList.toggle('active')
    mobileMenuSocialsContainer.classList.toggle('active')
}

// Slider //
function nextSlide()
{
    // Get current class
    const currentSlide = document.querySelector('.current')
    const currentSlideArticle = document.querySelector('.current-slide-article')

    // Remove current class
    currentSlide.classList.remove('current')
    currentSlideArticle.classList.remove('current-slide-article')

    // Check for next slide
    if (currentSlide.nextElementSibling)
    {
        // Add current to next sibling
        currentSlide.nextElementSibling.classList.add('current')  
        currentSlideArticle.nextElementSibling.classList.add('current-slide-article')
    }
    else
    {
      // Add current to start
      slides[0].classList.add('current')
      slideDescContainerArticles[0].classList.add('current-slide-article')
    }   
}
  
function prevSlide()
{
    // Get current class
    const currentSlide = document.querySelector('.current')
    const currentSlideArticle = document.querySelector('.current-slide-article')


    // Remove current class
    currentSlide.classList.remove('current')
    currentSlideArticle.classList.remove('current-slide-article')


    // Check for prev slide and previous slide article
    if (currentSlide.previousElementSibling)
    {
        // Add current to prev sibling
        currentSlide.previousElementSibling.classList.add('current')
        currentSlideArticle.previousElementSibling.classList.add('current-slide-article')
    }
    else
    {
        // Add current to last slide
        slides[slides.length - 1].classList.add('current')

        // Add current to the last corresponding article
        slideDescContainerArticles[slideDescContainerArticles.length - 1].classList.add('current-slide-article')
    }

}

function toggleSearchResultsContainer()
{
    searchResultsToggleBtn.classList.toggle('opened')
    searchResultsContainer.classList.toggle('active')
}

import {articles} from './articles.js'

// Generate Articles //
function generateArticles()
{
    articles.forEach((article) =>
        articlesContainer.innerHTML +=
        `
            <a href=${article.href}>
                <article>
                    <img src=${article.img} alt=${article.alt}>
                    <header>
                        <h3 class="primary-text">${article.title}</h3>
                        <h6 class="date-text">${article.date}</h6>
                    </header>
                    <p class="article-text primary-text">
                        ${article.articleText}
                    </p>
                    <button class="cta-btn">${article.readMoreBtn}</button>
                </article>
            </a>
        `
    )
}

generateArticles()

// Update Page Number
function updatePageNumber(e)
{
    let currentPage = parseInt(currentPageNumber.textContent)
    let totalPages = parseInt(totalPageNumber.textContent)


    if(e.target.matches('.prev-btn'))
    {
        currentPage--
        
        if(currentPage <= 1)
        {
            currentPage = 1
        }        
    }

    currentPage++

    // Ensure it doesn't go beyond the total page number
    if (currentPage >= totalPages)
    {
        currentPage = totalPages
    }

    // Update the text content with the new page number
    currentPageNumber.textContent = currentPage
}






