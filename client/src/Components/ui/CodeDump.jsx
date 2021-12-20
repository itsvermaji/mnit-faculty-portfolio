// function generatePDF() {
  //   let doc = new jsPDF()
  // for(let i=0; i<1; i++) {
  //   let text = `${i+1}).`+ articles[i].authors + ` " ` +articles[i].title +` " `+ articles[i].publication
  //     doc.text(text, 10,  10);
  //   }

  //   doc.save("publishedArticles.pdf")
  // }

//   function generateDoc() {
//     let doc = new Document();

//     doc.createParagraph("Hola ChicaGuapa")
//     for(let i=0; i<articles.length; i++) {
//       doc.createParagraph(text)
//       console.log(text);
//     }
//     for (let i = 0; i < articles.length; i++) {
//       let text = `${i + 1}).  ` +articles[i].authors +` "` +articles[i].title +`", ` +articles[i].publication;
//         (function (i) {
//           window.setTimeout(function () {
//             let doc = new Document();
//             doc.createParagraph(`${text}`);
//             saveDocumentToFile(
//               doc,
//               `articles.docx`
//             );
//           }, i * 2000);
//         })(i);
//     }
//     saveDocumentToFile(doc, `New Doc.docx`);
//   }
