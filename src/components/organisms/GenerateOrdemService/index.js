// import React from "react";
// import {
//   ContainerButtons,
//   ContainerButtonsHeader,
//   ContainerIconModal,
//   TitleOS,
// } from "../SelectorNewOs/style";
// import api from "../../../api/api";
// import {
//   Childrens,
//   Container,
//   ContainerChildren,
//   SectionFooter,
// } from "./style";
// import { useHistory } from "react-router-dom";
// import { ReactComponent as ArrowBackNew } from "../../../assets/icons/arrowBackNew.svg";
// import CancelButton from "../../atoms/Buttons/CancelButton/style";
// import { BlueButton } from "../../atoms/Buttons/BlueButton/style";
// import HeaderOS from "../../molecules/HeaderOS";
// import InputSearch from "../../atoms/InputSearch";
// import GenerateOSItens from "../../molecules/GenerateOSItens";
// import { useState } from "react";
// import { useEffect } from "react";
// import Footer from "../../organisms/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import ModalGenerateOs from "../../molecules/ModalGenerateOs";
// import { openModal } from "../../../redux/actions";
// import ModalCancelOs from "../../molecules/ModalCancelOS";
// import { toast } from "react-toastify";
// import { DefaultToast } from "../../atoms/Toast/DefaultToast";
// import ModalCompanies from "../../molecules/ModalCompanies";
// import ArrowRegister from "../../atoms/ArrowRegister";

// const GenerateOS = () => {
//   const [CompanyModal, setCompanyModal] = useState(false);
//   const [checkedProfissional, setCheckedProfissional] = useState([]);
//   const [FirstHalfProfessional, setFirstHalfProfessional] = useState([]);
//   const [OrdemServicesData, setOrdemServicesData] = useState({});
//   const [LastHalfProfessional, setLastHalfProfessional] = useState([]);
//   const [ModalProfessional, setModalProfessional] = useState([]);
//   const [ModalProfessionalMeta, setModalProfessionalMeta] = useState({});
//   const [ModalOs, setModalOs] = useState(false);
//   const [order, setOrder] = useState("");
//   const [orderBy, setOrderBy] = useState("id");
//   const [professionalMeta, setProfessionalMeta] = useState({});
//   const [searchResult, setSearchResult] = useState("");
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const Modal = useSelector((state) => state.modalVisibility);

//   let params = {};

//   const GetProfessional = async () => {
//     try {
//       await api({
//         method: "GET",
//         url: `/orderOfServicePending?limit=14&search=${searchResult}&cnpj=${searchResult}&orderField=${orderBy}&order=${order}`,
//         params: params,
//       }).then((data) => {
//         setFirstHalfProfessional(data.data.data.slice(0, 7));
//         setLastHalfProfessional(data.data.data.slice(7, 14));
//         setProfessionalMeta(data.data.meta);
//       });
//     } catch (error) {}
//   };

