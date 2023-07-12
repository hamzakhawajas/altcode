const styles = {
  grid: {
    position: "relative",
    marginBottom: "-100px",
  },
  toolbar: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
  },
  headerTabs: {
    top: "20px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headerLabel: {
    color: "#2bdff6",
    fontSize: "16px",
    lineHeight: "25.5px",
    display: "flex",
    textTransform: "none",
    fontWeight: "bold",
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  drawerToolbar: {
    justifyContent: "flex-end",
    color: "#c0ceeb",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "#3e6deb",
    },
    color: "white",
  },
  listItem: {
    cursor: "pointer",
    color: "white",
    "&:hover": {
      backgroundColor: "#3e6deb",
    },
  },
  listItemIcon: {
    color: "white",
  },
};
export default styles;
