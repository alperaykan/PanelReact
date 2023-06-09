import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import SidebarContent from './Components/SidebarContent';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#272e3d',
		borderRight: '0',
		overflowY: 'hidden'
	},
	drawerHeader: {
		display: 'flex',
		borderBottom: '1px solid #404854',
		alignItems: 'center',
		padding: theme.spacing(0, 2),
		...theme.mixins.toolbar,
		justifyContent: 'flex-start',
	},
	dFlex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	smallBtn: {
		padding: '2px 5px',
		fontSize: '0.8rem',
	}
}));

export default function Sidebar(props) {
	// const history = useHistory();
	const classes = useStyles();
	const { closeSidebar } = props;
	// const onUpgradePage = event => {
	// 	history.push("/app/pages/pricing/pricing-upgrade");
	// }
	// const onResUpgradePage = event => {
	// 	history.push("/app/pages/pricing/pricing-upgrade");
	// 	props.closeSidebar();
	// }

	return (
    <div>
      <div className="sidebar-wrap h-100">
        <div className={classes.drawerHeader}>
          <Box display="inline-flex" alignItems="center">
            <Box
              component={Link}
              to="/app/ilksayfa"
              //className="logo-mini"
              lineHeight={0.8}
			  marginTop="7px"
			  marginBottom="7px"
            >
                <img
                  src={require("assets/Images/performanzlogo.png").default}
                  alt="site-logo"
                  width="47"
                  height="50"
                />
			
            </Box>
            <Box
              component={Link}
              to="/app/ilksayfa"
              className="site-name"
              lineHeight={1}
            >
              <span>
                <b>PERFORMANZ</b>
              </span>
            </Box>
          </Box>
        </div>
        <Scrollbars
          className="hulk-scroll"
          autoHide
          autoHideDuration={100}
          style={{ height: "100vh" }} //burası sidebarın yüksekliğini ayarladığımız yer
        >
          <SidebarContent closeSidebar={closeSidebar}></SidebarContent>
        </Scrollbars>
        {/* <Box p={2} className={`sidebar-footer ${classes.dFlex}`} borderTop="2px solid rgb(64, 72, 84)">
					<div>
						<Box fontSize="body2.fontSize" color="primary.contrastText" className="text-dark" style={{ textTransform: 'capitalize' }}>
							<Box component="span" mr={1} className="icon far fa-clone mr-4"></Box>
                     <IntlMessages id="sidebar.basic" />
						</Box>
						<Box component="span" className="text-dark" fontSize="0.8rem" color="#969fa4" mt="0.3125rem">
							$100 / month
						</Box>
					</div>
					<Hidden mdDown implementation="css">
                  <Button className={classes.smallBtn} size="small" color="primary" onClick={onUpgradePage} variant="contained"><IntlMessages id="sidebar.upgrade" /></Button>
					</Hidden>
					<Hidden lgUp implementation="css">
                  <Button className={classes.smallBtn} size="small" onClick={onResUpgradePage} variant="contained"><IntlMessages id="sidebar.upgrade" /></Button>
					</Hidden>
				</Box> */}
      </div>
    </div>
  );
}