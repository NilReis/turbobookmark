document.getElementById('showSidebar').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
          chrome.scripting.executeScript({
              target: {tabId: tabs[0].id},
              files: ['sidebar.js']
          });
      }
  });
});
