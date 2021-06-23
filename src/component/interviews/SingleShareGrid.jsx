import React from 'react'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StarIcon from '@material-ui/icons/Star';
import img2 from "../../component/images/undraw_profile_pic_ic5t (2).svg"
import InterviewShareGrid from "./InterviewShareGrid"
import './Interviews.css';
import CompanyFooter from '../companyprofile/CompanyFooter';
import InnerNavbar from '../navbar/innernavbar/InnerNavbar';
import RatingBox from '../videoupload/RatingBox';
function SingleShareGrid() {
    const rowcss = {
        fontSize: "19px",
        fontWeight: "bold",
    }
    const rowcss2 = {
        fontSize: "19px",
        fontWeight: "bold",
    }
    return (
        <>
            <InnerNavbar />
            <div className="view-data">
                <div className="view-header1">
                    <h5>WEB</h5>
                    <InterviewShareGrid />
                </div>
            </div>
            <div className="view-header2">
                <TableContainer >
                    <Table aria-label="customized table">
                        <TableHead style={rowcss} >
                            <TableCell></TableCell>
                            <TableCell style={rowcss} id="view_css">Questions</TableCell>
                            <TableCell style={rowcss} >Name</TableCell>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
            <div className="view-header3">
                <TableContainer >
                    <Table aria-label="customized table">
                        <TableHead style={rowcss2} >
                            <TableRow className="view-pic">
                                <TableCell style={rowcss}><img style={{ height: "90px", width: "90px", marginLeft: "800px", marginTop: "-30px" }} src={img2} /></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                {/* ///////////// */}
                <div className="main_view">
                    <TableContainer >
                        <Table aria-label="customized table">
                            <TableHead style={rowcss} >
                                <TableRow id="view-header4">
                                    <TableCell></TableCell>
                                    <TableCell style={rowcss}>Questions</TableCell>
                                    <TableCell style={rowcss} align="center">
                               <RatingBox/>
                                      </TableCell>
                                </TableRow>
                                <TableRow id="view-header4">
                                    <TableCell></TableCell>
                                    <TableCell style={rowcss}>Score</TableCell>
                                    <TableCell style={rowcss} align="center"><StarIcon style={{ color: "black", margin: "-5px 5px" }} /></TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <CompanyFooter />
        </>
    )
}
export default SingleShareGrid