//   const handleSubmit = async () => {
//     try {
//       await api({
//         method: "POST",
//         url: `/orderOfServiceIds?limit=14`,
//         data: checkedProfissional.map(item => item.id),
//         params: params,
//       }).then((res) => {
//         setModalProfessional(res.data.data);
//         setModalProfessionalMeta(res.data.meta);
//         dispatch(openModal({ type: "OPENMODAL" }));
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const nextPage = () => {
//     handleFilterRequest("next");
//     GetProfessional();
//   };

//   const previousPage = () => {
//     handleFilterRequest("previous");
//     GetProfessional();
//   };

//   const sortByName = () => {
//     order === "" && setOrder("desc");
//     order === "asc" && setOrder("desc");
//     order === "desc" && setOrder("asc");
//   };

//   const handleFilterRequest = (pagesFilter) => {
//     if (pagesFilter === "previous")
//       params.page = `${professionalMeta.current_page - 1}`;

//     if (pagesFilter === "next")
//       params.page = `${professionalMeta.current_page + 1}`;

//     if (pagesFilter === undefined) params.page = professionalMeta.current_page;
//   };

//   const handleFilterModalRequest = (pagesFilter) => {
//     if (pagesFilter === "previous")
//       params.page = `${ModalProfessionalMeta.current_page - 1}`;

//     if (pagesFilter === "next")
//       params.page = `${ModalProfessionalMeta.current_page + 1}`;

//     if (pagesFilter === undefined)
//       params.page = ModalProfessionalMeta.current_page;
//   };

//   useEffect(() => {
//     GetProfessional(searchResult);
//     handleFilterRequest(order);
//   }, [order, orderBy, searchResult]);

//   useEffect(() => {
//     if (ModalProfessionalMeta.current_page > ModalProfessionalMeta.last_page) {
//       return (params.page = ModalProfessionalMeta.last_page), handleSubmit();
//     }
//   }, [ModalProfessionalMeta]);

//   const goBackClickHandler = () => {
//     history.push("/serviceOrders");
//   };

//   return (
//     <>
//       <Container>
//         {CompanyModal && (
//           <ModalCompanies
//             CancelEvent={() => {
//               dispatch(openModal({ type: "OPENMODAL" }));
//               setCompanyModal((prev) => !prev);
//             }}
//             OrdemServicesData={OrdemServicesData}
//             ModalProfessional={ModalProfessional}
//             setOrdemServicesData={setOrdemServicesData}
//           />
//         )}
//         {Modal && (
//           <ModalGenerateOs
//             ModalProfessional={ModalProfessional}
//             ModalProfessionalMeta={ModalProfessionalMeta}
//             handleSubmit={handleSubmit}
//             setCompanyModal={setCompanyModal}
//             handleFilterModalRequest={handleFilterModalRequest}
//             checkedProfissional={checkedProfissional}
//             setCheckedProfissional={setCheckedProfissional}
//           />
//         )}
//         {ModalOs && (
//           <ModalCancelOs
//             text={"Tem certeza que deseja cancelar a O.S?"}
//             redButtonClickHandler={() => history.push("/serviceOrders")}
//             CloseButtonClickHandler={() => setModalOs((prev) => !prev)}
//           />
//         )}
//         <ContainerButtonsHeader>
//           <ContainerIconModal>
//             <ArrowRegister clickHandler={goBackClickHandler} />
//           </ContainerIconModal>
//           <TitleOS>Gerar O.S</TitleOS>
//         </ContainerButtonsHeader>
//         <ContainerButtons bottom="1.5em">
//           <CancelButton
//             margin="10px"
//             onClick={() => setModalOs((prev) => !prev)}
//           >
//             Cancelar
//           </CancelButton>
//           <BlueButton
//             width="108px"
//             height="40px"
//             onClick={() => {
//               if (checkedProfissional.length > 0) {
//                 handleSubmit(checkedProfissional);
//               } else {
//                 return toast.error(
//                   <DefaultToast text={"Selecione os profissionais"} />
//                 );
//               }
//             }}
//           >
//             Confirmar
//           </BlueButton>
//         </ContainerButtons>
//       </Container>
//       <Container>
//         <ContainerChildren>
//           <Childrens>
//             <div className="Header">
//               <InputSearch
//                 value={searchResult}
//                 setSearchResult={setSearchResult}
//                 lineWidth="280px"
//                 inputWidth="310px"
//               />
//               <HeaderOS sortByName={sortByName} setOrderBy={setOrderBy} />
//               {FirstHalfProfessional?.map((index) => (
//                 <GenerateOSItens
//                   key={index.id}
//                   index={index}
//                   setCheckedProfissional={setCheckedProfissional}
//                   checkedProfissional={checkedProfissional}
//                 />
//               ))}
//             </div>
//           </Childrens>
//           <Childrens>
//             <div className="continuation">
//               <HeaderOS sortByName={sortByName} setOrderBy={setOrderBy} />
//               <SectionFooter>
//                 {LastHalfProfessional?.map((index) => (
//                   <GenerateOSItens
//                     key={index.id}
//                     index={index}
//                     setCheckedProfissional={setCheckedProfissional}
//                     checkedProfissional={checkedProfissional}
//                   />
//                 ))}
//               </SectionFooter>
//               <Footer
//                 onPrice={checkedProfissional}
//                 height="3em"
//                 border="2px solid #ccc"
//                 firstPage={professionalMeta.first_page}
//                 nextPage={() => nextPage()}
//                 previousPage={() => previousPage()}
//                 lastPage={professionalMeta.last_page}
//                 currentPage={professionalMeta.current_page}
//               />
//             </div>
//           </Childrens>
//         </ContainerChildren>
//       </Container>
//     </>
//   );
// };

// export default GenerateOS;
