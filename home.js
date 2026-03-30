// Initialize AOS (Animate On Scroll)
AOS.init({
  once: true, 
  offset: 120, 
  duration: 800,
});

function openTab(evt, tabId) {
  // Hide all panes
  const panes = document.querySelectorAll('.t-pane');
  panes.forEach(p => p.classList.remove('active'));

  // Deactivate all buttons
  const buttons = document.querySelectorAll('.t-btn');
  buttons.forEach(b => b.classList.remove('active'));

  // Show selected
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}









// 1. Safely Initialize AOS (so it doesn't break if the script is missing)
if (typeof AOS !== 'undefined') {
  AOS.init({
    once: true, 
    offset: 120, 
    duration: 800,
  });
}

// 2. Tab Logic (You already have this)
function openTab(evt, tabId) {
  const panes = document.querySelectorAll('.t-pane');
  panes.forEach(p => p.classList.remove('active'));

  const buttons = document.querySelectorAll('.t-btn');
  buttons.forEach(b => b.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// 3. Back to Top Logic
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// --- OUR CRAFT UX FIX (Accordion Style) ---
function toggleCraft(clickedPanel) {
  // If the user clicks the panel that is ALREADY open, just close it.
  if (clickedPanel.classList.contains('active')) {
    clickedPanel.classList.remove('active');
    return;
  }
  
  // Otherwise, find ALL panels and remove the 'active' class (close them)
  const allPanels = document.querySelectorAll('.craft-panel');
  allPanels.forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Finally, open the one the user just clicked
  clickedPanel.classList.add('active');
}








// --- CONCEPT MAP SCROLL ANIMATION ---
document.addEventListener("DOMContentLoaded", () => {
  const lineFill = document.getElementById("scrollDrawLine");
  const wrapper = document.querySelector(".concept-wrapper");
  const nodes = document.querySelectorAll(".concept-node");

  if(!wrapper || !lineFill) return; // Failsafe if not on the page

  window.addEventListener("scroll", () => {
    // 1. Calculate how far down the wrapper the user has scrolled
    const wrapperRect = wrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Start drawing when the top of the wrapper enters the middle of the screen
    let scrollPercentage = ((windowHeight / 1.5) - wrapperRect.top) / wrapperRect.height;
    
    // Cap it between 0 and 1 (0% to 100%)
    scrollPercentage = Math.max(0, Math.min(1, scrollPercentage));
    
    // Update the red line height
    lineFill.style.height = (scrollPercentage * 100) + "%";

    // 2. Light up the nodes when the line touches them
    nodes.forEach((node) => {
      const nodeRect = node.getBoundingClientRect();
      const lineBottom = lineFill.getBoundingClientRect().bottom;

      // If the bottom of the red line passes the middle of the node, light it up
      if (lineBottom >= (nodeRect.top + (nodeRect.height / 2))) {
        node.classList.add("active-node");
      } else {
        node.classList.remove("active-node");
      }
    });
  });
});



