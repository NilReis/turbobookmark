document.getElementById('showSidebar').addEventListener('click', async function() {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  if (tab) {
      chrome.scripting.executeScript({
          target: {tabId: tab.id},
          files: ['sidebar.js']
      });
  }
});