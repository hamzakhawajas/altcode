const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#050c1c",
    color: "#3768f7",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "80px",
    paddingBottom: "40px",
    borderTop: "1px solid #28e4fe",
  },
  block: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    marginBottom: "20px",
  },
  text: {
    fontWeight: "bold",
    color: "#c0ceeb",
  },
  txt: {
    marginTop: "8px",
    "&:hover": {
      cursor: "pointer",
      color: "#28e4fe",
    },
  },
  address: {
    marginBottom: "5px",
    "&:hover": {
      cursor: "pointer",
      color: "#3768f7",
    },
  },
  address2: {
    marginTop: "10px",
    "&:hover": {
      cursor: "pointer",
      color: "#3768f7",
    },
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
      color: "#c0ceeb",
    },
  },
  hover2: {
    "&:hover": {
      cursor: "pointer",
      color: "#3768f7",
    },
  },
  contact: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "15px",
    border: "1px solid #28e4fe",
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    color: "#c0ceeb",
  },
  socialIconsBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
  },
  terms: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    marginTop: 0,
  },
  copyright: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
    color: "#c0ceeb",
  },
};

export default styles;
