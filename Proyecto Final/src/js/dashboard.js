new DataTable('#example', {
    lengthMenu: [
        [10, 20, 50, -1],
        [10, 20, 50, 'All'],
    ],
    layout: {
        bottomEnd: {
            paging: {
                boundaryNumbers: false
            }
        }
    },
    language:{
        "decimal":        "",
        "emptyTable":     "No existen datos en la tabla",
        "info":           "Mostrando _START_ de _END_ de un total de  _TOTAL_ registros",
        "infoEmpty":      "Mostrando 0 de 0 de 0 registros",
        "infoFiltered":   "(filtrado de _MAX_ total de registros)",
        "infoPostFix":    "",
        "thousands":      ",",
        "lengthMenu":     "Mostrar _MENU_ registros",
        "loadingRecords": "Cargando...",
        "processing":     "",
        "search":         "Buscar:",
        "zeroRecords":    "No Se encontró ningun registro",
        "paginate": {
            "first":      "Primero",
            "last":       "Último",
            "next":       "Siguiente",
            "previous":   "Anterior"
        },
        "aria": {
            "orderable":  "Ordenar por esta columna",
            "orderableReverse": "Orden inverso de columna"
        }
    }
});