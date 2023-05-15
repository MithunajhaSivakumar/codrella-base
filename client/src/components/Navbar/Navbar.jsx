import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import MenuIcon from "@mui/icons-material/Menu";
import jwt_decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "./Navbar.css";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
function NavBar() {
  const pages = ["HOME", "ABOUT", "CONTACT"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  const handleCloseNavMenu = (e) => {
    switch (e.target.innerText) {
      case "HOME":
        navigate("/");
        break;
      case "ABOUT":
        navigate("/about");
        break;
      case "CONTACT":
        navigate("/contact");
        break;
      default:
        break;
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    switch (e.target.innerText) {
      case "Profile":
        navigate("/");
        break;
      case "Account":
        navigate("/");
        break;
      case "Dashboard":
        navigate("/dashboard");
        break;
      case "Logout":
        logout();
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  useEffect(() => {
    console.log("navbar");
    const token = user?.token;
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AppBar position="static" sx={{ background: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              alt="logo"
              src={require("../../resources/logo.png")}
            />
          </Box>
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <img
              src={require("../../resources/logo.png")}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              alt="logo"
            />
          </Box>
          <Box sx={{ flexGrow: 0.03, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user?.result ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.result.username.toUpperCase()} src="/" />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Button
                  sx={{ color: "white" }}
                  variant="text"
                  onClick={() => {
                    navigate("/signup");
                  }}
                  startIcon={<PersonAddIcon />}
                >
                  Signup
                </Button>
                <Button
                  sx={{ color: "white" }}
                  variant="text"
                  startIcon={<LoginIcon />}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
