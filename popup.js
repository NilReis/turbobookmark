$(function() {
    $('#tree').jstree({
      'core': {
        'data': [
          {
            "text": "Google",
            "data": {"url": "https://www.google.com"},
            "children": []
          },
          {
            "text": "Bing",
            "data": {"url": "https://www.bing.com"},
            "children": []
          }
          // Adicione mais nós conforme necessário
        ]
      }
    });
  
    $('#tree').on("select_node.jstree", function(e, data) {
      var url = data.node.data.url;
      if(url) {
        chrome.tabs.create({url: url});
      }
    });
  });
  