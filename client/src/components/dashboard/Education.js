import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((item) => (
    <tr key={item._id}>
      <td>{item.school}</td>
      <td className="hide-sm">{item.degree}</td>
      <td className="hide-sm">
        <Moment format="YYYY/MM/DD">{item.from}</Moment>-
        {item.to === null ? (
          "Now"
        ) : (
          <Moment format="YYYY/MM/DD">{item.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteEducation(item._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className="my">Education</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="width-100">School</th>
            <th className="hide-sm width-200">Degree</th>
            <th className="hide-sm width-200">Years</th>
            <th className="width-100" />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
