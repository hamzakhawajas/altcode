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
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  offer: {
    paddingLeft: "3%",
  },
  desc: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "7%",
  },
  block: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "50px",
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
    width: "350px",
    "&:hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "5px 5px 15px rgba(145, 92, 182, .4)",
    },
  },
  heading: {
    color: "#3b67f3",
    marginTop: "10px",
    marginBottom: "7px",
  },
  startBtn: {
    backgroundColor: "#3b67f3",
    color: "white",
    padding: "10px",
    marginTop: "60px",
    minWidth: "15%",
    justifyContent: "center",
    borderRadius: 5,
  },
  btnText: {
    display: "flex",
    fontWeight: "bold",
    justifyContent: "center",
  },
};

export default styles;
