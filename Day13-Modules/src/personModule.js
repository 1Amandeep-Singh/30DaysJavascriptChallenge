//Define an object representing a person
const personinfo = {
  name: "Amandeep",
  designation: "Software Engineer",
  city: "Gurugram",

  //Method to return introduction
  intro() {
    return `Hello, my name is ${this.name} and i am working as ${this.designation} in JTEKT Electronics India Pvt. Ltd.`;
  },
};


export default personinfo;
