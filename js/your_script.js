$(function() {
    $('#myTree').jstree({
        'core' : {
            'data' : [
                { "text" : "Root", "children" : [
                    { "text" : "Child 1" },
                    { "text" : "Child 2" }
                ]}
            ]
        }
    });

    // Exemplo de evento: quando um nó é selecionado
    $('#myTree').on("select_node.jstree", function(e, data) {
        console.log('Node selected: ' + data.node.text);
    });
});
