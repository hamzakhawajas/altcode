const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#050c1c",
    color: "#c0ceeb",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  desc: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "13%",
    paddingBottom: "8%",
  },
  mobileViewDisplay: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "40%",
    paddingBottom: "8%",
  },
  block: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "6%",
  },
  block2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid #a6b5c6",
    borderRadius: "10px",
    margin: "20px",
    padding: "10px",
    width: "45%",
    "&:hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "0 5px 15px rgba(145, 92, 182, .4)",
    },
  },
  heading: {
    color: "#3b67f3",
    marginTop: "10px",
    marginBottom: "7px",
  },
};

export default styles;
