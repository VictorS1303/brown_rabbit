const mobileMenuToggleBtn = document.querySelector('#menu_toggle_btn')
const mobileMenuContentContainer = document.querySelector('.mobile-menu-content-container')
const mobileMenuSocialsContainer = document.querySelector('.socials-container')
const searchResultsToggleBtn = document.querySelector('#search_results_toggle_button') 
const searchResultsContainer = document.querySelector('.search-results-container')


const slides = document.querySelectorAll('.slide')
const prevSlideButton = document.querySelector('#prev_slide_btn')
const nextSlideButton = document.querySelector('#next_slide_btn')
const slideDescContainerArticles = document.querySelectorAll('.container.slide-desc-container article')
const articlesContainer = document.querySelector('.articles-container')

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
                        <h3>${article.title}</h3>
                        <h6 class="date">${article.date}</h6>
                    </header>
                    <p class="article-text">
                        ${article.articleText}
                    </p>
                    <button class="cta-btn">${article.readMoreBtn}</button>
                </article>
            </a>
        `
    )
}

generateArticles()

