const styles = {
  bg: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#050c1c",
    color: "#c0ceeb",
    paddingTop: "30px",
    paddingBottom: "50px",
  },
  heading: {
    marginLeft: "4%",
  },
  questions: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
    paddingLeft: "3%",
    paddingTop: "1.5%",
    paddingBottom: "1%",
    border: "1px solid #3e6deb",
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    width: "70%",
    marginLeft: "20%",
  },
  ques: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  box: {
    display: "flex",
    width: "100%",
  },
  icon: {
    marginTop: "4px",
    color: "#c0ceeb",
  },
  text: {
    paddingLeft: "1%",
    marginBottom: "1%",
  },
  answer: {
    marginBottom: "1.5%",
    marginTop: "1.5%",
  },
  bubble1: {
    color: "#3e6deb",
    marginLeft: "14%",
    marginTop: "1%",
    fontSize: 70,
  },
  bubble2: {
    color: "#3e6deb",
    marginLeft: "10%",
    marginTop: "1%",
    fontSize: 40,
  },
};

export default styles;
