import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Stack,
} from "react-bootstrap";
import styles from "../../../styles/projectDetail.module.css";
import Image from "next/image";
import uploadIcon from "../../../public/Assets/Assets/For-web/upload.png";
import { SketchPicker } from "react-color";
import { useState, useEffect, useContext } from "react";
import SectionContent from "../sectionContent";
import {
  Logo_Design_Duration,
  Logo_Branding_Identity_Duration,
} from "./DurationData";
import GuaranteeIcon from "../../../public/Assets/Assets/For-web/tick.svg";
import Link from "next/link";
import ProjectBrief from "../step3/projectBrief";
import Step2 from "../step2/step2";
// import checkIcon from '../../../public/Assets/Assets/For-web/pkg-details.svg'
import Optional from "./Optional";
import LogoOptional from "./logoOptional";
import BrandingOptional from "./brandingOptional";
import WebsiteOptional from "./websiteOptional";
import MarketingOptional from "./marketingOptional";
import Stepper from "../stepper/stepper";
import { formData } from "../../context/Context";

const StepOneForm = () => {
  const { setStepOneData, setT_Duration, setT_DurationPrice, setIsStepTwoActive,
    setIsStepThreeActive } = useContext(formData);
    setIsStepTwoActive(false)
    setIsStepThreeActive(false)

  const [isStepOne, setIsStepOne] = useState(true);
  // const [isStepTwo, setIsStepTwo] = useState(false)
  const [isStepper, setIsStepper] = useState(true);
  const [validated, setValidated] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [businessNameErr, setBusinessNameErr] = useState("");

  const [businessSlogan, setBusinessSlogan] = useState("");
  const [businessSloganErr, setBusinessSloganErr] = useState("");

  const [industry, setIndustry] = useState("");
  const [industryErr, setIndustryErr] = useState("");

  const [logoType, setLogoType] = useState("");

  const [productDescription, setProductDescription] = useState("");
  const [productDescriptionErr, setProductDescriptionErr] = useState("");

  const [competitor, setCompetitor] = useState("");

  const [communicate, setCommunicate] = useState("");

  const [contentPages, setContentPages] = useState("Reference link");

  const [primaryColor, setPrimaryColor] = useState("#FF0000");
  const [primaryColorErr, setPrimaryColorErr] = useState("");
  const [primarypallet, setPrimarypallet] = useState(false);
  // console.log('primaryColor', primaryColor)

  const [secondaryColor, setSecondaryColor] = useState("#57C070");
  const [secondaryColorErr, setSecondaryColorErr] = useState("");
  const [secondarypallet, setSecondarypallet] = useState(false);

  const [ascendColor, setAscendColor] = useState("#0066FF");
  const [ascendColorErr, setAscendColorErr] = useState("");
  const [ascendpallet, setAscendpallet] = useState(false);

  const [packageDetails, setPackageDetails] = useState({});
  const [isPackageLogo, setIsPackageLogo] = useState({});
  const [isPackageWeb, setIsPackageWeb] = useState({});
  console.log("Get Logo Package : ", isPackageWeb?.name);
  const [timeDurationPrice, setTimeDurationPrice] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  // const [selectedPackage, setSelectedPackage] = useState({...packageDetails})
  // console.log('selectedPackage : ', selectedPackage)

  let durationPrice = "";
  const getDurationPrice = (data) => {
    Logo_Design_Duration.map((item) => {
      if (data === item.time) durationPrice = item.price;
      return durationPrice;
    });

    console.log("after data : ", durationPrice);
  };
  // const getLocalStorageData = packageDetails
  // const [localStorageData_Id, setLocalStorageData_Id] = useState(getLocalStorageData.id)
  // const [localStorageData_Name, setLocalStorageData_Name] = useState(getLocalStorageData.name)
  // const [localStorageData_Price, setLocalStorageData_Price] = useState(getLocalStorageData.price)
  // const [localStorageData_PricingGroup, setLocalStorageData_PricingGroup] = useState(getLocalStorageData.pricing_group)

  const handleChange = (e) => {
    setTimeDuration(e.target.value);
    getDurationPrice(e.target.value);
    const getLocalStorageData = JSON.parse(
      localStorage.getItem("Package-Data")
    );
    // console.log('getLocalStorageData from Step One Form : ', getLocalStorageData)
    // console.log('package details group name : ', getLocalStorageData.pricing_group)
    localStorage.setItem(
      "Package-Data",
      JSON.stringify({
        timeDuration: e.target.value,
        timeDurationPrice: durationPrice,
        ...packageDetails,
      })
    );
    // localStorage.setItem('Package-Data', JSON.stringify({ timeDuration: e.target.value, timeDurationPrice: durationPrice, ...packageDetails }))
    // localStorage.setItem('Package-Data', JSON.stringify({ timeDuration: e.target.value, timeDurationPrice: durationPrice, id: localStorageData_Id, name: localStorageData_Name, price: localStorageData_Price, pricing_group: localStorageData_PricingGroup }))
    setT_Duration(e.target.value);
    setT_DurationPrice(durationPrice);
  };
  console.log("Time Duration Price : ", timeDurationPrice);

  let stepOneFormData = {
    businessName,
    businessSlogan,
    industry,
    logoType,
    productDescription,
    competitor,
    communicate,
    contentPages,
    colors: [primaryColor, secondaryColor, ascendColor],
  };
  // console.log('Step One Form Data : ', stepOneFormData)

  const pickerStyles = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px",
      },
    },
  };

  // const [logoPackage, setLogoPackage] = useState(JSON.parse(localStorage.getItem('Package-Data')))
  // const [isDisabled, setIsDisabled] = useState('')
  //     {
  //         logoPackage.name.includes('Logo') ? setIsDisabled('disabled') : null
  //     }
  //     console.log('Logo Package', logoPackage.name)
  //     console.log('isDisabled', isDisabled)

  useEffect(() => {
    setPackageDetails(JSON.parse(localStorage.getItem("Package-Data")));
    setIsPackageLogo(JSON.parse(localStorage.getItem("Package-Data")));
    setIsPackageWeb(JSON.parse(localStorage.getItem("Package-Data")));
    // console.log('package details', packageDetails.name)
  }, []);

  // const [isValid, setIsValid] = useState(false);

  // const handleSubmit = (event) => {
  //     const form = event.currentTarget;
  //     if (form.checkValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //     }

  //     setValidated(true);
  //     // setIsStepOne(false)
  // };

  const handleStepOne = () => {
    if (
      businessName?.trim().length === 0 ||
      businessSlogan?.trim().length === 0 ||
      industry?.trim().length === 0 ||
      productDescription?.trim().length === 0 ||
      primaryColor?.trim().length === 0 ||
      secondaryColor?.trim().length === 0 ||
      ascendColor?.trim().length === 0
    ) {
      console.log("Button dsiable");
    } else {
      console.log("Button enable");
      setIsStepOne(false);
    }
    {
      businessName.trim() == ""
        ? setBusinessNameErr("Business Name is Required.")
        : setBusinessNameErr("");
    }
    {
      businessSlogan.trim() == ""
        ? setBusinessSloganErr("Business Slogan is Required.")
        : setBusinessSloganErr("");
    }
    {
      industry.trim() == ""
        ? setIndustryErr("Select industry.")
        : setIndustryErr("");
    }
    {
      productDescription.trim() == ""
        ? setProductDescriptionErr("This field is Required.")
        : setProductDescriptionErr("");
    }
    {
      primaryColor.trim() == ""
        ? setPrimaryColorErr("Please select color.")
        : setPrimaryColorErr("");
    }
    {
      secondaryColor.trim() == ""
        ? setSecondaryColorErr("Please select color.")
        : setSecondaryColorErr("");
    }
    {
      ascendColor.trim() == ""
        ? setAscendColorErr("Please select color.")
        : setAscendColorErr("");
    }
    setStepOneData(stepOneFormData);
  };

  // const handleBusinessError = () => {
  //     if(businessName?.trim().length === 0)
  //     {
  //         setBusinessNameErr('Enter Business Name')
  //     }
  // }

  const resetFields = () => {
    setBusinessName("");
    setBusinessSlogan("");
    setIndustry("");
    setLogoType("");
    setProductDescription("");
    setCompetitor("");
    setCommunicate("");
    setContentPages("");
    setPrimaryColor("#FF0000");
    setSecondaryColor("#57C070");
    setAscendColor("#0066FF");
  };

  const handlePackageDetails = () => {
    const getLocalStorageData = JSON.parse(
      localStorage.getItem("Package-Data")
    );
    const time_Duration = getLocalStorageData.timeDuration;
    const timeDuration_Price = getLocalStorageData.timeDurationPrice;
    localStorage.setItem(
      "Package-Data",
      JSON.stringify({
        timeDuration: time_Duration,
        timeDurationPrice: timeDuration_Price,
        ...packageDetails,
      })
    );
  };

  return (
    <>
      {isStepOne ? (
        <section>
          {isStepper ? <Stepper isStepperOneTrue="true" /> : null}
          <div>
            {/* COLOR PICKER STYLE START */}
            <style jsx>
              {`
                .primaryColorSelectionBox {
                  background-color: ${primaryColor};
                  width: 50px;
                  height: 50px;
                  border-radius: 4px;
                }
                .secondaryColorSelectionBox {
                  background-color: ${secondaryColor};
                  width: 50px;
                  height: 50px;
                  border-radius: 4px;
                }
                .ascendColorSelectionBox {
                  background-color: ${ascendColor};
                  width: 50px;
                  height: 50px;
                  border-radius: 4px;
                }
                .hide {
                  display: none;
                }
              `}
            </style>
            {/* COLOR PICKER STYLE END */}

            {/* <section className='hide'>
                <ProjectBrief businessName={businessName}  industry={industry} logoType={logoType} primaryColor={primaryColor} secondaryColor={secondaryColor} ascendColor={ascendColor} />
            </section> */}
            <Container>
              <Row>
                <Col xs={12} lg={7} md={7}>
                  <div>
                    <h3 className={`${styles["lineTitle"]}`}>Requirements</h3>
                    <h2 className={styles.mainTitle}>Project Brief</h2>
                    <p className={`${styles["Para"]} ${styles["colorBlack"]}`}>
                      Fill out the brief so the designers know what you’re
                      looking for.
                    </p>
                  </div>
                </Col>

                <Col
                  className={`${"d-flex justify-content-end"} ${
                    styles["guaranteeImageWrapper"]
                  }`}
                  xs={12}
                  lg={5}
                  md={5}
                >
                  <Image
                    className={styles.guaranteeImage}
                    src="/Assets/Assets/For-web/moneyBack.png"
                    alt="money back guarantee"
                    width="200"
                    height="180"
                  />
                </Col>
              </Row>
            </Container>
            <Form>
              <Row
                className={`${
                  styles["formFieldsRow"]
                } ${"justify-content-between"}`}
              >
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupBusinessName"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Whats your business name?
                    </Form.Label>
                    <Form.Control
                      required
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"} ${
                        !businessNameErr ? null : "error"
                      }`}
                      value={businessName}
                      type="text"
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                    {!businessNameErr ? (
                      <p className={`${styles["formExampleText"]}`}>eg. Acme</p>
                    ) : (
                      <p
                        className={`${styles["formExampleText"]} ${styles["errorField"]}`}
                      >
                        {businessNameErr}
                      </p>
                    )}
                  </Form.Group>
                </Col>
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupSlogan"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Do you have a business slogan?
                    </Form.Label>
                    <Form.Control
                      required
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"} ${
                        !businessNameErr ? null : "error"
                      }`}
                      value={businessSlogan}
                      type="text"
                      onChange={(e) => setBusinessSlogan(e.target.value)}
                    />
                    {!businessSloganErr ? (
                      <p className={`${styles["formExampleText"]}`}>
                        eg. Slogan
                      </p>
                    ) : (
                      <p
                        className={`${styles["formExampleText"]} ${styles["errorField"]}`}
                      >
                        {businessSloganErr}
                      </p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row className={`${"justify-content-between"}`}>
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupindustry"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Select your industry
                    </Form.Label>
                    <Form.Select
                      as="select"
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"} ${
                        !industryErr ? null : "error"
                      }`}
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    >
                      <option defaultValue="One">Select Industry</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </Form.Select>
                    {!industryErr ? (
                      <p className={`${styles["formExampleText"]}`}>eg. One</p>
                    ) : (
                      <p
                        className={`${styles["formExampleText"]} ${styles["errorField"]}`}
                      >
                        {industryErr}
                      </p>
                    )}
                  </Form.Group>
                </Col>
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupLogoType"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Please select the logo type?
                    </Form.Label>
                    <Form.Select
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"}`}
                      value={logoType}
                      onChange={(e) => setLogoType(e.target.value)}
                      disabled={
                        isPackageWeb?.pricing_group === "Logo" ? false : true
                      }
                    >
                      <option value="null">Select Logo type</option>
                      <option value="One" selected>
                        One
                      </option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </Form.Select>
                    <Form.Text className={`${styles["formExampleText"]}`}>
                      E.g. Mascot, illustration,Typography etc...
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row className={`${"justify-content-between"}`}>
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupTargetAudience"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Describe what your organisation or product does and its
                      target audience
                    </Form.Label>
                    <Form.Control
                      required
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"} ${
                        !productDescriptionErr ? null : "error"
                      }`}
                      as="textarea"
                      rows={4}
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                    />
                    {!productDescriptionErr ? (
                      <p className={`${styles["formExampleText"]}`}>
                        E.g. We sell anvils and other industrial goods to
                        manufacturing companies and hobbyists all over the
                        world.
                      </p>
                    ) : (
                      <p
                        className={`${styles["formExampleText"]} ${styles["errorField"]}`}
                      >
                        {productDescriptionErr}
                      </p>
                    )}
                  </Form.Group>
                </Col>
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupInspiration"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Please mention top 3 competitor or any reference link that
                      describe your inspiration.
                    </Form.Label>
                    <Form.Control
                      required
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"}`}
                      as="textarea"
                      rows={4}
                      value={competitor}
                      onChange={(e) => setCompetitor(e.target.value)}
                    />
                    <p className={`${styles["formExampleText"]}`}>
                      Tip: Leave blank if you dont want one incorporated.
                    </p>
                  </Form.Group>
                </Col>
              </Row>
              <Row className={`${"justify-content-between"}`}>
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupcommunicate"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Is there anything else you would like to communicate to
                      the designers?
                    </Form.Label>
                    <Form.Control
                      required
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"}`}
                      as="textarea"
                      rows={4}
                      value={communicate}
                      onChange={(e) => setCommunicate(e.target.value)}
                    />
                    <p className={`${styles["formExampleText"]}`}>
                      Tip: Leave blank if you dont want one incorporated.
                    </p>
                  </Form.Group>
                </Col>
                <Col
                  lg={5}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupWebsitePages"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Please list down the content pages you will have on your
                      website pages?
                    </Form.Label>
                    <Form.Control
                      required
                      size="lg"
                      className={`${styles["formControl"]} ${"mb-2"}`}
                      as="textarea"
                      rows={4}
                      value={contentPages}
                      onChange={(e) => setContentPages(e.target.value)}
                      disabled={
                        isPackageWeb?.pricing_group === "Website" ? false : true
                      }
                    />
                    <p className={`${styles["formExampleText"]}`}>
                      E.g. About Us, privacy Policy, Home,Contact Us, Product
                      Page, Product Detail,Sign In etc....
                    </p>
                  </Form.Group>
                </Col>
              </Row>
              <Row className={`${"justify-content-between"}`}>
                <Col
                  lg={4}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupPrimaryColor"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Primary Color
                    </Form.Label>
                    <div className={`${styles["colorPickerWrapper"]}`}>
                      <div
                        className={`${"primaryColorSelectionBox"} ${
                          styles["colorBoxDiv"]
                        } ${!primaryColorErr ? null : "error"}`}
                        onClick={() => setPrimarypallet(!primarypallet)}
                      ></div>
                      <Form.Control
                        required
                        size="lg"
                        className={`${styles["formControl"]} ${"mb-2"} ${
                          styles["colorField"]
                        } ${!primaryColorErr ? null : "error"}`}
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                      />
                      {primarypallet && (
                        <SketchPicker
                          styles={pickerStyles}
                          color={primaryColor}
                          onChange={(prColor) => setPrimaryColor(prColor.hex)}
                        />
                      )}
                    </div>
                    {/* <p className={`${styles['formExampleText']} ${'mt-2'}`}>Pick the colors from above colors picker which help us.</p> */}
                    {!primaryColorErr ? (
                      <p className={`${styles["formExampleText"]}  ${"mt-2"}`}>
                        Pick the colors from above colors picker which help us.
                      </p>
                    ) : (
                      <p
                        className={`${styles["formExampleText"]} ${styles["errorField"]}`}
                      >
                        {primaryColorErr}
                      </p>
                    )}
                  </Form.Group>
                </Col>
                <Col
                  lg={4}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupPrimaryColor"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Secondary Color
                    </Form.Label>
                    <div className={`${styles["colorPickerWrapper"]}`}>
                      <div
                        className={`${"secondaryColorSelectionBox"} ${
                          styles["colorBoxDiv"]
                        } ${!primaryColorErr ? null : "error"}`}
                        onClick={() => setSecondarypallet(!secondarypallet)}
                      ></div>
                      <Form.Control
                        required
                        size="lg"
                        className={`${styles["formControl"]} ${"mb-2"} ${
                          styles["colorField"]
                        } ${!primaryColorErr ? null : "error"}`}
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                      />
                      {secondarypallet && (
                        <SketchPicker
                          styles={pickerStyles}
                          color={secondaryColor}
                          onChange={(scColor) => setSecondaryColor(scColor.hex)}
                        />
                      )}
                    </div>
                    {/* <p className={`${styles['formExampleText']} ${'mt-2'}`}>Pick the colors from above colors picker which help us.</p> */}
                    {!secondaryColorErr ? (
                      <p className={`${styles["formExampleText"]}  ${"mt-2"}`}>
                        Pick the colors from above colors picker which help us.
                      </p>
                    ) : (
                      <p
                        className={`${styles["formExampleText"]} ${styles["errorField"]}`}
                      >
                        {secondaryColorErr}
                      </p>
                    )}
                  </Form.Group>
                </Col>
                <Col
                  lg={4}
                  xs={12}
                  md={6}
                  className={`${styles["formFieldsCol"]} ${"mt-4"}`}
                >
                  <Form.Group
                    className={`${"mb-3"}`}
                    controlId="formGroupPrimaryColor"
                  >
                    <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                      Ascend Color
                    </Form.Label>
                    <div className={`${styles["colorPickerWrapper"]}`}>
                      <div
                        className={`${"ascendColorSelectionBox"} ${
                          styles["colorBoxDiv"]
                        } ${!ascendColorErr ? null : "error"}`}
                        onClick={() => setAscendpallet(!ascendpallet)}
                      ></div>
                      <Form.Control
                        required
                        size="lg"
                        className={`${styles["formControl"]} ${"mb-2"} ${
                          styles["colorField"]
                        } ${!ascendColorErr ? null : "error"}`}
                        type="text"
                        value={ascendColor}
                        onChange={(e) => setAscendColor(e.target.value)}
                      />
                      {ascendpallet && (
                        <SketchPicker
                          styles={pickerStyles}
                          color={ascendColor}
                          onChange={(asColor) => setAscendColor(asColor.hex)}
                        />
                      )}
                    </div>
                    {/* <p className={`${styles['formExampleText']} ${'mt-2'}`}>Pick the colors from above colors picker which help us.</p> */}
                    {!ascendColorErr ? (
                      <p className={`${styles["formExampleText"]}  ${"mt-2"}`}>
                        Pick the colors from above colors picker which help us.
                      </p>
                    ) : (
                      <p
                        className={`${styles["formExampleText"]} ${styles["errorField"]}`}
                      >
                        {ascendColorErr}
                      </p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Col
                lg={12}
                xs={12}
                md={12}
                className={`${styles["formFieldsCol"]} ${"mt-4"}`}
              >
                <Form.Group
                  className={`${"mb-3"}`}
                  controlId="formGroupFileUpload"
                >
                  <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                    Do you have any images, sketches or documents that might be
                    helpful?
                  </Form.Label>
                  <div className={`${styles["fileUploadWrapper"]} ${"mb-2"}`}>
                    <Image
                      src={uploadIcon}
                      alt="image upload"
                      width="49"
                      height="40"
                    />
                    <p>Choose File</p>
                    <Form.Control
                      size="lg"
                      className={`${styles["formControl"]} ${styles["formFileUploadBtn"]}`}
                      type="file"
                    />
                  </div>
                  <Form.Text
                    className={`${styles["formExampleText"]} ${styles["formTextCenter"]}`}
                  >
                    E.g. Your current logo, fonts, photos, illustrations,
                    content, layout ideas etc.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Form>
          </div>
          {/* Package section start */}
          <section>
            <SectionContent
              contentTitle="Package"
              contentMainTitle="Package Details"
              contentText={`Do you need more than a ${packageDetails?.name}?`}
              contentColorText=""
            />
            <Container className={`${styles["detailsMainContainer"]}`}>
              <Row className={`${styles["detailsHeaderRow"]}`}>
                <Col lg={9} md={12} xs={12}>
                  <div className={`${styles["detailsTitleCol"]}`}>
                    <Form.Check
                      type="radio"
                      name="package details"
                      label={`${packageDetails?.name} (${packageDetails?.title})`}
                      id={`${packageDetails?.id}`}
                      // checked={console.log(packageDetails)}
                      onChange={handlePackageDetails}
                      className={`${styles["packageBriefRadio"]}`}
                    />
                  </div>
                  <div className={`${styles["detailsContentCol"]}`}>
                    <p>No thanks. Ill just start with the basics for now.</p>
                  </div>
                </Col>
                <Col lg={3} md={12} xs={12}>
                  <div className={`${styles["detailsPriceCol"]}`}>
                    <p>From ${packageDetails?.price}</p>
                  </div>
                </Col>
              </Row>
              <Row className={`${styles["detailsFooterRow"]} ${"mt-3 w-75"}`}>
                <Col lg={8} md={8} xs={12} className={`${"ms-4"}`}>
                  <div
                    className={`${
                      styles["detailsFooterCol"]
                    } ${"d-flex justify-content-start align-items-center flex-wrap"}`}
                  >
                    {/* <p>{packageDetails?.options}</p> */}
                    {packageDetails?.options?.map((i, index) => {
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
          {/* Package section end */}

          {/* OPTIONAL PACKAGE START */}
          <section className={`${"mt-5"}`}>
            {packageDetails?.pricing_group == "Logo" ? <LogoOptional /> : null}
            {packageDetails?.pricing_group == "Branding" ? (
              <BrandingOptional />
            ) : null}
            {packageDetails?.pricing_group == "Website" ? (
              <WebsiteOptional />
            ) : null}
            {packageDetails?.pricing_group == "Marketing" ? (
              <MarketingOptional />
            ) : null}
          </section>
          {/* OPTIONAL PACKAGE END */}

          {/* TIME DURATION SECTION START */}
          <section>
            <SectionContent
              contentTitle="Time Duration"
              contentMainTitle="Duration"
              contentText="How long do you want your contest to run for?"
              contentColorText=""
            />
          </section>
          <section>
            <Container className="mt-3">
              <Row>
                <h6 className={`${styles["durationsTitle"]}`}>
                  Select your time duration
                </h6>
                <Col
                  lg={6}
                  md={12}
                  xs={12}
                  className={`${styles["timeDurationCol"]}`}
                >
                  <div className={`${styles["timeDurationMainWrapper"]}`}>
                    {Logo_Design_Duration.map((item, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className={`${styles["timeDurationContentWrapper"]}`}
                          >
                            <div className={`${styles["timeDurationContent"]}`}>
                              <Form.Check
                                type="radio"
                                name="time duration"
                                label={`${item.time}`}
                                id={`${item.id}`}
                                checked={timeDuration === `${item.price}`}
                                onChange={handleChange}
                                // onDoubleClick={handleChange}
                                value={`${item.time}`}
                                className={`${styles["packageBriefRadio"]}`}
                              />
                            </div>
                            <div
                              className={`${styles["timeDurationPrice"]} ${styles["timeDurationContent"]}`}
                            >
                              <label htmlFor={item.id}>
                                {item.price === 0 ? "free" : `$${item.price}`}
                              </label>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* TIME DURATION SECTION END */}

          <Container>
            <Row className={`${"pb-5"}`}>
              <Col
                lg={6}
                md="auto"
                xs="auto"
                className={`${"mb-4 d-flex justify-content-start p-0"}`}
              >
                <div className={`${styles["stepGuaranteeSec"]}`}>
                  <span>
                    <Image
                      src={GuaranteeIcon}
                      alt="GuaranteeIcon"
                      width="65"
                      height="65"
                    />
                  </span>
                  <div>
                    <h6>100% money back guarantee</h6>
                    <p>A design you love or your money back</p>
                  </div>
                </div>
              </Col>
              {/* <Col lg={4} md='auto' xs='auto' className={`${'mb-4'}`}>
            
            </Col>  */}
              <Col
                lg={6}
                md="auto"
                xs="auto"
                className={`${"mb-4 d-flex justify-content-end p-0"}`}
              >
                <ButtonGroup>
                  <button
                    className={`${styles["blueButton"]} ${"me-4"}`}
                    onClick={resetFields}
                  >
                    Reset
                  </button>
                  {/* <button className={`${styles['blueButton']} ${businessName.length === 0 || businessSlogan.length === 0 || industry.length === 0 ||
                  productDescription.length === 0 || competitor.length === 0 || communicate.length === 0 || primaryColor.length === 0 || secondaryColor.length === 0 ||
                  ascendColor.length === 0 ? 'btnDisable' : null}`}
                        onClick={handleStepOne} type='submit'>
                        Continue
                    </button> */}
                  <button
                    className={`${styles["blueButton"]}`}
                    onClick={handleStepOne}
                    type="submit"
                  >
                    Continue
                  </button>
                  {/* <Link href='' className={`${styles['blueButton']}`} onClick={handleStepOne} type='submit'>
                      Continue
                    </Link> */}
                </ButtonGroup>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <Step2
          businessName={businessName}
          industry={industry}
          logoType={logoType}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          ascendColor={ascendColor}
          timeDuration={timeDuration}
        />
      )}
    </>
  );
};

export default StepOneForm;
