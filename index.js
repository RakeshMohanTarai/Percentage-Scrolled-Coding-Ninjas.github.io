window.addEventListener("scroll", function() {

  // calculate the scroll process
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // find the top position of the scroll bar
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // find where user scroll bar postion
  const scrollPercent = (scrollTop / scrollHeight) * 100; // calculate the percent where the sctoll bar is right now
  
  // Update the scroll percentage display
  const scrollPercentageBox = document.querySelector('#viewedSection');// get the percentage box
  scrollPercentageBox.textContent = `${Math.round(scrollPercent)}%Viewed`; // display the scrollPercent in the viewed box
  
  // Update the progress indicator
  const progressBar = document.querySelector('#progress-bar span');
  progressBar.style.width = scrollPercent + '%'; // here it changes it's width according to the scroll percentage
  });