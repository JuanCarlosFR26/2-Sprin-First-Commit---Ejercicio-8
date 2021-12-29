document.querySelector('documento').addEventListener('onChange', function() {
    let pdfFile = document.querySelector('#documento').files[0];
    let pdfFileURL = URL.createObjectURL(pdfFile);

    document.querySelector('#vistaPrevia').setAttribute('src', pdfFileURL);
});
