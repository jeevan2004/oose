import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./course.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { api } from "../../api/api";

const Courses = () => {
  const [data, setData] = useState([]);
  const [categorie, setCategories] = useState("");
  const [subCategorie, setSubCategories] = useState("");
  const [prices, setPrices] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [languages, setLanguages] = useState("");

  const [categorieList, setCategoriesList] = useState();
  const [subCategorieList, setSubCategoriesList] = useState("");
  const [pricesList, setPricesList] = useState("");
  const [skillLevelList, setSkillLevelList] = useState("");
  const [languagesList, setLanguagesList] = useState("");
  const CourseData = async () => {
    let res = await api(
      `api/v1/course/filter/get?categoryId=${categorie}&subcategoryId=${subCategorie}&languageId=${languages}&skillLevelId=${skillLevel}`,
      "",
      "get",
      "",
      // currUserData?.token,
      ""
    );
    if (res) {
      setData(res?.data);
      console.log(res, "card filtered");
    }
  };

  const getAllCategory = async () => {
    let res = await api(
      `api/categories/getAllCategories`,
      "",
      "get",
      "",
      // currUserData?.token,
      ""
    );

    if (res) {
      setCategoriesList(res);
      console.log(res, "ssssss ");
    }
  };

  // Call CourseData when the filter values change
  useEffect(() => {
    CourseData();
  }, [categorie, subCategorie, prices, skillLevel, languages]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const onChageHandler = (name, value) => {
    console.log(name, value, "filter change");
    if (name === "category") {
      setCategories(value);
    }
    if (name === "subCategory") {
      setSubCategories(value);
    }
    if (name === "price") {
      setPrices(value);
    }
    if (name === "SkillLevel") {
      setSkillLevel(value);
    }
    if (name === "language") {
      setLanguages(value);
    }
  };
  const subCategories = [
    { name: "Business Strategy", value: "BusinessStrategy" },
    { name: "Communication", value: "Communication" },
    { name: "Enterpreneurship", value: "Enterpreneurship" },
    { name: "Management", value: "Management" },
    { name: "Sales", value: "Sales" },
  ];

  const language = [
    { name: "All Language", value: "AllLanguage" },
    { name: "English", value: "English" },
    { name: "Hindi", value: "Hindi" },
    { name: "Arabic", value: "Arabic" },
    { name: "Francais", value: "Francais" },
    { name: "Portugues", value: "Portugues" },
  ];

  const price = [
    { name: "All Price", value: "AllPrice" },
    { name: "Free", value: "Free" },
    { name: "Paid", value: "Paid" },
  ];

  const skillLevels = [
    { name: "All Levels", value: "AllLevels" },
    { name: "Beginner", value: "Beginner" },
    { name: "Intermediate", value: "Intermediate" },
    { name: "Expert", value: "Expert" },
  ];

  console.log(categorieList, "categorieList");
  return (
    <>
      <Breadcrumb name={"Course"} pageName={"course"} />
      <section className="all_courses p-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="courses__sidebar_area">
                <div className="courses__sidebar_area">
                  <div className="courses__sidebar_button d-lg-none">
                    <h4>filter</h4>
                  </div>
                  <aside className="courses__sidebar">
                    {/* Categories */}
                    <div className="courses-widget">
                      <h4 className="widget-title">Categories</h4>
                      <div className="courses-cat-list">
                        <ul className="list-wrap">
                          {categorieList?.map((item) => (
                            <li key={item.name}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value={item.name}
                                  id={item.name}
                                  onChange={(e) =>
                                    onChageHandler("category", e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.name}
                                >
                                  {item.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Sub Categories */}
                    <div className="courses-widget">
                      <h4 className="widget-title">Sub Categories</h4>
                      <div className="courses-cat-list">
                        <ul className="list-wrap">
                          {subCategories?.map((item) => (
                            <li key={item.name}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="subCategory"
                                  value={item.name}
                                  id={item.name}
                                  onChange={(e) =>
                                    onChageHandler(
                                      "subCategory",
                                      e.target.value
                                    )
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.name}
                                >
                                  {item.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Language */}
                    <div className="courses-widget">
                      <h4 className="widget-title">Language</h4>
                      <div className="courses-cat-list">
                        <ul className="list-wrap">
                          {language?.map((item) => (
                            <li key={item.value}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="language"
                                  value={item.value}
                                  id={item.value}
                                  onChange={(e) =>
                                    onChageHandler("language", e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.value}
                                >
                                  {item.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="courses-widget">
                      <h4 className="widget-title">Price</h4>
                      <div className="courses-cat-list">
                        <ul className="list-wrap">
                          {price?.map((item) => (
                            <li key={item.value}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="price"
                                  value={item.value}
                                  id={item.value}
                                  onChange={(e) =>
                                    onChageHandler("price", e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.value}
                                >
                                  {item.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skill Level */}
                    <div className="courses-widget">
                      <h4 className="widget-title">Skill level</h4>
                      <div className="courses-cat-list">
                        <ul className="list-wrap">
                          {skillLevels?.map((item) => (
                            <li key={item.value}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="SkillLevel"
                                  value={item.value}
                                  id={item.value}
                                  onChange={(e) =>
                                    onChageHandler("SkillLevel", e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.value}
                                >
                                  {item.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-xl-9 col-lg-8">
              <div className="row">
                {data?.map((item) => (
                  <div key={item.id} className="col-md-6">
                    <ProductCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
