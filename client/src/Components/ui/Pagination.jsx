// export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    
//     const [pages] = useState(Math.round(data.length / dataLimit));
//     const [currentPage, setCurrentPage] = useState(1);
  
//     let url = 

//     function goToNextPage() {
//        fetch(url, {
//            method:"GET",
//            headers: {
//                "Content-Type": "application/json",
//                 "x-access-token":token,
//             },
//        })
//        .then((response)=> response..json())
//        .then((resData)=> {
//            console.log("New Page Data", resData);

//         })
//         .catch((error) => {
//             console.error("An error occured", error);
//         });
  
//     }
    
//     function goToPreviousPage() {
//        // not yet implemented
//     }
  
//     function changePage(event) {
//        // not yet implemented
//     }
  
//     const getPaginatedData = () => {
//        // not yet implemented
//     };
  
//     const getPaginationGroup = () => {
//        // not yet implemented
//     };
  
//     return (
//       ...
//     );
//   }