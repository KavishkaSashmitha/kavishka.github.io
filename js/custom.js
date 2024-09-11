(function ($) {
  'use strict';

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
    $('.project').toggleClass('dark-mode'); // Ensure project section gets updated
  });

  // HEADER
  $('.navbar').headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  window.filterProjects = function () {
    var searchInput = document
      .getElementById('projectSearch')
      .value.toLowerCase()
      .trim();
    var statusFilter = document.getElementById('projectStatusFilter').value;
    var cards = document.getElementsByClassName('project-card');

    Array.from(cards).forEach(function (card) {
      var title = card.getAttribute('data-title').toLowerCase();
      var description = card.getAttribute('data-description').toLowerCase();
      var status = card.getAttribute('data-status');

      // Check if any letter in the search input matches the title or description
      var matchesSearch =
        !searchInput ||
        Array.from(searchInput).some(
          (char) => title.includes(char) || description.includes(char)
        );
      var matchesStatus = !statusFilter || status === statusFilter;

      if (matchesSearch && matchesStatus) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // JavaScript for showing a preview in the iframe
  window.showPreview = function (url) {
    var previewSection = document.getElementById('previewSection');
    var previewFrame = document.getElementById('previewFrame');

    // Set the iframe source to the project URL
    previewFrame.src = url;
    previewSection.style.display = 'block'; // Show the preview section
  };
})(jQuery);
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000);
