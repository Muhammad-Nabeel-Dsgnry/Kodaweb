import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "../../../styles/projectDetail.module.css";
// import checkIcon from '../../../public/Assets/Assets/For-web/pkg-details.svg'
import mostPopularIcon from "../../../public/Assets/Assets/For-web/star.png";
import Image from "next/image";
import { formData } from "../../context/Context";

const Optional = ({ item }) => {
  const { optionalPackage, setOptionalPackage } = useContext(formData);
  console.log('Console from Optional Component for Context API data', optionalPackage)

//   const [optionalPackage, setOptionalPackages] = useState({});
//   console.log("Optional package item console : ", optionalPackage);

//   const getLocalStorageData = JSON.parse(localStorage.getItem("Package-Data"));
//   const timeDuration = getLocalStorageData.timeDuration;
//   const timeDurationPrice = getLocalStorageData.timeDurationPrice;

//   console.log("Optional component Time Duration : ", timeDurationPrice);

//   const [optPkg, setOptPkg] = useState(item);
//   const [localStorageData_Id, setLocalStorageData_Id] = useState(getLocalStorageData.id);
//   const [localStorageData_Name, setLocalStorageData_Name] = useState(getLocalStorageData.name);
//   const [localStorageData_Price, setLocalStorageData_Price] = useState(getLocalStorageData.price);
//   const [localStorageData_PricingGroup, setLocalStorageData_PricingGroup] =
//     useState(getLocalStorageData.pricing_group);

  const handleOptionalPkg = () => {
    // console.log('Handle Optional Package Console : ', optPkg)
    // console.log('get local-storage data Id : ', localStorageData_Id)
    // console.log('get local-storage data Name : ', localStorageData_Name)
    // console.log('get local-storage data Price : ', localStorageData_Price)
    // console.log('get local-storage data Pricing group : ', localStorageData_PricingGroup)
    // localStorage.setItem(
    //   "Package-Data",
    //   JSON.stringify({
    //     timeDuration: timeDuration,
    //     timeDurationPrice: timeDurationPrice,
    //     id: item.id,
    //     name: item.name,
    //     title: item.title,
    //     price: item.price,
    //     pricing_group: localStorageData_PricingGroup,
    //   })
    // );
    // localStorage.setItem('Package-Data', JSON.stringify({ timeDuration: timeDuration, timeDurationPrice: timeDurationPrice, ...optionalPackage }))

    // const newPackage = localStorage?.setItem('Package-Data', JSON.stringify(item))
    setOptionalPackage(item)
  };

  // console.log('logo optional maped items : ', item.content)
//   useEffect(() => {
//     setOptionalPackages(JSON.parse(localStorage.getItem("Package-Data")));
//   }, []);

  return (
    <>
      <section>
        <Container className={`${styles["detailsMainContainer"]}`}>
          <Row className={`${styles["detailsHeaderRow"]}`}>
            <Col lg={9} md={12} xs={12}>
              <div
                className={`${styles["detailsTitleCol"]} ${
                  styles["optionalDetailsTitleCol"]
                } ${"d-flex justify-content-start align-items-center flex-wrap"}`}
              >
                <Form.Check
                  type="radio"
                  name="package details"
                  label={`${item?.title}`}
                  id={`${item?.title}`}
                  onChange={handleOptionalPkg}
                  className={`${styles["packageBriefRadio"]}`}
                />
                <span
                  className={`${"text-white rounded-pill py-2 px-3 text-nowrap ms-3"} ${
                    styles["popularIconWrapper"]
                  }`}
                >
                  <i className={`${"me-3"}`}>
                    <Image
                      src={mostPopularIcon}
                      alt="package icon"
                      width={19}
                      height={18}
                    />
                  </i>
                  {item?.badgetitle}
                </span>
              </div>
              <div className={`${styles["detailsContentCol"]}`}>
                <p>
                  {item?.content}{" "}
                  <span className={`${styles["optionalPackageDiscount"]}`}>
                    {" "}
                    save{item?.discount}%+
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={3} md={12} xs={12}>
              <div className={`${styles["detailsPriceCol"]}`}>
                <p>From ${item?.price}</p>
              </div>
            </Col>
          </Row>
          <Row className={`${styles["detailsFooterRow"]} ${"mt-3 w-100"}`}>
            <Col lg={8} md={8} xs={12} className={`${"ms-4"}`}>
              <div
                className={`${
                  styles["detailsFooterCol"]
                } ${"d-flex justify-content-start flex-wrap align-items-center"}`}
              >
                {item.options?.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        styles["detailsFooterOptionsWrapper"]
                      } ${"me-3"}`}
                    >
                      <span
                        className={`${
                          styles["packageOptionsBox"]
                        } ${"d-flex justify-content-center align-items-center"}`}
                      >
                        <Image
                          src="/Assets/Assets/For-web/pkg-details.svg"
                          alt="package options"
                          width="18"
                          height="15"
                        />
                        <li
                          className={`${styles["packageOptions"]}`}
                          key={index}
                        >
                          {i}
                        </li>
                      </span>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Optional;
