import Vuex from "vuex";
import axios from "axios";

const createStroe = () => {
  return new Vuex.Store({
    state: {
      //ข้อมูล
      DataLogin: {},
      loadHomeGallery: [],
      loadHomeFeedback: [],
      loadHomePackage: [],
      loadHomeQuestion: [],
      loadHomeService: [],
      loadHomeBlog: [],
      loadBlogByID: [],
      loadDoctorData: [],
      loadDataService: [],
      loadDataSubBanner: [],
      loadDataStatus: [],
      DataUserLogin: [],
      StatusPage: "",
      loadDataCategory: [],
      loadGalleryByID: [],
      loadPackgeByID: [],
      loadDataServiceStatus: [],
      loadDataServiceByID: [],
      loadDataVeterinarianeByID: [],
      loadDataPosition: [],
      loadDataQuestionsByID: [],
      loadDataFeedbacksByID: [],
      loadDataContact: []
    },
    mutations: {
      //จัดการข้อมูลใน state
      setDataLogin(state, posts) {
        state.DataLogin = posts;
      },
      setDataHomeGallery(state, posts) {
        state.loadHomeGallery = posts;
      },
      setDataHomeFeedback(state, posts) {
        state.loadHomeFeedback = posts;
      },
      setDataHomePackage(state, posts) {
        state.loadHomePackage = posts;
      },
      setDataHomeQuestion(state, posts) {
        state.loadHomeQuestion = posts;
      },
      setDataHomeService(state, posts) {
        state.loadHomeService = posts;
      },
      setDataHomeBlog(state, posts) {
        state.loadHomeBlog = posts;
      },
      setDataBlogByID(state, posts) {
        state.loadBlogByID = posts;
      },
      setDataPageDoctor(state, posts) {
        state.loadDoctorData = posts;
      },
      setDataService(state, posts) {
        state.loadDataService = posts;
      },
      setDataSubBanner(state, posts) {
        state.loadDataSubBanner = posts;
      },
      setDataUserLogin(state, posts) {
        state.DataUserLogin = posts;
      },
      setDataStatusPage(state, posts) {
        state.StatusPage = posts;
      },
      setloadDataStatus(state, posts) {
        state.loadDataStatus = posts;
      },
      setloadDataCategory(state, posts) {
        state.loadDataCategory = posts;
      },
      setloadDataGalleryByID(state, posts) {
        state.loadDataGalleryByID = posts;
      },
      setloadDataPackgeByID(state, posts) {
        state.loadPackgeByID = posts;
      },
      setloadDataServiceStatus(state, posts) {
        state.loadDataServiceStatus = posts;
      },
      setloadDataServiceByID(state, posts) {
        state.loadDataServiceByID = posts;
      },
      setloadDataVeterinarianeByID(state, posts) {
        state.loadDataVeterinarianeByID = posts;
      },
      setloadDataPosition(state, posts) {
        state.loadDataPosition = posts;
      },
      setloadDataQuestionsByID(state, posts) {
        state.loadDataQuestionsByID = posts;
      },
      setloadDataFeedbacksByID(state, posts) {
        state.loadDataFeedbacksByID = posts;
      },
      setloadDataContact(state, posts) {
        state.loadDataContact = posts;
      }

      
    },
    actions: {
      //ทำงานร่วมกับ Back end เรียกใช้งานผ่าน component
      async nuxtServerInit(vuexContext, context) {
        // Call Position

        const dataPosition = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataPosition" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataPosition.push(response.data.records);
            vuexContext.commit("setloadDataPosition", dataPosition[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

        // Call Service Status
        const dataServiceStatus = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataServiceStatus" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataServiceStatus.push(response.data.records);
            vuexContext.commit(
              "setloadDataServiceStatus",
              dataServiceStatus[0]
            );
          })
          .catch(function(error) {
            console.log(error);
          });

        // Call Category
        const dataCategory = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataCategory" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataCategory.push(response.data.records);
            vuexContext.commit("setloadDataCategory", dataCategory[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

        // Call Status
        const dataStatus = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataStatus" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataStatus.push(response.data.records);
            vuexContext.commit("setloadDataStatus", dataStatus[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      // ทำงานเมื่อกด

      async getdataContact(vuexContext, post) {
        // Call Contact
        const dataContact = [];
        //const post = { limit:6 }
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataContact" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataContact.push(response.data.records);
            vuexContext.commit("setloadDataContact", dataContact[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getdataGallery(vuexContext, post) {
        // Call Gallery
        const dataGallery = [];
        //const post = { limit:6 }
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataGallery", information: post },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataGallery.push(response.data.records);
            vuexContext.commit("setDataHomeGallery", dataGallery[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getdataFeedback(vuexContext, post) {
        // Call Feedback
        const dataFeedback = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataFeedback", information: post  },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataFeedback.push(response.data.records);
            console.log("test =",response.data.records);
            vuexContext.commit("setDataHomeFeedback", dataFeedback[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getdataPackage(vuexContext, post) {
        // Call Package
        const dataPackage = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataPackage", information: post },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataPackage.push(response.data.records);
            vuexContext.commit("setDataHomePackage", dataPackage[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      // Call Question
      async getdataQuestion(vuexContext, post) {
        const dataQuestion = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataQuestion", information: post },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataQuestion.push(response.data.records);
            vuexContext.commit("setDataHomeQuestion", dataQuestion[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      // Call Service
      async getdataService(vuexContext, post) {
        
        const dataService = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataService", information: post},
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataService.push(response.data.records);
            console.log(response.data.records);
            vuexContext.commit("setDataHomeService", dataService[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      // Call Blog
      async getdataBlog(vuexContext, post) {
        const dataBlog = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataBlog", information: post  },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataBlog.push(response.data.records);
            vuexContext.commit("setDataHomeBlog", dataBlog[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      // Call Doctor
      async getdataDoctor(vuexContext, post) {
        const dataDoctor = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataDortor", information: post  },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataDoctor.push(response.data.records);
            vuexContext.commit("setDataPageDoctor", dataDoctor[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      // Call Data Service
      async getdataServiceHome(vuexContext, post) {
        const dataServiceHome = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataService" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataServiceHome.push(response.data.records);
            vuexContext.commit("setDataService", dataServiceHome[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updateFile(vuexContext, post) {
        // console.log("post =",post)

        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend2.php",
          data: post,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(function(response) {
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updatequestionsAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updatequestionsAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            /* console.log("response =",response);*/
            var myArray = vuexContext.state.loadHomeQuestion;

            var objIndex = myArray.findIndex(
              obj => obj.questionid == response.data.records[0].questionid
            );

            myArray[objIndex].questionname =
              response.data.records[0].questionname;
            myArray[objIndex].questiondescription =
              response.data.records[0].questiondescription;
            myArray[objIndex].statusname = response.data.records[0].statusname;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updateVeterinarianAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updateVeterinarianAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadDoctorData;

            var objIndex = myArray.findIndex(
              obj => obj.doctorid == response.data.records[0].doctorid
            );

            myArray[objIndex].doctorname = response.data.records[0].doctorname;
            myArray[objIndex].doctordescription =
              response.data.records[0].doctordescription;
            myArray[objIndex].image = response.data.records[0].image;
            myArray[objIndex].positionname =
              response.data.records[0].positionname;
            /**/
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updateBannerAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updateBannerAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      async getUserLogin(vuexContext, post) {
        //console.log("post =",post);
        const DataUserLogin = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getUserLogin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var status = response.data.status;
            if (status == "success") {
              DataUserLogin.push(response.data.records);
              vuexContext.commit("setDataUserLogin", DataUserLogin[0]);
            } else {
              DataUserLogin.push(response.data);
              vuexContext.commit("setDataUserLogin", DataUserLogin[0]);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updateGalleryAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updateGalleryAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadHomeGallery;

            var objIndex = myArray.findIndex(
              obj => obj.galleryid == response.data.records[0].galleryid
            );

            myArray[objIndex].galleryname =
              response.data.records[0].galleryname;
            myArray[objIndex].gallerydescription =
              response.data.records[0].gallerydescription;
            myArray[objIndex].image = response.data.records[0].image;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updateServiceAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updateServiceAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadDataService;

            var objIndex = myArray.findIndex(
              obj => obj.serviceid == response.data.records[0].serviceid
            );

            myArray[objIndex].servicename =
              response.data.records[0].servicename;
            myArray[objIndex].servicedescription =
              response.data.records[0].servicedescription;
            myArray[objIndex].servicestatusname =
              response.data.records[0].servicestatusname;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updateFeedbacksAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updateFeedbackAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            console.log("response =", response);

            var myArray = vuexContext.state.loadHomeFeedback;

            var objIndex = myArray.findIndex(
              obj => obj.feedbackid == response.data.records[0].feedbackid
            );

            myArray[objIndex].feedbacktitle =
              response.data.records[0].feedbacktitle;
            myArray[objIndex].createby = response.data.records[0].createby;
            myArray[objIndex].image = response.data.records[0].image;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updatePricingAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updatePricingAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadHomePackage;

            var objIndex = myArray.findIndex(
              obj => obj.packageid == response.data.records[0].packageid
            );

            myArray[objIndex].packagename =
              response.data.records[0].packagename;
            myArray[objIndex].price = response.data.records[0].price;
            myArray[objIndex].image = response.data.records[0].image;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async updateBlogAdmin(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "updateBlogAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadHomeBlog;

            var objIndex = myArray.findIndex(
              obj => obj.articleid == response.data.records[0].articleid
            );

            myArray[objIndex].articlename =
              response.data.records[0].articlename;
            myArray[objIndex].articletitle =
              response.data.records[0].articletitle;
            myArray[objIndex].image = response.data.records[0].image;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getFeedbacksByID(vuexContext, post) {
        const dataFeedbacksByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataFeedback", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataFeedbacksByID.push(response.data.records);
            vuexContext.commit(
              "setloadDataFeedbacksByID",
              dataFeedbacksByID[0]
            );
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getQuestionsByID(vuexContext, post) {
        const dataQuestionsByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataQuestion", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataQuestionsByID.push(response.data.records);
            vuexContext.commit(
              "setloadDataQuestionsByID",
              dataQuestionsByID[0]
            );
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getVeterinarianByID(vuexContext, post) {
        const dataVeterinarianByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataDortor", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataVeterinarianByID.push(response.data.records);
            vuexContext.commit(
              "setloadDataVeterinarianeByID",
              dataVeterinarianByID[0]
            );
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getServiceByID(vuexContext, post) {
        const dataServiceByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataService", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataServiceByID.push(response.data.records);
            vuexContext.commit("setloadDataServiceByID", dataServiceByID[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getpackageByID(vuexContext, post) {
        const dataPackageByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataPackage", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataPackageByID.push(response.data.records);
            vuexContext.commit("setloadDataPackgeByID", dataPackageByID[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getGalleryByID(vuexContext, post) {
        const dataGalleryByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataGallery", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataGalleryByID.push(response.data.records);
            vuexContext.commit("setloadDataGalleryByID", dataGalleryByID[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getBlogByID(vuexContext, post) {
        const dataBlogByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataBlog", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataBlogByID.push(response.data.records);
            vuexContext.commit("setDataBlogByID", dataBlogByID[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async addConsultation(vuexContext, post) {
        //console.log("test1 =",post);
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "InsertConsultation", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            //console.log("test3 =",response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async addContact(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "InsertContactUs", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {})
          .catch(function(error) {
            console.log(error);
          });
      },

      async getDataBanner(vuexContext, post) {
        const dataSubBanner = [];
        await axios({
          method: "post",
          url: "http://localhost/api/PetsittingAPI/backend/backend.php",
          data: { topic: "getDataBanner", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            if (response.data.status == "true") {
              dataSubBanner.push(response.data.records);
              vuexContext.commit("setDataSubBanner", dataSubBanner[0][0]);
              vuexContext.commit("setDataStatusPage", response.data.status);
            } else {
              vuexContext.commit("setDataStatusPage", response.data.status);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    getters: {
      // นำ state ไปใช้งาน
      getDataLogin(state) {
        return state.DataLogin;
      },
      getHomeGallery(state) {
        return state.loadHomeGallery;
      },
      getHomeFeedback(state) {
        return state.loadHomeFeedback;
      },
      getHomePackage(state) {
        return state.loadHomePackage;
      },
      getHomeQuestion(state) {
        return state.loadHomeQuestion;
      },
      getHomeService(state) {
        return state.loadHomeService;
      },
      getHomeBlog(state) {
        return state.loadHomeBlog;
      },
      getBlogByID(state) {
        return state.loadBlogByID;
      },
      getDoctorData(state) {
        return state.loadDoctorData;
      },
      getDataService(state) {
        return state.loadDataService;
      },
      getDataSubBanner(state) {
        return state.loadDataSubBanner;
      },
      getDataUserLogin(state) {
        return state.DataUserLogin;
      },
      getDataStatusPage(state) {
        return state.StatusPage;
      },
      getloadDataStatus(state) {
        return state.loadDataStatus;
      },
      getloadDataCategory(state) {
        return state.loadDataCategory;
      },
      getloadDataGalleryByID(state) {
        return state.loadDataGalleryByID;
      },
      getloadDataPackgeByID(state) {
        return state.loadPackgeByID;
      },
      getloadDataServiceStatus(state) {
        return state.loadDataServiceStatus;
      },
      getloadDataServiceByID(state) {
        return state.loadDataServiceByID;
      },
      getloadDataVeterinarianeByID(state) {
        return state.loadDataVeterinarianeByID;
      },
      getloadDataPosition(state) {
        return state.loadDataPosition;
      },
      getloadDataQuestionsByID(state) {
        return state.loadDataQuestionsByID;
      },
      getloadDataFeedbacksByID(state) {
        return state.loadDataFeedbacksByID;
      },
      getloadDataContact(state) {
        return state.loadDataContact;
      },
      
    }
  });
};

function gettoken() {
  return "CF301930";
}

export default createStroe;
