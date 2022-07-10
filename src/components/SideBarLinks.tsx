import React from "react"
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from "react-router-dom";
import { List, ListItem } from "@mui/material";

type Props = {
  bColor: string,
};

export const AdminLinks: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <List >
        <ListItem  button key={1} onClick={() => navigate("/")}>
          <ListItemIcon>{<DashboardIcon sx={{ color: props.bColor }} />}</ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem  button key={2} onClick={() => navigate("/allsms")}>
          <ListItemIcon>{<AssignmentIcon sx={{ color: props.bColor }}/>}</ListItemIcon>
          <ListItemText primary={"Sent Sms"} />
        </ListItem>
        <ListItem  button key={4} onClick={() => navigate("/users")}>
          <ListItemIcon>{<PeopleIcon sx={{ color: props.bColor }}/>}</ListItemIcon>
          <ListItemText primary={"Users"} />
        </ListItem>
        <ListItem  button key={5} onClick={() => navigate("/contacts")}>
          <ListItemIcon>{<PeopleIcon sx={{ color: props.bColor }}/>}</ListItemIcon>
          <ListItemText primary={"Contacts"} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export const UserLinks:React.FC<Props> = (props) =>{
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <List>
        <ListItem  button key={1} onClick={() => navigate("/")}>
          <ListItemIcon>{<DashboardIcon sx={{ color: props.bColor }}/>}</ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem  button key={3} onClick={() => navigate("/sms")}>
          <ListItemIcon>{<ListIcon sx={{ color: props.bColor }}/>}</ListItemIcon>
          <ListItemText primary={"Sent Sms"} />
        </ListItem>
        <ListItem  button key={4} onClick={() => navigate("/newsms")}>
          <ListItemIcon>{<AssignmentIcon sx={{ color: props.bColor }}/>}</ListItemIcon>
          <ListItemText primary={"New Sms"} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const adminListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Admin
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sms" />
    </ListItemButton>
  </React.Fragment>
);
export const userListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Sms
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </React.Fragment>
);
