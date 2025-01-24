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

  const [categorieList, setCategoriesList] = useState([]);
  const [subCategorieList, setSubCategoriesList] = useState();
  const [pricesList, setPricesList] = useState([]);
  const [skillLevelList, setSkillLevelList] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  const getAllCategory = async () => {
    let res = await api(
      `api/v1/course/getfilterdata`,
      "",
      "get",
      "",
      // currUserData?.token,
      ""
    );

    if ((res, res.status)) {
      setCategoriesList(res?.data?.categories);
      setLanguagesList(res?.data?.languages);
      // setSubCategoriesList(res?.data?.subCategories);
      setSkillLevelList(res?.data?.skillLevels);
      setPricesList(res?.data?.prices);
    }
  };
  const getSubCategory = async (id) => {
    let res = await api(
      `api/subcategories/getSubcategoryBycategorie/${id}`,
      "",
      "get",
      "",
      // currUserData?.token,
      ""
    );

    if (res) {
      console.log(res, "getSubCategory getSubCategory asasasasasasa");
      setSubCategoriesList(res?.data);
    }
  };

  // Call CourseData when the filter values change
  useEffect(() => {
    onChageHandler();
  }, [categorie, subCategorie, prices, skillLevel, languages]);

  useEffect(() => {
    getAllCategory();
  }, []);
  useEffect(() => {
    if (categorie) {
      getSubCategory(categorie);
    }
  }, [categorie]);
  console.log(categorie, "categorie");
  const onChageHandler = async (name, value) => {
    let res = await api(
      `api/v1/course/filter/get?categoryId=${categorie}&subcategoryId=${subCategorie}&languageId=${languages}&skillLevelId=${skillLevel}`,
      "",
      "get",
      "",
      // currUserData?.token,
      ""
    );
    if (res && res.status) {
      setData(res?.data);
      console.log(res, "card filtered");
    }
  };

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
                                  value={item._id}
                                  id={item.name}
                                  onChange={(e) =>
                                    setCategories(e.target.value)
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
                    {subCategorieList ? (
                      <>
                        <div className="courses-widget">
                          <h4 className="widget-title">Sub Categories</h4>
                          <div className="courses-cat-list">
                            <ul className="list-wrap">
                              {subCategorieList?.map((item) => (
                                <li key={item.name}>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="subCategory"
                                      value={item._id}
                                      id={item.name}
                                      onChange={(e) =>
                                        setSubCategories(e.target.value)
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
                      </>
                    ) : (
                      ""
                    )}

                    {/* Language */}
                    <div className="courses-widget">
                      <h4 className="widget-title">Language</h4>
                      <div className="courses-cat-list">
                        <ul className="list-wrap">
                          {languagesList?.map((item) => (
                            <li key={item._id}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="language"
                                  value={item._id}
                                  id={item.name}
                                  onChange={(e) => setLanguages(e.target.value)}
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

                    {/* Price */}
                    <div className="courses-widget">
                      <h4 className="widget-title">Price</h4>
                      <div className="courses-cat-list">
                        <ul className="list-wrap">
                          {pricesList?.map((item) => (
                            <li key={item.type}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="price"
                                  value={item._id}
                                  id={item.type}
                                  onChange={(e) => setPrices(e.target.value)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.type}
                                >
                                  {item.type}
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
                          {skillLevelList?.map((item) => (
                            <li key={item.level}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="SkillLevel"
                                  value={item._is}
                                  id={item.level}
                                  onChange={(e) =>
                                    setSkillLevel(e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.level}
                                >
                                  {item.level}
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
