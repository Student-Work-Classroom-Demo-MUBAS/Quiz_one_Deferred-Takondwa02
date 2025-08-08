// TODO: Task 1 - Add JavaScript to toggle navigation links when hamburger menu is clicked

// TODO: Task 3 - Add JavaScript to toggle light/dark theme with animation when button is clicked

// TODO: Task 4 - Use jQuery to:
// - Highlight clicked list item
// - Clear highlights when "Clear" button is clicked
// - Add new list items from form input without reloading the page


let button = document.querySelector("button");
button.addEventListener("click", function() {
    
});


// List item highlighting
  $('#item-list').on('click', 'li', function () {
    // Remove highlight from all
    $('#item-list li').removeClass('highlighted');
    // Highlight clicked item
    $(this).addClass('highlighted');
  });

  $(document).ready(function () {
  // Theme Toggle Button
  $('#theme-toggle').on('click', function () {
    $('body').toggleClass('dark-theme');
    // Update aria-pressed attribute for accessibility
    const isDark = $('body').hasClass('dark-theme');
    $(this).attr('aria-pressed', isDark);
  });