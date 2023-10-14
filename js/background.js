$('#tree').on("select_node.jstree", function(e, data) {
    var url = data.node.data.url;
    if(url) {
      chrome.tabs.update({url: url});
    }
  });
  